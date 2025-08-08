// app/lodges/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Calendar, Star } from 'lucide-react';
import { lodges } from '@/lib/lodge-types';

// Import components
import LodgeCard from '@/components/LodgeCard';
import FeatureCard from '@/components/FeatureCard';
import LodgeComparisonTable from '@/components/LodgeComparisonTable';
import LodgeMapSection from '@/components/LodgeMapSection';
import LodgeStatsSection from '@/components/LodgeStatsSection';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Our Lodges - Harris Lodges Zimbabwe',
  description: 'Discover Harris Lodges locations across Zimbabwe. From Harare to Victoria Falls, find the perfect lodge for your stay with unique amenities and local experiences.',
  keywords: ['Zimbabwe lodges', 'Harare hotels', 'Victoria Falls accommodation', 'Bulawayo lodges', 'Zimbabwe hospitality'],
};

export default function LodgesPage() {
  const activeLodges = lodges.filter(lodge => lodge.status === 'active');
  const comingSoonLodges = lodges.filter(lodge => lodge.status === 'coming-soon');
  
  return (
    <div className="min-h-screen bg-lodge-neutral">
      {/* Header */}
      <PageHero 
        title='Our Lodge Locations'
        description='Discover Harris Lodges across Zimbabwe&apos;s most beautiful destinations. 
              Each lodge offers unique experiences while maintaining our signature hospitality.'
      />
      

      {/* Quick Stats */}
      <LodgeStatsSection lodges={lodges} />

      {/* Why Choose Our Lodges */}
      <section className="py-16 bg-lodge-neutral">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-lodge-primary mb-4 font-serif">
              Why Choose Harris Lodges
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Each of our lodges is strategically located to offer you the best of Zimbabwe&apos;s culture, nature, and hospitality
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={MapPin}
              title="Prime Locations"
              description="Strategically positioned near Zimbabwe's major attractions and business centers"
            />
            <FeatureCard
              icon={Calendar}
              title="Conference Facilities"
              description="Professional meeting and conference spaces equipped with modern technology"
            />
            <FeatureCard
              icon={Star}
              title="Consistent Quality"
              description="Same high standards of service and comfort across all our locations"
            />
          </div>
        </div>
      </section>

      {/* Active Lodges */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lodge-primary mb-4 font-serif">
              Our Active Lodges
            </h2>
            <p className="text-gray-700 text-lg">
              Currently operating lodges ready to welcome you
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {activeLodges.map((lodge) => (
              <LodgeCard key={lodge.id} lodge={lodge} />
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Lodges */}
      {comingSoonLodges.length > 0 && (
        <section className="py-16 bg-lodge-neutral">
          <div className="container-max section-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-lodge-primary mb-4 font-serif">
                Coming Soon
              </h2>
              <p className="text-gray-700 text-lg">
                Exciting new locations opening soon
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {comingSoonLodges.map((lodge) => (
                <LodgeCard key={lodge.id} lodge={lodge} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lodge-primary mb-4 font-serif">
              Find Us Across Zimbabwe
            </h2>
            <p className="text-gray-700 text-lg">
              Our lodges are conveniently located throughout Zimbabwe
            </p>
          </div>
          
          <LodgeMapSection lodges={activeLodges} />
        </div>
      </section>

      {/* Contact for Bookings */}
      <section className="py-16 bg-lodge-primary text-white">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Ready to Book Your Stay?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Choose your preferred lodge and start planning your Zimbabwe experience today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/inquiry" 
              className="bg-white text-lodge-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Make a Booking Inquiry
            </Link>
            <a 
              href="tel:+263123456789"
              className="border-2 border-white text-white hover:bg-white hover:text-lodge-primary px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Call Central Reservations
            </a>
          </div>
        </div>
      </section>

      {/* Quick Lodge Comparison */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lodge-primary mb-4 font-serif">
              Lodge Comparison
            </h2>
            <p className="text-gray-700 text-lg">
              Quick overview of what each lodge offers
            </p>
          </div>
          
          <LodgeComparisonTable lodges={activeLodges} />
        </div>
      </section>
    </div>
  );
}