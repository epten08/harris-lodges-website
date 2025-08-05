// lib/user-types.ts
export interface UserProfile {
  id: string;
  email: string;
  phone?: string;
  fullName: string;
  visitCount: number;
  firstVisit: string;
  lastVisit: string;
  preferences?: UserPreferences;
  bookingHistory: BookingRecord[];
  status: 'active' | 'inactive';
}

export interface UserPreferences {
  preferredLodge?: string;
  preferredRoomType?: string;
  dietaryRequirements?: string[];
  accessibilityNeeds?: string[];
  communicationPreference: 'email' | 'phone' | 'whatsapp';
  marketingConsent: boolean;
}

export interface BookingRecord {
  id: string;
  lodgeId: string;
  roomId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalAmount: number;
  status: 'confirmed' | 'completed' | 'cancelled';
  bookingDate: string;
}

export interface UserRecognitionData {
  isReturning: boolean;
  user?: UserProfile;
  sessionId: string;
  deviceId: string;
}

export interface UserLookupRequest {
  email?: string;
  phone?: string;
  sessionId: string;
  deviceId: string;
}

export interface UserRegistrationRequest {
  email: string;
  phone?: string;
  fullName: string;
  sessionId: string;
  deviceId: string;
  preferences?: Partial<UserPreferences>;
}