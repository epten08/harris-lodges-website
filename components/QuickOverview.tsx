import React from 'react'
import { Bed, MapPin, Star } from 'lucide-react'

const QuickOverview = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Harris Lodges?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine modern comfort with traditional Zimbabwean warmth to create an exceptional hospitality experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bed className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Comfortable Rooms</h3>
            <p className="text-gray-600">Modern amenities and thoughtful design for your perfect stay.</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Prime Location</h3>
            <p className="text-gray-600">Perfectly situated to explore Zimbabwe&apos;s natural beauty and attractions.</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Exceptional Service</h3>
            <p className="text-gray-600">Our dedicated team ensures your stay exceeds expectations.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickOverview