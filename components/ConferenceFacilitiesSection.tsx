// components/ConferenceFacilitiesSection.tsx
import Link from 'next/link';
import { Building, Users } from 'lucide-react';
import { Lodge } from '@/lib/lodge-types';

interface ConferenceFacilitiesSectionProps {
  lodges: Lodge[];
}

const ConferenceFacilitiesSection = ({ lodges }: ConferenceFacilitiesSectionProps) => {
  const lodgesWithConference = lodges.filter(lodge => lodge.facilities.some(f => f.type === 'conference'));
  
  return (
    <section className="py-16 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-lodge-primary mb-4 font-serif">
            Professional Meeting Facilities
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Host your business meetings, conferences, and corporate events at our well-equipped facilities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {lodgesWithConference.map((lodge) => {
            const conferenceFacilities = lodge.facilities.filter(f => f.type === 'conference');
            return (
              <div key={lodge.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Building className="w-8 h-8 text-lodge-primary mr-3" />
                  <div>
                    <h3 className="font-semibold text-lodge-dark">{lodge.name}</h3>
                    <p className="text-sm text-gray-600">{lodge.location.city}</p>
                  </div>
                </div>
                
                {conferenceFacilities.map((facility) => (
                  <div key={facility.id} className="mb-4 p-3 bg-gray-50 rounded">
                    <h4 className="font-medium text-sm text-lodge-dark mb-1">{facility.name}</h4>
                    <div className="flex items-center text-xs text-gray-600 mb-2">
                      <Users size={12} className="mr-1" />
                      <span>Capacity: {facility.capacity}</span>
                    </div>
                    <p className="text-xs text-gray-600">{facility.description}</p>
                  </div>
                ))}
                
                <Link
                  href={`/lodges/${lodge.slug}`}
                  className="text-lodge-primary hover:text-lodge-dark text-sm font-medium"
                >
                  Learn More →
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Need to book conference facilities? Contact our team for availability and pricing.
          </p>
          <Link href="/contact" className="btn-secondary">
            Contact Us for Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConferenceFacilitiesSection;