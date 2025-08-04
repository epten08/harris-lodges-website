'use client';
import { useState } from 'react';
import { useVisitor } from '@/hooks/useVisitor';
import { InquiryData } from '@/lib/types';

interface InquiryFormProps {
  preselectedRoom?: string;
}

const InquiryForm = ({ preselectedRoom }: InquiryFormProps) => {
  const { visitorId, isReturning } = useVisitor();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [pricingData, setPricingData] = useState<any>(null);
  
  const [formData, setFormData] = useState<InquiryData>({
    guestName: '',
    phone: '',
    email: '',
    preferredRoom: preselectedRoom || '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    specialRequests: ''
  });

  const roomOptions = [
    { id: 'executive-suite', name: 'Executive Suite', type: 'executive' },
    { id: 'deluxe-room', name: 'Deluxe Room', type: 'deluxe' },
    { id: 'standard-double', name: 'Standard Double', type: 'deluxe' },
    { id: 'standard-single', name: 'Standard Single', type: 'single' },
    { id: 'family-room', name: 'Family Room', type: 'deluxe' },
    { id: 'budget-single', name: 'Budget Single', type: 'single' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit inquiry
      const inquiryResponse = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          visitorId,
          isReturning
        }),
      });

      if (inquiryResponse.ok) {
        // Get pricing
        const pricingResponse = await fetch('/api/pricing', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            roomId: formData.preferredRoom,
            checkIn: formData.checkIn,
            checkOut: formData.checkOut,
            guests: formData.guests,
            visitorId,
            isReturning
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
          visitorId
        }),
      });

      if (response.ok) {
        alert('Booking confirmed! You will receive a confirmation email shortly.');
        // Reset form
        setFormData({
          guestName: '',
          phone: '',
          email: '',
          preferredRoom: '',
          checkIn: '',
          checkOut: '',
          guests: 1,
          specialRequests: ''
        });
        setShowPricing(false);
        setPricingData(null);
      }
    } catch (error) {
      console.error('Error confirming booking:', error);
      alert('There was an error confirming your booking. Please try again.');
    }
  };

  if (showPricing && pricingData) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-lodge-primary mb-6">Your Pricing Details</h3>
        
        {isReturning && pricingData.discount && (
          <div className="bg-lodge-accent bg-opacity-20 border border-lodge-accent p-4 rounded-lg mb-6">
            <p className="text-lodge-dark font-semibold">
              🎉 Welcome back! You&apos;re getting a {pricingData.discount}% returning guest discount!
            </p>
          </div>
        )}

        <div className="space-y-4 mb-8">
          <div className="flex justify-between">
            <span>Room:</span>
            <span className="font-semibold">
              {roomOptions.find(r => r.id === formData.preferredRoom)?.name}
            </span>
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
          {pricingData.discount && (
            <div className="flex justify-between text-green-600">
              <span>Discount ({pricingData.discount}%):</span>
              <span>-${((pricingData.basePrice * pricingData.nights * pricingData.discount) / 100).toFixed(2)}</span>
            </div>
          )}
          <div className="border-t pt-4">
            <div className="flex justify-between text-xl font-bold text-lodge-primary">
              <span>Total Amount:</span>
              <span>${pricingData.totalPrice}</span>
            </div>
          </div>
        </div>

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

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-lodge-primary mb-6">Make an Inquiry</h3>
      
      {isReturning && (
        <div className="bg-lodge-accent bg-opacity-20 border border-lodge-accent p-4 rounded-lg mb-6">
          <p className="text-lodge-dark font-semibold">
            Welcome back! As a returning guest, you may be eligible for special discounts.
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
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lodge-primary focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="preferredRoom" className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Room *
          </label>
          <select
            id="preferredRoom"
            name="preferredRoom"
            value={formData.preferredRoom}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lodge-primary focus:border-transparent"
          >
            <option value="">Select a room</option>
            {roomOptions.map((room) => (
              <option key={room.id} value={room.id}>
                {room.name} ({room.type})
              </option>
            ))}
          </select>
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
            placeholder="Any special requirements, dietary needs, or preferences..."
          />
        </div>
      </div>

      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full btn-primary ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Processing...' : 'Get Pricing & Continue'}
        </button>
      </div>

      <div className="mt-4 text-center text-sm text-gray-600">
        <p>
          Need immediate assistance? 
          <a href="https://wa.me/263123456789" className="text-lodge-primary hover:underline ml-1">
            WhatsApp us
          </a>
          {' '}or call{' '}
          <a href="tel:+263123456789" className="text-lodge-primary hover:underline">
            +263 123 456 789
          </a>
        </p>
      </div>
    </form>
  );
};

export default InquiryForm;