// src/app/gallery/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Explore Harris Lodges through our photo gallery. See our beautiful rooms, facilities, and the stunning Zimbabwean landscape surrounding our property.',
};

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Harris Lodges Exterior View',
    category: 'exterior'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Executive Suite Interior',
    category: 'rooms'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Deluxe Room with Garden View',
    category: 'rooms'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Hotel Lobby and Reception',
    category: 'facilities'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1631049421450-348ccd7f8949?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Standard Double Room',
    category: 'rooms'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Restaurant and Dining Area',
    category: 'facilities'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1631049035634-c04d68b1d1f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Single Room Accommodation',
    category: 'rooms'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Hotel Swimming Pool',
    category: 'facilities'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Conference Room',
    category: 'facilities'
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Beautiful Garden Views',
    category: 'exterior'
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Bathroom Amenities',
    category: 'rooms'
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Zimbabwean Landscape View',
    category: 'exterior'
  }
];

const categories = [
  { id: 'all', name: 'All Photos' },
  { id: 'exterior', name: 'Exterior & Views' },
  { id: 'rooms', name: 'Rooms' },
  { id: 'facilities', name: 'Facilities' }
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-lodge-neutral">
      {/* Header */}
      <section className="bg-lodge-primary text-white py-16">
        <div className="container-max section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              Photo Gallery
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Take a visual tour of Harris Lodges and discover the comfort, elegance, 
              and natural beauty that awaits you in Zimbabwe.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container-max section-padding">
          {/* Category Filter - Note: In a real app, you'd implement client-side filtering */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                className="px-6 py-2 bg-white text-lodge-primary border-2 border-lodge-primary rounded-full hover:bg-lodge-primary hover:text-white transition-colors duration-200 font-medium"
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div key={image.id} className="group relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl font-bold text-lodge-primary mb-4 font-serif">
            Ready to Experience This in Person?
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Pictures tell a story, but nothing compares to experiencing Harris Lodges firsthand. 
            Book your stay today and create your own memories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/inquiry" className="btn-primary text-lg">
              Book Your Stay
            </a>
            <a href="/rooms" className="btn-secondary text-lg">
              View Our Rooms
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}