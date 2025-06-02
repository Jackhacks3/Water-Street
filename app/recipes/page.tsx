'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Clock, Users, ChefHat, Play, BookOpen, Filter, Star, Heart } from 'lucide-react'

interface Recipe {
  id: string
  title: string
  description: string
  image: string
  videoUrl?: string
  prepTime: number
  cookTime: number
  servings: number
  difficulty: 'easy' | 'medium' | 'hard'
  category: string
  ingredients: string[]
  instructions: string[]
  tips: string[]
  nutrition: {
    calories: number
    protein: number
    fat: number
    carbs: number
  }
  rating: number
  reviews: number
  chef: {
    name: string
    title: string
    image: string
  }
}

export default function RecipesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const recipes: Recipe[] = [
    {
      id: '1',
      title: 'Pan-Seared Gulf Red Snapper with Lemon Butter',
      description: 'A classic preparation highlighting the delicate flavor of fresh Gulf red snapper with a simple lemon butter sauce.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      videoUrl: 'https://example.com/video1',
      prepTime: 15,
      cookTime: 20,
      servings: 4,
      difficulty: 'medium',
      category: 'fish',
      ingredients: [
        '4 Gulf red snapper fillets (6 oz each)',
        '4 tablespoons butter',
        '2 lemons (juiced)',
        '2 cloves garlic, minced',
        'Fresh thyme',
        'Salt and pepper',
        'Olive oil'
      ],
      instructions: [
        'Pat snapper fillets dry and season with salt and pepper.',
        'Heat olive oil in a large skillet over medium-high heat.',
        'Cook fillets skin-side down for 4-5 minutes until crispy.',
        'Flip and cook for 2-3 minutes more until flaky.',
        'Remove fish and add butter, garlic, and lemon juice to pan.',
        'Return fish to pan and spoon sauce over fillets.',
        'Garnish with fresh thyme and serve immediately.'
      ],
      tips: [
        'Don\'t move the fish once it\'s in the pan - let it develop a golden crust',
        'Use a fish spatula for easier flipping',
        'Serve with roasted vegetables or rice pilaf'
      ],
      nutrition: {
        calories: 285,
        protein: 42,
        fat: 12,
        carbs: 3
      },
      rating: 4.8,
      reviews: 124,
      chef: {
        name: 'Chef Maria Rodriguez',
        title: 'Executive Chef',
        image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
      }
    },
    {
      id: '2',
      title: 'Gulf Shrimp and Grits',
      description: 'A Southern classic featuring jumbo Gulf shrimp over creamy stone-ground grits with andouille sausage.',
      image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      prepTime: 20,
      cookTime: 25,
      servings: 6,
      difficulty: 'medium',
      category: 'shellfish',
      ingredients: [
        '2 lbs Gulf shrimp, peeled',
        '1 cup stone-ground grits',
        '4 cups chicken stock',
        '1/2 cup heavy cream',
        '4 oz andouille sausage',
        'Green onions, chopped',
        'Cajun seasoning',
        'Butter and cheese'
      ],
      instructions: [
        'Bring chicken stock to boil, whisk in grits slowly.',
        'Simmer grits 20 minutes, stirring frequently.',
        'Cook sausage in large skillet until browned.',
        'Season shrimp with Cajun spices.',
        'Cook shrimp 2-3 minutes per side until pink.',
        'Stir cream and cheese into grits.',
        'Serve shrimp over grits, garnish with green onions.'
      ],
      tips: [
        'Use stone-ground grits for best texture',
        'Don\'t overcook the shrimp',
        'Add cream and cheese gradually to prevent curdling'
      ],
      nutrition: {
        calories: 420,
        protein: 32,
        fat: 18,
        carbs: 35
      },
      rating: 4.9,
      reviews: 89,
      chef: {
        name: 'Chef James Thompson',
        title: 'Cajun Specialist',
        image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
      }
    },
    {
      id: '3',
      title: 'Apalachicola Oyster Rockefeller',
      description: 'Fresh local oysters topped with creamed spinach, herbs, and breadcrumbs, then baked to perfection.',
      image: 'https://images.unsplash.com/photo-1606731219412-3b1e4d0f7a90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      prepTime: 25,
      cookTime: 15,
      servings: 4,
      difficulty: 'hard',
      category: 'shellfish',
      ingredients: [
        '24 fresh Apalachicola oysters',
        '1 cup fresh spinach',
        '1/4 cup butter',
        '2 shallots, minced',
        'Fresh herbs (parsley, chives)',
        'Breadcrumbs',
        'Pernod or white wine',
        'Heavy cream'
      ],
      instructions: [
        'Preheat oven to 450°F and prepare rock salt bed.',
        'Shuck oysters, reserve half shells.',
        'Sauté shallots in butter until soft.',
        'Add spinach and herbs, cook until wilted.',
        'Add cream and Pernod, simmer until thick.',
        'Top oysters with mixture and breadcrumbs.',
        'Bake 8-10 minutes until golden and bubbly.'
      ],
      tips: [
        'Keep oysters cold until ready to bake',
        'Use rock salt to keep shells stable',
        'Serve immediately while hot'
      ],
      nutrition: {
        calories: 195,
        protein: 12,
        fat: 14,
        carbs: 8
      },
      rating: 4.7,
      reviews: 156,
      chef: {
        name: 'Chef Antoine Dubois',
        title: 'French Cuisine Expert',
        image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
      }
    }
  ]

  const categories = [
    { id: 'all', name: 'All Recipes' },
    { id: 'fish', name: 'Fresh Fish' },
    { id: 'shellfish', name: 'Shellfish' },
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'mains', name: 'Main Courses' }
  ]

  const difficulties = [
    { id: 'all', name: 'All Levels' },
    { id: 'easy', name: 'Easy' },
    { id: 'medium', name: 'Medium' },
    { id: 'hard', name: 'Advanced' }
  ]

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory
    const matchesDifficulty = selectedDifficulty === 'all' || recipe.difficulty === selectedDifficulty
    
    return matchesSearch && matchesCategory && matchesDifficulty
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'hard': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-ocean-600 to-seafoam-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Gulf Coast Recipes
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Discover authentic recipes featuring the freshest Gulf seafood, created by professional chefs 
              and perfected by generations of coastal cooking.
            </p>
            <div className="flex justify-center">
              <div className="flex items-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <ChefHat className="h-5 w-5" />
                  <span>Chef-Tested</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>Video Guides</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-5 w-5" />
                  <span>Step-by-Step</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="w-full lg:w-1/3">
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-ocean-500"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center space-x-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-ocean-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>

              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-ocean-500"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty.id} value={difficulty.id}>{difficulty.name}</option>
                ))}
              </select>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-ocean-500 text-white rounded-lg"
              >
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {recipe.videoUrl && (
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white bg-opacity-90 rounded-full p-3 hover:bg-opacity-100 transition-all">
                      <Play className="h-6 w-6 text-ocean-600" />
                    </button>
                  </div>
                )}

                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(recipe.difficulty)}`}>
                    {recipe.difficulty.toUpperCase()}
                  </span>
                </div>

                <button className="absolute top-3 right-3 p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all">
                  <Heart className="h-4 w-4 text-gray-600 hover:text-coral-500" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{recipe.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{recipe.description}</p>

                {/* Recipe Info */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{recipe.prepTime + recipe.cookTime} min</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{recipe.servings} servings</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{recipe.rating} ({recipe.reviews})</span>
                  </div>
                </div>

                {/* Chef Info */}
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={recipe.chef.image}
                    alt={recipe.chef.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{recipe.chef.name}</p>
                    <p className="text-xs text-gray-500">{recipe.chef.title}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button className="flex-1 bg-ocean-500 hover:bg-ocean-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                    View Recipe
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                    Save
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredRecipes.length === 0 && (
          <div className="text-center py-12">
            <ChefHat className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No recipes found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or browse all recipes.</p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
                setSelectedDifficulty('all')
              }}
              className="mt-4 px-6 py-2 bg-ocean-500 text-white rounded-lg hover:bg-ocean-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
} 