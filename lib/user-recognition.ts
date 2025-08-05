// lib/user-recognition.ts
import Cookies from 'js-cookie';
import { UserProfile, UserRecognitionData, UserLookupRequest, UserRegistrationRequest } from './user-types';

class UserRecognitionService {
  private static instance: UserRecognitionService;
  private apiBaseUrl = '/api/users';

  private constructor() {}

  static getInstance(): UserRecognitionService {
    if (!UserRecognitionService.instance) {
      UserRecognitionService.instance = new UserRecognitionService();
    }
    return UserRecognitionService.instance;
  }

  // Generate device fingerprint for better device recognition
  private generateDeviceFingerprint(): string {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx?.fillText('Device fingerprint', 10, 50);
    
    const fingerprint = [
      navigator.userAgent,
      navigator.language,
      screen.width + 'x' + screen.height,
      new Date().getTimezoneOffset(),
      canvas.toDataURL()
    ].join('|');
    
    return btoa(fingerprint).slice(0, 32);
  }

  // Get or create session ID
  private getSessionId(): string {
    let sessionId = Cookies.get('harris_session_id');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      Cookies.set('harris_session_id', sessionId, { expires: 1 }); // 1 day session
    }
    return sessionId;
  }

  // Get or create device ID
  private getDeviceId(): string {
    let deviceId = localStorage.getItem('harris_device_id');
    if (!deviceId) {
      deviceId = this.generateDeviceFingerprint();
      localStorage.setItem('harris_device_id', deviceId);
    }
    return deviceId;
  }

  // Look up user by email or phone
  async lookupUser(email?: string, phone?: string): Promise<UserRecognitionData> {
    const sessionId = this.getSessionId();
    const deviceId = this.getDeviceId();

    try {
      const response = await fetch(`${this.apiBaseUrl}/lookup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          phone,
          sessionId,
          deviceId
        } as UserLookupRequest),
      });

      if (response.ok) {
        const data = await response.json();
        
        // Cache user data for this session
        if (data.user) {
          sessionStorage.setItem('harris_user_data', JSON.stringify(data.user));
          Cookies.set('harris_returning_user', 'true', { expires: 365 });
        }

        return {
          isReturning: !!data.user,
          user: data.user,
          sessionId,
          deviceId
        };
      }
    } catch (error) {
      console.error('User lookup failed:', error);
    }

    // Return new user data if lookup fails
    return {
      isReturning: false,
      sessionId,
      deviceId
    };
  }

  // Register new user or update existing user
  async registerUser(userData: UserRegistrationRequest): Promise<UserProfile | null> {
    try {
      const response = await fetch(`${this.apiBaseUrl}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const user = await response.json();
        
        // Cache user data
        sessionStorage.setItem('harris_user_data', JSON.stringify(user));
        Cookies.set('harris_returning_user', 'true', { expires: 365 });

        return user;
      }
    } catch (error) {
      console.error('User registration failed:', error);
    }

    return null;
  }

  // Get cached user data
  getCachedUser(): UserProfile | null {
    try {
      const cachedData = sessionStorage.getItem('harris_user_data');
      return cachedData ? JSON.parse(cachedData) : null;
    } catch {
      return null;
    }
  }

  // Check if user is returning based on cookies
  isReturningUser(): boolean {
    return Cookies.get('harris_returning_user') === 'true';
  }

  // Update user visit
  async updateUserVisit(userId: string): Promise<void> {
    try {
      await fetch(`${this.apiBaseUrl}/${userId}/visit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId: this.getSessionId(),
          deviceId: this.getDeviceId(),
          timestamp: new Date().toISOString()
        }),
      });
    } catch (error) {
      console.error('Failed to update user visit:', error);
    }
  }

  // Clear user data (logout)
  clearUserData(): void {
    sessionStorage.removeItem('harris_user_data');
    Cookies.remove('harris_returning_user');
    Cookies.remove('harris_session_id');
  }

  // Get recognition data for booking/inquiry
  getRecognitionData(): { sessionId: string; deviceId: string } {
    return {
      sessionId: this.getSessionId(),
      deviceId: this.getDeviceId()
    };
  }
}

export default UserRecognitionService;