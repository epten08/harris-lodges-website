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
  type: 'standard' | 'deluxe' | 'executive' | 'suite' | 'family' | 'conference';
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
    id: 'harris-executive',
    name: 'Harris Executive',
    slug: 'executive',
    description: 'Our flagship location in the city of Kings and Queens, offering premium accommodation and comprehensive business facilities.',
    shortDescription: 'Premium accommodation in Bulawayo',
    location: {
      address: '104 J. Tongogara Str Btwn 10 & 11 Ave, Bulawayo CBD',
      city: 'Bulawayo',
      region: 'Bulawayo Province',
      country: 'Zimbabwe',
      coordinates: { lat: -20.15939, lng: 28.58697 }
    },
    contact: {
      phone: '+263 772 667 410',
      email: 'theharrisguesthouse@gmail.com',
      whatsapp: '+263 772 667 410',
      emergencyPhone: '+263 719 667 410'
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
    amenities: ['24/7 Reception', 'Dstv & WiFi', 'Secure Parking','Dining', 'Affordable'],
    facilities: [
      {
        id: 'conference-center-bulawayo',
        name: 'Executive Conference Center',
        type: 'conference',
        description: 'State-of-the-art conference facilities with capacity for up to 100 delegates',
        capacity: 100,
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
        id: 'restaurant-bulawayo',
        name: 'Savanna Restaurant',
        type: 'restaurant',
        description: 'Fine dining restaurant serving authentic Zimbabwean and international cuisine',
        capacity: 80,
        operatingHours: '6:00 AM - 10:00 PM',
        amenities: ['Local Cuisine', 'International Menu', 'Private Dining', 'Bar Service', 'Outdoor Seating']
      }
    ],
    rooms: [
      {
        id: 'standard-room-executive',
        lodgeId: 'harris-executive',
        name: 'Standard Room',
        type: 'standard',
        description: 'Our most luxurious accommodation with panoramic city views',
        amenities: ['King Size Bed', 'Work Desk', 'Living Area', 'Garden View', 'Mini Bar', 'Premium WiFi'],
        images: [
          'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        maxOccupancy: 2,
        size: 85,
        bedConfiguration: '1 King Bed',
        available: true,
        view: 'Garden',
        basePricing: { low: 40, normal: 50, peak: 60, currency: 'USD' }
      },
       {
        id: 'executive-room-executive',
        lodgeId: 'harris-executive',
        name: 'Executive Room',
        type: 'executive',
        description: 'Our most luxurious accommodation with panoramic city views',
        amenities: ['King Size Bed', 'Work Desk', 'Living Area', 'Garden View', 'Mini Bar', 'Premium WiFi'],
        images: [
          'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        maxOccupancy: 2,
        size: 85,
        bedConfiguration: '1 King Bed',
        available: true,
        view: 'Garden',
        basePricing: { low: 50, normal: 60, peak: 70, currency: 'USD' }
      },
        {
        id: 'deluxe-room-executive',
        lodgeId: 'harris-executive',
        name: 'Deluxe Room',
        type: 'deluxe',
        description: 'Our most luxurious accommodation with panoramic city views',
        amenities: ['King Size Bed', 'Work Desk', 'Living Area', 'Garden View', 'Mini Bar', 'Premium WiFi'],
        images: [
          'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        maxOccupancy: 2,
        size: 85,
        bedConfiguration: '1 King Bed',
        available: true,
        view: 'Garden',
        basePricing: { low: 60, normal: 70, peak: 80, currency: 'USD' }
      },
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
      smokingPolicy: 'Non-smoking property'
    }
  },
  {
    id: 'prime-lodge-bulawayo',
    name: 'Prime Lodge',
    slug: 'prime-lodge',
    description: 'Located in Zimbabwe\'s second-largest city, our Prime lodge offers comfortable accommodation with easy access to Main Roads.',
    shortDescription: 'Access To Main Roads',
    location: {
      address: '27 Lynden JMN Nkomo Str & Corner First Ave, Bulawayo',
      city: 'Bulawayo',
      region: 'Bulawayo Province',
      country: 'Zimbabwe',
      coordinates: { lat: -20.1500, lng: 28.5833 }
    },
   contact: {
      phone: '+263 772 667 410',
      email: 'theharrisguesthouse@gmail.com',
      whatsapp: '+263 772 667 410',
      emergencyPhone: '+263 719 667 410'
    },
    images: {
      hero: 'https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      featured: 'https://images.unsplash.com/photo-1631049421450-348ccd7f8949?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
   amenities: ['24/7 Reception', 'Dstv & WiFi', 'Secure Parking','Dining', 'Affordable'],
    facilities: [
      {
        id: 'conference-center-bulawayo',
        name: 'Executive Conference Center',
        type: 'conference',
        description: 'State-of-the-art conference facilities with capacity for up to 100 delegates',
        capacity: 100,
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
    features: ['City Center Location', 'Conference Facilities', 'Business Center', 'Fine Dining'],
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
    id: 'harris-romney-park',
    name: 'Harris Romney Park',
    slug: 'romney-park',
    description: 'Located in the heart of Bulawayo CBD, offering convenient access to shopping and business districts with modern accommodation.',
    shortDescription: 'Central CBD location with modern facilities',
    location: {
      address: '7 Nicholson Road, Romney Park',
      city: 'Bulawayo',
      region: 'Bulawayo Province',
      country: 'Zimbabwe',
      coordinates: { lat: -20.1478, lng: 28.5892 }
    },
    contact: {
      phone: '+263 772 667 410',
      email: 'central@harrislodges.co.zw',
      whatsapp: '+263 772 667 410'
    },
    images: {
      hero: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      featured: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    amenities: ['24/7 Reception', 'Free WiFi', 'Secure Parking', 'Laundry Service'],
    facilities: [
      {
        id: 'restaurant-central',
        name: 'City Bistro',
        type: 'restaurant',
        description: 'Casual dining with local and continental dishes',
        capacity: 40,
        operatingHours: '7:00 AM - 9:00 PM',
        amenities: ['Local Cuisine', 'Continental Menu', 'Takeaway Service']
      }
    ],
    rooms: [
      {
        id: 'standard-central',
        lodgeId: 'harris-romney-park',
        name: 'Standard Room',
        type: 'standard',
        description: 'Comfortable standard room with city views',
        amenities: ['Queen Bed', 'Work Desk', 'Free WiFi', 'Air Conditioning', 'City View'],
        images: ['https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
        maxOccupancy: 2,
        size: 25,
        bedConfiguration: '1 Queen Bed',
        available: true,
        view: 'City',
        basePricing: { low: 35, normal: 45, peak: 55, currency: 'USD' }
      },
      {
        id: 'executive-central',
        lodgeId: 'harris-romney-park',
        name: 'Executive Room',
        type: 'executive',
        description: 'Spacious executive room with premium amenities',
        amenities: ['King Bed', 'Work Desk', 'Mini Fridge', 'Premium WiFi', 'Coffee Machine', 'City View'],
        images: ['https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
        maxOccupancy: 2,
        size: 35,
        bedConfiguration: '1 King Bed',
        available: true,
        view: 'City',
        basePricing: { low: 55, normal: 65, peak: 75, currency: 'USD' }
      }
    ],
    features: ['Central Location', 'Shopping Access', 'Business District'],
    rating: 4.2,
    reviewCount: 89,
    established: '2018',
    status: 'active',
    operatingHours: {
      reception: '24/7',
      restaurant: '7:00 AM - 9:00 PM',
      checkIn: '2:00 PM',
      checkOut: '11:00 AM'
    },
    policies: {
      cancellation: 'Free cancellation up to 48 hours before check-in',
      smokingPolicy: 'Non-smoking property'
    }
  },
  {
    id: 'zim-harris',
    name: 'Zim Harris',
    slug: 'zim-harris',
    description: 'Peaceful lodge in Suburbs near CBD, offering quiet accommodation with easy access to the city center and local attractions.',
    shortDescription: 'Quiet suburban location near CBD',
    location: {
      address: '70 Park Road, Suburbs, Bulawayo',
      city: 'Bulawayo',
      region: 'Bulawayo Province',
      country: 'Zimbabwe',
      coordinates: { lat: -20.1235, lng: 28.6045 }
    },
    contact: {
      phone: '+263 772 667 410',
      email: 'suburban@harrislodges.co.zw',
      whatsapp: '+263 772 667 410'
    },
    images: {
      hero: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      featured: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    amenities: ['Free WiFi', 'Parking', 'Garden Area', 'Quiet Location'],
    facilities: [],
    rooms: [
      {
        id: 'deluxe-suburban',
        lodgeId: 'zim-harris',
        name: 'Deluxe Room',
        type: 'deluxe',
        description: 'Spacious deluxe room with garden views',
        amenities: ['King Bed', 'Garden View', 'Work Area', 'Free WiFi', 'Mini Fridge'],
        images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
        maxOccupancy: 2,
        size: 40,
        bedConfiguration: '1 King Bed',
        available: true,
        view: 'Garden',
        basePricing: { low: 45, normal: 55, peak: 65, currency: 'USD' }
      }
    ],
    features: ['Quiet Environment', 'Garden Setting', 'Near CBD'],
    rating: 4.5,
    reviewCount: 67,
    established: '2019',
    status: 'active',
    operatingHours: {
      reception: '7:00 AM - 10:00 PM',
      checkIn: '2:00 PM',
      checkOut: '10:00 AM'
    },
    policies: {
      cancellation: 'Free cancellation up to 24 hours before check-in',
      smokingPolicy: 'Smoking allowed in designated outdoor areas'
    }
  },
  {
    id: 'harris-northend',
    name: 'Harris Northend Lodge',
    slug: 'northend',
    description: 'Professional accommodation designed for business travelers, located near government offices and commercial centers in Bulawayo CBD.',
    shortDescription: 'Business-focused lodge near government offices',
    location: {
      address: '3 Harris Road, Northend,Bulawayo',
      city: 'Bulawayo',
      region: 'Bulawayo Province',
      country: 'Zimbabwe',
      coordinates: { lat: -20.1523, lng: 28.5823 }
    },
    contact: {
      phone: '+263 772 667 410',
      email: 'business@harrislodges.co.zw',
      whatsapp: '+263 772 667 410',
      emergencyPhone: '+263 719 667 410'
    },
    images: {
      hero: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      featured: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    amenities: ['Business Center', '24/7 Reception', 'High-Speed WiFi', 'Meeting Rooms', 'Secure Parking'],
    facilities: [
      {
        id: 'conference-business',
        name: 'Professional Conference Room',
        type: 'conference',
        description: 'Modern conference room ideal for business meetings and small seminars',
        capacity: 50,
        amenities: ['Video Conferencing', 'Projector', 'Whiteboard', 'WiFi', 'Catering Available'],
        operatingHours: '7:00 AM - 9:00 PM',
        bookingRequired: true,
        pricing: {
          hourly: 30,
          halfDay: 120,
          fullDay: 200,
          currency: 'USD'
        }
      }
    ],
    rooms: [
      {
        id: 'standard-business',
        lodgeId: 'harris-northend',
        name: 'Standard Room',
        type: 'standard',
        description: 'Efficient standard room with work facilities',
        amenities: ['Twin Beds', 'Large Work Desk', 'Business WiFi', 'Phone Line'],
        images: ['https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
        maxOccupancy: 2,
        size: 28,
        bedConfiguration: '2 Twin Beds',
        available: true,
        basePricing: { low: 40, normal: 50, peak: 60, currency: 'USD' }
      },
      {
        id: 'executive-business',
        lodgeId: 'harris-northend',
        name: 'Executive Room',
        type: 'executive',
        description: 'Premium room with enhanced business amenities',
        amenities: ['King Bed', 'Executive Desk', 'Mini Bar', 'Coffee Machine', 'Premium WiFi', 'Printer Access'],
        images: ['https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
        maxOccupancy: 2,
        size: 38,
        bedConfiguration: '1 King Bed',
        available: true,
        basePricing: { low: 65, normal: 75, peak: 85, currency: 'USD' }
      },
      {
        id: 'deluxe-business',
        lodgeId: 'harris-northend',
        name: 'Deluxe Suite',
        type: 'deluxe',
        description: 'Luxury suite with separate living area for business entertainment',
        amenities: ['King Bed', 'Living Area', 'Dining Space', 'Executive Desk', 'Mini Bar', 'Premium WiFi', 'City View'],
        images: ['https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
        maxOccupancy: 3,
        size: 55,
        bedConfiguration: '1 King Bed + Sofa Bed',
        available: true,
        view: 'City',
        basePricing: { low: 85, normal: 100, peak: 120, currency: 'USD' }
      }
    ],
    features: ['Government District', 'Business Center', 'Meeting Facilities', 'Professional Service'],
    rating: 4.6,
    reviewCount: 234,
    established: '2012',
    status: 'active',
    operatingHours: {
      reception: '24/7',
      checkIn: '1:00 PM',
      checkOut: '12:00 PM'
    },
    policies: {
      cancellation: 'Free cancellation up to 48 hours before check-in',
      smokingPolicy: 'Non-smoking property'
    }
  },
  {
    id: 'silver-sands-lodge',
    name: 'Silver Sands Lodge',
    slug: 'silver-sands',
    description: 'Affordable accommodation in Bulawayo with essential amenities, perfect for budget-conscious travelers visiting the city.',
    shortDescription: 'Affordable lodging with essential amenities',
    location: {
      address: '22 Forbes Avenue,Northend, Bulawayo',
      city: 'Bulawayo',
      region: 'Bulawayo Province',
      country: 'Zimbabwe',
      coordinates: { lat: -20.1567, lng: 28.5756 }
    },
    contact: {
      phone: '+263 772 667 410',
      email: 'budget@harrislodges.co.zw',
      whatsapp: '+263 772 667 410'
    },
    images: {
      hero: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      featured: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    amenities: ['Free WiFi', 'Parking', 'Reception Desk'],
    facilities: [],
    rooms: [
      {
        id: 'standard-budget',
        lodgeId: 'silver-sands-lodge',
        name: 'Standard Room',
        type: 'standard',
        description: 'Simple, clean room with basic amenities',
        amenities: ['Double Bed', 'Free WiFi', 'Private Bathroom'],
        images: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
        maxOccupancy: 2,
        size: 20,
        bedConfiguration: '1 Double Bed',
        available: true,
        basePricing: { low: 25, normal: 30, peak: 35, currency: 'USD' }
      }
    ],
    features: ['Affordable Rates', 'Central Location', 'Clean Accommodation'],
    rating: 3.8,
    reviewCount: 145,
    established: '2020',
    status: 'active',
    operatingHours: {
      reception: '7:00 AM - 10:00 PM',
      checkIn: '2:00 PM',
      checkOut: '10:00 AM'
    },
    policies: {
      cancellation: 'Free cancellation up to 24 hours before check-in',
      smokingPolicy: 'Smoking allowed in designated areas'
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