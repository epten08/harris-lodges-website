// src/app/rooms/page.tsx
import type { Metadata } from 'next';
import RoomCard from '@/components/RoomsCard';
import Link from 'next/link';
import { Room } from '@/lib/types';
import { Filter, SortAsc, MapPin, Wifi, Car, Coffee, Star, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Rooms & Accommodation - Harris Lodges Zimbabwe',
  description: 'Explore our range of comfortable rooms at Harris Lodges. From executive suites to standard rooms, find the perfect accommodation for your stay in Zimbabwe. All rooms feature modern amenities and authentic Zimbabwean touches.',
  keywords: ['Zimbabwe accommodation', 'Harare hotels', 'lodge rooms', 'executive suites', 'deluxe rooms', 'business travel Zimbabwe'],
};

const rooms: Room[] = [
  {
    id: 'presidential-suite',
    name: 'Presidential Suite',
    type: 'executive',
    description: 'Our most luxurious accommodation featuring a separate living room, dining area, private balcony with panoramic city views, and premium amenities. Perfect for VIP guests and special occasions.',
    amenities: ['King Size Bed', 'Separate Living Room', 'Dining Area', 'Private Balcony', 'City Skyline View', 'Premium WiFi', 'Mini Bar', 'Butler Service', 'Work Desk', 'Air Conditioning', '24/7 Room Service', 'Premium Bathroom'],
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    maxOccupancy: 2
  },
  {
    id: 'executive-suite',
    name: 'Executive Suite',
    type: 'executive',
    description: 'Spacious suite with separate living area, work desk, and stunning garden views. Ideal for business travelers and extended stays requiring extra space and comfort.',
    amenities: ['King Size Bed', 'Separate Living Area', 'Work Desk', 'Garden View', 'Mini Bar', 'Premium WiFi', 'Air Conditioning', 'Room Service', 'Coffee Machine', 'Satellite TV', 'Safe', 'Bathrobe & Slippers'],
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    maxOccupancy: 2
  },
  {
    id: 'deluxe-king',
    name: 'Deluxe King Room',
    type: 'deluxe',
    description: 'Elegant king room with modern furnishings, comfortable seating area, and beautiful garden views. Features premium bedding and contemporary Zimbabwean decor.',
    amenities: ['King Size Bed', 'Garden View', 'Seating Area', 'Work Desk', 'Free WiFi', 'Air Conditioning', 'Private Bathroom', 'Tea/Coffee Facilities', 'Satellite TV', 'Mini Fridge', 'Daily Housekeeping', 'Hair Dryer'],
    images: [
      'https://images.unsplash.com/photo-1631049421450-348ccd7f8949?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    maxOccupancy: 2
  },
  {
    id: 'deluxe-twin',
    name: 'Deluxe Twin Room',
    type: 'deluxe',
    description: 'Comfortable twin room perfect for friends or colleagues traveling together. Features two single beds, work area, and all modern amenities for a pleasant stay.',
    amenities: ['Twin Single Beds', 'Work Area', 'Free WiFi', 'Air Conditioning', 'Private Bathroom', 'Tea/Coffee Facilities', 'Satellite TV', 'Wardrobe', 'Daily Housekeeping', 'Desk Lamp', 'Phone', 'Safe'],
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1631049421450-348ccd7f8949?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/post-it-notes-in-different-colors?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    maxOccupancy: 2
  },
  {
    id: 'family-suite',
    name: 'Family Suite',
    type: 'deluxe',
    description: 'Spacious family accommodation with separate sleeping areas and connecting rooms. Perfect for families visiting Zimbabwe with children, offering comfort and convenience.',
    amenities: ['Double Bed + 2 Single Beds', 'Connecting Rooms', 'Family Bathroom', 'Sitting Area', 'Free WiFi', 'Air Conditioning', 'Mini Fridge', 'Tea/Coffee Facilities', 'Satellite TV', 'Extra Storage', 'Baby Cot Available', 'Childproofing'],
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    maxOccupancy: 4
  },
  {
    id: 'standard-double',
    name: 'Standard Double Room',
    type: 'single',
    description: 'Comfortable double room with all essential amenities. Excellent value accommodation with quality service, modern facilities, and a cozy atmosphere.',
    amenities: ['Double Bed', 'Free WiFi', 'Air Conditioning', 'Private Bathroom', 'Tea/Coffee Facilities', 'Satellite TV', 'Work Desk', 'Daily Housekeeping', 'Wardrobe', 'Phone', 'Complimentary Toiletries', 'Reading Light'],
    images: [
      'https://images.unsplash.com/photo-1631049035634-c04d68b1d1f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    maxOccupancy: 2
  },
  {
    id: 'standard-single',
    name: 'Standard Single Room',
    type: 'single',
    description: 'Cozy single room perfect for solo travelers and business guests. Compact yet comfortable with all necessary amenities for a pleasant stay.',
    amenities: ['Single Bed', 'Free WiFi', 'Air Conditioning', 'Private Bathroom', 'Tea/Coffee Facilities', 'Satellite TV', 'Work Area', 'Daily Housekeeping', 'Wardrobe', 'Complimentary Toiletries', 'Desk Lamp', 'Phone'],
    images: [
      'https://images.unsplash.com/photo-1631049421450-348ccd7f8949?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    maxOccupancy: 1
  },
  {
    id: 'budget-room',
    name: 'Budget Room',
    type: 'single',
    description: 'Affordable accommodation with essential amenities. Clean, comfortable, and perfect for budget-conscious travelers who want quality service at great value.',
    amenities: ['Single Bed', 'Shared Bathroom', 'Free WiFi', 'Fan', 'Tea/Coffee Facilities', 'Basic TV', 'Shared Lounge', 'Daily Housekeeping', 'Lockers', 'Shared Kitchen Access', 'Laundry Service', 'Common Area'],
    images: [
      'https://images.unsplash.com/photo-1631049035634-c04d68b1d1f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    maxOccupancy: 1
  }
];

// Filter and sort functionality would be implemented here
const featuredRooms = ['presidential-suite', 'executive-suite', 'family-suite'];

export default function RoomsPage() {
  const executiveRooms = rooms.filter(room => room.type === 'executive');
  const deluxeRooms = rooms.filter(room => room.type === 'deluxe');
  const standardRooms = rooms.filter(room => room.type === 'single');

  return (
    <div className="min-h-screen bg-lodge-neutral">
      {/* Header */}
      <section className="bg-lodge-primary text-white py-16">
        <div className="container-max section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              Our Rooms & Accommodation
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Choose from our range of comfortable rooms designed to provide the perfect stay 
              for every type of traveler visiting Zimbabwe. Each room reflects authentic 
              Zimbabwean hospitality with modern comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-white border-b">
        <div className="container-max section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-lodge-primary mb-1">{rooms.length}</div>
              <div className="text-sm text-gray-600">Room Types</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-lodge-primary mb-1">24/7</div>
              <div className="text-sm text-gray-600">Room Service</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-lodge-primary mb-1">Free</div>
              <div className="text-sm text-gray-600">WiFi & Parking</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-lodge-primary mb-1">4.8★</div>
              <div className="text-sm text-gray-600">Guest Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-lodge-primary mb-4 font-serif">
              Featured Accommodations
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Our most popular rooms, chosen by guests for their exceptional comfort and amenities
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
            {rooms.filter(room => featuredRooms.includes(room.id)).map((room) => (
              <RoomCard key={room.id} room={room} featured={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Executive Rooms */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lodge-primary mb-4 font-serif">
              👑 Executive Collection
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Premium suites for discerning travelers seeking luxury and exceptional service
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {executiveRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* Deluxe Rooms */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lodge-primary mb-4 font-serif">
              ⭐ Deluxe Rooms
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Comfortable accommodation with modern amenities and elegant Zimbabwean touches
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {deluxeRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* Standard Rooms */}
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
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {standardRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Overview */}
      <section className="py-16 bg-lodge-neutral">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lodge-primary mb-4 font-serif">
              All Rooms Include
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Standard amenities available in every room at Harris Lodges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Wifi, title: 'Free WiFi', description: 'High-speed internet throughout the property' },
              { icon: Car, title: 'Free Parking', description: 'Secure on-site parking for all guests' },
              { icon: Coffee, title: 'Tea & Coffee', description: 'Complimentary tea and coffee facilities' },
              { icon: Star, title: '24/7 Service', description: 'Round-the-clock front desk and room service' }
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

      {/* Special Offers */}
      <section className="py-16 bg-lodge-primary text-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Special Offers & Packages
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
              <h3 className="text-xl font-semibold mb-3">🎯 Business Package</h3>
              <p className="mb-4">Executive rooms with meeting room access and business center</p>
              <p className="text-sm opacity-90">Perfect for corporate travelers • Special rates</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-3">👨‍👩‍👧‍👦 Family Deal</h3>
              <p className="mb-4">Family suites with kids stay free program</p>
              <p className="text-sm opacity-90">Children under 12 stay free • Family activities included</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl font-bold text-lodge-primary mb-4 font-serif">
            Ready to Book Your Perfect Room?
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Experience the best of Zimbabwean hospitality with modern comfort. 
            Request pricing for your preferred dates and room type.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/inquiry" className="btn-primary text-lg px-8 py-4">
              Request Pricing & Book Now
            </Link>
            <a href="tel:+263123456789"
              className="btn-secondary text-lg px-6 py-3"
            >
              📞 Call Us: +263 123 456 789
            </a>
            <a
              href="https://wa.me/263123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-lg"
            >
              💬 WhatsApp Us
            </a>
        </div>
      </div>
      
      <div className="mt-8 text-sm text-gray-600">
        <p>
          💡 <strong>Pro Tip:</strong> Book directly with us for the best rates and exclusive perks including 
          complimentary airport pickup, late checkout, and room upgrades (subject to availability).
        </p>
      </div>
        
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-lodge-neutral">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lodge-primary mb-4 font-serif">
              Room Booking FAQ
            </h2>
            <p className="text-gray-700 text-lg">
              Common questions about our rooms and booking process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Why don&apos;t you show prices on the website?",
                answer: "We offer dynamic pricing based on season, availability, and length of stay. This allows us to provide you with the best possible rate for your specific dates. Request pricing to get accurate, current rates."
              },
              {
                question: "Are there discounts for longer stays?",
                answer: "Yes! We offer significant discounts for extended stays. Book 3+ nights for 15% off, 7+ nights for 20% off. Returning guests also receive special loyalty discounts."
              },
              {
                question: "What&apos;s included in the room rate?",
                answer: "All rooms include free WiFi, daily housekeeping, parking, tea/coffee facilities, and access to our 24/7 front desk. Breakfast can be added for an additional charge."
              },
              {
                question: "Can I cancel or modify my booking?",
                answer: "Yes, we offer flexible cancellation policies. Standard bookings can be cancelled up to 24 hours before arrival. Extended stays and special rates may have different terms."
              },
              {
                question: "Do you offer airport transfers?",
                answer: "Yes, we provide airport shuttle service for a small fee. Complimentary pickup is included for stays of 5+ nights or when booking directly through our website."
              },
              {
                question: "Are the rooms suitable for business travelers?",
                answer: "Absolutely! All rooms have work desks, fast WiFi, and our executive rooms include dedicated business amenities. We also have meeting rooms and a business center."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lodge-dark mb-3 text-lg">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Reviews Teaser */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lodge-primary mb-4 font-serif">
              What Our Guests Say
            </h2>
            <p className="text-gray-700 text-lg">
              Recent reviews from guests who stayed in our rooms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
          {
            name: "Sarah Johnson",
            room: "Executive Suite",
            rating: 5,
            comment: "The executive suite was absolutely perfect for my business trip. Spacious, quiet, and all the amenities I needed.",
            location: "London, UK"
          },
          {
            name: "David Chen",
            room: "Family Suite",
            rating: 5,
            comment: "Fantastic family accommodation! The kids loved the space and we appreciated the thoughtful family-friendly touches.",
            location: "Toronto, Canada"
          },
          {
            name: "Maria Santos",
            room: "Deluxe King Room",
            rating: 4,
            comment: "Beautiful room with lovely garden views. The bed was incredibly comfortable and staff were very helpful.",
            location: "São Paulo, Brazil"
          }
        ].map((review, index) => (
          <div key={index} className="bg-lodge-neutral p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-lodge-primary rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-semibold">
                  {review.name.charAt(0)}
                </span>
              </div>
              <div>
                <h4 className="font-semibold text-lodge-dark">{review.name}</h4>
                <p className="text-sm text-gray-600">{review.location}</p>
              </div>
            </div>
            <div className="flex mb-3">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={16} className="text-lodge-accent fill-current" />
              ))}
            </div>
            <p className="text-gray-700 text-sm mb-2">&quot;{review.comment}&quot;</p>
            <p className="text-xs text-lodge-primary font-medium">
              Stayed in: {review.room}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link href="/testimonials" className="btn-primary">
          Read All Reviews
        </Link>
      </div>
    </div>
  </section>
</div>
);
}