// components/QuickContactSection.tsx
import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';

const QuickContactSection = () => {
  return (
    <section className="py-12 bg-lodge-dark text-white">
      <div className="container-max section-padding">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Need Help Choosing the Right Lodge?</h3>
          <p className="text-gray-300 mb-6">
            Our team can help you select the perfect lodge based on your needs and preferences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+263123456789"
              className="flex items-center justify-center space-x-2 bg-lodge-primary text-white px-6 py-3 rounded-lg hover:bg-lodge-secondary transition-colors"
            >
              <Phone size={18} />
              <span>Call Central Reservations</span>
            </a>
            <a
              href="https://wa.me/263123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Us</span>
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center space-x-2 border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-lodge-dark transition-colors"
            >
              <span>Contact Form</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickContactSection;