// components/HomepageHighlightsSection.tsx
import { MapPin, Wifi, Coffee } from 'lucide-react';
import FeatureCard from './FeatureCard';

const HomepageHighlightsSection = () => {
  const highlights = [
    {
      title: "Strategic Bulawayo Locations",
      description: "5+ affordable lodges strategically located around Bulawayo for easy business access",
      icon: MapPin
    },
    {
      title: "Business-Ready Facilities",
      description: "Free WiFi, secure parking, meeting spaces, and 24/7 service - perfect for business travelers",
      icon: Wifi
    },
    {
      title: "Affordable Excellence", 
      description: "Premium hospitality at budget-friendly rates, ideal for extended business stays",
      icon: Coffee
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-max section-padding">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-lodge-primary mb-12 font-serif">
          Why Choose Harris Lodges
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <FeatureCard 
              key={index}
              icon={highlight.icon}
              title={highlight.title}
              description={highlight.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageHighlightsSection;