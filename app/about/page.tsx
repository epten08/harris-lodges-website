// src/app/about/page.tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Clock, Phone, Mail, Users, Award, Heart, Shield, Leaf, Star, Globe, Coffee } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Harris Lodges - Authentic Zimbabwean Hospitality',
  description: 'Discover Harris Lodges story, our commitment to exceptional service, and what makes us Zimbabwe\'s premier accommodation choice. Learn about our values, team, and dedication to authentic hospitality.',
  keywords: ['Harris Lodges history', 'Zimbabwe hospitality', 'about us', 'hotel story', 'Zimbabwean culture', 'accommodation philosophy'],
};

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Authentic Hospitality',
      description: 'We embody the spirit of Ubuntu - the interconnectedness of humanity. Every guest is treated as family, experiencing genuine Zimbabwean warmth that creates lasting memories.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Award,
      title: 'Excellence in Service',
      description: 'Our pursuit of excellence is unwavering. From the moment you arrive until you depart, every detail is crafted to exceed expectations and deliver unforgettable experiences.',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Users,
      title: 'Community Partnership',
      description: 'We are deeply rooted in our community, supporting local artisans, suppliers, and initiatives. Your stay contributes to the prosperity of Zimbabwe and its people.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'Built on a foundation of honesty and reliability, we maintain the highest ethical standards in all our operations, ensuring transparency and fairness.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Leaf,
      title: 'Environmental Stewardship',
      description: 'We protect Zimbabwe\'s natural beauty through sustainable practices, eco-friendly initiatives, and responsible tourism that preserves our heritage.',
      color: 'bg-emerald-100 text-emerald-600'
    },
    {
      icon: Globe,
      title: 'Cultural Ambassador',
      description: 'We proudly showcase Zimbabwe\'s rich culture, traditions, and natural wonders, helping guests discover the true essence of our beautiful nation.',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const milestones = [
    {
      year: '2010',
      title: 'Foundation',
      description: 'Harris Lodges was established with a vision to redefine hospitality in Zimbabwe, starting with just 12 rooms and a dream.',
      icon: '🏗️'
    },
    {
      year: '2013',
      title: 'First Expansion',
      description: 'Added 20 more rooms and introduced our signature restaurant, featuring authentic Zimbabwean cuisine alongside international dishes.',
      icon: '🏨'
    },
    {
      year: '2016',
      title: 'Recognition',
      description: 'Received the Zimbabwe Tourism Authority\'s Excellence in Hospitality Award, recognizing our commitment to quality service.',
      icon: '🏆'
    },
    {
      year: '2018',
      title: 'Sustainability Initiative',
      description: 'Launched our green hospitality program, implementing solar power, water conservation, and waste reduction measures.',
      icon: '🌱'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Adapted to changing times with contactless check-in, enhanced digital services, and improved health safety protocols.',
      icon: '💻'
    },
    {
      year: '2024',
      title: 'Present Day',
      description: 'Now serving thousands of guests annually, we continue to evolve while maintaining our core values of authentic Zimbabwean hospitality.',
      icon: '⭐'
    }
  ];

  const teamMembers = [
    {
      name: 'Tendai Mukamuri',
      position: 'General Manager',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'With over 20 years in Zimbabwe\'s hospitality industry, Tendai brings passion and expertise to ensuring every guest experience exceeds expectations.',
      achievements: ['Zimbabwe Hotel Association Board Member', 'Hospitality Excellence Award 2023', 'Tourism Industry Leadership Certificate'],
      quote: 'Every guest is an ambassador for Zimbabwe. We ensure they leave with beautiful memories and stories to share.'
    },
    {
      name: 'Chef Praise Chivasa',
      position: 'Executive Chef',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'A culinary artist who masterfully blends traditional Zimbabwean flavors with international cuisine, creating memorable dining experiences.',
      achievements: ['Culinary Institute of Zimbabwe Graduate', 'Best Hotel Chef Award 2022', 'Sustainable Cooking Advocate'],
      quote: 'Food is culture. Through our dishes, guests taste the soul of Zimbabwe and understand our heritage.'
    },
    {
      name: 'Grace Sibanda',
      position: 'Guest Relations Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'The heart of our guest experience, Grace ensures every visitor feels the warmth of Zimbabwean hospitality from arrival to departure.',
      achievements: ['Customer Service Excellence Certification', 'Tourism Ambassador Award', 'Hospitality Management Diploma'],
      quote: 'Hospitality is not just a job, it\'s a calling. We create homes away from home for every guest.'
    },
    {
      name: 'Nyasha Moyo',
      position: 'Operations Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Ensuring seamless operations and continuous improvements, Nyasha keeps Harris Lodges running smoothly behind the scenes.',
      achievements: ['Operations Management MBA', 'Efficiency Innovation Award', 'Sustainability Champion'],
      quote: 'Excellence is in the details. Every system, every process is designed to enhance our guests\' experience.'
    },
    {
      name: 'Dr. Chipo Mutasa',
      position: 'Cultural Consultant',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'A cultural historian who helps us authentically represent Zimbabwean heritage while ensuring respectful and meaningful cultural experiences.',
      achievements: ['PhD in African Studies', 'Cultural Heritage Preservation Award', 'Published Author on Zimbabwean Culture'],
      quote: 'Culture is our identity. We share Zimbabwe\'s rich heritage with the world through authentic experiences.'
    },
    {
      name: 'Martin Chiduku',
      position: 'Maintenance & Security Manager',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Keeping our facilities pristine and guests secure, Martin\'s attention to detail ensures a safe and comfortable environment.',
      achievements: ['Facility Management Certification', 'Security Systems Expert', 'Safety Excellence Award'],
      quote: 'A secure and well-maintained environment is the foundation of great hospitality experiences.'
    }
  ];

  const stats = [
    { number: '14', label: 'Years of Excellence', description: 'Serving guests since 2010' },
    { number: '50,000+', label: 'Happy Guests', description: 'From over 80 countries' },
    { number: '4.8★', label: 'Average Rating', description: 'Consistently high reviews' },
    { number: '95%', label: 'Return Rate', description: 'Guests who return or recommend' }
  ];

  return (
    <div className="min-h-screen bg-lodge-neutral">
      {/* Hero Section */}
      <section className="relative bg-lodge-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Harris Lodges - About Us"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">
              Welcome to Harris Lodges
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Where Zimbabwean Heritage Meets Modern Hospitality
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
                🏆 Award-Winning Service
              </span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
                🌍 Cultural Ambassador
              </span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm">
                🌱 Sustainable Tourism
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-3xl md:text-4xl font-bold text-lodge-primary mb-2 group-hover:text-lodge-secondary transition-colors">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-lodge-dark mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-lodge-neutral">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-lodge-primary mb-6 font-serif">
                Our Story: A Journey of Passion
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Harris Lodges was born from a simple yet powerful vision: to create a place where 
                  the world could experience the true heart of Zimbabwe. Founded in 2010 by the Harris 
                  family, our journey began with a deep love for our country and an unwavering belief 
                  in the power of authentic hospitality.
                </p>
                <p>
                  What started as a modest 12-room establishment has grown into Zimbabwe&apos;s premier 
                  boutique accommodation, but our core values remain unchanged. We believe that every 
                  guest deserves to feel the warmth of Ubuntu - the African philosophy that we are 
                  all interconnected and that our humanity is expressed through our relationships with others.
                </p>
                <p>
                  Today, Harris Lodges stands as more than just accommodation; we are cultural ambassadors, 
                  environmental stewards, and community partners. Every room tells a story, every meal 
                  shares our heritage, and every interaction reflects the genuine spirit of Zimbabwe.
                </p>
                <div className="bg-lodge-accent bg-opacity-20 p-6 rounded-lg border-l-4 border-lodge-accent">
                  <p className="italic text-lodge-dark font-medium">
                    &quot;Our mission is not just to provide accommodation, but to create a bridge between 
                    cultures, where every guest becomes a friend and every stay becomes a cherished memory.&quot;
                  </p>
                  <p className="text-sm text-lodge-primary mt-2 font-semibold">
                    — The Harris Family, Founders
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-4">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Harris Lodges Heritage"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Zimbabwean Culture"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Local Community"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-lodge-primary mb-4 font-serif">
              Our Core Values
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              These principles guide every decision we make and every service we provide, 
              ensuring that Harris Lodges remains true to its mission of exceptional hospitality.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-lodge-primary">
                  <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-lodge-dark mb-4 group-hover:text-lodge-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Journey - Timeline */}
      <section className="py-16 bg-lodge-neutral">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-lodge-primary mb-4 font-serif">
              Our Journey Through Time
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              From humble beginnings to becoming Zimbabwe&apos;s premier boutique accommodation
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-lodge-primary h-full hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="flex items-center mb-4">
                        <span className="text-2xl mr-3">{milestone.icon}</span>
                        <div>
                          <h3 className="text-xl font-bold text-lodge-primary">{milestone.year}</h3>
                          <h4 className="text-lg font-semibold text-lodge-dark">{milestone.title}</h4>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-4 h-4 bg-lodge-accent rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-lodge-primary mb-4 font-serif">
              Meet Our Exceptional Team
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              The passionate professionals who make Harris Lodges extraordinary. Each team member 
              brings unique expertise and unwavering commitment to creating memorable experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-lodge-accent font-medium">{member.position}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-lodge-dark mb-2 text-sm">Key Achievements:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {member.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center">
                          <Star size={12} className="text-lodge-accent mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <blockquote className="bg-lodge-neutral p-4 rounded-lg border-l-4 border-lodge-accent">
                    <p className="text-sm italic text-lodge-dark">&quot;{member.quote}&quot;</p>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16 bg-lodge-neutral">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-lodge-primary mb-8 font-serif">
                Visit Us in the Heart of Zimbabwe
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-lodge-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-lodge-secondary transition-colors">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lodge-dark mb-2">Our Prime Location</h3>
                    <p className="text-gray-700 leading-relaxed">
                      123 Hospitality Avenue<br />
                      Harare Central Business District<br />
                      Harare, Zimbabwe<br />
                      <span className="text-sm text-lodge-primary">Easily accessible from all major attractions</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-lodge-secondary rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-green-700 transition-colors">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lodge-dark mb-2">Contact Numbers</h3>
                    <div className="space-y-1">
                      <p className="text-gray-700">
                        <a href="tel:+263123456789" className="hover:text-lodge-primary transition-colors">
                          +263 123 456 789 (Main Reception)
                        </a>
                      </p>
                      <p className="text-gray-700">
                        <a href="tel:+263987654321" className="hover:text-lodge-primary transition-colors">
                          +263 987 654 321 (Reservations)
                        </a>
                      </p>
                      <p className="text-gray-700">
                        <a href="tel:+263777888999" className="hover:text-lodge-primary transition-colors">
                          +263 777 888 999 (24/7 Emergency)
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-lodge-accent rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-600 transition-colors">
                    <Mail className="w-6 h-6 text-lodge-dark group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lodge-dark mb-2">Email Addresses</h3>
                    <div className="space-y-1">
                      <p className="text-gray-700">
                        <a href="mailto:info@harrislodges.com" className="hover:text-lodge-primary transition-colors">
                          info@harrislodges.com (General Inquiries)
                        </a>
                      </p>
                      <p className="text-gray-700">
                        <a href="mailto:bookings@harrislodges.com" className="hover:text-lodge-primary transition-colors">
                          bookings@harrislodges.com (Reservations)
                        </a>
                      </p>
                      <p className="text-gray-700">
                        <a href="mailto:events@harrislodges.com" className="hover:text-lodge-primary transition-colors">
                          events@harrislodges.com (Special Events)
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-lodge-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-lodge-secondary transition-colors">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lodge-dark mb-2">Operating Hours</h3>
                    <div className="text-gray-700 space-y-1">
                      <p><Coffee className="inline w-4 h-4 mr-2 text-lodge-accent" /><strong>Reception:</strong> 24 hours, 7 days a week</p>
                      <p><span className="inline-block w-4 h-4 mr-2"></span><strong>Restaurant:</strong> 6:00 AM - 10:00 PM daily</p>
                      <p><span className="inline-block w-4 h-4 mr-2"></span><strong>Check-in:</strong> 2:00 PM (Early check-in available)</p>
                      <p><span className="inline-block w-4 h-4 mr-2"></span><strong>Check-out:</strong> 11:00 AM (Late check-out available)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="grid grid-cols-2 gap-4">
                
                <a  href="https://wa.me/263123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                
                  ><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center space-x-2 bg-lodge-primary text-white px-4 py-3 rounded-lg hover:bg-lodge-dark transition-colors text-sm font-medium"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact Form</span>
                </Link>
              </div>
            </div>

            {/* Map and Directions */}
            <div>
              <h2 className="text-3xl font-bold text-lodge-primary mb-8 font-serif">
Find Us on the Map
</h2>
{/* Map Placeholder */}
          <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center mb-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-lodge-primary to-lodge-secondary opacity-10"></div>
            <div className="text-center text-gray-600 z-10">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-lodge-primary" />
              <p className="text-lg font-medium mb-2">Harris Lodges</p>
              <p className="text-sm mb-4">
                123 Hospitality Avenue<br />
                Harare CBD, Zimbabwe
              </p>
              
               <a href="https://maps.google.com/?q=Harris+Lodges+Harare+Zimbabwe"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Getting Here */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-lodge-dark mb-4">How to Reach Us</h3>
            
            <div className="grid gap-4">
              <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">✈️</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lodge-dark mb-1">From Airport</h4>
                  <p className="text-sm text-gray-600">
                    25 minutes from Robert Gabriel Mugabe International Airport. 
                    Airport shuttle available (advance booking required).
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🚌</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lodge-dark mb-1">Public Transport</h4>
                  <p className="text-sm text-gray-600">
                    Multiple bus routes serve the CBD. Closest stop: 2 minutes walk. 
                    ZUPCO buses and kombis available.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🚗</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lodge-dark mb-1">By Private Car</h4>
                  <p className="text-sm text-gray-600">
                    Free secure parking available. GPS Coordinates: -17.8252, 31.0335. 
                    Main highway access.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🚕</span>
                </div>
                <div>
                  <h4 className="font-semibold text-lodge-dark mb-1">Taxi Services</h4>
                  <p className="text-sm text-gray-600">
                    Uber and Bolt available. Local taxi services. We can arrange 
                    pickups from any location in Harare.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Sustainability & Community */}
  <section className="py-16 bg-white">
    <div className="container-max section-padding">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-lodge-primary mb-4 font-serif">
          Our Commitment to Zimbabwe
        </h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Harris Lodges is deeply committed to sustainable tourism and community development, 
          ensuring that our success contributes to Zimbabwe&apos;s prosperity.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="text-center group">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
            <Leaf className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-lodge-dark mb-4">Environmental Stewardship</h3>
          <ul className="text-gray-600 text-sm space-y-2 text-left">
            <li>✓ Solar power systems reducing carbon footprint</li>
            <li>✓ Water conservation and recycling programs</li>
            <li>✓ Waste reduction and recycling initiatives</li>
            <li>✓ Native plant landscaping and gardening</li>
            <li>✓ Energy-efficient lighting and appliances</li>
          </ul>
        </div>
        
        <div className="text-center group">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
            <Users className="w-10 h-10 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-lodge-dark mb-4">Community Partnership</h3>
          <ul className="text-gray-600 text-sm space-y-2 text-left">
            <li>✓ Local supplier preference program</li>
            <li>✓ Employment opportunities for locals</li>
            <li>✓ Skills development and training programs</li>
            <li>✓ Support for local schools and charities</li>
            <li>✓ Cultural preservation initiatives</li>
          </ul>
        </div>
        
        <div className="text-center group">
          <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
            <Globe className="w-10 h-10 text-purple-600" />
          </div>
          <h3 className="text-xl font-semibold text-lodge-dark mb-4">Cultural Ambassador</h3>
          <ul className="text-gray-600 text-sm space-y-2 text-left">
            <li>✓ Authentic Zimbabwean cultural experiences</li>
            <li>✓ Local art and craft showcases</li>
            <li>✓ Traditional music and dance events</li>
            <li>✓ Historical and cultural education programs</li>
            <li>✓ Promotion of Zimbabwe tourism globally</li>
          </ul>
        </div>
      </div>

      {/* Awards and Recognition */}
      <div className="bg-lodge-neutral p-8 rounded-lg">
        <h3 className="text-2xl font-bold text-lodge-primary mb-6 text-center font-serif">
          Awards & Recognition
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { year: '2023', award: 'Zimbabwe Tourism Excellence Award', organization: 'Zimbabwe Tourism Authority' },
            { year: '2022', award: 'Best Boutique Hotel', organization: 'Southern Africa Travel Awards' },
            { year: '2021', award: 'Sustainability Champion', organization: 'Green Tourism Zimbabwe' },
            { year: '2020', award: 'Customer Service Excellence', organization: 'Hospitality Association of Zimbabwe' }
          ].map((recognition, index) => (
            <div key={index} className="text-center bg-white p-4 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-lodge-accent rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-lodge-dark" />
              </div>
              <div className="text-lg font-bold text-lodge-primary mb-1">{recognition.year}</div>
              <div className="text-sm font-semibold text-lodge-dark mb-1">{recognition.award}</div>
              <div className="text-xs text-gray-600">{recognition.organization}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* Call to Action */}
  <section className="py-16 bg-lodge-primary text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
    <div className="absolute inset-0">
      <Image
        src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        alt="Harris Lodges Experience"
        fill
        className="object-cover opacity-30"
      />
    </div>
    <div className="relative container-max section-padding text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
        Experience Harris Lodges Today
      </h2>
      <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
        Join thousands of satisfied guests who have discovered the magic of authentic 
        Zimbabwean hospitality. Your unforgettable experience awaits.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <Link href="/inquiry" className="bg-white text-lodge-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
          Book Your Stay
        </Link>
        <Link href="/rooms" className="border-2 border-white text-white hover:bg-white hover:text-lodge-primary px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
          View Our Rooms
        </Link>
        <Link href="/contact" className="border-2 border-lodge-accent text-lodge-accent hover:bg-lodge-accent hover:text-lodge-dark px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
          Get in Touch
        </Link>
      </div>
      <div className="text-sm opacity-90">
        <p>
          ✨ Book directly with us for exclusive perks: complimentary airport pickup, 
          room upgrades, and late checkout (subject to availability)
        </p>
      </div>
    </div>
  </section>

  {/* Quick Links */}
  <section className="py-8 bg-lodge-dark text-white">
    <div className="container-max section-padding">
      <div className="flex flex-wrap justify-center gap-6 text-sm">
        <Link href="/gallery" className="hover:text-lodge-accent transition-colors">📸 Photo Gallery</Link>
        <Link href="/testimonials" className="hover:text-lodge-accent transition-colors">⭐ Guest Reviews</Link>
        <Link href="/contact" className="hover:text-lodge-accent transition-colors">📞 Contact Us</Link>
        <a href="https://wa.me/263123456789" target="_blank" rel="noopener noreferrer" className="hover:text-lodge-accent transition-colors">💬 WhatsApp</a>
        <a href="tel:+263123456789" className="hover:text-lodge-accent transition-colors">📱 Call Now</a>
      </div>
    </div>
  </section>
</div>
  );
}