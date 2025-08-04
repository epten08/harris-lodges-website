// app/page.tsx
import Hero from '@/components/Hero';
import { lodges } from '@/lib/lodge-types';

// Import components
import LodgeStatsSection from '@/components/LodgeStatsSection';
import HomepageAboutSection from '@/components/HomepageAboutSection';
import HomepageHighlightsSection from '@/components/HomepageHighlightsSection';
import FeaturedLodgesSection from '@/components/FeaturedLodgesSection';
import ConferenceFacilitiesSection from '@/components/ConferenceFacilitiesSection';
import HomepageCTASection from '@/components/HomepageCTASection';
import HomepageMapSection from '@/components/HomepageMapSection';
import HomepageReviewsSection from '@/components/HomepageReviewsSection';
import QuickContactSection from '@/components/QuickContactSection';

export default function Home() {
  const activeLodges = lodges.filter(lodge => lodge.status === 'active');

  return (
    <>
      <Hero />
      
      {/* Quick Stats */}
      <LodgeStatsSection lodges={lodges} />
      
      {/* About Section */}
      <HomepageAboutSection />

      {/* Highlights */}
      <HomepageHighlightsSection />

      {/* Featured Lodges */}
      <FeaturedLodgesSection lodges={activeLodges} />

      {/* Conference & Business Facilities */}
      <ConferenceFacilitiesSection lodges={lodges} />

      {/* Call to Action */}
      <HomepageCTASection lodgeCount={activeLodges.length} />

      {/* Map Overview */}
      <HomepageMapSection lodges={activeLodges} />

      {/* Guest Reviews Summary */}
      <HomepageReviewsSection lodges={lodges} />

      {/* Quick Contact */}
      <QuickContactSection />
    </>
  );
}