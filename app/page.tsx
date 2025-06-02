'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import FeaturedProducts from '@/components/FeaturedProducts'
import DailyCatch from '@/components/DailyCatch'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import ChatBot from '@/components/ChatBot'
import Link from 'next/link'
import { Calendar, Building2, Book, ShoppingBag, Star, Clock, Truck, Shield, Phone, Award, Waves, ArrowRight } from 'lucide-react'
import WeatherWidget from '@/components/WeatherWidget'
import LiveInventory from '@/components/LiveInventory'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const quickLinks = [
    {
      title: 'Seasonal Calendar',
      description: 'Discover peak seasons for the freshest Gulf seafood',
      icon: Calendar,
      href: '/seasonal-calendar',
      color: 'bg-ocean-500'
    },
    {
      title: 'Wholesale Portal',
      description: 'Special pricing for restaurants and retailers',
      icon: Building2,
      href: '/wholesale',
      color: 'bg-seafoam-500'
    },
    {
      title: 'Recipe Collection',
      description: 'Chef-approved recipes for every seafood variety',
      icon: Book,
      href: '/recipes',
      color: 'bg-coral-500'
    },
    {
      title: 'Shop Now',
      description: 'Browse our fresh catch and place your order',
      icon: ShoppingBag,
      href: '/products',
      color: 'bg-sandy-500'
    }
  ]

  const guarantees = [
    {
      icon: Clock,
      title: 'From Boat to You in One Day',
      description: 'Our signature promise ensures maximum freshness'
    },
    {
      icon: Truck,
      title: 'Temperature-Controlled Delivery',
      description: 'Insulated trucks maintain perfect conditions'
    },
    {
      icon: Shield,
      title: '100% Freshness Guarantee',
      description: 'Not satisfied? Full refund within 24 hours'
    },
    {
      icon: Star,
      title: '35+ Years of Excellence',
      description: 'Trusted by 500+ restaurants across the Southeast'
    }
  ]

  const features = [
    {
      icon: <Clock className="h-8 w-8 text-ocean-600" />,
      title: "From Boat to You in One Day",
      description: "Our signature promise - fresh Gulf seafood delivered within 24 hours of catch"
    },
    {
      icon: <Truck className="h-8 w-8 text-ocean-600" />,
      title: "Free Shipping",
      description: "Complimentary shipping on orders over $75 throughout the Southeast"
    },
    {
      icon: <Award className="h-8 w-8 text-ocean-600" />,
      title: "Premium Quality Guarantee",
      description: "100% satisfaction guarantee or your money back, no questions asked"
    },
    {
      icon: <Waves className="h-8 w-8 text-ocean-600" />,
      title: "Sustainable Fishing",
      description: "Supporting local fishermen and responsible Gulf Coast fishing practices"
    }
  ]

  const testimonials = [
    {
      name: "Chef Maria Rodriguez",
      restaurant: "Gulf Coast Bistro",
      quote: "Water Street Seafood has been our go-to supplier for 5 years. The quality is unmatched.",
      rating: 5
    },
    {
      name: "Sarah Thompson",
      location: "Tallahassee, FL",
      quote: "The subscription service is amazing! Fresh seafood delivered to my door every week.",
      rating: 5
    },
    {
      name: "Mike's Seafood Market",
      location: "Panama City",
      quote: "Reliable wholesale partner with the freshest Gulf seafood. Highly recommended!",
      rating: 5
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-ocean-600 via-seafoam-600 to-ocean-700 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
                Fresh Gulf Coast
                <span className="block text-seafoam-200">Seafood Daily</span>
              </h1>
              <p className="text-xl mb-8 opacity-90 max-w-lg">
                Experience the finest fresh seafood from the Gulf of Mexico, 
                delivered directly from our boats to your table in record time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/inventory"
                  className="bg-white text-ocean-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  View Live Inventory
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/subscriptions"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-ocean-600 transition-colors"
                >
                  Start Subscription
                </Link>
              </div>
            </div>
            
            <div className="lg:text-right">
              <div className="inline-block bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6">
                <WeatherWidget />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Why Choose Water Street Seafood?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Florida Panhandle's largest seafood distributor, serving fresh Gulf catches since 1985
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Inventory Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Real-Time Fresh Catch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what's available right now - live inventory updates from our boats and facility
            </p>
          </div>
          
          <LiveInventory />
          
          <div className="text-center mt-8">
            <Link
              href="/inventory"
              className="inline-flex items-center text-ocean-600 hover:text-ocean-700 font-semibold"
            >
              View Full Live Inventory
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Today's Featured Catch
            </h2>
            <p className="text-xl text-gray-600">
              Handpicked selections from this morning's boats
            </p>
          </div>
          <FeaturedProducts />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-ocean-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by restaurants, markets, and seafood lovers across the Southeast
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.restaurant || testimonial.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-ocean-600 to-seafoam-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Ready to Experience the Freshest Gulf Seafood?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers who trust us for their seafood needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-white text-ocean-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Shop Fresh Seafood
            </Link>
            <Link
              href="/subscriptions"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-ocean-600 transition-colors"
            >
              Start Weekly Delivery
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </main>
  )
} 