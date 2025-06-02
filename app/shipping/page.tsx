'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Truck, Clock, MapPin, Thermometer, CreditCard, Shield } from 'lucide-react'

export default function ShippingPage() {
  const deliveryZones = [
    {
      zone: "Zone 1 - Local",
      areas: ["Apalachicola", "Eastpoint", "Carrabelle", "St. George Island"],
      delivery: "Same day",
      cost: "FREE over $75, $15 under",
      time: "Within 4 hours"
    },
    {
      zone: "Zone 2 - Regional",
      areas: ["Tallahassee", "Panama City", "Marianna", "Quincy"],
      delivery: "Same/Next day",
      cost: "FREE over $150, $25 under",
      time: "4-8 hours"
    },
    {
      zone: "Zone 3 - Extended",
      areas: ["Pensacola", "Dothan", "Valdosta", "Gainesville"],
      delivery: "Next day",
      cost: "FREE over $300, $45 under",
      time: "Next day by 2 PM"
    }
  ]

  const shippingMethods = [
    {
      icon: Truck,
      title: "Local Delivery",
      description: "Our refrigerated trucks deliver throughout the Panhandle",
      features: ["Temperature controlled", "GPS tracked", "Insured transport"]
    },
    {
      icon: Clock,
      title: "Express Service",
      description: "Emergency same-day delivery for urgent orders",
      features: ["Within 2 hours", "Available 7 days", "$50 rush fee"]
    },
    {
      icon: MapPin,
      title: "Pickup Service",
      description: "Save on delivery costs by picking up at our facility",
      features: ["No minimum order", "Call ahead", "Fresh guarantee"]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-ocean-600 to-seafoam-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Shipping & Delivery
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Fast, reliable delivery of fresh Gulf seafood throughout the Florida Panhandle and beyond.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Delivery Methods */}
        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
            Delivery Options
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {shippingMethods.map((method, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <method.icon className="h-12 w-12 text-ocean-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <ul className="space-y-2">
                  {method.features.map((feature, fIndex) => (
                    <li key={fIndex} className="text-sm text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-ocean-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Delivery Zones */}
        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
            Delivery Zones & Pricing
          </h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {deliveryZones.map((zone, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-4">
                  {zone.zone}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Coverage Areas</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {zone.areas.map((area, aIndex) => (
                        <li key={aIndex}>• {area}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Delivery Time:</span>
                      <span className="text-sm text-ocean-600 font-medium">{zone.delivery}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Delivery Cost:</span>
                      <span className="text-sm text-ocean-600 font-medium">{zone.cost}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">Typical Window:</span>
                      <span className="text-sm text-ocean-600 font-medium">{zone.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Special Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">
            Our Delivery Guarantee
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Thermometer className="h-10 w-10 text-ocean-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Temperature Control</h3>
              <p className="text-sm text-gray-600">Maintained at 32-38°F throughout delivery</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Shield className="h-10 w-10 text-ocean-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Freshness Guarantee</h3>
              <p className="text-sm text-gray-600">100% satisfaction or full refund</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Clock className="h-10 w-10 text-ocean-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">On-Time Delivery</h3>
              <p className="text-sm text-gray-600">Delivered within promised time window</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <CreditCard className="h-10 w-10 text-ocean-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Secure Payment</h3>
              <p className="text-sm text-gray-600">Pay online or on delivery</p>
            </div>
          </div>
        </section>

        {/* Ordering Instructions */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
            How to Order for Delivery
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Standard Orders</h3>
              <ol className="space-y-3 text-gray-600">
                <li className="flex">
                  <span className="text-ocean-600 font-bold mr-3">1.</span>
                  <span>Browse our daily fresh catch online or call (850) 653-9419</span>
                </li>
                <li className="flex">
                  <span className="text-ocean-600 font-bold mr-3">2.</span>
                  <span>Add items to cart and select delivery address</span>
                </li>
                <li className="flex">
                  <span className="text-ocean-600 font-bold mr-3">3.</span>
                  <span>Choose delivery time slot and payment method</span>
                </li>
                <li className="flex">
                  <span className="text-ocean-600 font-bold mr-3">4.</span>
                  <span>Receive confirmation and tracking information</span>
                </li>
              </ol>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Rush Orders</h3>
              <ol className="space-y-3 text-gray-600">
                <li className="flex">
                  <span className="text-coral-600 font-bold mr-3">1.</span>
                  <span>Call our emergency line: (850) 653-FISH</span>
                </li>
                <li className="flex">
                  <span className="text-coral-600 font-bold mr-3">2.</span>
                  <span>Specify your emergency timeline and location</span>
                </li>
                <li className="flex">
                  <span className="text-coral-600 font-bold mr-3">3.</span>
                  <span>We'll confirm availability and rush pricing</span>
                </li>
                <li className="flex">
                  <span className="text-coral-600 font-bold mr-3">4.</span>
                  <span>Delivery typically within 2 hours</span>
                </li>
              </ol>
            </div>
          </div>

          <div className="mt-8 p-4 bg-ocean-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Important Notes:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Orders must be placed by 2 PM for same-day delivery</li>
              <li>• Weekend deliveries available with 24-hour notice</li>
              <li>• Special handling available for large events and catering</li>
              <li>• Weather conditions may affect delivery schedules</li>
            </ul>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
} 