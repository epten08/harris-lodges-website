// components/FeaturedLodgesSection.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Star, MapPin, Calendar, Phone, MessageCircle } from 'lucide-react';
import { Lodge } from '@/lib/lodge-types';

interface FeaturedLodgesSectionProps {
  lodges: Lodge[];
}

const FeaturedLodgesSection = ({ lodges }: FeaturedLodgesSectionProps) => {
  return (
    <section className="py-16 bg-lodge-neutral">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-lodge-primary mb-4 font-serif">
            Our Lodge Locations
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Discover our carefully selected locations across Zimbabwe, each offering unique experiences 
            and exceptional hospitality
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {lodges.map((lodge) => (
            <div key={lodge.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48">
                <Image
                  src={lodge.images.featured}
                  alt={lodge.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white bg-opacity-95 px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star size={14} className="text-lodge-accent fill-current" />
                  <span className="text-sm font-semibold text-lodge-dark">{lodge.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
                  {lodge.rooms.length} Room Types
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-lodge-dark">{lodge.name}</h3>
                  <span className="text-sm text-gray-600 flex items-center">
                    <MapPin size={14} className="mr-1" />
                    {lodge.location.city}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {lodge.shortDescription}
                </p>
                
                {/* Key Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {lodge.features.slice(0, 3).map((feature, i) => (
                    <span key={i} className="bg-lodge-neutral text-lodge-dark px-2 py-1 rounded text-xs">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Conference Facilities Highlight */}
                {lodge.facilities.some(f => f.type === 'conference') && (
                  <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg mb-4">
                    <div className="flex items-center text-blue-800 text-sm">
                      <Calendar size={14} className="mr-2" />
                      <span className="font-medium">Conference facilities available</span>
                    </div>
                  </div>
                )}
                
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm">
                    <span className="text-gray-600">From </span>
                    <span className="font-bold text-lodge-primary">
                      ${Math.min(...lodge.rooms.map(r => r.basePricing.low))}
                    </span>
                    <span className="text-gray-600">/night</span>
                  </div>
                  <div className="flex text-lodge-accent">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link
                    href={`/lodges/${lodge.slug}`}
                    className="flex-1 btn-primary text-center py-2 text-sm"
                  >
                    View Lodge
                  </Link>
                  <Link
                    href={`/lodges/${lodge.slug}/rooms`}
                    className="flex-1 btn-secondary text-center py-2 text-sm"
                  >
                    View Rooms
                  </Link>
                </div>

                {/* Contact Options */}
                <div className="flex gap-2 mt-3">
                  <a
                    href={`tel:${lodge.contact.phone}`}
                    className="flex-1 flex items-center justify-center space-x-1 bg-gray-100 text-gray-700 py-2 px-3 rounded text-xs hover:bg-gray-200 transition-colors"
                  >
                    <Phone size={12} />
                    <span>Call</span>
                  </a>
                  {lodge.contact.whatsapp && (
                    <a
                      href={`https://wa.me/${lodge.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-1 bg-green-100 text-green-700 py-2 px-3 rounded text-xs hover:bg-green-200 transition-colors"
                    >
                      <MessageCircle size={12} />
                      <span>WhatsApp</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/lodges" className="btn-primary text-lg">
            View All Lodges
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedLodgesSection;