// components/HomepageAboutSection.tsx
import Link from 'next/link';
import Image from 'next/image';

const HomepageAboutSection = () => {
  return (
    <section className="py-16 bg-lodge-neutral">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-lodge-primary mb-6 font-serif">
              Zimbabwe's Premier Lodge Network
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Harris Lodges operates a network of premium accommodations across Zimbabwe's 
              most sought-after destinations. From the business hub of Harare to the natural 
              wonder of Victoria Falls, each lodge offers unique experiences while maintaining 
              our signature commitment to authentic Zimbabwean hospitality.
            </p>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Whether you're traveling for business, leisure, or hosting conferences, our lodges 
              provide modern comfort, professional facilities, and the warm welcome that Zimbabwe 
              is famous for. Each location is strategically positioned to give you the best access 
              to local attractions, business centers, and cultural experiences.
            </p>
            <Link href="/lodges" className="btn-primary">
              Explore Our Lodges
            </Link>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Harris Lodges Network"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageAboutSection;