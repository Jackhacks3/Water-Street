'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface Category {
  id: string
  name: string
  count: number
}

interface ProductFiltersProps {
  categories: Category[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
  priceRange: number[]
  onPriceChange: (range: number[]) => void
}

const ProductFilters = ({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceChange
}: ProductFiltersProps) => {
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [selectedFreshness, setSelectedFreshness] = useState<string[]>([])

  const features = [
    'Wild Caught',
    'Sustainably Sourced',
    'Restaurant Grade',
    'Flash Frozen',
    'Live',
    'Locally Harvested',
    'MSC Certified'
  ]

  const freshnessLevels = [
    { id: 'excellent', label: 'Excellent', color: 'bg-green-100 text-green-800' },
    { id: 'good', label: 'Good', color: 'bg-yellow-100 text-yellow-800' },
    { id: 'fair', label: 'Fair', color: 'bg-orange-100 text-orange-800' }
  ]

  const handleFeatureToggle = (feature: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    )
  }

  const handleFreshnessToggle = (freshness: string) => {
    setSelectedFreshness(prev => 
      prev.includes(freshness) 
        ? prev.filter(f => f !== freshness)
        : [...prev, freshness]
    )
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>

      {/* Categories */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">Categories</h4>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center justify-between cursor-pointer group">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  value={category.id}
                  checked={selectedCategory === category.id}
                  onChange={(e) => onCategoryChange(e.target.value)}
                  className="h-4 w-4 text-ocean-600 focus:ring-ocean-500 border-gray-300"
                />
                <span className="ml-3 text-sm text-gray-700 group-hover:text-ocean-600 transition-colors">
                  {category.name}
                </span>
              </div>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                {category.count}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">Price Range</h4>
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
          <div className="relative">
            <input
              type="range"
              min="0"
              max="100"
              value={priceRange[1]}
              onChange={(e) => onPriceChange([priceRange[0], Number(e.target.value)])}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-slider"
            />
            <div className="absolute top-0 left-0 h-2 bg-ocean-500 rounded-lg pointer-events-none"
                 style={{ width: `${priceRange[1]}%` }}
            />
          </div>
          <div className="flex space-x-2">
            <input
              type="number"
              placeholder="Min"
              value={priceRange[0]}
              onChange={(e) => onPriceChange([Number(e.target.value), priceRange[1]])}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-ocean-500"
            />
            <input
              type="number"
              placeholder="Max"
              value={priceRange[1]}
              onChange={(e) => onPriceChange([priceRange[0], Number(e.target.value)])}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-ocean-500"
            />
          </div>
        </div>
      </div>

      {/* Advanced Filters Toggle */}
      <button
        onClick={() => setShowAdvanced(!showAdvanced)}
        className="flex items-center justify-between w-full py-2 text-sm font-medium text-ocean-600 hover:text-ocean-700 transition-colors"
      >
        <span>Advanced Filters</span>
        {showAdvanced ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>

      {/* Advanced Filters */}
      {showAdvanced && (
        <div className="mt-4 space-y-6 border-t border-gray-200 pt-6">
          {/* Features */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Features</h4>
            <div className="space-y-2">
              {features.map((feature) => (
                <label key={feature} className="flex items-center cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedFeatures.includes(feature)}
                    onChange={() => handleFeatureToggle(feature)}
                    className="h-4 w-4 text-ocean-600 focus:ring-ocean-500 border-gray-300 rounded"
                  />
                  <span className="ml-3 text-sm text-gray-700 group-hover:text-ocean-600 transition-colors">
                    {feature}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Freshness */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Freshness Level</h4>
            <div className="space-y-2">
              {freshnessLevels.map((level) => (
                <label key={level.id} className="flex items-center cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedFreshness.includes(level.id)}
                    onChange={() => handleFreshnessToggle(level.id)}
                    className="h-4 w-4 text-ocean-600 focus:ring-ocean-500 border-gray-300 rounded"
                  />
                  <span className={`ml-3 text-sm px-2 py-1 rounded-full ${level.color}`}>
                    {level.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Availability</h4>
            <div className="space-y-2">
              <label className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-ocean-600 focus:ring-ocean-500 border-gray-300 rounded"
                />
                <span className="ml-3 text-sm text-gray-700 group-hover:text-ocean-600 transition-colors">
                  In Stock Only
                </span>
              </label>
              <label className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-ocean-600 focus:ring-ocean-500 border-gray-300 rounded"
                />
                <span className="ml-3 text-sm text-gray-700 group-hover:text-ocean-600 transition-colors">
                  On Sale
                </span>
              </label>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Catch Location</h4>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-ocean-500">
              <option value="">All Locations</option>
              <option value="gulf-waters">Gulf Waters</option>
              <option value="apalachicola-bay">Apalachicola Bay</option>
              <option value="local-bay">Local Bay</option>
              <option value="deep-gulf">Deep Gulf</option>
              <option value="shallow-gulf">Shallow Gulf</option>
            </select>
          </div>

          {/* Clear Filters */}
          <button
            onClick={() => {
              onCategoryChange('all')
              onPriceChange([0, 100])
              setSelectedFeatures([])
              setSelectedFreshness([])
            }}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  )
}

export default ProductFilters 