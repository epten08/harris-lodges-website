// src/app/page.tsx
import Hero from '@/components/Hero';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Wifi, Coffee, MapPin } from 'lucide-react';

export default function Home() {
  const highlights = [
    {
      title: "Prime Location",
      description: "Situated in the heart of Zimbabwe with easy access to major attractions",
      icon: MapPin
    },
    {
      title: "Modern Amenities",
      description: "Free WiFi, parking, and 24/7 room service for your comfort",
      icon: Wifi
    },
    {
      title: "Authentic Experience", 
      description: "Immerse yourself in genuine Zimbabwean culture and hospitality",
      icon: Coffee
    }
  ];

  return (
    <>
      <Hero />
      
      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-lodge-primary mb-6 font-serif">
                Your Home Away From Home
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Harris Lodges offers premium accommodation in the heart of Zimbabwe. 
                Our commitment to excellence and authentic Zimbabwean hospitality ensures 
                every guest experiences the warmth and beauty of our nation.
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                From business travelers to tourists exploring Zimbabwe&apos;s natural wonders, 
                we provide comfortable, modern rooms with traditional touches that reflect 
                our rich cultural heritage.
              </p>
              <Link href="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Harris Lodges Interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-lodge-neutral">
        <div className="container-max section-padding">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-lodge-primary mb-12 font-serif">
            Why Choose Harris Lodges
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div key={index} className="text-center bg-white p-8 rounded-lg shadow-md">
                  <div className="w-16 h-16 bg-lodge-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-lodge-dark mb-4">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Rooms Preview */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-lodge-primary mb-4 font-serif">
              Our Accommodation
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Discover our range of comfortable rooms designed to meet every traveler&apos;s needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Executive Suite",
                type: "executive",
                description: "Spacious suite with premium amenities and city views",
                image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Deluxe Room",
                type: "deluxe", 
                description: "Comfortable room with modern furnishings and garden views",
                image: "https://images.unsplash.com/photo-1631049421450-348ccd7f8949?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Standard Single",
                type: "single",
                description: "Cozy single room perfect for business travelers",
                image: "https://images.unsplash.com/photo-1631049035634-c04d68b1d1f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((room, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      room.type === 'executive' ? 'bg-lodge-accent text-lodge-dark' :
                      room.type === 'deluxe' ? 'bg-lodge-secondary text-white' :
                      'bg-lodge-primary text-white'
                    }`}>
                      {room.type.charAt(0).toUpperCase() + room.type.slice(1)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-lodge-dark mb-2">
                    {room.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {room.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <Link
                      href="/inquiry"
                      className="text-lodge-primary hover:text-lodge-dark font-semibold"
                    >
                      Request Price →
                    </Link>
                    <div className="flex text-lodge-accent">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/rooms" className="btn-primary text-lg">
              View All Rooms
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-lodge-primary text-white">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Ready to Experience Zimbabwe?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your stay at Harris Lodges and discover the perfect blend of comfort, 
            hospitality, and authentic Zimbabwean culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/inquiry" className="bg-white text-lodge-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
              Book Now
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-lodge-primary px-8 py-4 rounded-lg font-semibold transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}