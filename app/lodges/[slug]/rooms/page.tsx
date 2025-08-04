// app/lodges/[slug]/rooms/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  Users, Bed, Maximize, Star, ArrowLeft, 
  ChevronLeft, ChevronRight, Phone, MessageCircle,
  Wifi, Car, Coffee, Tv, Bath, AirVent, MapPin
} from 'lucide-react';
import { getLodgeBySlug, LodgeRoom } from '@/lib/lodge-types';

// Generate metadata dynamically
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const lodge = getLodgeBySlug(params.slug);
  
  if (!lodge) {
    return {
      title: 'Lodge Not Found - Harris Lodges',
      description: 'The requested lodge could not be found.'
    };
  }

  return {
    title: `Rooms at ${lodge.name} - Harris Lodges Zimbabwe`,
    description: `Explore accommodation options at ${lodge.name} in ${lodge.location.city}. Choose from ${lodge.rooms.length} different room types with modern amenities.`,
    keywords: [`${lodge.name} rooms`, `${lodge.location.city} hotel rooms`, 'Zimbabwe accommodation', 'book hotel room'],
  };
}

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

const getRoomTypeColor = (type: string) => {
  switch (type) {
    case 'suite':
      return 'bg-purple-100 text-purple-800';
    case 'executive':
      return 'bg-lodge-accent bg-opacity-20 text-lodge-dark';
    case 'deluxe':
      return 'bg-blue-100 text-blue-800';
    case 'family':
      return 'bg-green-100 text-green-800';
    case 'single':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getRoomTypeBadge = (type: string) => {
  switch (type) {
    case 'suite':
      return '👑 Presidential Suite';
    case 'executive':
      return '💼 Executive';
    case 'deluxe':
      return '⭐ Deluxe';
    case 'family':
      return '👨‍👩‍👧‍👦 Family';
    case 'single':
      return '🏠 Standard';
    default:
      return type.charAt(0).toUpperCase() + type.slice(1);
  }
};

interface RoomCardProps {
  room: LodgeRoom;
  lodge: any;
}

const RoomCard = ({ room, lodge }: RoomCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Gallery */}
      <div className="relative h-64 group">
        <Image
          src={room.images[0]}
          alt={`${room.name} at ${lodge.name}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getRoomTypeColor(room.type)}`}>
            {getRoomTypeBadge(room.type)}
          </span>
        </div>
        
        <div className="absolute top-4 right-4 bg-white bg-opacity-95 px-3 py-1 rounded-full flex items-center space-x-1 shadow-md">
          <Users size={14} className="text-lodge-primary" />
          <span className="text-xs font-medium text-lodge-dark">
            Up to {room.maxOccupancy} guests
          </span>
        </div>

        <div className="absolute bottom-4 right-4">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
            room.available 
              ? 'bg-green-500 text-white' 
              : 'bg-red-500 text-white'
          }`}>
            {room.available ? '✓ Available' : '✗ Fully Booked'}
          </span>
        </div>

        {/* Image Counter */}
        {room.images.length > 1 && (
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs">
            📷 {room.images.length} photos
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

        {/* Room Details */}
        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
          <div className="flex items-center space-x-2 text-gray-600">
            <Bed size={16} className="text-lodge-primary" />
            <span>{room.bedConfiguration}</span>
          </div>
          {room.size && (
            <div className="flex items-center space-x-2 text-gray-600">
              <Maximize size={16} className="text-lodge-primary" />
              <span>{room.size}m²</span>
            </div>
          )}
          {room.view && (
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin size={16} className="text-lodge-primary" />
              <span>{room.view} View</span>
            </div>
          )}
          {room.floor && (
            <div className="flex items-center space-x-2 text-gray-600">
              <span className="font-medium">Floor:</span>
              <span>{room.floor}</span>
            </div>
          )}
        </div>

        {/* Amenities Grid */}
        <div className="mb-6">
          <h4 className="font-medium text-lodge-dark mb-3 text-sm">Room Amenities</h4>
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

        {/* Pricing */}
        <div className="bg-lodge-neutral p-4 rounded-lg mb-6">
          <h4 className="font-medium text-lodge-dark mb-3 text-sm">Pricing Guide</h4>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="text-center">
              <div className="text-green-600 font-bold">${room.basePricing.low}</div>
              <div className="text-gray-600">Low Season</div>
            </div>
            <div className="text-center">
              <div className="text-lodge-primary font-bold">${room.basePricing.normal}</div>
              <div className="text-gray-600">Normal</div>
            </div>
            <div className="text-center">
              <div className="text-red-600 font-bold">${room.basePricing.peak}</div>
              <div className="text-gray-600">Peak Season</div>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-2 text-center">
            *Prices per night, excluding taxes. Final price depends on dates and availability.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col space-y-3">
          <Link
            href={`/inquiry?lodge=${lodge.slug}&room=${room.id}`}
            className={`text-center py-3 text-sm font-semibold rounded-lg transition-colors ${
              room.available 
                ? 'btn-primary' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {room.available ? 'Check Availability & Book' : 'Currently Unavailable'}
          </Link>
          
          <div className="flex space-x-2">
            <a
              href={`tel:${lodge.contact.phone}`}
              className="flex-1 flex items-center justify-center space-x-2 bg-lodge-secondary text-white py-2 px-3 rounded-lg hover:bg-green-700 transition-colors text-xs"
            >
              <Phone size={14} />
              <span>Call Lodge</span>
            </a>
            {lodge.contact.whatsapp && (
              <a
                href={`https://wa.me/${lodge.contact.whatsapp.replace(/[^0-9]/g, '')}?text=Hi, I'm interested in ${room.name} at ${lodge.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-2 bg-green-600 text-white py-2 px-3 rounded-lg hover:bg-green-700 transition-colors text-xs"
              >
                <MessageCircle size={14} />
                <span>WhatsApp</span>
              </a>
            )}
          </div>
        </div>

        {/* Special Features */}
        {room.features && room.features.length > 0 && (
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-medium text-blue-800 text-xs mb-2">✨ Special Features</h4>
            <div className="flex flex-wrap gap-1">
              {room.features.map((feature, index) => (
                <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function LodgeRoomsPage({ params }: { params: { slug: string } }) {
  const lodge = getLodgeBySlug(params.slug);
  
  if (!lodge) {
    notFound();
  }

  // Group rooms by type
  const suiteRooms = lodge.rooms.filter(room => room.type === 'suite');
  const executiveRooms = lodge.rooms.filter(room => room.type === 'executive');
  const deluxeRooms = lodge.rooms.filter(room => room.type === 'deluxe');
  const familyRooms = lodge.rooms.filter(room => room.type === 'family');
  const standardRooms = lodge.rooms.filter(room => room.type === 'single');

  const availableRooms = lodge.rooms.filter(room => room.available);
  const unavailableRooms = lodge.rooms.filter(room => !room.available);

  return (
    <div className="min-h-screen bg-lodge-neutral">
      {/* Header */}
      <section className="bg-lodge-primary text-white py-16">
        <div className="container-max section-padding">
          <div className="flex items-center mb-6">
            <Link 
              href={`/lodges/${lodge.slug}`}
              className="flex items-center space-x-2 text-lodge-accent hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to {lodge.name}</span>
            </Link>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              Rooms at {lodge.name}
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Choose from our {lodge.rooms.length} carefully designed room types in {lodge.location.city}. 
              Each room combines modern comfort with authentic Zimbabwean hospitality.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-white border-b">
        <div className="container-max section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-lodge-primary mb-1">{lodge.rooms.length}</div>
              <div className="text-sm text-gray-600">Room Types</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600 mb-1">{availableRooms.length}</div>
              <div className="text-sm text-gray-600">Available Now</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-lodge-primary mb-1">
                ${Math.min(...lodge.rooms.map(r => r.basePricing.low))}
              </div>
              <div className="text-sm text-gray-600">From per night</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-lodge-primary mb-1">
                {Math.max(...lodge.rooms.map(r => r.maxOccupancy))}
              </div>
              <div className="text-sm text-gray-600">Max Occupancy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Room Categories */}
      
      {/* Suite Rooms */}
      {suiteRooms.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container-max section-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-lodge-primary mb-4 font-serif">
                👑 Presidential & Luxury Suites
              </h2>
              <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                Our most luxurious accommodations offering unparalleled comfort and premium services
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {suiteRooms.map((room) => (
                <RoomCard key={room.id} room={room} lodge={lodge} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Executive Rooms */}
      {executiveRooms.length > 0 && (
        <section className="py-16 bg-lodge-neutral">
          <div className="container-max section-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-lodge-primary mb-4 font-serif">
                💼 Executive Rooms
              </h2>
              <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                Perfect for business travelers seeking comfort and productivity
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {executiveRooms.map((room) => (
                <RoomCard key={room.id} room={room} lodge={lodge} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Deluxe Rooms */}
      {deluxeRooms.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container-max section-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-lodge-primary mb-4 font-serif">
                ⭐ Deluxe Rooms
              </h2>
              <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                Comfortable accommodation with modern amenities and elegant touches
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {deluxeRooms.map((room) => (
                <RoomCard key={room.id} room={room} lodge={lodge} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Family Rooms */}
      {familyRooms.length > 0 && (
        <section className="py-16 bg-lodge-neutral">
          <div className="container-max section-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-lodge-primary mb-4 font-serif">
                👨‍👩‍👧‍👦 Family Rooms
              </h2>
              <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                Spacious accommodations designed for families visiting Zimbabwe
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {familyRooms.map((room) => (
                <RoomCard key={room.id} room={room} lodge={lodge} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Standard Rooms */}
      {standardRooms.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container-max section-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-lodge-primary mb-4 font-serif">
                🏠 Standard Rooms
              </h2>
              <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                Quality accommodation with essential amenities at excellent value
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {standardRooms.map((room) => (
                <RoomCard key={room.id} room={room} lodge={lodge} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Room Amenities Overview */}
      <section className="py-16 bg-lodge-neutral">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lodge-primary mb-4 font-serif">
              Standard in All Rooms
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Every room at {lodge.name} includes these essential amenities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Wifi, title: 'Free WiFi', description: 'High-speed internet access' },
              { icon: AirVent, title: 'Climate Control', description: 'Air conditioning in all rooms' },
              { icon: Coffee, title: 'Tea & Coffee', description: 'Complimentary refreshments' },
              { icon: Tv, title: 'Entertainment', description: 'Satellite TV with local channels' }
            ].map((amenity, index) => {
              const IconComponent = amenity.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-lodge-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-lodge-dark mb-2">
                    {amenity.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {amenity.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Information */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-lodge-primary mb-8 font-serif text-center">
              Booking Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-lodge-neutral p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-lodge-dark mb-4">Check-in & Check-out</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Check-in:</span>
                    <span className="font-medium">{lodge.operatingHours.checkIn}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Check-out:</span>
                    <span className="font-medium">{lodge.operatingHours.checkOut}</span>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-gray-600">
                      Early check-in and late check-out may be available upon request 
                      and subject to availability.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-lodge-neutral p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-lodge-dark mb-4">Pricing & Payment</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Currency:</span>
                    <span className="font-medium">USD (US Dollars)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Payment:</span>
                    <span className="font-medium">Cash, Card, Bank Transfer</span>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-gray-600">
                      Final prices depend on dates, season, and availability. 
                      Prices exclude taxes and service charges.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Policies */}
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">📋 Important Policies</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Cancellation</h4>
                  <p className="text-blue-700">{lodge.policies.cancellation}</p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-800 mb-2">Smoking</h4>
                  <p className="text-blue-700">{lodge.policies.smokingPolicy}</p>
                </div>
                {lodge.policies.petPolicy && (
                  <div className="md:col-span-2">
                    <h4 className="font-medium text-blue-800 mb-2">Pets</h4>
                    <p className="text-blue-700">{lodge.policies.petPolicy}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-lodge-primary text-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Special Offers at {lodge.name}
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Take advantage of our current promotions and save on your stay
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">🌟 Extended Stay</h3>
              <p className="mb-4">Book 7+ nights and save 20% on your total stay</p>
              <p className="text-sm opacity-90">Valid for all room types • Available year-round</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">💼 Business Package</h3>
              <p className="mb-4">Executive rooms with meeting room access included</p>
              <p className="text-sm opacity-90">Perfect for corporate travelers • Special rates</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">🎉 Early Bird</h3>
              <p className="mb-4">Book 30 days in advance and save 15%</p>
              <p className="text-sm opacity-90">All room types • Non-refundable</p>
            </div>
          </div>
        </div>
      </section>

      {/* Unavailable Rooms (if any) */}
      {unavailableRooms.length > 0 && (
        <section className="py-16 bg-gray-100">
          <div className="container-max section-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-600 mb-4 font-serif">
                Currently Unavailable
              </h2>
              <p className="text-gray-600 text-lg">
                These rooms are temporarily unavailable but will return soon
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {unavailableRooms.map((room) => (
                <div key={room.id} className="opacity-60">
                  <RoomCard room={room} lodge={lodge} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact for Bookings */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl font-bold text-lodge-primary mb-4 font-serif">
            Ready to Book Your Room?
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Contact {lodge.name} directly for the best rates and availability. 
            Our team is ready to help you plan your perfect stay in {lodge.location.city}.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href={`/inquiry?lodge=${lodge.slug}`}
              className="btn-primary text-lg px-8 py-4"
            >
              Make Booking Inquiry
            </Link>
            <a 
              href={`tel:${lodge.contact.phone}`}
              className="btn-secondary text-lg px-8 py-4 flex items-center justify-center space-x-2"
            >
              <Phone size={18} />
              <span>Call {lodge.location.city} Lodge</span>
            </a>
            {lodge.contact.whatsapp && (
              <a
                href={`https://wa.me/${lodge.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center space-x-2"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Us</span>
              </a>
            )}
          </div>

          <div className="text-sm text-gray-600">
            <p>
              💡 <strong>Pro Tip:</strong> Book directly with us for the best rates, room upgrades 
              (subject to availability), and exclusive perks including complimentary airport pickup 
              for stays of 5+ nights.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 bg-lodge-dark text-white">
        <div className="container-max section-padding">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href={`/lodges/${lodge.slug}`} className="hover:text-lodge-accent transition-colors">
              ← Back to {lodge.name}
            </Link>
            <Link href={`/lodges/${lodge.slug}/gallery`} className="hover:text-lodge-accent transition-colors">
              📸 Photo Gallery
            </Link>
            <Link href="/lodges" className="hover:text-lodge-accent transition-colors">
              🏨 All Lodges
            </Link>
            <Link href="/contact" className="hover:text-lodge-accent transition-colors">
              📞 Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}