'use client'

import { useState, useMemo } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import ProductFilters from '@/components/ProductFilters'
import WeatherWidget from '@/components/WeatherWidget'
import { Search, Grid, List, SlidersHorizontal } from 'lucide-react'

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

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 100])
  const [sortBy, setSortBy] = useState('name')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)

  const allProducts: Product[] = [
    {
      id: '1',
      name: 'Wild Gulf Red Snapper',
      price: 32.99,
      originalPrice: 38.99,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'fish',
      description: 'Premium wild-caught red snapper from Gulf waters, perfect for grilling or pan-searing',
      features: ['Wild Caught', 'Sustainably Sourced', 'Restaurant Grade'],
      rating: 4.9,
      reviews: 127,
      freshness: 'excellent',
      caughtTime: '4 hours ago',
      location: 'Gulf Waters',
      stock: 15,
      weight: '2-3 lbs',
      sustainability: 'MSC Certified'
    },
    {
      id: '2',
      name: 'Jumbo Gulf Shrimp',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'shellfish',
      description: 'Large, sweet Gulf shrimp perfect for any dish - grilled, fried, or in pasta',
      features: ['16-20 Count', 'Peeled & Deveined', 'Flash Frozen'],
      rating: 4.8,
      reviews: 89,
      freshness: 'excellent',
      caughtTime: '2 hours ago',
      location: 'Apalachicola Bay',
      stock: 25,
      weight: '1 lb',
      sustainability: 'Locally Sourced'
    },
    {
      id: '3',
      name: 'Fresh Gulf Grouper',
      price: 36.99,
      image: 'https://images.unsplash.com/photo-1535140728325-781d415ea75c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'fish',
      description: 'Mild, sweet grouper with firm white meat - a Gulf Coast favorite',
      features: ['Fresh Fillet', 'Skin-on', 'Boneless'],
      rating: 4.9,
      reviews: 156,
      freshness: 'excellent',
      caughtTime: '6 hours ago',
      location: 'Deep Gulf',
      stock: 8,
      weight: '1.5-2 lbs',
      sustainability: 'Wild Caught'
    },
    {
      id: '4',
      name: 'Blue Crab - Live',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1582564286061-1a07bae9ea16?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'shellfish',
      description: 'Live blue crabs perfect for steaming, boiling, or making crab cakes',
      features: ['Live', 'Male Crabs', 'Large Size'],
      rating: 4.7,
      reviews: 203,
      freshness: 'excellent',
      caughtTime: '3 hours ago',
      location: 'Local Bay',
      stock: 20,
      weight: '5-6 oz each',
      sustainability: 'Local Harvest'
    },
    {
      id: '5',
      name: 'Gulf Oysters',
      price: 18.99,
      image: 'https://images.unsplash.com/photo-1606731219412-3b1e4d0f7a90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'shellfish',
      description: 'Fresh Apalachicola Bay oysters, famous for their sweet, briny flavor',
      features: ['Locally Harvested', 'Shucked Fresh', 'Premium Grade'],
      rating: 4.6,
      reviews: 134,
      freshness: 'excellent',
      caughtTime: '1 hour ago',
      location: 'Apalachicola Bay',
      stock: 30,
      weight: '1 pint',
      sustainability: 'Sustainably Farmed'
    },
    {
      id: '6',
      name: 'Gulf Flounder',
      price: 28.99,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'fish',
      description: 'Delicate, flaky flounder with a mild flavor - perfect for those new to seafood',
      features: ['Whole Fish', 'Cleaned', 'Fresh'],
      rating: 4.5,
      reviews: 92,
      freshness: 'good',
      caughtTime: '8 hours ago',
      location: 'Shallow Gulf',
      stock: 12,
      weight: '1-1.5 lbs',
      sustainability: 'Wild Caught'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Seafood', count: allProducts.length },
    { id: 'fish', name: 'Fresh Fish', count: allProducts.filter(p => p.category === 'fish').length },
    { id: 'shellfish', name: 'Shellfish', count: allProducts.filter(p => p.category === 'shellfish').length }
  ]

  const filteredProducts = useMemo(() => {
    let filtered = allProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
      
      return matchesSearch && matchesCategory && matchesPrice
    })

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        case 'newest':
          return new Date(b.caughtTime).getTime() - new Date(a.caughtTime).getTime()
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, priceRange, sortBy, allProducts])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-ocean-600 to-seafoam-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Fresh Gulf Seafood
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Discover our complete selection of premium seafood, caught fresh daily 
            from the pristine waters of the Gulf of Mexico.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Controls */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search seafood..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-ocean-500"
              />
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-ocean-500"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest Catch</option>
              </select>

              {/* View Mode */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-ocean-500 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-ocean-500 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>

              {/* Filters Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-ocean-500 text-white rounded-lg"
              >
                <SlidersHorizontal className="h-5 w-5" />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className={`w-64 space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <WeatherWidget />
            <ProductFilters
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
            />
          </div>

          {/* Products Grid/List */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {allProducts.length} products
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className={
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                  : 'space-y-4'
              }>
                {filteredProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    viewMode={viewMode}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('all')
                    setPriceRange([0, 100])
                  }}
                  className="mt-4 px-6 py-2 bg-ocean-500 text-white rounded-lg hover:bg-ocean-600 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 