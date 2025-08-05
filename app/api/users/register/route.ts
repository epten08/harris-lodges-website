// app/api/users/register/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { UserProfile, UserRegistrationRequest } from '@/lib/user-types';

// In a real application, this would connect to your database
const users = new Map<string, UserProfile>();

export async function POST(request: NextRequest) {
  try {
    const body: UserRegistrationRequest = await request.json();
    const { email, phone, fullName, sessionId, deviceId, preferences } = body;

    // Validate input
    if (!email || !fullName) {
      return NextResponse.json(
        { error: 'Email and full name are required' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase();
    
    // Check if user already exists
    let existingUser = users.get(normalizedEmail);
    
    if (!existingUser && phone) {
      // Also check by phone
      existingUser = Array.from(users.values()).find(u => u.phone === phone);
    }

    const now = new Date().toISOString();

    if (existingUser) {
      // Update existing user
      existingUser.fullName = fullName;
      existingUser.phone = phone || existingUser.phone;
      existingUser.lastVisit = now;
      existingUser.visitCount += 1;
      
      // Update preferences if provided
      if (preferences) {
        existingUser.preferences = {
          ...existingUser.preferences,
          ...preferences
        };
      }

      // Update the map with the new email key if it changed
      if (existingUser.email !== normalizedEmail) {
        users.delete(existingUser.email);
        existingUser.email = normalizedEmail;
        users.set(normalizedEmail, existingUser);
      }

      console.log(`User updated: ${existingUser.id}, Session: ${sessionId}, Device: ${deviceId}`);

      return NextResponse.json({
        ...existingUser,
        message: 'User updated successfully'
      });
    }

    // Create new user
    const newUser: UserProfile = {
      id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      email: normalizedEmail,
      phone,
      fullName,
      visitCount: 1,
      firstVisit: now,
      lastVisit: now,
      preferences: {
        communicationPreference: 'email',
        marketingConsent: false,
        ...preferences
      },
      bookingHistory: [],
      status: 'active'
    };

    // Save user
    users.set(normalizedEmail, newUser);

    console.log(`New user registered: ${newUser.id}, Session: ${sessionId}, Device: ${deviceId}`);

    return NextResponse.json({
      ...newUser,
      message: 'User registered successfully'
    });

  } catch (error) {
    console.error('User registration error:', error);
    return NextResponse.json(
      { error: 'Failed to register user' },
      { status: 500 }
    );
  }
}