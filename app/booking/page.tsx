import type { Metadata } from 'next'
import BookingForm from '@/components/BookingForm'

export const metadata: Metadata = {
  title: 'Book Your Stay - Harris Lodges',
  description: 'Book your accommodation at Harris Lodges Zimbabwe. Get personalized pricing and confirm your reservation.',
  robots: {
    index: false, // Don't index booking pages
  },
}

export default function BookingPage() {
  return <BookingForm />
}