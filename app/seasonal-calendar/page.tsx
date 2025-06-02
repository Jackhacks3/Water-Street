'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Calendar, Fish, Waves, Thermometer, Info, Star, TrendingUp, TrendingDown } from 'lucide-react'

interface SeafoodSeason {
  name: string
  species: string
  category: 'fish' | 'shellfish' | 'mollusks'
  months: number[]
  peakMonths: number[]
  quality: 'excellent' | 'good' | 'fair' | 'limited'
  price: 'low' | 'medium' | 'high' | 'premium'
  description: string
  image: string
  sustainabilityNotes: string
}

export default function SeasonalCalendarPage() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const seafoodSeasons: SeafoodSeason[] = [
    {
      name: 'Red Snapper',
      species: 'Lutjanus campechanus',
      category: 'fish',
      months: [5, 6, 7, 8, 9, 10],
      peakMonths: [6, 7, 8],
      quality: 'excellent',
      price: 'premium',
      description: 'Prime red snapper season with federal waters open. Fish are at their plumpest and most flavorful.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      sustainabilityNotes: 'Strictly regulated season ensures sustainable harvesting.'
    },
    {
      name: 'Gulf Shrimp',
      species: 'Penaeus setiferus',
      category: 'shellfish',
      months: [4, 5, 6, 7, 8, 9, 10, 11],
      peakMonths: [7, 8, 9],
      quality: 'excellent',
      price: 'medium',
      description: 'White and brown shrimp at peak abundance. Sweet, firm texture perfect for any preparation.',
      image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      sustainabilityNotes: 'Wild-caught using turtle-excluder devices to protect sea turtles.'
    },
    {
      name: 'Blue Crab',
      species: 'Callinectes sapidus',
      category: 'shellfish',
      months: [3, 4, 5, 6, 7, 8, 9, 10],
      peakMonths: [5, 6, 7],
      quality: 'excellent',
      price: 'high',
      description: 'Peak molting season produces the finest soft-shell crabs and premium crabmeat.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      sustainabilityNotes: 'Sustainable crabbing practices protect juvenile populations.'
    },
    {
      name: 'Oysters',
      species: 'Crassostrea virginica',
      category: 'mollusks',
      months: [9, 10, 11, 12, 0, 1, 2, 3],
      peakMonths: [11, 12, 0, 1],
      quality: 'excellent',
      price: 'medium',
      description: 'Cool weather months when oysters are at their plumpest and briniest. Traditional "R" months.',
      image: 'https://images.unsplash.com/photo-1606731219412-3b1e4d0f7a90?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      sustainabilityNotes: 'Aquaculture and restoration programs support wild populations.'
    },
    {
      name: 'Grouper',
      species: 'Epinephelus morio',
      category: 'fish',
      months: [0, 1, 2, 3, 4, 11],
      peakMonths: [1, 2, 3],
      quality: 'excellent',
      price: 'premium',
      description: 'Winter months provide the best grouper fishing with cooler waters and active feeding.',
      image: 'https://images.unsplash.com/photo-1544304233-45f4c728c334?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      sustainabilityNotes: 'Size and bag limits protect breeding stock.'
    },
    {
      name: 'Mahi Mahi',
      species: 'Coryphaena hippurus',
      category: 'fish',
      months: [2, 3, 4, 5, 6, 7, 8, 9],
      peakMonths: [4, 5, 6],
      quality: 'excellent',
      price: 'high',
      description: 'Spring through summer migration brings these prized fish close to Gulf waters.',
      image: 'https://images.unsplash.com/photo-1535140728325-781d415ea75c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      sustainabilityNotes: 'Fast-growing species with excellent sustainability ratings.'
    },
    {
      name: 'Flounder',
      species: 'Paralichthys lethostigma',
      category: 'fish',
      months: [8, 9, 10, 11, 0, 1],
      peakMonths: [9, 10, 11],
      quality: 'excellent',
      price: 'medium',
      description: 'Fall run provides excellent eating as fish fatten up for winter offshore migration.',
      image: 'https://images.unsplash.com/photo-1516190535142-ad9cb3f7b1ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      sustainabilityNotes: 'Seasonal regulations protect spawning populations.'
    },
    {
      name: 'Triggerfish',
      species: 'Balistes capriscus',
      category: 'fish',
      months: [4, 5, 6, 7, 8, 9, 10],
      peakMonths: [6, 7, 8],
      quality: 'good',
      price: 'medium',
      description: 'Summer months offer the best triggerfish, known for their sweet, firm white meat.',
      image: 'https://images.unsplash.com/photo-1571463748-6b7ddae15ef8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      sustainabilityNotes: 'Emerging fishery with conservative management approach.'
    },
    {
      name: 'Scallops',
      species: 'Argopecten irradians',
      category: 'mollusks',
      months: [5, 6, 7, 8],
      peakMonths: [6, 7],
      quality: 'excellent',
      price: 'premium',
      description: 'Short but sweet season for bay scallops in designated areas. Incredibly sweet and tender.',
      image: 'https://images.unsplash.com/photo-1609501026862-ebe80b5e0096?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      sustainabilityNotes: 'Limited season and areas protect this delicate resource.'
    }
  ]

  const filteredSeafood = selectedCategory === 'all' 
    ? seafoodSeasons 
    : seafoodSeasons.filter(item => item.category === selectedCategory)

  const currentMonthSeafood = filteredSeafood.filter(item => 
    item.months.includes(selectedMonth)
  )

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'excellent': return 'bg-green-100 text-green-800'
      case 'good': return 'bg-blue-100 text-blue-800'
      case 'fair': return 'bg-yellow-100 text-yellow-800'
      case 'limited': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriceColor = (price: string) => {
    switch (price) {
      case 'low': return 'text-green-600'
      case 'medium': return 'text-blue-600'
      case 'high': return 'text-orange-600'
      case 'premium': return 'text-red-600'
      default: return 'text-gray-600'
    }
  }

  const getPriceIcon = (price: string) => {
    switch (price) {
      case 'low': return <TrendingDown className="h-4 w-4" />
      case 'medium': return <TrendingUp className="h-4 w-4" />
      case 'high': return <TrendingUp className="h-4 w-4" />
      case 'premium': return <Star className="h-4 w-4" />
      default: return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-ocean-600 to-seafoam-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Calendar className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Seasonal Calendar
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover the peak seasons for Gulf of Mexico seafood. Time your orders for the best quality, 
              flavor, and value throughout the year.
            </p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            {/* Month Selector */}
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium text-gray-700">Month:</label>
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(Number(e.target.value))}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-ocean-500"
              >
                {months.map((month, index) => (
                  <option key={month} value={index}>{month}</option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium text-gray-700">Category:</label>
              <div className="flex space-x-2">
                {[
                  { id: 'all', label: 'All' },
                  { id: 'fish', label: 'Fish' },
                  { id: 'shellfish', label: 'Shellfish' },
                  { id: 'mollusks', label: 'Mollusks' }
                ].map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-ocean-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Available in {months[selectedMonth]}
          </h2>
          <p className="text-gray-600">
            {currentMonthSeafood.length} species available this month
          </p>
        </div>

        {currentMonthSeafood.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {currentMonthSeafood.map((seafood, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={seafood.image}
                    alt={seafood.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getQualityColor(seafood.quality)}`}>
                      {seafood.quality.charAt(0).toUpperCase() + seafood.quality.slice(1)}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className={`flex items-center space-x-1 ${getPriceColor(seafood.price)}`}>
                      {getPriceIcon(seafood.price)}
                      <span className="text-xs font-medium bg-white bg-opacity-90 px-2 py-1 rounded">
                        {seafood.price}
                      </span>
                    </div>
                  </div>
                  {seafood.peakMonths.includes(selectedMonth) && (
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-coral-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                        <Star className="h-3 w-3" />
                        <span>Peak Season</span>
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{seafood.name}</h3>
                  <p className="text-sm text-gray-500 italic mb-3">{seafood.species}</p>
                  <p className="text-gray-600 text-sm mb-4">{seafood.description}</p>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-start space-x-2">
                      <Info className="h-4 w-4 text-ocean-600 mt-0.5" />
                      <p className="text-xs text-gray-600">{seafood.sustainabilityNotes}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Fish className="h-24 w-24 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Limited Availability
            </h3>
            <p className="text-gray-600">
              Few species are at peak quality in {months[selectedMonth]}. 
              Try selecting a different month or category.
            </p>
          </div>
        )}

        {/* Annual Overview */}
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Annual Availability Overview</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left text-sm font-medium text-gray-700 pb-4">Species</th>
                  {months.map((month, index) => (
                    <th key={index} className="text-center text-xs font-medium text-gray-700 pb-4 px-1">
                      {month.slice(0, 3)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="space-y-2">
                {filteredSeafood.map((seafood, index) => (
                  <tr key={index} className="border-t border-gray-100">
                    <td className="py-3 pr-4">
                      <div className="text-sm font-medium text-gray-900">{seafood.name}</div>
                      <div className="text-xs text-gray-500">{seafood.category}</div>
                    </td>
                    {months.map((_, monthIndex) => (
                      <td key={monthIndex} className="text-center px-1 py-3">
                        {seafood.months.includes(monthIndex) ? (
                          <div className={`w-6 h-6 rounded-full mx-auto ${
                            seafood.peakMonths.includes(monthIndex)
                              ? 'bg-coral-500'
                              : 'bg-ocean-300'
                          }`} />
                        ) : (
                          <div className="w-6 h-6 rounded-full mx-auto bg-gray-100" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-coral-500" />
              <span>Peak Season</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-ocean-300" />
              <span>Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-gray-100" />
              <span>Not Available</span>
            </div>
          </div>
        </div>

        {/* Weather Impact */}
        <div className="mt-8 bg-ocean-50 rounded-xl p-8">
          <div className="flex items-start space-x-4">
            <Thermometer className="h-8 w-8 text-ocean-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-ocean-900 mb-4">Weather & Seasonal Factors</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-ocean-800">
                <div>
                  <h4 className="font-semibold mb-2">Spring (Mar-May)</h4>
                  <p>Warming waters trigger migration patterns. Excellent for mahi-mahi and early shrimp runs.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Summer (Jun-Aug)</h4>
                  <p>Peak season for most species. Red snapper season and prime shrimp harvesting.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Fall (Sep-Nov)</h4>
                  <p>Cooling waters bring excellent flounder runs and begin oyster season.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Winter (Dec-Feb)</h4>
                  <p>Premium oyster season and excellent grouper fishing in deeper, warmer waters.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 