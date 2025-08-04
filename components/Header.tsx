// src/components/Header.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Rooms', href: '/rooms' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Testimonials', href: '/testimonials' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-max section-padding">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-lodge-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-lodge-primary">Harris Lodges</h1>
              <p className="text-xs text-gray-600">Zimbabwe Hospitality</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lodge-dark hover:text-lodge-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+263123456789"
              className="hidden sm:flex items-center space-x-2 text-lodge-secondary hover:text-green-700 transition-colors"
            >
              <Phone size={18} />
              <span className="font-medium">+263 123 456 789</span>
            </a>
            
            <Link
              href="/inquiry"
              className="hidden sm:block btn-primary text-sm"
            >
              Book Now
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lodge-dark hover:text-lodge-primary transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <a
                  href="tel:+263123456789"
                  className="flex items-center space-x-2 text-lodge-secondary mb-4"
                >
                  <Phone size={18} />
                  <span>+263 123 456 789</span>
                </a>
                <Link
                  href="/inquiry"
                  onClick={() => setIsMenuOpen(false)}
                  className="block btn-primary text-center"
                >
                  Book Now
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;