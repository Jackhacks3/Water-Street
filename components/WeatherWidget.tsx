'use client'

import { useState, useEffect } from 'react'
import { Cloud, Sun, CloudRain, Wind, Waves, Thermometer, Eye, AlertCircle } from 'lucide-react'

interface WeatherData {
  temperature: number
  condition: string
  windSpeed: number
  waveHeight: number
  visibility: number
  fishingConditions: 'excellent' | 'good' | 'fair' | 'poor'
  availabilityImpact: string
  recommendation: string
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API call with mock data
    const fetchWeather = async () => {
      setIsLoading(true)
      
      // Mock weather data for Gulf of Mexico
      const mockWeather: WeatherData = {
        temperature: 78,
        condition: 'Partly Cloudy',
        windSpeed: 12,
        waveHeight: 2.3,
        visibility: 8.5,
        fishingConditions: 'good',
        availabilityImpact: 'Normal fishing operations. Fresh daily catch available.',
        recommendation: 'Excellent conditions for offshore fishing. Red snapper and grouper actively feeding.'
      }

      // Simulate API delay
      setTimeout(() => {
        setWeather(mockWeather)
        setIsLoading(false)
      }, 1000)
    }

    fetchWeather()
  }, [])

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
      case 'clear':
        return Sun
      case 'partly cloudy':
      case 'cloudy':
        return Cloud
      case 'rainy':
      case 'rain':
        return CloudRain
      default:
        return Cloud
    }
  }

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'excellent': return 'text-green-600 bg-green-100'
      case 'good': return 'text-blue-600 bg-blue-100'
      case 'fair': return 'text-yellow-600 bg-yellow-100'
      case 'poor': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="animate-pulse">
          <div className="flex items-center space-x-3 mb-4">
            <div className="h-8 w-8 bg-gray-200 rounded"></div>
            <div className="h-6 w-32 bg-gray-200 rounded"></div>
          </div>
          <div className="space-y-3">
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!weather) return null

  const WeatherIcon = getWeatherIcon(weather.condition)

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <Waves className="h-6 w-6 text-ocean-600" />
          <h3 className="text-lg font-semibold text-gray-900">Gulf Conditions</h3>
        </div>
        <div className="text-xs text-gray-500">Live Update</div>
      </div>

      {/* Current Weather */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="flex items-center space-x-2">
          <WeatherIcon className="h-8 w-8 text-yellow-500" />
          <div>
            <div className="text-2xl font-bold text-gray-900">{weather.temperature}°F</div>
            <div className="text-sm text-gray-600">{weather.condition}</div>
          </div>
        </div>
      </div>

      {/* Conditions Grid */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <Wind className="h-5 w-5 text-gray-400 mx-auto mb-1" />
          <div className="text-sm font-medium text-gray-900">{weather.windSpeed} mph</div>
          <div className="text-xs text-gray-600">Wind</div>
        </div>
        <div className="text-center">
          <Waves className="h-5 w-5 text-blue-400 mx-auto mb-1" />
          <div className="text-sm font-medium text-gray-900">{weather.waveHeight} ft</div>
          <div className="text-xs text-gray-600">Waves</div>
        </div>
        <div className="text-center">
          <Eye className="h-5 w-5 text-gray-400 mx-auto mb-1" />
          <div className="text-sm font-medium text-gray-900">{weather.visibility} mi</div>
          <div className="text-xs text-gray-600">Visibility</div>
        </div>
      </div>

      {/* Fishing Conditions */}
      <div className="border-t border-gray-200 pt-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-gray-700">Fishing Conditions</span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getConditionColor(weather.fishingConditions)}`}>
            {weather.fishingConditions.charAt(0).toUpperCase() + weather.fishingConditions.slice(1)}
          </span>
        </div>
        
        <div className="space-y-3">
          <div className="bg-ocean-50 rounded-lg p-3">
            <div className="flex items-start space-x-2">
              <AlertCircle className="h-4 w-4 text-ocean-600 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-ocean-900 mb-1">Availability Impact</div>
                <div className="text-xs text-ocean-700">{weather.availabilityImpact}</div>
              </div>
            </div>
          </div>
          
          <div className="bg-seafoam-50 rounded-lg p-3">
            <div className="flex items-start space-x-2">
              <Thermometer className="h-4 w-4 text-seafoam-600 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-seafoam-900 mb-1">Captain's Recommendation</div>
                <div className="text-xs text-seafoam-700">{weather.recommendation}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-gray-200">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Apalachicola Bay, FL</span>
          <span>Updated 15 min ago</span>
        </div>
      </div>
    </div>
  )
} 