'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Clock, Users, ChefHat, Thermometer, AlertTriangle, BookOpen } from 'lucide-react'

export default function GuidesPage() {
  const guides = [
    {
      id: 1,
      title: "Perfect Grilled Fish",
      description: "Master the art of grilling fish without it sticking or falling apart",
      cookTime: "15-20 min",
      difficulty: "Beginner",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      steps: [
        "Preheat grill to medium-high heat",
        "Oil grates and fish lightly",
        "Season fish 15 minutes before cooking",
        "Grill 4-6 minutes per side for 1-inch thickness"
      ]
    },
    {
      id: 2,
      title: "Shrimp Preparation Guide",
      description: "Learn to peel, devein, and cook shrimp to perfection",
      cookTime: "5-10 min",
      difficulty: "Beginner",
      image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      steps: [
        "Remove shell starting from legs",
        "Make shallow cut along back to remove vein",
        "Rinse under cold water",
        "Cook until pink and curled, about 2-3 minutes per side"
      ]
    },
    {
      id: 3,
      title: "Oyster Shucking",
      description: "Safely open oysters like a professional shucker",
      cookTime: "2-3 min each",
      difficulty: "Intermediate",
      image: "https://images.unsplash.com/photo-1606731219412-3b1e4d0f7a90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      steps: [
        "Use proper oyster knife and protective glove",
        "Insert knife at hinge, twist to pop shell",
        "Slide knife along top shell to cut muscle",
        "Check for shell fragments before serving"
      ]
    }
  ]

  const tips = [
    {
      icon: Thermometer,
      title: "Temperature Guide",
      content: "Fish: 145°F internal temp. Shrimp: 145°F and opaque. Scallops: 145°F and opaque."
    },
    {
      icon: Clock,
      title: "Timing Rules",
      content: "General rule: 10 minutes per inch of thickness for fish. Shellfish cook much faster."
    },
    {
      icon: AlertTriangle,
      title: "Safety First",
      content: "Keep seafood cold until cooking. Never leave at room temperature for more than 2 hours."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-ocean-600 to-seafoam-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Cooking Guides
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Master the art of seafood preparation with our expert guides and professional tips.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Tips */}
        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">Essential Tips</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tips.map((tip, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <tip.icon className="h-8 w-8 text-ocean-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cooking Guides */}
        <section>
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">Step-by-Step Guides</h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <div key={guide.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={guide.image} 
                  alt={guide.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{guide.description}</p>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{guide.cookTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ChefHat className="h-4 w-4" />
                      <span>{guide.difficulty}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Steps:</h4>
                    <ol className="space-y-1 text-sm text-gray-600">
                      {guide.steps.map((step, index) => (
                        <li key={index} className="flex">
                          <span className="text-ocean-600 font-medium mr-2">{index + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Resources */}
        <section className="mt-16 bg-white rounded-lg shadow-md p-8">
          <div className="flex items-center space-x-2 mb-6">
            <BookOpen className="h-6 w-6 text-ocean-600" />
            <h2 className="text-2xl font-display font-bold text-gray-900">More Resources</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Seafood Storage</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Fresh fish: Use within 1-2 days, store on ice</li>
                <li>• Shellfish: Keep alive until cooking</li>
                <li>• Frozen seafood: Thaw in refrigerator overnight</li>
                <li>• Never refreeze previously frozen seafood</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quality Indicators</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Fresh fish: Clear eyes, bright red gills, firm flesh</li>
                <li>• Shrimp: Firm texture, mild ocean smell</li>
                <li>• Oysters: Tightly closed shells, briny smell</li>
                <li>• Trust your nose - fresh seafood smells like the ocean</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
} 