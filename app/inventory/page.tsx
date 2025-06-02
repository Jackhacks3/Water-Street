import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import LiveInventory from '@/components/LiveInventory'
import WeatherWidget from '@/components/WeatherWidget'
import N8nChatWidget from '@/components/N8nChatWidget'

export default function InventoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-ocean-600 to-seafoam-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Live Inventory Tracker
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Real-time visibility into our fresh Gulf Coast seafood inventory. 
            Track availability, freshness, and catch times for the best selection.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Weather Widget */}
        <div className="mb-8">
          <WeatherWidget />
        </div>

        {/* Live Inventory */}
        <LiveInventory />
      </div>

      <Footer />
      <N8nChatWidget />
    </div>
  )
} 