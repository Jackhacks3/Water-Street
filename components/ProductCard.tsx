'use client'

import { useState } from 'react'
import { ShoppingCart, Heart, Eye, Clock, MapPin, Star, Truck } from 'lucide-react'

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  description: string
  features: string[]
  rating: number
  reviews: number
  freshness: 'excellent' | 'good' | 'fair'
  caughtTime: string
  location: string
  stock: number
  weight?: string
  sustainability?: string
}

interface ProductCardProps {
  product: Product
  viewMode: 'grid' | 'list'
}

const ProductCard = ({ product, viewMode }: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const getFreshnessColor = (freshness: string) => {
    switch (freshness) {
      case 'excellent': return 'text-green-600 bg-green-100'
      case 'good': return 'text-yellow-600 bg-yellow-100'
      case 'fair': return 'text-orange-600 bg-orange-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStockStatus = (stock: number) => {
    if (stock > 20) return { text: 'In Stock', color: 'text-green-600' }
    if (stock > 5) return { text: 'Limited Stock', color: 'text-yellow-600' }
    if (stock > 0) return { text: 'Low Stock', color: 'text-orange-600' }
    return { text: 'Out of Stock', color: 'text-red-600' }
  }

  const stockStatus = getStockStatus(product.stock)

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
        <div className="flex">
          {/* Image */}
          <div className="relative w-48 h-32 flex-shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-medium ${getFreshnessColor(product.freshness)}`}>
              {product.freshness.toUpperCase()}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="bg-ocean-100 text-ocean-700 px-2 py-1 rounded-full text-xs font-medium">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Details */}
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>Caught {product.caughtTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{product.location}</span>
                  </div>
                  {product.weight && (
                    <div className="flex items-center space-x-1">
                      <Truck className="h-4 w-4" />
                      <span>{product.weight}</span>
                    </div>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* Price and Actions */}
              <div className="ml-6 flex flex-col items-end">
                <div className="text-right mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-ocean-600">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">/lb</span>
                  <div className={`text-sm font-medium mt-1 ${stockStatus.color}`}>
                    {stockStatus.text}
                  </div>
                </div>

                {/* Quantity and Add to Cart */}
                <div className="flex items-center space-x-2 mb-3">
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="border border-gray-300 rounded px-2 py-1 text-sm"
                  >
                    {[...Array(Math.min(10, product.stock))].map((_, i) => (
                      <option key={i} value={i + 1}>{i + 1} lb</option>
                    ))}
                  </select>
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`p-2 rounded-full transition-colors ${
                      isWishlisted ? 'text-coral-500 bg-coral-50' : 'text-gray-400 hover:text-coral-500'
                    }`}
                  >
                    <Heart className="h-5 w-5" />
                  </button>
                </div>

                <button
                  disabled={product.stock === 0}
                  className="bg-coral-500 hover:bg-coral-600 disabled:bg-gray-300 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Grid view
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${getFreshnessColor(product.freshness)}`}>
          {product.freshness.toUpperCase()}
        </div>
        
        {product.originalPrice && (
          <div className="absolute top-3 right-3 bg-coral-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            SALE
          </div>
        )}

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={`p-2 rounded-full transition-colors ${
                isWishlisted ? 'bg-coral-500 text-white' : 'bg-white bg-opacity-90 text-gray-600 hover:text-coral-500'
              }`}
            >
              <Heart className="h-4 w-4" />
            </button>
            <button className="bg-white bg-opacity-90 p-2 rounded-full text-gray-600 hover:text-ocean-500 transition-colors">
              <Eye className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Price Overlay */}
        <div className="absolute bottom-3 left-3 bg-white bg-opacity-95 rounded-lg p-2">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-ocean-600">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>
          <span className="text-xs text-gray-500">/lb</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-3">
          {product.features.slice(0, 2).map((feature, index) => (
            <span key={index} className="bg-ocean-100 text-ocean-700 px-2 py-1 rounded-full text-xs font-medium">
              {feature}
            </span>
          ))}
          {product.features.length > 2 && (
            <span className="text-xs text-gray-500">+{product.features.length - 2} more</span>
          )}
        </div>

        {/* Details */}
        <div className="space-y-1 mb-3 text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>Caught {product.caughtTime}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="h-3 w-3" />
            <span>{product.location}</span>
          </div>
        </div>

        {/* Rating and Stock */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-3 w-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <span className="text-xs text-gray-600">({product.reviews})</span>
          </div>
          <div className={`text-xs font-medium ${stockStatus.color}`}>
            {stockStatus.text}
          </div>
        </div>

        {/* Add to Cart */}
        <div className="flex items-center space-x-2">
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm"
          >
            {[...Array(Math.min(5, product.stock))].map((_, i) => (
              <option key={i} value={i + 1}>{i + 1} lb</option>
            ))}
          </select>
          <button
            disabled={product.stock === 0}
            className="flex-2 bg-coral-500 hover:bg-coral-600 disabled:bg-gray-300 text-white px-4 py-1 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-1"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="text-sm">Add</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard 