// src/components/Footer.tsx
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-lodge-dark text-white">
      <div className="container-max section-padding py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-lodge-accent rounded-full flex items-center justify-center">
                <span className="text-lodge-dark font-bold text-xl">H</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Harris Lodges</h3>
                <p className="text-sm text-gray-300">Zimbabwe Hospitality</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Experience authentic Zimbabwean hospitality at Harris Lodges. 
              Your comfort is our priority, and your satisfaction is our success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.596-3.205-1.53l1.666-1.133c.369.569.994.924 1.673.924 1.297 0 2.347-1.05 2.347-2.347s-1.05-2.347-2.347-2.347c-.679 0-1.304.355-1.673.924L5.244 9.346c.757-.934 1.908-1.53 3.205-1.53 2.32 0 4.201 1.881 4.201 4.201s-1.881 4.201-4.201 4.201z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
      <div>
        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
        <ul className="space-y-3">
          <li>
            <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">
              Home
            </Link>
          </li>
          <li>
            <Link href="/rooms" className="text-gray-300 hover:text-white transition-colors text-sm">
              Our Rooms
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors text-sm">
              Photo Gallery
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
              About Us
            </Link>
          </li>
          <li>
            <Link href="/testimonials" className="text-gray-300 hover:text-white transition-colors text-sm">
              Guest Reviews
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Services */}
      <div>
        <h4 className="text-lg font-semibold mb-6">Our Services</h4>
        <ul className="space-y-3">
          <li>
            <Link href="/inquiry" className="text-gray-300 hover:text-white transition-colors text-sm">
              Online Booking
            </Link>
          </li>
          <li>
            <span className="text-gray-300 text-sm">Airport Transfers</span>
          </li>
          <li>
            <span className="text-gray-300 text-sm">24/7 Room Service</span>
          </li>
          <li>
            <span className="text-gray-300 text-sm">Business Center</span>
          </li>
          <li>
            <span className="text-gray-300 text-sm">Conference Facilities</span>
          </li>
          <li>
            <span className="text-gray-300 text-sm">Tour Arrangements</span>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-lodge-accent mt-0.5 flex-shrink-0" />
            <div className="text-sm text-gray-300">
              <p>123 Hospitality Avenue</p>
              <p>Harare CBD, Zimbabwe</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-lodge-accent flex-shrink-0" />
            <div className="text-sm">
              <a href="tel:+263123456789" className="text-gray-300 hover:text-white transition-colors">
                +263 123 456 789
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-lodge-accent flex-shrink-0" />
            <div className="text-sm">
              <a href="mailto:info@harrislodges.com" className="text-gray-300 hover:text-white transition-colors">
                info@harrislodges.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Clock className="w-5 h-5 text-lodge-accent mt-0.5 flex-shrink-0" />
            <div className="text-sm text-gray-300">
              <p>Reception: 24/7</p>
              <p>Support: 7AM - 10PM</p>
            </div>
          </div>
        </div>
        
        {/* WhatsApp */}
        <div className="mt-6">
          <a
            href="https://wa.me/263123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
  <div className="border-t border-gray-700">
    <div className="container-max section-padding py-6">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-sm text-gray-300">
          <p>&copy; {currentYear} Harris Lodges. All rights reserved.</p>
        </div>
        
        <div className="flex space-x-6 text-sm">
          <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
            Terms of Service
          </Link>
          <Link href="/sitemap" className="text-gray-300 hover:text-white transition-colors">
            Sitemap
          </Link>
        </div>
        
        <div className="text-sm text-gray-300">
          <p>Made with ❤️ in Zimbabwe</p>
        </div>
      </div>
    </div>
  </div>
  </div>
  </footer>
  )
}
export default Footer;