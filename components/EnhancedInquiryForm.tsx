// components/EnhancedInquiryForm.tsx
'use client';
import { useState, useEffect } from 'react';
import { useUser } from '@/hooks/useUser';
import { InquiryData } from '@/lib/types';
import { lodges, getLodgeBySlug, LodgeRoom } from '@/lib/lodge-types';

interface EnhancedInquiryFormProps {
  preselectedLodge?: string;
  preselectedRoom?: string;
}

const EnhancedInquiryForm = ({ preselectedLodge, preselectedRoom }: EnhancedInquiryFormProps) => {
  const { 
    user, 
    isReturning, 
    isLoading, 
    lookupUser, 
    registerUser,
    discountPercentage,
    recommendations,
    sessionId,
    deviceId 
  } = useUser();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [pricingData, setPricingData] = useState<{
    basePrice: number;
    totalPrice: number;
    discountAmount?: number;
    roomType: string;
    nights: number;
  } | null>(null);
  const [selectedLodge, setSelectedLodge] = useState<string>(preselectedLodge || '');
  const [availableRooms, setAvailableRooms] = useState<LodgeRoom[]>([]);
  const [userLookupPerformed, setUserLookupPerformed] = useState(false);
  
  const [formData, setFormData] = useState<InquiryData & { lodge: string }>({
    guestName: user?.fullName || '',
    phone: user?.phone || '',
    email: user?.email || '',
    lodge: preselectedLodge || recommendations?.preferredLodge || '',
    preferredRoom: preselectedRoom || '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    specialRequests: ''
  });

  const activeLodges = lodges.filter(lodge => lodge.status === 'active');

  // Pre-fill form with user data
  useEffect(() => {
    if (user && !userLookupPerformed) {
      setFormData(prev => ({
        ...prev,
        guestName: user.fullName,
        phone: user.phone || prev.phone,
        email: user.email,
        lodge: prev.lodge || recommendations?.preferredLodge || '',
      }));
      setSelectedLodge(prev => prev || recommendations?.preferredLodge || '');
      setUserLookupPerformed(true);
    }
  }, [user, recommendations, userLookupPerformed]);

  // Update available rooms when lodge changes
  useEffect(() => {
    if (selectedLodge) {
      const lodge = getLodgeBySlug(selectedLodge);
      if (lodge) {
        setAvailableRooms(lodge.rooms.filter(room => room.available));
      }
    } else {
      setAvailableRooms([]);
    }
  }, [selectedLodge]);

  // Perform user lookup when email/phone is entered
  const handleUserLookup = async (field: 'email' | 'phone', value: string) => {
    if (!value || userLookupPerformed) return;

    if (field === 'email' && value.includes('@')) {
      await lookupUser(value);
      setUserLookupPerformed(true);
    } else if (field === 'phone' && value.length >= 10) {
      await lookupUser(undefined, value);
      setUserLookupPerformed(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'lodge') {
      setSelectedLodge(value);
      setFormData(prev => ({
        ...prev,
        [name]: value,
        preferredRoom: '' // Reset room selection when lodge changes
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: name === 'guests' ? parseInt(value) : value
      }));

      // Trigger user lookup on email/phone blur
      if ((name === 'email' || name === 'phone') && value) {
        handleUserLookup(name, value);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Register/update user if not already done
      if (!user && (formData.email || formData.phone)) {
        await registerUser({
          email: formData.email,
          phone: formData.phone,
          fullName: formData.guestName,
          preferences: {
            preferredLodge: formData.lodge,
            communicationPreference: 'email',
            marketingConsent: false
          }
        });
      }

      // Submit inquiry
      const inquiryResponse = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          sessionId,
          deviceId,
          userId: user?.id,
          isReturning
        }),
      });

      if (inquiryResponse.ok) {
        // Get pricing with user-specific discounts
        const pricingResponse = await fetch('/api/pricing', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            lodge: formData.lodge,
            roomId: formData.preferredRoom,
            checkIn: formData.checkIn,
            checkOut: formData.checkOut,
            guests: formData.guests,
            userId: user?.id,
            sessionId,
            deviceId,
            isReturning,
            discountPercentage
          }),
        });

        if (pricingResponse.ok) {
          const pricing = await pricingResponse.json();
          setPricingData(pricing);
          setShowPricing(true);
        }
      }
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      alert('There was an error submitting your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConfirmBooking = async () => {
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          pricingData,
          userId: user?.id,
          sessionId,
          deviceId
        }),
      });

      if (response.ok) {
        alert('Booking confirmed! You will receive a confirmation email shortly.');
        // Reset form
        setFormData({
          guestName: '',
          phone: '',
          email: '',
          lodge: '',
          preferredRoom: '',
          checkIn: '',
          checkOut: '',
          guests: 1,
          specialRequests: ''
        });
        setSelectedLodge('');
        setShowPricing(false);
        setPricingData(null);
        setUserLookupPerformed(false);
      }
    } catch (error) {
      console.error('Error confirming booking:', error);
      alert('There was an error confirming your booking. Please try again.');
    }
  };

  const selectedLodgeData = selectedLodge ? getLodgeBySlug(selectedLodge) : null;
  const selectedRoom = availableRooms.find(room => room.id === formData.preferredRoom);

  if (showPricing && pricingData) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-lodge-primary mb-6">Your Pricing Details</h3>
        
        {/* Returning User Benefits */}
        {isReturning && (
          <div className="bg-lodge-accent bg-opacity-20 border border-lodge-accent p-4 rounded-lg mb-6">
            <div className="flex items-center mb-2">
              
              <h4 className="font-semibold text-lodge-dark">Welcome Back, {user?.fullName || 'Valued Guest'}!</h4>
            </div>
            <div className="space-y-1 text-sm">
              {discountPercentage > 0 && (
                <p className="text-lodge-dark font-medium">
                  You&apos;re getting a {discountPercentage}% loyalty discount!
                </p>
              )}
              {recommendations?.loyaltyTier && (
                <p className="text-lodge-dark">
                  Your status: {recommendations.loyaltyTier} Member
                </p>
              )}
              {user && user.bookingHistory.length > 0 && (
                <p className="text-lodge-dark">
                  This will be your {user.bookingHistory.length + 1}{getOrdinalSuffix(user.bookingHistory.length + 1)} stay with us
                </p>
              )}
            </div>
          </div>
        )}

        <div className="space-y-4 mb-8">
          <div className="flex justify-between">
            <span>Lodge:</span>
            <span className="font-semibold">{selectedLodgeData?.name}</span>
          </div>
          <div className="flex justify-between">
            <span>Room:</span>
            <span className="font-semibold">{selectedRoom?.name}</span>
          </div>
          <div className="flex justify-between">
            <span>Dates:</span>
            <span>{formData.checkIn} to {formData.checkOut}</span>
          </div>
          <div className="flex justify-between">
            <span>Nights:</span>
            <span>{pricingData.nights}</span>
          </div>
          <div className="flex justify-between">
            <span>Guests:</span>
            <span>{formData.guests}</span>
          </div>
          <div className="flex justify-between">
            <span>Base Price per night:</span>
            <span>${pricingData.basePrice}</span>
          </div>
          {discountPercentage > 0 && (
            <div className="flex justify-between text-green-600">
              <span>Loyalty Discount ({discountPercentage}%):</span>
              <span>-${((pricingData.basePrice * pricingData.nights * discountPercentage) / 100).toFixed(2)}</span>
            </div>
          )}
          <div className="border-t pt-4">
            <div className="flex justify-between text-xl font-bold text-lodge-primary">
              <span>Total Amount:</span>
              <span>${pricingData.totalPrice}</span>
            </div>
          </div>
        </div>

        {/* Personalized Perks */}
        {isReturning && recommendations && (
          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-blue-800 mb-2">Your Exclusive Perks</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              {recommendations.loyaltyTier === 'VIP' && (
                <>
                  <li>✓ Complimentary airport pickup</li>
                  <li>✓ Room upgrade (subject to availability)</li>
                  <li>✓ Late checkout until 2 PM</li>
                  <li>✓ Welcome amenities</li>
                </>
              )}
              {recommendations.loyaltyTier === 'Gold' && (
                <>
                  <li>✓ Priority check-in</li>
                  <li>✓ Late checkout until 1 PM</li>
                  <li>✓ Complimentary breakfast upgrade</li>
                </>
              )}
              {recommendations.loyaltyTier === 'Silver' && (
                <>
                  <li>✓ Express check-in</li>
                  <li>✓ Welcome drink</li>
                </>
              )}
              {!recommendations.loyaltyTier && (
                <li>✓ First-time guest welcome package</li>
              )}
            </ul>
          </div>
        )}

        <div className="flex gap-4">
          <button
            onClick={handleConfirmBooking}
            className="btn-primary flex-1"
          >
            Confirm Booking
          </button>
          <button
            onClick={() => setShowPricing(false)}
            className="btn-secondary flex-1"
          >
            Modify Details
          </button>
        </div>
      </div>
    );
  }

  // Helper function for ordinal numbers
  function getOrdinalSuffix(num: number): string {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const value = num % 100;
    return suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0];
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-lodge-primary mb-6">Make an Inquiry</h3>
      
      {/* User Recognition Status */}
      {isLoading && (
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
          <p className="text-blue-800 text-sm">🔍 Checking for your account...</p>
        </div>
      )}

      {isReturning && user && (
        <div className="bg-lodge-accent bg-opacity-20 border border-lodge-accent p-4 rounded-lg mb-6">
          <div className="flex items-center mb-2">
            <span className="text-2xl mr-2">👋</span>
            <h4 className="font-semibold text-lodge-dark">Welcome back, {user.fullName}!</h4>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-lodge-dark">
                <strong>Member since:</strong> {new Date(user.firstVisit).toLocaleDateString()}
              </p>
              <p className="text-lodge-dark">
                <strong>Previous stays:</strong> {user.bookingHistory.length}
              </p>
            </div>
            <div>
              {recommendations && (
                <>
                  <p className="text-lodge-dark">
                    <strong>Status:</strong> {recommendations.loyaltyTier} Member
                  </p>
                  {discountPercentage > 0 && (
                    <p className="text-green-700 font-medium">
                      <strong>Your discount:</strong> {discountPercentage}%
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {!isReturning && !isLoading && (formData.email || formData.phone) && userLookupPerformed && (
        <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-6">
          <p className="text-green-800 text-sm">
            ✨ New to Harris Lodges? You&apos;ll automatically become a member and enjoy benefits from your next visit!
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="guestName" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="guestName"
            name="guestName"
            value={formData.guestName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lodge-primary focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            onBlur={(e) => handleUserLookup('phone', e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lodge-primary focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={(e) => handleUserLookup('email', e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lodge-primary focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="lodge" className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Lodge *
            {recommendations?.preferredLodge && (
              <span className="text-lodge-primary text-xs ml-2">(Recommended for you)</span>
            )}
          </label>
          <select
            id="lodge"
            name="lodge"
            value={formData.lodge}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lodge-primary focus:border-transparent"
          >
            <option value="">Select a lodge</option>
            {activeLodges.map((lodge) => (
              <option key={lodge.id} value={lodge.slug}>
                {lodge.name} - {lodge.location.city}
                {recommendations?.preferredLodge === lodge.slug && ' ⭐ (Recommended)'}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="preferredRoom" className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Room *
            {recommendations?.preferredRoomType && (
              <span className="text-lodge-primary text-xs ml-2">(Based on your history)</span>
            )}
          </label>
          <select
            id="preferredRoom"
            name="preferredRoom"
            value={formData.preferredRoom}
            onChange={handleInputChange}
            required
            disabled={!selectedLodge}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lodge-primary focus:border-transparent disabled:bg-gray-100"
          >
            <option value="">
              {selectedLodge ? 'Select a room' : 'Please select a lodge first'}
            </option>
            {availableRooms.map((room) => (
              <option key={room.id} value={room.id}>
                {room.name} - From ${room.basePricing.low}/night (Max {room.maxOccupancy} guests)
                {recommendations?.preferredRoomType === room.type && ' ⭐'}
              </option>
            ))}
          </select>
          {selectedLodge && availableRooms.length === 0 && (
            <p className="text-sm text-red-600 mt-1">
              No available rooms at this lodge. Please contact us directly.
            </p>
          )}
        </div>

        <div>
          <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-2">
            Check-in Date *
          </label>
          <input
            type="date"
            id="checkIn"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleInputChange}
            min={new Date().toISOString().split('T')[0]}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lodge-primary focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-2">
            Check-out Date *
          </label>
          <input
            type="date"
            id="checkOut"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleInputChange}
            min={formData.checkIn || new Date().toISOString().split('T')[0]}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lodge-primary focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
            Number of Guests *
          </label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lodge-primary focus:border-transparent"
          >
            {[1, 2, 3, 4].map((num) => (
              <option key={num} value={num}>
                {num} Guest{num > 1 ? 's' : ''}
              </option>
            ))}
          </select>
          {selectedRoom && formData.guests > selectedRoom.maxOccupancy && (
            <p className="text-sm text-red-600 mt-1">
              Selected room accommodates maximum {selectedRoom.maxOccupancy} guests.
            </p>
          )}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-2">
            Special Requests
          </label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lodge-primary focus:border-transparent"
            placeholder={
              user?.preferences?.dietaryRequirements?.length 
                ? `Dietary requirements: ${user.preferences.dietaryRequirements.join(', ')}. Any other special requirements?`
                : "Any special requirements, dietary needs, accessibility needs, or preferences..."
            }
          />
        </div>
      </div>

      {/* Lodge Information Display */}
      {selectedLodgeData && (
        <div className="mt-6 p-4 bg-lodge-neutral rounded-lg">
          <h4 className="font-semibold text-lodge-dark mb-2">Selected Lodge Information</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600">
                <strong>Address:</strong> {selectedLodgeData.location.address}
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> {selectedLodgeData.contact.phone}
              </p>
            </div>
            <div>
              <p className="text-gray-600">
                <strong>Check-in:</strong> {selectedLodgeData.operatingHours.checkIn}
              </p>
              <p className="text-gray-600">
                <strong>Check-out:</strong> {selectedLodgeData.operatingHours.checkOut}
              </p>
            </div>
          </div>
          {selectedLodgeData.facilities.some(f => f.type === 'conference') && (
            <div className="mt-2 p-2 bg-blue-50 border border-blue-200 rounded">
              <p className="text-blue-800 text-xs">
                This lodge has conference facilities available for business travelers
              </p>
            </div>
          )}
        </div>
      )}

      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting || !selectedLodge || !formData.preferredRoom}
          className={`w-full btn-primary ${(isSubmitting || !selectedLodge || !formData.preferredRoom) ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Processing...' : 'Get Pricing & Continue'}
        </button>
      </div>

      <div className="mt-4 text-center text-sm text-gray-600">
        <p>
          Need immediate assistance? 
          {selectedLodgeData?.contact.whatsapp ? (
            <a 
              href={`https://wa.me/${selectedLodgeData.contact.whatsapp.replace(/[^0-9]/g, '')}`} 
              className="text-lodge-primary hover:underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp {selectedLodgeData.location.city} Lodge
            </a>
          ) : (
            <a href="https://wa.me/263123456789" className="text-lodge-primary hover:underline ml-1">
              WhatsApp us
            </a>
          )}
          {' '}or call{' '}
          <a 
            href={`tel:${selectedLodgeData?.contact.phone || '+263123456789'}`} 
            className="text-lodge-primary hover:underline"
          >
            {selectedLodgeData?.contact.phone || '+263 123 456 789'}
          </a>
        </p>
      </div>
    </form>
  );
};

export default EnhancedInquiryForm;