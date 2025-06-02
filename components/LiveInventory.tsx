'use client'

import { useState, useEffect } from 'react'
import { Clock, MapPin, TrendingUp, TrendingDown, AlertCircle, CheckCircle, Fish, Waves } from 'lucide-react'

interface SeafoodItem {
  id: string
  name: string
  price: number
  quantity: number
  unit: string
  caughtTime: Date
  location: string
  quality: 'premium' | 'excellent' | 'good'
  trend: 'rising' | 'stable' | 'falling'
  image: string
  boatName: string
  captain: string
}

export default function LiveInventory() {
  const [inventory, setInventory] = useState<SeafoodItem[]>([])
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null)
  const [isLive, setIsLive] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  const initialInventory: SeafoodItem[] = [
    {
      id: '1',
      name: 'Gulf Red Snapper',
      price: 32.99,
      quantity: 18,
      unit: 'lbs',
      caughtTime: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
      location: 'Apalachicola Bay',
      quality: 'premium',
      trend: 'stable',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      boatName: 'Miss Lucy',
      captain: 'Captain Mike'
    },
    {
      id: '2',
      name: 'Jumbo Gulf Shrimp',
      price: 24.99,
      quantity: 32,
      unit: 'lbs',
      caughtTime: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      location: 'St. Vincent Sound',
      quality: 'excellent',
      trend: 'rising',
      image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      boatName: 'Gulf Breeze',
      captain: 'Captain Joe'
    },
    {
      id: '3',
      name: 'Gulf Grouper',
      price: 36.99,
      quantity: 12,
      unit: 'lbs',
      caughtTime: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
      location: 'Deep Gulf Waters',
      quality: 'premium',
      trend: 'falling',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      boatName: 'Sea Hunter',
      captain: 'Captain Tom'
    },
    {
      id: '4',
      name: 'Blue Crab',
      price: 8.99,
      quantity: 48,
      unit: 'each',
      caughtTime: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
      location: 'Oyster Bay',
      quality: 'excellent',
      trend: 'stable',
      image: 'https://images.unsplash.com/photo-1582576542799-6c6b86c6734c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      boatName: 'Crab Dancer',
      captain: 'Captain Sarah'
    },
    {
      id: '5',
      name: 'Apalachicola Oysters',
      price: 18.99,
      quantity: 24,
      unit: 'dozen',
      caughtTime: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
      location: 'Apalachicola Bay',
      quality: 'premium',
      trend: 'rising',
      image: 'https://images.unsplash.com/photo-1606731219412-3b1e4d0f7a90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      boatName: 'Oyster King',
      captain: 'Captain Bill'
    },
    {
      id: '6',
      name: 'Gulf Flounder',
      price: 28.99,
      quantity: 8,
      unit: 'lbs',
      caughtTime: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
      location: 'Carrabelle Shore',
      quality: 'good',
      trend: 'stable',
      image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      boatName: 'Flat Fisher',
      captain: 'Captain Rob'
    }
  ]

  useEffect(() => {
    setIsMounted(true)
    setInventory(initialInventory)
    setLastUpdate(new Date()) // Initialize lastUpdate only on client-side

    // Simulate real-time updates
    const interval = setInterval(() => {
      setInventory(prevInventory => 
        prevInventory.map(item => {
          // Random small changes to simulate live updates
          const changeChance = Math.random()
          let newQuantity = item.quantity
          let newTrend = item.trend

          if (changeChance < 0.1) { // 10% chance of change
            const change = Math.floor(Math.random() * 6) - 3 // -3 to +3
            newQuantity = Math.max(0, item.quantity + change)
            
            if (change > 0) newTrend = 'rising'
            else if (change < 0) newTrend = 'falling'
            else newTrend = 'stable'
          }

          return {
            ...item,
            quantity: newQuantity,
            trend: newTrend
          }
        })
      )
      setLastUpdate(new Date())
    }, 5000) // Update every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'premium': return 'text-emerald-600 bg-emerald-100'
      case 'excellent': return 'text-blue-600 bg-blue-100'
      case 'good': return 'text-amber-600 bg-amber-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'rising': return <TrendingUp className="h-4 w-4 text-green-600" />
      case 'falling': return <TrendingDown className="h-4 w-4 text-red-600" />
      default: return <TrendingUp className="h-4 w-4 text-gray-400 rotate-90" />
    }
  }

  const getStockStatus = (quantity: number) => {
    if (quantity === 0) return { text: 'Out of Stock', color: 'text-red-600 bg-red-100' }
    if (quantity < 5) return { text: 'Low Stock', color: 'text-orange-600 bg-orange-100' }
    if (quantity < 15) return { text: 'Limited', color: 'text-yellow-600 bg-yellow-100' }
    return { text: 'In Stock', color: 'text-green-600 bg-green-100' }
  }

  const getTimeSinceCaught = (caughtTime: Date) => {
    const now = new Date()
    const diffMs = now.getTime() - caughtTime.getTime()
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))

    if (diffHours === 0) {
      return `${diffMinutes} minutes ago`
    }
    return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-ocean-100 rounded-full p-2">
            <Waves className="h-6 w-6 text-ocean-600" />
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-gray-900">Live Inventory</h2>
            <p className="text-gray-600">Real-time fresh catch availability</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${isLive ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
            <span className="text-sm text-gray-600">{isLive ? 'Live' : 'Offline'}</span>
          </div>
          <div className="text-sm text-gray-500">
            Last updated: {isMounted ? lastUpdate?.toLocaleTimeString() : '--:--:--'}
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-ocean-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-ocean-600">{inventory.length}</div>
          <div className="text-sm text-gray-600">Species Available</div>
        </div>
        <div className="bg-green-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-green-600">
            {inventory.filter(item => item.quantity > 0).length}
          </div>
          <div className="text-sm text-gray-600">In Stock</div>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">
            {inventory.filter(item => item.quality === 'premium').length}
          </div>
          <div className="text-sm text-gray-600">Premium Quality</div>
        </div>
        <div className="bg-amber-50 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-amber-600">
            {inventory.filter(item => {
              const hoursSinceCaught = (new Date().getTime() - item.caughtTime.getTime()) / (1000 * 60 * 60)
              return hoursSinceCaught < 6
            }).length}
          </div>
          <div className="text-sm text-gray-600">Caught Today</div>
        </div>
      </div>

      {/* Inventory Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {inventory.map((item) => {
          const stockStatus = getStockStatus(item.quantity)
          const timeSinceCaught = getTimeSinceCaught(item.caughtTime)
          
          return (
            <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              {/* Image */}
              <div className="relative h-48">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getQualityColor(item.quality)}`}>
                    {item.quality.charAt(0).toUpperCase() + item.quality.slice(1)}
                  </span>
                </div>
                <div className="absolute top-2 right-2 bg-white bg-opacity-90 rounded-full p-1">
                  {getTrendIcon(item.trend)}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                  <span className="text-lg font-bold text-ocean-600">${item.price}</span>
                </div>

                {/* Stock Status */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${stockStatus.color}`}>
                    {stockStatus.text}
                  </span>
                  <span className="text-sm text-gray-600">
                    {item.quantity} {item.unit} available
                  </span>
                </div>

                {/* Catch Info */}
                <div className="space-y-2 text-xs text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>Caught {timeSinceCaught}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Fish className="h-3 w-3 mr-1" />
                    <span>{item.boatName} • {item.captain}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-4 space-y-2">
                  <button 
                    className={`w-full py-2 px-3 rounded-md text-sm font-medium ${
                      item.quantity > 0 
                        ? 'bg-ocean-600 text-white hover:bg-ocean-700' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={item.quantity === 0}
                  >
                    {item.quantity > 0 ? 'Add to Cart' : 'Notify When Available'}
                  </button>
                  
                  {item.quantity > 0 && item.quantity < 10 && (
                    <div className="flex items-center justify-center text-xs text-amber-600">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      <span>Limited quantity - order soon!</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
              <span>All seafood caught within 24 hours</span>
            </div>
            <div className="flex items-center">
              <Fish className="h-4 w-4 text-ocean-600 mr-1" />
              <span>Fresh from local Gulf boats</span>
            </div>
          </div>
          <button 
            onClick={() => setIsLive(!isLive)}
            className="text-ocean-600 hover:text-ocean-700 font-medium"
          >
            {isLive ? 'Pause Updates' : 'Resume Updates'}
          </button>
        </div>
      </div>
    </div>
  )
} 