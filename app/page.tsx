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
import { Calendar, Building2, Book, ShoppingBag, Star, Clock, Truck, Shield, Phone } from 'lucide-react'

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

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Quick Links Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Explore Our Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover tools and resources designed to help you find, order, and prepare the finest Gulf seafood.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`${link.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <link.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-ocean-600 transition-colors">
                  {link.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <DailyCatch />
      <FeaturedProducts />

      {/* Guarantees Section */}
      <div className="py-20 bg-ocean-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              The Water Street Promise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why thousands of customers trust us for their seafood needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="text-center">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <guarantee.icon className="h-10 w-10 text-ocean-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {guarantee.title}
                </h3>
                <p className="text-gray-600">
                  {guarantee.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <About />
      <Testimonials />

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-ocean-600 to-seafoam-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Ready to Experience the Freshest Gulf Seafood?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Start shopping our daily fresh catch or explore our wholesale options for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-white text-ocean-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <ShoppingBag className="h-5 w-5" />
              <span>Shop Fresh Catch</span>
            </Link>
            <Link
              href="/wholesale"
              className="bg-coral-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-coral-600 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Building2 className="h-5 w-5" />
              <span>Wholesale Inquiry</span>
            </Link>
            <a
              href="tel:850-653-9419"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-ocean-600 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Call Us Today</span>
            </a>
          </div>
        </div>
      </div>

      <Footer />
      <ChatBot />
    </main>
  )
} 