// src/components/RoomCard.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Star, Users, Wifi, Car, Coffee, Tv, Bath, AirVent, ChevronLeft, ChevronRight, MapPin, Phone, MessageCircle } from 'lucide-react';
import { Room } from '@/lib/types';

const getAmenityIcon = (amenity: string) => {
  const lower = amenity.toLowerCase();
  if (lower.includes('wifi')) return <Wifi size={16} className="text-lodge-secondary" />;
  if (lower.includes('tv') || lower.includes('satellite')) return <Tv size={16} className="text-lodge-secondary" />;
  if (lower.includes('bathroom') || lower.includes('bath')) return <Bath size={16} className="text-lodge-secondary" />;
  if (lower.includes('air conditioning') || lower.includes('ac')) return <AirVent size={16} className="text-lodge-secondary" />;
  if (lower.includes('coffee') || lower.includes('tea')) return <Coffee size={16} className="text-lodge-secondary" />;
  if (lower.includes('parking') || lower.includes('car')) return <Car size={16} className="text-lodge-secondary" />;
  if (lower.includes('view')) return <MapPin size={16} className="text-lodge-secondary" />;
  return <Star size={16} className="text-lodge-secondary" />;
};

interface RoomCardProps {
  room: Room;
  featured?: boolean;
}

const RoomCard = ({ room, featured = false }: RoomCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === room.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? room.images.length - 1 : prev - 1
    );
  };

  const getRoomTypeColor = (type: string) => {
    switch (type) {
      case 'executive':
        return 'bg-lodge-accent text-lodge-dark';
      case 'deluxe':
        return 'bg-lodge-secondary text-white';
      case 'single':
        return 'bg-lodge-primary text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getRoomTypeBadge = (type: string) => {
    switch (type) {
      case 'executive':
        return '👑 Executive';
      case 'deluxe':
        return '⭐ Deluxe';
      case 'single':
        return '🏠 Standard';
      default:
        return type.charAt(0).toUpperCase() + type.slice(1);
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${featured ? 'ring-2 ring-lodge-accent' : ''}`}>
      {/* Image Gallery */}
      <div className="relative h-64 group">
        <Image
          src={room.images[currentImageIndex]}
          alt={`${room.name} - Image ${currentImageIndex + 1}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Image Navigation */}
        {room.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-opacity-70"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-opacity-70"
            >
              <ChevronRight size={20} />
            </button>
            
            {/* Image Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {room.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Badges */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getRoomTypeColor(room.type)}`}>
            {getRoomTypeBadge(room.type)}
          </span>
        </div>
        
        <div className="absolute top-4 right-4 bg-white bg-opacity-95 px-3 py-1 rounded-full flex items-center space-x-1 shadow-md">
          <Users size={14} className="text-lodge-primary" />
          <span className="text-xs font-medium text-lodge-dark">
            {room.maxOccupancy} Guest{room.maxOccupancy > 1 ? 's' : ''}
          </span>
        </div>

        {featured && (
          <div className="absolute bottom-4 right-4 bg-lodge-accent text-lodge-dark px-3 py-1 rounded-full text-xs font-semibold">
            ⭐ Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-semibold text-lodge-dark mb-1">
              {room.name}
            </h3>
            <div className="flex items-center space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-lodge-accent fill-current" />
              ))}
              <span className="text-xs text-gray-500 ml-2">(4.8/5)</span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed text-sm">
          {room.description}
        </p>

        {/* Amenities Grid */}
        <div className="mb-6">
          <h4 className="font-medium text-lodge-dark mb-3 text-sm">Key Amenities</h4>
          <div className="grid grid-cols-2 gap-2">
            {room.amenities.slice(0, 6).map((amenity, index) => (
              <div key={index} className="flex items-center space-x-2 text-xs text-gray-600">
                {getAmenityIcon(amenity)}
                <span className="truncate">{amenity}</span>
              </div>
            ))}
          </div>
          {room.amenities.length > 6 && (
            <p className="text-xs text-lodge-primary mt-2 font-medium">
              +{room.amenities.length - 6} more amenities
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col space-y-3">
          <Link
            href={`/inquiry?room=${room.id}`}
            className="btn-primary text-center py-3 text-sm font-semibold"
          >
            Request Price & Book
          </Link>
          
          <div className="flex space-x-2">
            <a
              href="tel:+263123456789"
              className="flex-1 flex items-center justify-center space-x-2 bg-lodge-secondary text-white py-2 px-3 rounded-lg hover:bg-green-700 transition-colors text-xs"
            >
              <Phone size={14} />
              <span>Call</span>
            </a>
            <a
              href="https://wa.me/263123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center space-x-2 bg-green-600 text-white py-2 px-3 rounded-lg hover:bg-green-700 transition-colors text-xs"
            >
              <MessageCircle size={14} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Special Offers */}
        <div className="mt-4 p-3 bg-lodge-neutral rounded-lg">
          <p className="text-xs text-lodge-dark">
            💰 <strong>Special Offer:</strong> Book 3+ nights and get 15% off your stay!
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;