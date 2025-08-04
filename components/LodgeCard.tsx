// components/LodgeCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Star, Users, Calendar } from 'lucide-react';
import { Lodge } from '@/lib/lodge-types';

interface LodgeCardProps {
  lodge: Lodge;
}

const LodgeCard = ({ lodge }: LodgeCardProps) => {
  const conferenceFacilities = lodge.facilities.filter(f => f.type === 'conference');
  const restaurantFacilities = lodge.facilities.filter(f => f.type === 'restaurant');
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Hero Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={lodge.images.hero}
          alt={`${lodge.name} exterior view`}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
            lodge.status === 'active' 
              ? 'bg-green-500 text-white'
              : lodge.status === 'coming-soon'
              ? 'bg-yellow-500 text-black'
              : 'bg-red-500 text-white'
          }`}>
            {lodge.status === 'active' ? '✓ Open' : lodge.status === 'coming-soon' ? '🚧 Coming Soon' : '🔧 Maintenance'}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute top-4 right-4 bg-white bg-opacity-95 px-3 py-1 rounded-full flex items-center space-x-1">
          <Star size={14} className="text-lodge-accent fill-current" />
          <span className="text-sm font-semibold text-lodge-dark">
            {lodge.rating} ({lodge.reviewCount})
          </span>
        </div>

        {/* Lodge Name Overlay */}
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-2xl font-bold mb-1">{lodge.name}</h2>
          <p className="text-lodge-accent font-medium flex items-center">
            <MapPin size={16} className="mr-1" />
            {lodge.location.city}, {lodge.location.region}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Description */}
        <p className="text-gray-600 mb-4 leading-relaxed">
          {lodge.shortDescription}
        </p>

        {/* Key Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-lodge-primary mb-1">
              {lodge.rooms.length}
            </div>
            <div className="text-xs text-gray-600">Room Types</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-lodge-primary mb-1">
              {lodge.facilities.length}
            </div>
            <div className="text-xs text-gray-600">Facilities</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-lodge-primary mb-1">
              {lodge.established || 'Est.'}
            </div>
            <div className="text-xs text-gray-600">Established</div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h3 className="font-semibold text-lodge-dark mb-3">Key Features</h3>
          <div className="flex flex-wrap gap-2">
            {lodge.features.slice(0, 4).map((feature, index) => (
              <span key={index} className="bg-lodge-neutral text-lodge-dark px-3 py-1 rounded-full text-xs font-medium">
                {feature}
              </span>
            ))}
            {lodge.features.length > 4 && (
              <span className="text-lodge-primary text-xs font-medium">
                +{lodge.features.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Special Facilities Highlights */}
        {(conferenceFacilities.length > 0 || restaurantFacilities.length > 0) && (
          <div className="mb-6 p-4 bg-lodge-neutral rounded-lg">
            <h4 className="font-medium text-lodge-dark mb-2 text-sm">Special Facilities</h4>
            <div className="space-y-2">
              {conferenceFacilities.map((facility) => (
                <div key={facility.id} className="flex items-center text-sm text-gray-600">
                  <Calendar size={14} className="text-lodge-primary mr-2" />
                  <span>{facility.name} (Capacity: {facility.capacity})</span>
                </div>
              ))}
              {restaurantFacilities.map((facility) => (
                <div key={facility.id} className="flex items-center text-sm text-gray-600">
                  <Users size={14} className="text-lodge-secondary mr-2" />
                  <span>{facility.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Info */}
        <div className="mb-6 space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <Phone size={14} className="text-lodge-primary mr-2" />
            <a href={`tel:${lodge.contact.phone}`} className="hover:text-lodge-primary transition-colors">
              {lodge.contact.phone}
            </a>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Mail size={14} className="text-lodge-primary mr-2" />
            <a href={`mailto:${lodge.contact.email}`} className="hover:text-lodge-primary transition-colors">
              {lodge.contact.email}
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col space-y-3">
          <Link
            href={`/lodges/${lodge.slug}`}
            className="btn-primary text-center py-3 font-semibold"
          >
            View Lodge Details
          </Link>
          
          <div className="flex space-x-2">
            <Link
              href={`/lodges/${lodge.slug}/rooms`}
              className="flex-1 bg-lodge-secondary text-white py-2 px-3 rounded-lg hover:bg-green-700 transition-colors text-center text-sm font-medium"
            >
              View Rooms
            </Link>
            {lodge.contact.whatsapp && (
              <a
                href={`https://wa.me/${lodge.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-600 text-white py-2 px-3 rounded-lg hover:bg-green-700 transition-colors text-center text-sm font-medium"
              >
                WhatsApp
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LodgeCard;