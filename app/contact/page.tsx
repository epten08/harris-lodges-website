// src/app/contact/page.tsx
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Harris Lodges. Find our contact information, location, and send us a message. We&apos;re here to help with your accommodation needs in Zimbabwe.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-lodge-neutral">
      {/* Header */}
      <section className="bg-lodge-primary text-white py-16">
        <div className="container-max section-padding">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              Contact Harris Lodges
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              We&apos;re here to help you with any questions about your stay or our services. 
              Get in touch with us today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-lodge-primary mb-8 font-serif">
                Get in Touch
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lodge-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lodge-dark mb-2">Address</h3>
                    <p className="text-gray-700">
                      123 Hospitality Avenue<br />
                      Harare Central Business District<br />
                      Harare, Zimbabwe
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lodge-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lodge-dark mb-2">Phone Numbers</h3>
                    <div className="space-y-1">
                      <p className="text-gray-700">
                        <a href="tel:+263123456789" className="hover:text-lodge-primary transition-colors">
                          +263 123 456 789 (Main)
                        </a>
                      </p>
                      <p className="text-gray-700">
                        <a href="tel:+263987654321" className="hover:text-lodge-primary transition-colors">
                          +263 987 654 321 (Bookings)
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lodge-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-lodge-dark" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lodge-dark mb-2">Email Addresses</h3>
                    <div className="space-y-1">
                      <p className="text-gray-700">
                        <a href="mailto:info@harrislodges.com" className="hover:text-lodge-primary transition-colors">
                          info@harrislodges.com
                        </a>
                      </p>
                      <p className="text-gray-700">
                        <a href="mailto:bookings@harrislodges.com" className="hover:text-lodge-primary transition-colors">
                          bookings@harrislodges.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lodge-dark mb-2">WhatsApp</h3>
                    <p className="text-gray-700 mb-2">For urgent bookings and quick responses</p>
                    <a
                      href="https://wa.me/263123456789"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <MessageCircle size={18} />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lodge-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lodge-dark mb-2">Operating Hours</h3>
                    <div className="text-gray-700 space-y-1">
                      <p><strong>Reception:</strong> 24 hours, 7 days a week</p>
                      <p><strong>Phone Support:</strong> 7:00 AM - 10:00 PM daily</p>
                      <p><strong>Email Response:</strong> Within 2-4 hours during business hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-semibold text-red-800 mb-2 flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency Contact
                </h3>
                <p className="text-red-700 mb-2">
                  For urgent matters outside business hours:
                </p>
                <a 
                  href="tel:+263777888999" 
                  className="text-red-800 font-semibold hover:text-red-600 transition-colors"
                >
                  +263 777 888 999
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-lodge-primary mb-4 font-serif">
              Find Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Harare, we&apos;re easily accessible from all major attractions and transport hubs.
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-lodge-primary" />
              <p className="text-lg font-semibold mb-2">Interactive Map</p>
              <p>Map integration coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}