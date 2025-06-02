'use client'

import { useState } from 'react'
import { Clock, MapPin, Thermometer, Star } from 'lucide-react'

interface SeafoodItem {
  id: string
  name: string
  price: number
  image: string
  caughtTime: string
  location: string
  stock: number
  rating: number
  description: string
  freshness: 'excellent' | 'good' | 'fair'
}

const DailyCatch = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const todaysCatch: SeafoodItem[] = [
    {
      id: '1',
      name: 'Red Snapper',
      price: 28.99,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      caughtTime: '4 hours ago',
      location: 'Gulf Waters',
      stock: 15,
      rating: 4.9,
      description: 'Premium Gulf Red Snapper, perfect for grilling or frying',
      freshness: 'excellent'
    },
    {
      id: '2',
      name: 'Gulf Shrimp',
      price: 16.99,
      image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      caughtTime: '2 hours ago',
      location: 'Apalachicola Bay',
      stock: 25,
      rating: 4.8,
      description: 'Sweet, tender Gulf shrimp caught in local waters',
      freshness: 'excellent'
    },
    {
      id: '3',
      name: 'Grouper Fillet',
      price: 32.99,
      image: 'https://images.unsplash.com/photo-1535140728325-781d415ea75c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      caughtTime: '6 hours ago',
      location: 'Deep Gulf',
      stock: 8,
      rating: 4.9,
      description: 'Fresh grouper fillet, mild and flaky texture',
      freshness: 'excellent'
    },
    {
      id: '4',
      name: 'Blue Crab',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1582564286061-1a07bae9ea16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      caughtTime: '3 hours ago',
      location: 'Local Bay',
      stock: 20,
      rating: 4.7,
      description: 'Live blue crabs, perfect for steaming or soup',
      freshness: 'excellent'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Catch', count: todaysCatch.length },
    { id: 'fish', name: 'Fresh Fish', count: 2 },
    { id: 'shellfish', name: 'Shellfish', count: 2 }
  ]

  const getFreshnessColor = (freshness: string) => {
    switch (freshness) {
      case 'excellent': return 'text-green-600 bg-green-100'
      case 'good': return 'text-yellow-600 bg-yellow-100'
      case 'fair': return 'text-orange-600 bg-orange-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
            Today's Fresh Catch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Straight from our boats this morning. Each item shows exactly when it was caught 
            and its current freshness status.
          </p>
        </div>

        {/* Live Updates Banner */}
        <div className="bg-seafoam-50 border border-seafoam-200 rounded-lg p-4 mb-8">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-seafoam-800 font-medium">Live Updates</span>
            </div>
            <span className="text-seafoam-600">Last updated: 2 minutes ago</span>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-lg p-1 flex space-x-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-ocean-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-ocean-600 hover:bg-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {todaysCatch.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group">
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Freshness Badge */}
                <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${getFreshnessColor(item.freshness)}`}>
                  {item.freshness.toUpperCase()}
                </div>
                
                {/* Stock Badge */}
                <div className="absolute top-3 right-3 bg-white bg-opacity-90 px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                  {item.stock} left
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-600">{item.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                
                {/* Catch Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span>Caught {item.caughtTime}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <MapPin className="h-4 w-4" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Price and Add to Cart */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-ocean-600">
                    ${item.price}
                    <span className="text-sm font-normal text-gray-500">/lb</span>
                  </div>
                  <button className="bg-coral-500 hover:bg-coral-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-ocean-500 hover:bg-ocean-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200">
            View All Fresh Seafood
          </button>
        </div>
      </div>
    </section>
  )
}

export default DailyCatch 