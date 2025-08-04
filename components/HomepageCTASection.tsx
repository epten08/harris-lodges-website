// components/HomepageCTASection.tsx
import Link from 'next/link';

interface HomepageCTASectionProps {
  lodgeCount: number;
}

const HomepageCTASection = ({ lodgeCount }: HomepageCTASectionProps) => {
  return (
    <section className="py-16 bg-lodge-primary text-white">
      <div className="container-max section-padding text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
          Ready to Experience Zimbabwe?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Choose from our {lodgeCount} lodge locations across Zimbabwe and discover 
          the perfect blend of comfort, hospitality, and authentic cultural experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/inquiry" className="bg-white text-lodge-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
            Book Your Stay
          </Link>
          <Link href="/lodges" className="border-2 border-white text-white hover:bg-white hover:text-lodge-primary px-8 py-4 rounded-lg font-semibold transition-colors">
            Explore Our Lodges
          </Link>
          <Link href="/contact" className="border-2 border-lodge-accent text-lodge-accent hover:bg-lodge-accent hover:text-lodge-dark px-8 py-4 rounded-lg font-semibold transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomepageCTASection;