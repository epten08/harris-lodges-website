// src/app/api/inquiry/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { guestName, phone, email, preferredRoom, checkIn, checkOut, guests, specialRequests, visitorId, isReturning } = body;

    // Here you would typically save to database
    console.log('New inquiry received:', {
      guestName,
      phone,
      email,
      preferredRoom,
      checkIn,
      checkOut,
      guests,
      specialRequests,
      visitorId,
      isReturning,
      timestamp: new Date().toISOString()
    });

    // In a real application, you might:
    // 1. Save to database
    // 2. Send notification to hotel staff
    // 3. Send acknowledgment email to guest

    return NextResponse.json({
      success: true,
      message: 'Inquiry received successfully',
      inquiryId: `INQ_${Date.now()}`
    });
  } catch (error) {
    console.error('Inquiry API error:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry' },
      { status: 500 }
    );
  }
}