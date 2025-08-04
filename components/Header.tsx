// components/Header.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, ChevronDown, MapPin, Building } from 'lucide-react';
import { lodges } from '@/lib/lodge-types';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLodgesDropdownOpen, setIsLodgesDropdownOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Our Lodges', href: '/lodges', hasDropdown: true },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Reviews', href: '/testimonials' },
  ];

  const activeLodges = lodges.filter(lodge => lodge.status === 'active');

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
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsLodgesDropdownOpen(true)}
                    onMouseLeave={() => setIsLodgesDropdownOpen(false)}
                  >
                    <button className="flex items-center space-x-1 text-lodge-dark hover:text-lodge-primary transition-colors font-medium">
                      <span>{item.name}</span>
                      <ChevronDown size={16} className={`transition-transform ${isLodgesDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {isLodgesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
                        <div className="px-4 pb-3 border-b border-gray-200">
                          <h3 className="font-semibold text-lodge-primary text-sm">Our Lodge Locations</h3>
                          <p className="text-xs text-gray-600">Choose your preferred destination</p>
                        </div>
                        
                        <div className="py-2">
                          <Link
                            href="/lodges"
                            className="flex items-center px-4 py-2 text-sm text-lodge-dark hover:bg-lodge-neutral transition-colors"
                          >
                            <Building size={16} className="mr-3 text-lodge-primary" />
                            <div>
                              <div className="font-medium">All Lodges</div>
                              <div className="text-xs text-gray-600">View all locations</div>
                            </div>
                          </Link>
                          
                          <div className="border-t border-gray-200 my-2"></div>
                          
                          {activeLodges.map((lodge) => (
                            <Link
                              key={lodge.id}
                              href={`/lodges/${lodge.slug}`}
                              className="flex items-center px-4 py-2 text-sm text-lodge-dark hover:bg-lodge-neutral transition-colors"
                            >
                              <MapPin size={16} className="mr-3 text-lodge-secondary" />
                              <div>
                                <div className="font-medium">{lodge.name}</div>
                                <div className="text-xs text-gray-600">{lodge.location.city}, {lodge.location.region}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        
                        <div className="border-t border-gray-200 mt-2 pt-3 px-4">
                          <Link
                            href="/inquiry"
                            className="block text-center bg-lodge-primary text-white py-2 px-4 rounded text-sm font-medium hover:bg-lodge-dark transition-colors"
                          >
                            Make a Booking
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-lodge-dark hover:text-lodge-primary transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
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
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-lodge-dark hover:text-lodge-primary transition-colors font-medium block mb-2"
                      >
                        {item.name}
                      </Link>
                      <div className="ml-4 space-y-2">
                        {activeLodges.map((lodge) => (
                          <Link
                            key={lodge.id}
                            href={`/lodges/${lodge.slug}`}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center text-sm text-gray-600 hover:text-lodge-primary transition-colors"
                          >
                            <MapPin size={14} className="mr-2" />
                            <span>{lodge.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-lodge-dark hover:text-lodge-primary transition-colors font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
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