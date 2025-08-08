import type { Metadata } from 'next'
import EnhancedInquiryForm from '@/components/EnhancedInquiryForm'

export const metadata: Metadata = {
  title: 'Book Your Stay - Harris Lodges',
  description: 'Book your accommodation at Harris Lodges Zimbabwe. Get personalized pricing and confirm your reservation.',
  robots: {
    index: false, // Don't index booking pages
  },
}

export default function BookingPage() {
  return <EnhancedInquiryForm />
}