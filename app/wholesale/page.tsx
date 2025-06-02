'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Building2, Truck, Clock, Shield, Users, Calculator, Phone, Mail, Star, CheckCircle } from 'lucide-react'

export default function WholesalePage() {
  const [activeTab, setActiveTab] = useState('overview')

  const pricingTiers = [
    {
      tier: 'Bronze',
      minOrder: '$500',
      discount: '10%',
      features: ['Weekly delivery', 'Email support', 'Standard cuts', 'Net 30 terms'],
      color: 'bg-amber-100 border-amber-300 text-amber-800'
    },
    {
      tier: 'Silver',
      minOrder: '$1,000',
      discount: '15%',
      features: ['Bi-weekly delivery', 'Phone support', 'Custom cuts', 'Net 30 terms', 'Dedicated rep'],
      color: 'bg-gray-100 border-gray-300 text-gray-800',
      popular: true
    },
    {
      tier: 'Gold',
      minOrder: '$2,500',
      discount: '20%',
      features: ['Daily delivery', '24/7 support', 'Premium cuts', 'Net 45 terms', 'Account manager', 'Priority inventory'],
      color: 'bg-yellow-100 border-yellow-300 text-yellow-800'
    },
    {
      tier: 'Platinum',
      minOrder: '$5,000',
      discount: '25%',
      features: ['Same-day delivery', 'White glove service', 'Exclusive products', 'Custom terms', 'Menu consulting', 'Chef visits'],
      color: 'bg-purple-100 border-purple-300 text-purple-800'
    }
  ]

  const services = [
    {
      icon: Truck,
      title: 'Reliable Delivery',
      description: 'Temperature-controlled trucks ensure your seafood arrives fresh, on time, every time.'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Order by 3 PM for next-day delivery. Emergency deliveries available for urgent needs.'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'Every product backed by our freshness guarantee. Not satisfied? We\'ll make it right immediately.'
    },
    {
      icon: Calculator,
      title: 'Custom Pricing',
      description: 'Volume-based pricing with transparent costs. No hidden fees, no surprises.'
    }
  ]

  const testimonials = [
    {
      name: 'Chef Roberto Martinez',
      restaurant: 'Coastal Bistro',
      location: 'Panama City, FL',
      quote: 'Water Street Seafood has been our trusted partner for 8 years. Their consistency and quality keep our customers coming back.',
      rating: 5
    },
    {
      name: 'Sarah Kim',
      restaurant: 'The Oyster House',
      location: 'Mobile, AL',
      quote: 'The freshest oysters and exceptional service. Our raw bar wouldn\'t be the same without their daily deliveries.',
      rating: 5
    },
    {
      name: 'Marcus Thompson',
      restaurant: 'Gulf Coast Grill',
      location: 'Pensacola, FL',
      quote: 'Professional team, competitive pricing, and the best red snapper in the Gulf. Highly recommend for any serious restaurant.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-ocean-600 to-seafoam-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Wholesale Partners
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
              Join 500+ restaurants and retailers who trust Water Street Seafood for premium Gulf seafood, 
              competitive pricing, and unmatched reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-ocean-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Request Quote
              </button>
              <button className="bg-coral-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-coral-600 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-ocean-600 mb-2">500+</div>
              <div className="text-gray-600">Restaurant Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-ocean-600 mb-2">99.8%</div>
              <div className="text-gray-600">On-Time Delivery</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-ocean-600 mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-ocean-600 mb-2">35+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'pricing', label: 'Pricing Tiers' },
              { id: 'products', label: 'Products' },
              { id: 'testimonials', label: 'Testimonials' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-ocean-500 text-ocean-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="py-16">
        {activeTab === 'overview' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                  <div className="bg-ocean-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="h-6 w-6 text-ocean-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Water Street Wholesale?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Direct from Source</h3>
                      <p className="text-gray-600">We work directly with local fishermen, cutting out middlemen for better prices and fresher seafood.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Custom Processing</h3>
                      <p className="text-gray-600">Tailored cuts and portions to meet your exact specifications and reduce kitchen prep time.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Inventory Management</h3>
                      <p className="text-gray-600">Real-time inventory updates and automated reordering to prevent stockouts.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Flexible Terms</h3>
                      <p className="text-gray-600">Net 30-45 payment terms with established credit. Volume discounts available.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Emergency Service</h3>
                      <p className="text-gray-600">Same-day emergency deliveries for last-minute needs and special events.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Menu Consulting</h3>
                      <p className="text-gray-600">Our culinary team helps develop new menu items and seasonal specials.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'pricing' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Wholesale Pricing Tiers</h2>
              <p className="text-xl text-gray-600">Choose the tier that fits your business needs and volume</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 shadow-md border-2 ${tier.color} relative ${tier.popular ? 'ring-2 ring-ocean-500' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-ocean-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.tier}</h3>
                    <div className="text-3xl font-bold text-ocean-600 mb-1">{tier.discount}</div>
                    <div className="text-sm text-gray-600">Discount off retail</div>
                    <div className="text-lg font-semibold text-gray-900 mt-2">Min Order: {tier.minOrder}</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-ocean-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-ocean-600 transition-colors">
                    Get Started
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gray-100 rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Need a Custom Solution?</h3>
              <p className="text-gray-600 mb-6">Large volume customers may qualify for custom pricing and terms. Contact our wholesale team for a personalized quote.</p>
              <button className="bg-coral-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-coral-600 transition-colors">
                Contact Wholesale Team
              </button>
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Wholesale Product Categories</h2>
              <p className="text-xl text-gray-600">Premium Gulf seafood available in bulk quantities</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: 'Fresh Fish',
                  items: ['Red Snapper', 'Grouper', 'Mahi Mahi', 'Flounder', 'Triggerfish'],
                  image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                },
                {
                  category: 'Shellfish',
                  items: ['Gulf Shrimp', 'Blue Crab', 'Oysters', 'Scallops', 'Crawfish'],
                  image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                },
                {
                  category: 'Premium Cuts',
                  items: ['Custom Fillets', 'Steaks', 'Whole Fish', 'Specialty Cuts', 'Portion Control'],
                  image: 'https://images.unsplash.com/photo-1535140728325-781d415ea75c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
                }
              ].map((category, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
                  <img src={category.image} alt={category.category} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.category}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="mt-6 w-full bg-ocean-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-ocean-600 transition-colors">
                      View Wholesale Prices
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'testimonials' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Partners Say</h2>
              <p className="text-xl text-gray-600">Trusted by restaurants and retailers across the Southeast</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 mb-4">"{testimonial.quote}"</blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.restaurant}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Contact Section */}
      <div className="bg-ocean-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
            <p className="text-xl opacity-90">Get started with a custom quote or schedule a consultation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-lg font-semibold mb-2">Call Our Team</h3>
              <p className="opacity-90">(850) 653-9419</p>
              <p className="text-sm opacity-75">Mon-Fri 7 AM - 6 PM</p>
            </div>
            <div className="text-center">
              <Mail className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="opacity-90">wholesale@waterstreetseafood.com</p>
              <p className="text-sm opacity-75">24-hour response time</p>
            </div>
            <div className="text-center">
              <Building2 className="h-12 w-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-lg font-semibold mb-2">Visit Our Facility</h3>
              <p className="opacity-90">Water Street, Apalachicola, FL</p>
              <p className="text-sm opacity-75">Tours available by appointment</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 