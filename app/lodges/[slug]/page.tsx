// app/lodges/[slug]/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  MapPin, Phone, Mail, Clock, Star, Users, Calendar, 
  Wifi, Coffee, MessageCircle, Navigation, 
  CheckCircle, Camera
} from 'lucide-react';
import { getLodgeBySlug, Facility } from '@/lib/lodge-types';

// Generate metadata dynamically based on the lodge
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const lodge = getLodgeBySlug(slug);
  
  if (!lodge) {
    return {
      title: 'Lodge Not Found - Harris Lodges',
      description: 'The requested lodge could not be found.'
    };
  }

  return {
    title: `${lodge.name} - Harris Lodges Zimbabwe`,
    description: lodge.description,
    keywords: [`${lodge.name}`, `${lodge.location.city} accommodation`, 'Zimbabwe lodge', 'Harris Lodges'],
    openGraph: {
      title: lodge.name,
      description: lodge.description,
      images: [lodge.images.hero],
    },
  };
}

const FacilityCard = ({ facility }: { facility: Facility }) => {
  const getTypeIcon = (type: Facility['type']) => {
    switch (type) {
      case 'conference': return <Calendar className="w-6 h-6" />;
      case 'restaurant': return <Coffee className="w-6 h-6" />;
      case 'pool': return <Users className="w-6 h-6" />;
      case 'business': return <Wifi className="w-6 h-6" />;
      case 'recreation': return <Star className="w-6 h-6" />;
      default: return <CheckCircle className="w-6 h-6" />;
    }
  };

  const getTypeColor = (type: Facility['type']) => {
    switch (type) {
      case 'conference': return 'bg-blue-100 text-blue-600';
      case 'restaurant': return 'bg-orange-100 text-orange-600';
      case 'pool': return 'bg-cyan-100 text-cyan-600';
      case 'business': return 'bg-purple-100 text-purple-600';
      case 'recreation': return 'bg-green-100 text-green-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getTypeColor(facility.type)}`}>
          {getTypeIcon(facility.type)}
        </div>
        {facility.capacity && (
          <span className="bg-lodge-accent text-lodge-dark px-3 py-1 rounded-full text-sm font-medium">
            Capacity: {facility.capacity}
          </span>
        )}
      </div>
      
      <h3 className="text-xl font-semibold text-lodge-dark mb-2">{facility.name}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{facility.description}</p>
      
      {facility.operatingHours && (
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <Clock size={16} className="mr-2 text-lodge-primary" />
          <span>{facility.operatingHours}</span>
        </div>
      )}

      {facility.amenities && facility.amenities.length > 0 && (
        <div className="mb-4">
          <h4 className="font-medium text-lodge-dark mb-2 text-sm">Amenities</h4>
          <div className="flex flex-wrap gap-2">
            {facility.amenities.slice(0, 4).map((amenity, index) => (
              <span key={index} className="bg-lodge-neutral text-lodge-dark px-2 py-1 rounded text-xs">
                {amenity}
              </span>
            ))}
            {facility.amenities.length > 4 && (
              <span className="text-lodge-primary text-xs font-medium">
                +{facility.amenities.length - 4} more
              </span>
            )}
          </div>
        </div>
      )}

      {facility.pricing && (
        <div className="border-t pt-4">
          <h4 className="font-medium text-lodge-dark mb-2 text-sm">Pricing</h4>
          <div className="space-y-1 text-sm">
            {facility.pricing.hourly && (
              <div className="flex justify-between">
                <span className="text-gray-600">Hourly:</span>
                <span className="font-medium">${facility.pricing.hourly}</span>
              </div>
            )}
            {facility.pricing.halfDay && (
              <div className="flex justify-between">
                <span className="text-gray-600">Half Day:</span>
                <span className="font-medium">${facility.pricing.halfDay}</span>
              </div>
            )}
            {facility.pricing.fullDay && (
              <div className="flex justify-between">
                <span className="text-gray-600">Full Day:</span>
                <span className="font-medium">${facility.pricing.fullDay}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {facility.bookingRequired && (
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-yellow-800 text-sm font-medium">
            Advance booking required
          </p>
        </div>
      )}
    </div>
  );
};

export default async function LodgePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lodge = getLodgeBySlug(slug);
  
  if (!lodge) {
    notFound();
  }

  const conferenceFacilities = lodge.facilities.filter(f => f.type === 'conference');
  const otherFacilities = lodge.facilities.filter(f => f.type !== 'conference');

  return (
    <div className="min-h-screen bg-lodge-neutral">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={lodge.images.hero}
            alt={`${lodge.name} exterior view`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="relative z-10 text-center text-white section-padding">
          <div className="container-max">
            <div className="mb-4 inline-block bg-lodge-accent text-lodge-dark px-4 py-2 rounded-full text-sm font-medium">
              {lodge.status === 'active' ? '✓ Now Open' : lodge.status === 'coming-soon' ? '🚧 Coming Soon' : '🔧 Maintenance'}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
              {lodge.name}
            </h1>
            <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed">
              {lodge.description}
            </p>
            
            <div className="flex items-center justify-center space-x-4 mb-8 text-lodge-accent">
              <div className="flex items-center space-x-1">
                <MapPin size={20} />
                <span>{lodge.location.city}, {lodge.location.region}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star size={20} fill="currentColor" />
                <span>{lodge.rating} ({lodge.reviewCount} reviews)</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href={`/lodges/${lodge.slug}/rooms`}
                className="btn-primary text-lg px-8 py-4"
              >
                View Rooms & Book
              </Link>
              <Link
                href={`/lodges/${lodge.slug}/gallery`}
                className="btn-secondary text-lg px-8 py-4"
              >
               
                Photo Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="py-8 bg-white border-b">
        <div className="container-max section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-lodge-primary mb-1">{lodge.rooms.length}</div>
              <div className="text-sm text-gray-600">Room Types</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-lodge-primary mb-1">{lodge.facilities.length}</div>
              <div className="text-sm text-gray-600">Facilities</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-lodge-primary mb-1">{conferenceFacilities.length}</div>
              <div className="text-sm text-gray-600">Conference Rooms</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-lodge-primary mb-1">{lodge.operatingHours.reception}</div>
              <div className="text-sm text-gray-600">Reception Hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lodge Overview */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Lodge Details */}
            <div>
              <h2 className="text-3xl font-bold text-lodge-primary mb-6 font-serif">
                About {lodge.name}
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                {lodge.description}
              </p>
              
              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-lodge-dark mb-4">Key Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {lodge.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-gray-700">
                      <CheckCircle size={16} className="text-lodge-secondary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-lodge-dark mb-4">Lodge Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {lodge.amenities.map((amenity, index) => (
                    <span key={index} className="bg-lodge-neutral text-lodge-dark px-3 py-1 rounded-full text-sm font-medium">
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              {/* Established */}
              {lodge.established && (
                <div className="bg-lodge-accent bg-opacity-20 p-4 rounded-lg border-l-4 border-lodge-accent">
                  <p className="text-lodge-dark font-medium">
                  Proudly serving guests since {lodge.established}
                  </p>
                </div>
              )}
            </div>

            {/* Contact & Location */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-lodge-dark mb-6">Contact & Location</h3>
              
              {/* Address */}
              <div className="mb-6">
                <div className="flex items-start space-x-3 mb-4">
                  <MapPin className="w-5 h-5 text-lodge-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-lodge-dark mb-1">Address</h4>
                    <p className="text-gray-600 text-sm">
                      {lodge.location.address}<br />
                      {lodge.location.city}, {lodge.location.region}<br />
                      {lodge.location.country}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-lodge-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-lodge-dark text-sm">Phone</h4>
                    <a href={`tel:${lodge.contact.phone}`} className="text-gray-600 hover:text-lodge-primary transition-colors text-sm">
                      {lodge.contact.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-lodge-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-lodge-dark text-sm">Email</h4>
                    <a href={`mailto:${lodge.contact.email}`} className="text-gray-600 hover:text-lodge-primary transition-colors text-sm">
                      {lodge.contact.email}
                    </a>
                  </div>
                </div>

                {lodge.contact.emergencyPhone && (
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-lodge-dark text-sm">Emergency</h4>
                      <a href={`tel:${lodge.contact.emergencyPhone}`} className="text-gray-600 hover:text-red-500 transition-colors text-sm">
                        {lodge.contact.emergencyPhone}
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Operating Hours */}
              <div className="mb-6">
                <h4 className="font-medium text-lodge-dark mb-3 flex items-center">
                  <Clock className="w-5 h-5 text-lodge-primary mr-2" />
                  Operating Hours
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Reception:</span>
                    <span className="font-medium">{lodge.operatingHours.reception}</span>
                  </div>
                  {lodge.operatingHours.restaurant && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Restaurant:</span>
                      <span className="font-medium">{lodge.operatingHours.restaurant}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Check-in:</span>
                    <span className="font-medium">{lodge.operatingHours.checkIn}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Check-out:</span>
                    <span className="font-medium">{lodge.operatingHours.checkOut}</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                {lodge.contact.whatsapp && (
                  <a
                    href={`https://wa.me/${lodge.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp {lodge.location.city} Lodge</span>
                  </a>
                )}
                
                <a
                  href={`https://maps.google.com/?q=${lodge.location.coordinates.lat},${lodge.location.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-lodge-primary text-white py-3 rounded-lg hover:bg-lodge-dark transition-colors"
                >
                  <Navigation size={18} />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Facilities (if available) */}
      {conferenceFacilities.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container-max section-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-lodge-primary mb-4 font-serif">
                Conference & Meeting Facilities
              </h2>
              <p className="text-gray-700 text-lg">
                Professional meeting spaces equipped with modern technology
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {conferenceFacilities.map((facility) => (
                <FacilityCard key={facility.id} facility={facility} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Facilities */}
      {otherFacilities.length > 0 && (
        <section className="py-16 bg-lodge-neutral">
          <div className="container-max section-padding">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-lodge-primary mb-4 font-serif">
                Additional Facilities
              </h2>
              <p className="text-gray-700 text-lg">
                Enhance your stay with our additional amenities and services
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherFacilities.map((facility) => (
                <FacilityCard key={facility.id} facility={facility} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Policies */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-lodge-primary mb-8 font-serif text-center">
              Lodge Policies
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-lodge-neutral p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-lodge-dark mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 text-lodge-secondary mr-2" />
                  Cancellation Policy
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {lodge.policies.cancellation}
                </p>
              </div>
              
              <div className="bg-lodge-neutral p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-lodge-dark mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 text-lodge-secondary mr-2" />
                  Smoking Policy
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {lodge.policies.smokingPolicy}
                </p>
              </div>
              
              {lodge.policies.petPolicy && (
                <div className="bg-lodge-neutral p-6 rounded-lg md:col-span-2">
                  <h3 className="text-lg font-semibold text-lodge-dark mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 text-lodge-secondary mr-2" />
                    Pet Policy
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {lodge.policies.petPolicy}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-lodge-neutral">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lodge-primary mb-4 font-serif">
              Gallery Preview
            </h2>
            <p className="text-gray-700 text-lg">
              Get a glimpse of {lodge.name}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {lodge.images.gallery.slice(0, 4).map((image, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src={image}
                  alt={`${lodge.name} gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href={`/lodges/${lodge.slug}/gallery`}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <Camera size={18} />
              <span>View Full Gallery</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Room Types Preview */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lodge-primary mb-4 font-serif">
              Available Rooms
            </h2>
            <p className="text-gray-700 text-lg">
              Choose from our range of comfortable accommodations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {lodge.rooms.slice(0, 3).map((room) => (
              <div key={room.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src={room.images[0]}
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white bg-opacity-95 px-2 py-1 rounded-full flex items-center space-x-1">
                    <Users size={12} className="text-lodge-primary" />
                    <span className="text-xs font-medium">{room.maxOccupancy}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-lodge-dark mb-2">{room.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {room.description.slice(0, 100)}...
                  </p>
                  
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-600">{room.bedConfiguration}</span>
                    {room.size && (
                      <span className="text-sm text-gray-600">{room.size}m²</span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    {/* do not display prices */}
                    {/* <div className="text-sm">
                      <span className="text-gray-600">From </span>
                      <span className="font-bold text-lodge-primary">
                        ${room.basePricing.low}
                      </span>
                      <span className="text-gray-600">/night</span>
                    </div> */}
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      room.available 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {room.available ? 'Available' : 'Fully Booked'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href={`/lodges/${lodge.slug}/rooms`}
              className="btn-primary text-lg px-8 py-4 mr-4"
            >
              View All Rooms & Book
            </Link>
            <Link
              href={`/inquiry?lodge=${lodge.slug}`}
              className="btn-secondary text-lg px-8 py-4"
            >
              Make Inquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Teaser */}
      <section className="py-16 bg-lodge-neutral">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lodge-primary mb-4 font-serif">
              What Guests Say About {lodge.name}
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-lodge-accent fill-current" />
                ))}
              </div>
              <span className="text-xl font-bold text-lodge-primary">{lodge.rating}</span>
              <span className="text-gray-600">({lodge.reviewCount} reviews)</span>
            </div>
          </div>
          
          {/* Sample Reviews */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[
              {
                name: "Sarah M.",
                location: "Johannesburg, SA",
                rating: 5,
                comment: `Exceptional service at ${lodge.name}. The staff were incredibly welcoming and the facilities exceeded our expectations.`,
                date: "2 weeks ago"
              },
              {
                name: "Michael T.",
                location: "London, UK",
                rating: 5,
                comment: "Perfect location and beautiful rooms. The conference facilities were exactly what we needed for our business meeting.",
                date: "1 month ago"
              },
              {
                name: "Grace K.",
                location: `${lodge.location.city}, ZW`,
                rating: 4,
                comment: "Great local hospitality and authentic Zimbabwean experience. Would definitely recommend to visitors.",
                date: "3 weeks ago"
              }
            ].map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-lodge-primary rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold text-sm">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lodge-dark text-sm">{review.name}</h4>
                    <p className="text-xs text-gray-600">{review.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-lodge-accent fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  {review.comment}
                </p>
                
                <p className="text-xs text-gray-500">{review.date}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/testimonials"
              className="btn-primary"
            >
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-lodge-primary text-white">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Ready to Experience {lodge.name}?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your stay today and discover the perfect blend of comfort, hospitality, 
            and authentic Zimbabwean culture in {lodge.location.city}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={`/lodges/${lodge.slug}/rooms`}
              className="bg-white text-lodge-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              View Rooms & Book Now
            </Link>
            <a 
              href={`tel:${lodge.contact.phone}`}
              className="border-2 border-white text-white hover:bg-white hover:text-lodge-primary px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Call {lodge.location.city} Lodge
            </a>
            {lodge.contact.whatsapp && (
              <a
                href={`https://wa.me/${lodge.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white hover:bg-green-700 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}