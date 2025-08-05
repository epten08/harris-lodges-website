// app/api/users/lookup/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { UserProfile, UserLookupRequest } from '@/lib/user-types';

// In a real application, this would connect to your database
// For now, we'll simulate with in-memory storage
const users = new Map<string, UserProfile>();

// Sample data for demonstration
if (users.size === 0) {
  users.set('john.doe@example.com', {
    id: 'user_001',
    email: 'john.doe@example.com',
    phone: '+263123456789',
    fullName: 'John Doe',
    visitCount: 5,
    firstVisit: '2023-01-15T10:00:00Z',
    lastVisit: '2024-08-01T14:30:00Z',
    preferences: {
      preferredLodge: 'harris-lodge-harare',
      preferredRoomType: 'executive',
      communicationPreference: 'email',
      marketingConsent: true
    },
    bookingHistory: [
      {
        id: 'booking_001',
        lodgeId: 'harris-lodge-harare',
        roomId: 'executive-suite-harare',
        checkIn: '2024-07-15',
        checkOut: '2024-07-18',
        guests: 2,
        totalAmount: 450,
        status: 'completed',
        bookingDate: '2024-07-01T09:00:00Z'
      }
    ],
    status: 'active'
  });

  users.set('sarah.smith@example.com', {
    id: 'user_002',
    email: 'sarah.smith@example.com',
    phone: '+263987654321',
    fullName: 'Sarah Smith',
    visitCount: 12,
    firstVisit: '2022-05-20T08:00:00Z',
    lastVisit: '2024-07-25T16:45:00Z',
    preferences: {
      preferredLodge: 'harris-lodge-victoria-falls',
      preferredRoomType: 'suite',
      dietaryRequirements: ['vegetarian'],
      communicationPreference: 'whatsapp',
      marketingConsent: true
    },
    bookingHistory: [
      {
        id: 'booking_002',
        lodgeId: 'harris-lodge-victoria-falls',
        roomId: 'falls-view-suite-vf',
        checkIn: '2024-07-20',
        checkOut: '2024-07-25',
        guests: 2,
        totalAmount: 1250,
        status: 'completed',
        bookingDate: '2024-06-15T11:30:00Z'
      }
    ],
    status: 'active'
  });
}

export async function POST(request: NextRequest) {
  try {
    const body: UserLookupRequest = await request.json();
    const { email, phone, sessionId, deviceId } = body;

    // Validate input
    if (!email && !phone) {
      return NextResponse.json(
        { error: 'Email or phone number is required' },
        { status: 400 }
      );
    }

    let user: UserProfile | undefined;

    // Look up by email first
    if (email) {
      user = users.get(email.toLowerCase());
    }

    // If not found by email, try phone
    if (!user && phone) {
      user = Array.from(users.values()).find(u => u.phone === phone);
    }

    if (user) {
      // Update last visit and visit count
      user.lastVisit = new Date().toISOString();
      user.visitCount += 1;

      // Log visit for analytics (in real app, save to database)
      console.log(`User visit logged: ${user.id}, Session: ${sessionId}, Device: ${deviceId}`);

      return NextResponse.json({
        user,
        message: 'User found successfully'
      });
    }

    // User not found
    return NextResponse.json({
      user: null,
      message: 'User not found'
    });

  } catch (error) {
    console.error('User lookup error:', error);
    return NextResponse.json(
      { error: 'Failed to lookup user' },
      { status: 500 }
    );
  }
}