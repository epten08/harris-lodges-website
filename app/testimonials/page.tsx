// src/app/testimonials/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Guest Reviews & Testimonials',
  description: 'Read what our guests say about their experience at Harris Lodges. Discover why travelers choose us for their stay in Zimbabwe.',
};

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Michael Johnson',
    location: 'London, UK',
    rating: 5,
    comment: 'Exceptional service and beautiful accommodation. The staff went above and beyond to make our stay memorable. The authentic Zimbabwean hospitality really shines through at Harris Lodges.',
    date: '2024-01-15'
  },
  {
    id: '2',
    name: 'Sarah van der Merwe',
    location: 'Cape Town, South Africa',
    rating: 5,
    comment: 'Perfect location in Harare with easy access to business district. Rooms were spotless and comfortable. The team was incredibly helpful with local recommendations.',
    date: '2024-01-10'
  },
  {
    id: '3',
    name: 'David Chen',
    location: 'Toronto, Canada',
    rating: 4,
    comment: 'Great value for money. Clean rooms, friendly staff, and excellent breakfast. The WiFi was fast and reliable, which was important for my business trip.',
    date: '2024-01-08'
  },
  {
    id: '4',
    name: 'Amanda Mukamuri',
    location: 'Bulawayo, Zimbabwe',
    rating: 5,
    comment: 'As a local, I was impressed by how Harris Lodges showcases the best of Zimbabwean culture while maintaining international standards. Highly recommend for both local and international guests.',
    date: '2024-01-05'
  },
  {
    id: '5',
    name: 'James Mitchell',
    location: 'Melbourne, Australia',
    rating: 5,
    comment: 'Outstanding experience from check-in to check-out. The executive suite was spacious and well-appointed. The garden views were stunning, and the service was impeccable.',
    date: '2024-01-02'
  },
  {
    id: '6',
    name: 'Maria Santos',
    location: 'São Paulo, Brazil',
    rating: 4,
    comment: 'Lovely lodge with a warm atmosphere. The restaurant served delicious local cuisine, and the staff helped us plan our sightseeing tours around Zimbabwe.',
    date: '2023-12-28'
  },
  {
    id: '7',
    name: 'Robert Thompson',
    location: 'New York, USA',
    rating: 5,
    comment: 'Harris Lodges exceeded all expectations. The combination of modern amenities and traditional Zimbabwean touches created a unique and comfortable experience.',
    date: '2023-12-25'
  },
  {
    id: '8',
    name: 'Lisa Kumar',
    location: 'Mumbai, India',
    rating: 5,
    comment: 'Fantastic stay! The staff was incredibly welcoming and helped make our family vacation special. The rooms were perfect for our children, and the location was ideal.',
    date: '2023-12-20'
  },
  {
    id: '9',
    name: 'Hans Mueller',
    location: 'Berlin, Germany',
    rating: 4,
    comment: 'Clean, comfortable, and well-managed property. The business center facilities were excellent for my conference needs. Will definitely return on my next visit to Harare.',
    date: '2023-12-18'
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={16}
          className={index < rating ? 'text-lodge-accent fill-current' : 'text-gray-300'}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-lodge-primary rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-lg">
              {testimonial.name.charAt(0)}
            </span>
          </div>
          <div>
            <h3 className="font-semibold text-lodge-dark">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-600">
              {testimonial.location}
            </p>
          </div>
        </div>
        <div className="text-lodge-accent">
          <Quote size={24} />
        </div>
      </div>
      
      <div className="mb-4">
        <StarRating rating={testimonial.rating} />
      </div>
      
      <p className="text-gray-700 leading-relaxed mb-4">
        &quot;{testimonial.comment}&quot;
      </p>
      
      <div className="text-sm text-gray-500">
        {new Date(testimonial.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </div>
    </div>
  );
};

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-bold text-lodge-primary mb-2">
      {number}
    </div>
    <div className="text-gray-700 font-medium">
      {label}
    </div>
  </div>
);

export default function TestimonialsPage() {
  const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length;
  
  return (
    <div className="min-h-screen bg-lodge-neutral">
      {/* Header */}
      <section className="bg-lodge-primary text-white py-16">
        <div className="container-max section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              Guest Reviews & Testimonials
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Hear from our valued guests about their experiences at Harris Lodges. 
              Your satisfaction is our greatest achievement.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard number="500+" label="Happy Guests" />
            <StatCard number={averageRating.toFixed(1)} label="Average Rating" />
            <StatCard number="98%" label="Satisfaction Rate" />
            <StatCard number="24/7" label="Guest Support" />
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lodge-primary mb-4 font-serif">
              What Our Guests Say
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Real experiences from real guests who have stayed with us at Harris Lodges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Review Submission CTA */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="bg-lodge-primary rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Share Your Experience
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We&apos;d love to hear about your stay at Harris Lodges. Your feedback helps us 
              continue providing exceptional service to all our guests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-lodge-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
                Write a Review
              </a>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white hover:bg-white hover:text-lodge-primary px-8 py-4 rounded-lg font-semibold transition-colors">
                Review on Google
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-lodge-neutral">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lodge-primary mb-4 font-serif">
              Why Guests Choose Harris Lodges
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-lodge-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-lodge-dark mb-2">
                Exceptional Service
              </h3>
              <p className="text-gray-600 text-sm">
                Our dedicated team ensures every guest receives personalized attention and care throughout their stay.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-lodge-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="text-lg font-semibold text-lodge-dark mb-2">
                Quality Accommodation
              </h3>
              <p className="text-gray-600 text-sm">
                Modern rooms and facilities maintained to the highest standards with regular upgrades and improvements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-lodge-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-lodge-dark text-2xl">🌍</span>
              </div>
              <h3 className="text-lg font-semibold text-lodge-dark mb-2">
                Authentic Zimbabwe
              </h3>
              <p className="text-gray-600 text-sm">
                Experience genuine Zimbabwean culture and hospitality while enjoying international comfort standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-lodge-primary text-white">
        <div className="container-max section-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Ready to Create Your Own Story?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied guests who have made Harris Lodges their preferred choice in Zimbabwe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/inquiry" className="bg-white text-lodge-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
              Book Your Stay
            </a>
            <a href="/rooms" className="border-2 border-white text-white hover:bg-white hover:text-lodge-primary px-8 py-4 rounded-lg font-semibold transition-colors">
              View Our Rooms
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}