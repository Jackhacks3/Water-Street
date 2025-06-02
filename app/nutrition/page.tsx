'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Heart, Activity, Brain, Shield } from 'lucide-react'

export default function NutritionPage() {
  const healthBenefits = [
    {
      icon: Heart,
      title: "Heart Health",
      description: "Omega-3 fatty acids support cardiovascular health and reduce inflammation"
    },
    {
      icon: Brain,
      title: "Brain Function",
      description: "DHA and EPA omega-3s essential for cognitive function and memory"
    },
    {
      icon: Activity,
      title: "Lean Protein",
      description: "High-quality protein with all essential amino acids for muscle health"
    },
    {
      icon: Shield,
      title: "Immune Support",
      description: "Rich in selenium, zinc, and vitamin D to boost immune function"
    }
  ]

  const seafoodNutrition = [
    {
      name: "Red Snapper",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      serving: "3.5 oz (100g)",
      calories: 100,
      protein: 20.5,
      fat: 1.3,
      omega3: 0.3,
      highlights: ["Low calories", "High protein", "Selenium rich", "B vitamins"]
    },
    {
      name: "Gulf Shrimp",
      image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      serving: "3.5 oz (100g)",
      calories: 85,
      protein: 20.1,
      fat: 0.5,
      omega3: 0.3,
      highlights: ["Very low fat", "High protein", "Iodine rich", "Low mercury"]
    },
    {
      name: "Gulf Grouper",
      image: "https://images.unsplash.com/photo-1535140728325-781d415ea75c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      serving: "3.5 oz (100g)",
      calories: 92,
      protein: 19.4,
      fat: 1.0,
      omega3: 0.2,
      highlights: ["Lean fish", "Potassium rich", "Low sodium", "Vitamin B6"]
    },
    {
      name: "Blue Crab",
      image: "https://images.unsplash.com/photo-1582564286061-1a07bae9ea16?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      serving: "3.5 oz (100g)",
      calories: 87,
      protein: 18.1,
      fat: 1.1,
      omega3: 0.4,
      highlights: ["Zinc rich", "Low calories", "Copper source", "Vitamin B12"]
    },
    {
      name: "Gulf Oysters",
      image: "https://images.unsplash.com/photo-1606731219412-3b1e4d0f7a90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      serving: "3.5 oz (100g)",
      calories: 68,
      protein: 7.1,
      fat: 2.3,
      omega3: 0.4,
      highlights: ["Zinc powerhouse", "Iron rich", "B vitamins", "Low calories"]
    },
    {
      name: "Gulf Flounder",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      serving: "3.5 oz (100g)",
      calories: 86,
      protein: 17.9,
      fat: 1.2,
      omega3: 0.2,
      highlights: ["Very lean", "Magnesium rich", "Low mercury", "Phosphorus"]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-ocean-600 to-seafoam-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Nutritional Information
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Discover the incredible health benefits and nutritional value of Gulf Coast seafood.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Health Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">
            Why Seafood is So Good for You
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <benefit.icon className="h-12 w-12 text-ocean-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Nutrition Facts */}
        <section>
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
            Nutritional Profiles
          </h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {seafoodNutrition.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">Per {item.serving}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-gray-50 rounded">
                      <div className="text-2xl font-bold text-ocean-600">{item.calories}</div>
                      <div className="text-xs text-gray-600">Calories</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded">
                      <div className="text-2xl font-bold text-ocean-600">{item.protein}g</div>
                      <div className="text-xs text-gray-600">Protein</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded">
                      <div className="text-2xl font-bold text-ocean-600">{item.fat}g</div>
                      <div className="text-xs text-gray-600">Total Fat</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded">
                      <div className="text-2xl font-bold text-ocean-600">{item.omega3}g</div>
                      <div className="text-xs text-gray-600">Omega-3</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight, hIndex) => (
                        <span 
                          key={hIndex}
                          className="bg-seafoam-100 text-seafoam-700 text-xs px-2 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Information */}
        <section className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
            Seafood and Special Diets
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Keto & Low-Carb</h3>
              <p className="text-gray-600 text-sm mb-2">
                All our seafood is naturally carb-free and perfect for ketogenic diets.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Zero carbohydrates</li>
                <li>• High healthy fats (fish)</li>
                <li>• Complete proteins</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Mediterranean Diet</h3>
              <p className="text-gray-600 text-sm mb-2">
                Seafood is a cornerstone of the heart-healthy Mediterranean diet.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Rich in omega-3s</li>
                <li>• Anti-inflammatory</li>
                <li>• Heart protective</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Paleo & Whole30</h3>
              <p className="text-gray-600 text-sm mb-2">
                Wild-caught seafood is compliant with most elimination diets.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Unprocessed protein</li>
                <li>• No additives</li>
                <li>• Nutrient dense</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Mercury Information */}
        <section className="mt-12 bg-blue-50 rounded-lg p-8">
          <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
            Mercury Levels in Gulf Seafood
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Low Mercury</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Shrimp</li>
                <li>• Crab</li>
                <li>• Oysters</li>
                <li>• Flounder</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-700 mb-2">Moderate Mercury</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Red Snapper</li>
                <li>• Grouper</li>
                <li>• Mahi Mahi</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Recommendation</h4>
              <p className="text-sm text-gray-600">
                The FDA recommends 2-3 servings of seafood per week. Our Gulf seafood is well within safe consumption guidelines.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
} 