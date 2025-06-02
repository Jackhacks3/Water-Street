'use client'

import { useState } from 'react'
import { ShoppingCart, Heart, Eye, Thermometer, Award } from 'lucide-react'

const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  const featuredProducts = [
    {
      id: '1',
      name: 'Wild Gulf Red Snapper',
      price: 32.99,
      originalPrice: 38.99,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Best Seller',
      badgeColor: 'bg-coral-500',
      description: 'Premium wild-caught red snapper from Gulf waters',
      features: ['Wild Caught', 'Sustainably Sourced', 'Restaurant Grade'],
      rating: 4.9,
      reviews: 127
    },
    {
      id: '2',
      name: 'Jumbo Gulf Shrimp',
      price: 24.99,
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Fresh Today',
      badgeColor: 'bg-green-500',
      description: 'Large, sweet Gulf shrimp perfect for any dish',
      features: ['16-20 Count', 'Peeled & Deveined', 'Flash Frozen'],
      rating: 4.8,
      reviews: 89
    },
    {
      id: '3',
      name: 'Fresh Oysters',
      price: 18.99,
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1606731219412-3b1e4d0f7a90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badge: 'Seasonal',
      badgeColor: 'bg-seafoam-500',
      description: 'Fresh Apalachicola Bay oysters, shucked to order',
      features: ['Locally Harvested', 'Shucked Fresh', 'Premium Grade'],
      rating: 4.7,
      reviews: 156
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
            Featured Premium Seafood
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our most popular selections, featuring the finest Gulf Coast seafood 
            trusted by restaurants and seafood lovers alike.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badge */}
                <div className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {product.badge}
                </div>

                {/* Quick Actions */}
                <div className={`absolute top-4 right-4 flex flex-col space-y-2 transition-all duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}>
                  <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-white transition-colors">
                    <Heart className="h-5 w-5 text-gray-600 hover:text-coral-500" />
                  </button>
                  <button className="bg-white bg-opacity-90 p-2 rounded-full hover:bg-white transition-colors">
                    <Eye className="h-5 w-5 text-gray-600 hover:text-ocean-500" />
                  </button>
                </div>

                {/* Pricing Overlay */}
                <div className="absolute bottom-4 left-4 bg-white bg-opacity-95 rounded-lg p-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-ocean-600">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                    <span className="text-sm text-gray-500">/lb</span>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, index) => (
                    <span 
                      key={index}
                      className="bg-ocean-100 text-ocean-700 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i}
                          className={`text-sm ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                  <div className="flex items-center space-x-1 text-green-600">
                    <Thermometer className="h-4 w-4" />
                    <span className="text-xs font-medium">Fresh</span>
                  </div>
                </div>

                {/* Add to Cart */}
                <button className="w-full bg-coral-500 hover:bg-coral-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center group">
                  <ShoppingCart className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-ocean-500 to-seafoam-500 rounded-2xl p-8 text-white">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-8 w-8 mr-3" />
                <h3 className="text-2xl font-bold">Restaurant Quality Guarantee</h3>
              </div>
              <p className="text-lg mb-6 opacity-90">
                The same premium seafood served in top restaurants, now available for your home kitchen. 
                100% satisfaction guaranteed or your money back.
              </p>
              <button className="bg-white text-ocean-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Shop All Premium Seafood
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts 