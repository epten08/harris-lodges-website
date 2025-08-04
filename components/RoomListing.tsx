'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { rooms } from '@/lib/data'

const RoomsListing = () => {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Rooms</h1>
          <p className="text-xl text-gray-600">Comfortable accommodations designed for your perfect stay</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image 
                src={room.image} 
                alt={room.name} 
                width={600}
                height={400}
                className="w-full h-64 object-cover" 
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-2xl font-semibold text-gray-900">{room.name}</h2>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    room.type === 'single' ? 'bg-blue-100 text-blue-800' :
                    room.type === 'deluxe' ? 'bg-purple-100 text-purple-800' :
                    room.type === 'executive' ? 'bg-amber-100 text-amber-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {room.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{room.description}</p>
                
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Amenities:</h3>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-sm">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/booking?room=${room.id}`}
                    className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-md transition-colors text-center"
                  >
                    Request Price
                  </Link>
                  <a
                    href="https://wa.me/263123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors text-center flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={16} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RoomsListing