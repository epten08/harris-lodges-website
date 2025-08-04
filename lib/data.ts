export interface Room {
  id: number
  name: string
  type: string
  description: string
  image: string
  amenities: string[]
  basePrice: number
}

export const rooms: Room[] = [
  {
    id: 1,
    name: 'Standard Single Room',
    type: 'single',
    description: 'Comfortable single accommodation with modern amenities, perfect for solo travelers.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop',
    amenities: ['Free WiFi', 'Air Conditioning', 'En-suite Bathroom', 'Work Desk'],
    basePrice: 45
  },
  {
    id: 2,
    name: 'Deluxe Double Room',
    type: 'deluxe',
    description: 'Spacious deluxe room with queen bed, offering comfort and style for couples.',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&h=400&fit=crop',
    amenities: ['Free WiFi', 'Air Conditioning', 'Mini Bar', 'Balcony', 'Room Service'],
    basePrice: 75
  },
  {
    id: 3,
    name: 'Executive Suite',
    type: 'executive',
    description: 'Luxurious suite with separate living area, premium amenities and stunning views.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop',
    amenities: ['Free WiFi', 'Air Conditioning', 'Living Area', 'Kitchenette', 'Premium Bathroom', 'Concierge Service'],
    basePrice: 120
  },
  {
    id: 4,
    name: 'Family Room',
    type: 'family',
    description: 'Perfect for families, featuring multiple beds and extra space for comfort.',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&h=400&fit=crop',
    amenities: ['Free WiFi', 'Air Conditioning', 'Multiple Beds', 'Family Bathroom', 'Children Amenities'],
    basePrice: 95
  }
]

export interface Testimonial {
  name: string
  location: string
  rating: number
  text: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    location: 'Harare, Zimbabwe',
    rating: 5,
    text: 'Exceptional service and beautiful accommodations. The staff went above and beyond to make our stay memorable.'
  },
  {
    name: 'John Mapfumo',
    location: 'Bulawayo, Zimbabwe',
    rating: 5,
    text: 'Harris Lodges offers the perfect blend of comfort and authentic Zimbabwean hospitality. Highly recommended!'
  },
  {
    name: 'Emma Thompson',
    location: 'Cape Town, South Africa',
    rating: 4,
    text: 'Clean, comfortable rooms with friendly staff. The location is perfect for exploring the area.'
  }
]

export const galleryImages = [
  'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop'
]