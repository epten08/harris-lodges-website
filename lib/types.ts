// src/lib/types.ts
export interface Room {
  id: string;
  name: string;
  type: 'single' | 'deluxe' | 'executive';
  description: string;
  amenities: string[];
  images: string[];
  maxOccupancy: number;
  features?: string[]; // Special features like balcony, city view, etc.
  size?: number; // Room size in square meters
  bedType?: string; // King, Queen, Twin, etc.
}

export interface RoomAvailability {
  roomId: string;
  date: string;
  available: boolean;
  price?: number;
}

export interface InquiryData {
  guestName: string;
  phone: string;
  email: string;
  preferredRoom: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  specialRequests?: string;
}

export interface PricingResponse {
  roomId: string;
  basePrice: number;
  totalPrice: number;
  nights: number;
  seasonType: 'normal' | 'busy' | 'slow';
  discount?: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
}

export interface RoomBooking {
  id: string;
  roomId: string;
  guestName: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}