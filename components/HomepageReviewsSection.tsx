// components/HomepageReviewsSection.tsx
import Link from 'next/link';
import { Star } from 'lucide-react';
import { Lodge } from '@/lib/lodge-types';

interface HomepageReviewsSectionProps {
  lodges: Lodge[];
}

const HomepageReviewsSection = ({ lodges }: HomepageReviewsSectionProps) => {
  const averageRating = Math.round(lodges.reduce((sum, lodge) => sum + lodge.rating, 0) / lodges.length * 10) / 10;
  const totalReviews = lodges.reduce((sum, lodge) => sum + lodge.reviewCount, 0);

  const sampleReviews = [
    {
      name: "Sarah M.",
      location: "Cape Town, SA",
      lodge: "Harris Lodge Harare",
      rating: 5,
      comment: "Exceptional business facilities and professional service. The conference room was perfect for our regional meeting.",
      date: "2 weeks ago"
    },
    {
      name: "Michael T.",
      location: "London, UK",
      lodge: "Harris Lodge Victoria Falls",
      rating: 5,
      comment: "Breathtaking location with world-class service. The falls view from our suite was absolutely stunning.",
      date: "1 month ago"
    },
    {
      name: "Tendai K.",
      location: "Bulawayo, ZW",
      lodge: "Harris Lodge Bulawayo",
      rating: 4,
      comment: "Perfect for exploring Matobo National Park. Great local hospitality and authentic Zimbabwean experience.",
      date: "3 weeks ago"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-lodge-primary mb-4 font-serif">
            What Our Guests Say
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-lodge-accent fill-current" />
              ))}
            </div>
            <span className="text-xl font-bold text-lodge-primary">{averageRating}</span>
            <span className="text-gray-600">
              ({totalReviews} reviews across all lodges)
            </span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {sampleReviews.map((review, index) => (
            <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg">
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
                "{review.comment}"
              </p>
              
              <div className="flex justify-between items-center text-xs">
                <span className="text-lodge-primary font-medium">{review.lodge}</span>
                <span className="text-gray-500">{review.date}</span>
              </div>
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
  );
};

export default HomepageReviewsSection;