// components/HomepageHighlightsSection.tsx
import { MapPin, Wifi, Coffee } from 'lucide-react';
import FeatureCard from './FeatureCard';

const HomepageHighlightsSection = () => {
  const highlights = [
    {
      title: "Multiple Locations",
      description: "3 lodges across Zimbabwe's most beautiful destinations",
      icon: MapPin
    },
    {
      title: "Modern Amenities",
      description: "Free WiFi, parking, and 24/7 room service at all locations",
      icon: Wifi
    },
    {
      title: "Authentic Experience", 
      description: "Immerse yourself in genuine Zimbabwean culture and hospitality",
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