// hooks/useUser.ts
'use client';
import { useEffect, useState, useCallback } from 'react';
import UserRecognitionService from '@/lib/user-recognition';
import { UserProfile, UserRecognitionData } from '@/lib/user-types';

export const useUser = () => {
  const [userState, setUserState] = useState<UserRecognitionData>({
    isReturning: false,
    sessionId: '',
    deviceId: ''
  });
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<UserProfile | null>(null);

  const userService = UserRecognitionService.getInstance();

  // Initialize user recognition
  useEffect(() => {
    const initializeUser = async () => {
      setIsLoading(true);
      
      // Check for cached user first
      const cachedUser = userService.getCachedUser();
      const isReturning = userService.isReturningUser();
      
      if (cachedUser && isReturning) {
        const recognitionData = userService.getRecognitionData();
        setUserState({
          isReturning: true,
          user: cachedUser,
          ...recognitionData
        });
        setUser(cachedUser);
        
        // Update visit in background
        userService.updateUserVisit(cachedUser.id);
      } else {
        // Set basic recognition data for new users
        const recognitionData = userService.getRecognitionData();
        setUserState({
          isReturning: false,
          ...recognitionData
        });
      }
      
      setIsLoading(false);
    };

    initializeUser();
  }, []);

  // Lookup user by email/phone
  const lookupUser = useCallback(async (email?: string, phone?: string) => {
    if (!email && !phone) return userState;
    
    setIsLoading(true);
    
    try {
      const recognitionData = await userService.lookupUser(email, phone);
      setUserState(recognitionData);
      setUser(recognitionData.user || null);
      
      // Update visit if user found
      if (recognitionData.user) {
        userService.updateUserVisit(recognitionData.user.id);
      }
      
      return recognitionData;
    } catch (error) {
      console.error('Failed to lookup user:', error);
      return userState;
    } finally {
      setIsLoading(false);
    }
  }, [userState]);

  // Register/update user
  const registerUser = useCallback(async (userData: {
    email: string;
    phone?: string;
    fullName: string;
    preferences?: any;
  }) => {
    setIsLoading(true);
    
    try {
      const recognitionData = userService.getRecognitionData();
      const registeredUser = await userService.registerUser({
        ...userData,
        ...recognitionData
      });
      
      if (registeredUser) {
        const newUserState = {
          isReturning: true,
          user: registeredUser,
          ...recognitionData
        };
        
        setUserState(newUserState);
        setUser(registeredUser);
        
        return registeredUser;
      }
    } catch (error) {
      console.error('Failed to register user:', error);
    } finally {
      setIsLoading(false);
    }
    
    return null;
  }, []);

  // Clear user data
  const clearUser = useCallback(() => {
    userService.clearUserData();
    const recognitionData = userService.getRecognitionData();
    setUserState({
      isReturning: false,
      ...recognitionData
    });
    setUser(null);
  }, []);

  // Get discount based on return status and booking history
  const getDiscountPercentage = useCallback(() => {
    if (!userState.isReturning || !user) return 0;
    
    const completedBookings = user.bookingHistory.filter(b => b.status === 'completed').length;
    
    if (completedBookings >= 10) return 20; // VIP discount
    if (completedBookings >= 5) return 15;  // Frequent guest
    if (completedBookings >= 1) return 10;  // Returning guest
    
    return 5; // First time discount for registered users
  }, [userState.isReturning, user]);

  // Get personalized recommendations
  const getRecommendations = useCallback(() => {
    if (!user) return null;
    
    const { preferences, bookingHistory } = user;
    const mostBookedLodge = bookingHistory.reduce((acc, booking) => {
      acc[booking.lodgeId] = (acc[booking.lodgeId] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const preferredLodge = Object.keys(mostBookedLodge).reduce((a, b) => 
      mostBookedLodge[a] > mostBookedLodge[b] ? a : b, '');
    
    return {
      preferredLodge: preferences?.preferredLodge || preferredLodge,
      preferredRoomType: preferences?.preferredRoomType,
      suggestedServices: bookingHistory.length > 0 ? ['Airport Pickup', 'Late Checkout'] : [],
      loyaltyTier: bookingHistory.length >= 10 ? 'VIP' : 
                   bookingHistory.length >= 5 ? 'Gold' : 
                   bookingHistory.length >= 1 ? 'Silver' : 'New'
    };
  }, [user]);

  return {
    // User data
    user,
    isReturning: userState.isReturning,
    isLoading,
    sessionId: userState.sessionId,
    deviceId: userState.deviceId,
    
    // User actions
    lookupUser,
    registerUser,
    clearUser,
    
    // User benefits
    discountPercentage: getDiscountPercentage(),
    recommendations: getRecommendations(),
    
    // Legacy support (for existing components)
    visitorId: userState.deviceId, // Backward compatibility
  };
};