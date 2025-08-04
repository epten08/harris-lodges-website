// src/app/api/pricing/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { roomId, checkIn, checkOut, guests, visitorId, isReturning } = body;

    // Calculate nights
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const nights = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24));

    // Base pricing logic
    const basePrices: Record<string, number> = {
      'executive-suite': 150,
      'deluxe-room': 100,
      'standard-double': 80,
      'standard-single': 60,
      'family-room': 120,
      'budget-single': 40
    };

    const basePrice = basePrices[roomId] || 80;

    // Season logic (simple example)
    const month = checkInDate.getMonth();
    let seasonMultiplier = 1;
    let seasonType: 'normal' | 'busy' | 'slow' = 'normal';

    // Peak season (Dec-Jan, Jul-Aug)
    if ([11, 0, 6, 7].includes(month)) {
      seasonMultiplier = 1.3;
      seasonType = 'busy';
    }
    // Low season (Feb-Apr)
    else if ([1, 2, 3].includes(month)) {
      seasonMultiplier = 0.8;
      seasonType = 'slow';
    }

    let finalPrice = basePrice * seasonMultiplier * nights;
    let discount = 0;

    // Returning guest discount
    if (isReturning) {
      discount = 10; // 10% discount for returning guests
      finalPrice = finalPrice * 0.9;
    }

    const response = {
      roomId,
      basePrice,
      totalPrice: Math.round(finalPrice * 100) / 100,
      nights,
      seasonType,
      discount: isReturning ? discount : undefined,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Pricing API error:', error);
    return NextResponse.json(
      { error: 'Failed to calculate pricing' },
      { status: 500 }
    );
  }
}