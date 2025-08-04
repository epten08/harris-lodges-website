// lib/lodge-types.ts
export interface Lodge {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  location: {
    address: string;
    city: string;
    region: string;
    country: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  contact: {
    phone: string;
    email: string;
    whatsapp?: string;
    emergencyPhone?: string;
  };
  images: {
    hero: string;
    gallery: string[];
    featured: string;
  };
  amenities: string[];
  facilities: Facility[];
  rooms: LodgeRoom[];
  features: string[];
  rating: number;
  reviewCount: number;
  established?: string;
  status: 'active' | 'coming-soon' | 'maintenance';
  operatingHours: {
    reception: string;
    restaurant?: string;
    checkIn: string;
    checkOut: string;
  };
  policies: {
    cancellation: string;
    petPolicy?: string;
    smokingPolicy: string;
  };
}

export interface Facility {
  id: string;
  name: string;
  type: 'conference' | 'restaurant' | 'spa' | 'gym' | 'pool' | 'business' | 'recreation' | 'transport';
  description: string;
  capacity?: number;
  images?: string[];
  amenities?: string[];
  operatingHours?: string;
  bookingRequired?: boolean;
  pricing?: {
    hourly?: number;
    halfDay?: number;
    fullDay?: number;
    currency: string;
  };
}

export interface LodgeRoom extends Room {
  lodgeId: string;
  available: boolean;
  floor?: number;
  roomNumbers?: string[];
  view?: string;
  basePricing: {
    low: number;
    normal: number;
    peak: number;
    currency: string;
  };
}

export interface Room {
  id: string;
  name: string;
  type: 'single' | 'deluxe' | 'executive' | 'suite' | 'family' | 'conference';
  description: string;
  amenities: string[];
  images: string[];
  maxOccupancy: number;
  size?: number;
  bedConfiguration: string;
  features?: string[];
}

// Sample lodge data
export const lodges: Lodge[] = [
  {
    id: 'harris-lodge-harare',
    name: 'Harris Lodge Harare',
    slug: 'harare',
    description: 'Our flagship location in the heart of Zimbabwe\'s capital city, offering premium accommodation and comprehensive business facilities.',
    shortDescription: 'Premium accommodation in Zimbabwe\'s capital',
    location: {
      address: '123 Hospitality Avenue, Harare CBD',
      city: 'Harare',
      region: 'Harare Province',
      country: 'Zimbabwe',
      coordinates: { lat: -17.8252, lng: 31.0335 }
    },
    contact: {
      phone: '+263 4 123 4567',
      email: 'harare@harrislodges.com',
      whatsapp: '+263 77 123 4567',
      emergencyPhone: '+263 77 999 8888'
    },
    images: {
      hero: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      featured: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    amenities: ['24/7 Reception', 'Free WiFi', 'Free Parking', 'Airport Shuttle', 'Laundry Service', 'Room Service'],
    facilities: [
      {
        id: 'conference-center-harare',
        name: 'Executive Conference Center',
        type: 'conference',
        description: 'State-of-the-art conference facilities with capacity for up to 200 delegates',
        capacity: 200,
        amenities: ['Projector & Screen', 'Sound System', 'Air Conditioning', 'Catering Available', 'WiFi', 'Flipcharts'],
        operatingHours: '6:00 AM - 10:00 PM',
        bookingRequired: true,
        pricing: {
          hourly: 50,
          halfDay: 200,
          fullDay: 350,
          currency: 'USD'
        },
        images: ['https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80']
      },
      {
        id: 'restaurant-harare',
        name: 'Savanna Restaurant',
        type: 'restaurant',
        description: 'Fine dining restaurant serving authentic Zimbabwean and international cuisine',
        capacity: 80,
        operatingHours: '6:00 AM - 10:00 PM',
        amenities: ['Local Cuisine', 'International Menu', 'Private Dining', 'Bar Service', 'Outdoor Seating']
      },
      {
        id: 'business-center-harare',
        name: 'Business Center',
        type: 'business',
        description: 'Fully equipped business center with printing, scanning, and internet facilities',
        operatingHours: '24/7',
        amenities: ['Computers', 'Printing', 'Scanning', 'Fax', 'Meeting Rooms', 'Secretarial Services']
      }
    ],
    rooms: [
      {
        id: 'presidential-suite-harare',
        lodgeId: 'harris-lodge-harare',
        name: 'Presidential Suite',
        type: 'suite',
        description: 'Our most luxurious accommodation with panoramic city views',
        amenities: ['King Size Bed', 'Separate Living Room', 'Private Balcony', 'Butler Service', 'Mini Bar', 'Premium WiFi'],
        images: [
          'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        maxOccupancy: 2,
        size: 85,
        bedConfiguration: '1 King Bed',
        available: true,
        view: 'City Skyline',
        basePricing: { low: 180, normal: 220, peak: 280, currency: 'USD' }
      },
      {
        id: 'executive-suite-harare',
        lodgeId: 'harris-lodge-harare',
        name: 'Executive Suite',
        type: 'executive',
        description: 'Spacious suite perfect for business travelers',
        amenities: ['King Size Bed', 'Work Desk', 'Living Area', 'Garden View', 'Mini Bar', 'Premium WiFi'],
        images: [
          'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        maxOccupancy: 2,
        size: 60,
        bedConfiguration: '1 King Bed',
        available: true,
        view: 'Garden',
        basePricing: { low: 120, normal: 150, peak: 190, currency: 'USD' }
      }
    ],
    features: ['City Center Location', 'Conference Facilities', 'Business Center', 'Fine Dining'],
    rating: 4.8,
    reviewCount: 342,
    established: '2010',
    status: 'active',
    operatingHours: {
      reception: '24/7',
      restaurant: '6:00 AM - 10:00 PM',
      checkIn: '2:00 PM',
      checkOut: '11:00 AM'
    },
    policies: {
      cancellation: 'Free cancellation up to 24 hours before check-in',
      smokingPolicy: 'Non-smoking property',
      petPolicy: 'Pets allowed with prior arrangement'
    }
  },
  {
    id: 'harris-lodge-bulawayo',
    name: 'Harris Lodge Bulawayo',
    slug: 'bulawayo',
    description: 'Located in Zimbabwe\'s second-largest city, our Bulawayo lodge offers comfortable accommodation with easy access to Matobo National Park.',
    shortDescription: 'Gateway to Matobo National Park',
    location: {
      address: '45 Heritage Street, Bulawayo Central',
      city: 'Bulawayo',
      region: 'Bulawayo Province',
      country: 'Zimbabwe',
      coordinates: { lat: -20.1500, lng: 28.5833 }
    },
    contact: {
      phone: '+263 9 876 5432',
      email: 'bulawayo@harrislodges.com',
      whatsapp: '+263 77 876 5432',
      emergencyPhone: '+263 77 999 7777'
    },
    images: {
      hero: 'https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      featured: 'https://images.unsplash.com/photo-1631049421450-348ccd7f8949?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    amenities: ['24/7 Reception', 'Free WiFi', 'Free Parking', 'Tour Arrangements', 'Restaurant', 'Garden'],
    facilities: [
      {
        id: 'restaurant-bulawayo',
        name: 'Matobo Restaurant',
        type: 'restaurant',
        description: 'Traditional Zimbabwean cuisine with modern flair',
        capacity: 50,
        operatingHours: '6:00 AM - 9:00 PM',
        amenities: ['Local Specialties', 'Vegetarian Options', 'Garden Seating', 'Traditional Music']
      },
      {
        id: 'conference-bulawayo',
        name: 'Heritage Meeting Room',
        type: 'conference',
        description: 'Intimate meeting space perfect for small conferences',
        capacity: 30,
        amenities: ['Projector', 'WiFi', 'Air Conditioning', 'Catering Available'],
        operatingHours: '7:00 AM - 6:00 PM',
        bookingRequired: true,
        pricing: {
          hourly: 25,
          halfDay: 80,
          fullDay: 150,
          currency: 'USD'
        }
      }
    ],
    rooms: [
      {
        id: 'deluxe-king-bulawayo',
        lodgeId: 'harris-lodge-bulawayo',
        name: 'Deluxe King Room',
        type: 'deluxe',
        description: 'Comfortable king room with garden views',
        amenities: ['King Size Bed', 'Garden View', 'Work Desk', 'Free WiFi', 'Air Conditioning'],
        images: [
          'https://images.unsplash.com/photo-1631049421450-348ccd7f8949?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        maxOccupancy: 2,
        size: 40,
        bedConfiguration: '1 King Bed',
        available: true,
        view: 'Garden',
        basePricing: { low: 80, normal: 100, peak: 130, currency: 'USD' }
      }
    ],
    features: ['Historic Location', 'Garden Setting', 'Matobo Access', 'Cultural Tours'],
    rating: 4.6,
    reviewCount: 156,
    established: '2015',
    status: 'active',
    operatingHours: {
      reception: '6:00 AM - 10:00 PM',
      restaurant: '6:00 AM - 9:00 PM',
      checkIn: '2:00 PM',
      checkOut: '11:00 AM'
    },
    policies: {
      cancellation: 'Free cancellation up to 24 hours before check-in',
      smokingPolicy: 'Designated smoking areas only'
    }
  },
  {
    id: 'harris-lodge-victoria-falls',
    name: 'Harris Lodge Victoria Falls',
    slug: 'victoria-falls',
    description: 'Experience the majesty of Victoria Falls from our lodge, offering stunning views and adventure activities.',
    shortDescription: 'Adventure gateway to Victoria Falls',
    location: {
      address: '12 Falls View Road, Victoria Falls',
      city: 'Victoria Falls',
      region: 'Matabeleland North',
      country: 'Zimbabwe',
      coordinates: { lat: -17.9243, lng: 25.8572 }
    },
    contact: {
      phone: '+263 13 456 789',
      email: 'victoriafalls@harrislodges.com',
      whatsapp: '+263 77 456 789',
      emergencyPhone: '+263 77 999 6666'
    },
    images: {
      hero: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      featured: 'https://images.unsplash.com/photo-1631049035634-c04d68b1d1f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    amenities: ['Falls Views', 'Adventure Bookings', 'Free WiFi', 'Swimming Pool', 'Restaurant', 'Bar'],
    facilities: [
      {
        id: 'adventure-center-vf',
        name: 'Victoria Falls Adventure Center',
        type: 'recreation',
        description: 'Book thrilling adventure activities including bungee jumping, white water rafting, and helicopter tours',
        operatingHours: '6:00 AM - 6:00 PM',
        amenities: ['Activity Bookings', 'Equipment Rental', 'Professional Guides', 'Safety Briefings']
      },
      {
        id: 'pool-vf',
        name: 'Infinity Pool',
        type: 'pool',
        description: 'Stunning infinity pool overlooking the Zambezi River',
        operatingHours: '6:00 AM - 8:00 PM',
        amenities: ['Pool Bar', 'Sun Loungers', 'Towel Service', 'River Views']
      }
    ],
    rooms: [
      {
        id: 'falls-view-suite-vf',
        lodgeId: 'harris-lodge-victoria-falls',
        name: 'Falls View Suite',
        type: 'suite',
        description: 'Premium suite with direct views of Victoria Falls',
        amenities: ['King Size Bed', 'Falls View', 'Private Balcony', 'Mini Bar', 'Premium WiFi', 'Binoculars'],
        images: [
          'https://images.unsplash.com/photo-1631049035634-c04d68b1d1f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        maxOccupancy: 2,
        size: 55,
        bedConfiguration: '1 King Bed',
        available: true,
        view: 'Victoria Falls',
        basePricing: { low: 200, normal: 250, peak: 350, currency: 'USD' }
      }
    ],
    features: ['Victoria Falls Views', 'Adventure Activities', 'Infinity Pool', 'Zambezi River Access'],
    rating: 4.9,
    reviewCount: 289,
    established: '2018',
    status: 'active',
    operatingHours: {
      reception: '24/7',
      restaurant: '6:00 AM - 10:00 PM',
      checkIn: '2:00 PM',
      checkOut: '11:00 AM'
    },
    policies: {
      cancellation: 'Free cancellation up to 48 hours before check-in',
      smokingPolicy: 'Non-smoking property'
    }
  }
];

// Helper functions
export const getLodgeBySlug = (slug: string): Lodge | undefined => {
  return lodges.find(lodge => lodge.slug === slug);
};

export const getLodgesByStatus = (status: Lodge['status']): Lodge[] => {
  return lodges.filter(lodge => lodge.status === status);
};

export const getFacilitiesByType = (lodge: Lodge, type: Facility['type']): Facility[] => {
  return lodge.facilities.filter(facility => facility.type === type);
};

export const getRoomsByType = (lodge: Lodge, type: LodgeRoom['type']): LodgeRoom[] => {
  return lodge.rooms.filter(room => room.type === type);
};