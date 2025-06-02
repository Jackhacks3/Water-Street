'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import N8nChatWidget from '@/components/N8nChatWidget'
import { Check, Calendar, Truck, Repeat, Gift, Star, Clock, Users } from 'lucide-react'

export default function SubscriptionsPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [selectedFrequency, setSelectedFrequency] = useState('weekly')

  const plans = [
    {
      id: 'explorer',
      name: 'Gulf Explorer',
      description: 'Perfect for trying new seafood varieties',
      basePrice: 49.99,
      weeklyPrice: 49.99,
      biweeklyPrice: 47.99,
      monthlyPrice: 45.99,
      weight: '2-3 lbs',
      servings: '3-4 people',
      varieties: '2-3 types',
      popular: false,
      features: [
        'Seasonal variety selection',
        'Recipe cards included',
        'Basic preparation guide',
        'Free shipping',
        'Cancel anytime'
      ]
    },
    {
      id: 'captain',
      name: 'Captain\'s Choice',
      description: 'Our most popular selection for seafood lovers',
      basePrice: 89.99,
      weeklyPrice: 89.99,
      biweeklyPrice: 85.99,
      monthlyPrice: 79.99,
      weight: '4-5 lbs',
      servings: '6-8 people',
      varieties: '3-4 types',
      popular: true,
      features: [
        'Premium seafood selection',
        'Chef-curated varieties',
        'Detailed cooking instructions',
        'Nutritional information',
        'Priority customer support',
        'Free shipping',
        'Flexible scheduling'
      ]
    },
    {
      id: 'fleet',
      name: 'Fleet Commander',
      description: 'Premium selection for serious seafood enthusiasts',
      basePrice: 149.99,
      weeklyPrice: 149.99,
      biweeklyPrice: 142.99,
      monthlyPrice: 129.99,
      weight: '6-8 lbs',
      servings: '10-12 people',
      varieties: '4-6 types',
      popular: false,
      features: [
        'Luxury seafood varieties',
        'Rare and seasonal catches',
        'Personal chef recommendations',
        'Wine pairing suggestions',
        'Video cooking tutorials',
        'Dedicated account manager',
        'Free expedited shipping',
        'Custom requests accepted'
      ]
    }
  ]

  const frequencies = [
    { id: 'weekly', name: 'Weekly', description: 'Fresh delivery every week', discount: 0 },
    { id: 'biweekly', name: 'Bi-weekly', description: 'Delivery every 2 weeks', discount: 3 },
    { id: 'monthly', name: 'Monthly', description: 'Once per month', discount: 8 }
  ]

  const getCurrentPrice = (plan: typeof plans[0]) => {
    switch (selectedFrequency) {
      case 'weekly': return plan.weeklyPrice
      case 'biweekly': return plan.biweeklyPrice
      case 'monthly': return plan.monthlyPrice
      default: return plan.basePrice
    }
  }

  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Tallahassee, FL",
      quote: "The Captain's Choice has completely changed how we eat seafood. Every delivery is like Christmas morning!",
      rating: 5,
      plan: "Captain's Choice"
    },
    {
      name: "Chef Miguel Santos",
      location: "Panama City, FL",
      quote: "As a professional chef, I'm impressed by the quality and variety. Perfect for my family dinners.",
      rating: 5,
      plan: "Fleet Commander"
    },
    {
      name: "The Johnson Family",
      location: "Pensacola, FL",
      quote: "Our kids actually ask for fish night now! The recipes make it so easy to prepare.",
      rating: 5,
      plan: "Gulf Explorer"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-ocean-600 to-seafoam-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Fresh Seafood Subscriptions
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Get the freshest Gulf Coast seafood delivered to your door on your schedule. 
            Handpicked by our experts, delivered by our promise.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">
            Why Choose Our Subscription?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Calendar className="h-12 w-12 text-ocean-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600">Choose weekly, bi-weekly, or monthly deliveries</p>
            </div>
            <div className="text-center">
              <Truck className="h-12 w-12 text-ocean-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Shipping</h3>
              <p className="text-gray-600">No delivery fees on all subscription orders</p>
            </div>
            <div className="text-center">
              <Repeat className="h-12 w-12 text-ocean-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Skip or Cancel</h3>
              <p className="text-gray-600">Pause, skip, or cancel anytime without fees</p>
            </div>
            <div className="text-center">
              <Gift className="h-12 w-12 text-ocean-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Surprise Varieties</h3>
              <p className="text-gray-600">Discover new seafood with every delivery</p>
            </div>
          </div>
        </section>

        {/* Frequency Selection */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-6 text-center">
            Choose Your Delivery Frequency
          </h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-4 bg-white p-2 rounded-lg shadow-sm border">
              {frequencies.map((frequency) => (
                <button
                  key={frequency.id}
                  onClick={() => setSelectedFrequency(frequency.id)}
                  className={`px-6 py-3 rounded-md text-center transition-colors ${
                    selectedFrequency === frequency.id
                      ? 'bg-ocean-600 text-white'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="font-semibold">{frequency.name}</div>
                  <div className="text-sm opacity-75">{frequency.description}</div>
                  {frequency.discount > 0 && (
                    <div className="text-sm font-medium text-green-600">
                      Save {frequency.discount}%
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Subscription Plans */}
        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">
            Choose Your Plan
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-lg shadow-lg border-2 transition-all ${
                  plan.popular
                    ? 'border-ocean-600 ring-2 ring-ocean-600 ring-opacity-50'
                    : selectedPlan === plan.id
                    ? 'border-ocean-600'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-ocean-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-gray-900">
                        ${getCurrentPrice(plan)}
                      </span>
                      <span className="text-gray-600 ml-2">/{selectedFrequency}</span>
                    </div>
                    {selectedFrequency !== 'weekly' && plan.weeklyPrice !== getCurrentPrice(plan) && (
                      <div className="text-sm text-green-600 font-medium">
                        Save ${(plan.weeklyPrice - getCurrentPrice(plan)).toFixed(2)} per delivery
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <span className="text-gray-600">Weight:</span>
                      <span className="font-medium ml-1">{plan.weight}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Serves:</span>
                      <span className="font-medium ml-1">{plan.servings}</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-gray-600">Varieties:</span>
                      <span className="font-medium ml-1">{plan.varieties}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
                      selectedPlan === plan.id
                        ? 'bg-ocean-600 text-white'
                        : plan.popular
                        ? 'bg-ocean-600 text-white hover:bg-ocean-700'
                        : 'border border-ocean-600 text-ocean-600 hover:bg-ocean-50'
                    }`}
                  >
                    {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16 bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-ocean-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-ocean-600">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Choose Your Plan</h3>
              <p className="text-gray-600 text-sm">
                Select the perfect subscription plan for your household size and preferences
              </p>
            </div>

            <div className="text-center">
              <div className="bg-ocean-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-ocean-600">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">We Curate</h3>
              <p className="text-gray-600 text-sm">
                Our experts handpick the freshest, highest-quality seafood from daily catches
              </p>
            </div>

            <div className="text-center">
              <div className="bg-ocean-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-ocean-600">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fresh Delivery</h3>
              <p className="text-gray-600 text-sm">
                Receive your seafood box with recipes and cooking instructions
              </p>
            </div>

            <div className="text-center">
              <div className="bg-ocean-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-ocean-600">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Enjoy & Repeat</h3>
              <p className="text-gray-600 text-sm">
                Cook amazing meals and look forward to your next delivery
              </p>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">
            What Our Subscribers Say
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                  <div className="text-sm text-ocean-600 font-medium">
                    {testimonial.plan} Subscriber
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">
            Subscription FAQ
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Can I customize my selections?</h3>
              <p className="text-gray-600 text-sm mb-4">
                While we curate each box for optimal variety and seasonality, Fleet Commander 
                subscribers can make custom requests, and all subscribers can specify dietary 
                restrictions or allergies.
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">What if I'm not satisfied?</h3>
              <p className="text-gray-600 text-sm mb-4">
                We guarantee 100% satisfaction. If you're not happy with any delivery, 
                contact us within 24 hours for a full refund or replacement.
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">Can I pause my subscription?</h3>
              <p className="text-gray-600 text-sm">
                Yes! You can skip deliveries, pause your subscription, or cancel anytime 
                through your account dashboard or by contacting customer service.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">How is freshness guaranteed?</h3>
              <p className="text-gray-600 text-sm mb-4">
                All seafood is caught within 24 hours of shipment and maintained in our 
                temperature-controlled cold chain from boat to your door.
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">What's the delivery schedule?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Deliveries are typically made Tuesday through Friday. You'll receive tracking 
                information 24 hours before delivery and can choose your preferred delivery window.
              </p>

              <h3 className="font-semibold text-gray-900 mb-2">Are gift subscriptions available?</h3>
              <p className="text-gray-600 text-sm">
                Yes! Gift subscriptions are available for 1, 3, 6, or 12 months. Perfect for 
                the seafood lover in your life.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <N8nChatWidget />
    </div>
  )
} 