// app/inquiry/page.tsx
import type { Metadata } from 'next';
import EnhancedInquiryForm from '@/components/EnhancedInquiryForm';

export const metadata: Metadata = {
  title: 'Book Your Stay - Harris Lodges Zimbabwe',
  description: 'Make an inquiry and book your stay at Harris Lodges. Get instant pricing and confirm your reservation for premium accommodation in Zimbabwe.',
  keywords: ['Harris Lodges booking', 'Zimbabwe hotel reservation', 'lodge inquiry', 'accommodation booking'],
};

interface InquiryPageProps {
  searchParams: { 
    room?: string;
    lodge?: string;
  };
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
            Our enhanced system recognizes returning guests and provides personalized recommendations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <EnhancedInquiryForm 
            preselectedLodge={searchParams.lodge}
            preselectedRoom={searchParams.room} 
          />
        </div>

        {/* Enhanced Information for Returning Users */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-lodge-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold text-lodge-dark mb-2">Smart Recognition</h3>
            <p className="text-gray-600 text-sm">
              We recognize you across devices using your email or phone. Get personalized recommendations 
              based on your previous stays.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-lodge-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl">💰</span>
            </div>
            <h3 className="text-lg font-semibold text-lodge-dark mb-2">Loyalty Rewards</h3>
            <p className="text-gray-600 text-sm">
              Returning guests enjoy automatic discounts: 10% for returning guests, 15% for frequent guests, 
              and up to 20% for VIP members.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="w-12 h-12 bg-lodge-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-lodge-dark text-xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-lodge-dark mb-2">Express Booking</h3>
            <p className="text-gray-600 text-sm">
              Your information is pre-filled automatically. Known preferences speed up your booking process 
              significantly.
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-lodge-dark mb-2">Why Book Direct?</h3>
            <p className="text-gray-600">Get the best rates and exclusive perks when you book directly with us</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <span className="text-2xl mb-2 block">🏆</span>
              <h4 className="font-medium text-lodge-dark mb-1">Best Rate Guarantee</h4>
              <p className="text-sm text-gray-600">We match any lower rate you find</p>
            </div>
            <div className="text-center">
              <span className="text-2xl mb-2 block">🎁</span>
              <h4 className="font-medium text-lodge-dark mb-1">Exclusive Perks</h4>
              <p className="text-sm text-gray-600">Room upgrades & late checkouts</p>
            </div>
            <div className="text-center">
              <span className="text-2xl mb-2 block">🚗</span>
              <h4 className="font-medium text-lodge-dark mb-1">Free Services</h4>
              <p className="text-sm text-gray-600">Complimentary WiFi & parking</p>
            </div>
            <div className="text-center">
              <span className="text-2xl mb-2 block">📞</span>
              <h4 className="font-medium text-lodge-dark mb-1">24/7 Support</h4>
              <p className="text-sm text-gray-600">Direct line to our team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}