// src/app/inquiry/page.tsx
import type { Metadata } from 'next';
import InquiryForm from '@/components/InquiryForm';

export const metadata: Metadata = {
  title: 'Book Your Stay',
  description: 'Make an inquiry and book your stay at Harris Lodges. Get instant pricing and confirm your reservation for premium accommodation in Zimbabwe.',
};

interface InquiryPageProps {
  searchParams: { room?: string };
}

export default function InquiryPage({ searchParams }: InquiryPageProps) {
  return (
    <div className="min-h-screen bg-lodge-neutral py-16">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-lodge-primary mb-4 font-serif">
            Book Your Stay
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Complete the form below to get instant pricing and book your accommodation at Harris Lodges.
            Our team will ensure your stay is comfortable and memorable.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <InquiryForm preselectedRoom={searchParams.room} />
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-lodge-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">🏨</span>
            </div>
            <h3 className="text-lg font-semibold text-lodge-dark mb-2">Instant Pricing</h3>
            <p className="text-gray-600 text-sm">
              Get real-time pricing based on availability and season. Returning guests enjoy special discounts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-lodge-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">📧</span>
            </div>
            <h3 className="text-lg font-semibold text-lodge-dark mb-2">Email Confirmation</h3>
            <p className="text-gray-600 text-sm">
              Receive detailed booking confirmation and invoice via email within minutes of booking.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-lodge-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-lodge-dark text-xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold text-lodge-dark mb-2">24/7 Support</h3>
            <p className="text-gray-600 text-sm">
              Our team is available around the clock to assist with your booking and any special requests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}