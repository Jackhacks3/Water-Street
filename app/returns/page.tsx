'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Shield, RefreshCw, Clock, Phone } from 'lucide-react'

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-ocean-600 to-seafoam-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Returns & Satisfaction Guarantee
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Your satisfaction is our priority. We stand behind the quality of our seafood 100%.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Guarantee Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center space-x-4 mb-6">
              <Shield className="h-12 w-12 text-ocean-600" />
              <div>
                <h2 className="text-2xl font-display font-bold text-gray-900">
                  100% Satisfaction Guarantee
                </h2>
                <p className="text-gray-600">
                  We guarantee the freshness and quality of every item we deliver
                </p>
              </div>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At Water Street Seafood, we're committed to delivering the freshest, highest-quality 
              Gulf seafood to your door. If you're not completely satisfied with your purchase, 
              we'll make it right with a full refund or replacement.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-ocean-50 rounded-lg">
                <RefreshCw className="h-8 w-8 text-ocean-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Easy Returns</h3>
                <p className="text-sm text-gray-600">Simple process, no hassle</p>
              </div>
              <div className="text-center p-4 bg-ocean-50 rounded-lg">
                <Clock className="h-8 w-8 text-ocean-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Quick Response</h3>
                <p className="text-sm text-gray-600">Same-day resolution</p>
              </div>
              <div className="text-center p-4 bg-ocean-50 rounded-lg">
                <Phone className="h-8 w-8 text-ocean-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900">Personal Service</h3>
                <p className="text-sm text-gray-600">Talk directly to our team</p>
              </div>
            </div>
          </div>
        </section>

        {/* Return Reasons */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
            Valid Reasons for Returns
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Issues</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Seafood doesn't meet our freshness standards</li>
                <li>• Product appears damaged or spoiled upon delivery</li>
                <li>• Temperature was not properly maintained during shipping</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Order Errors</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Wrong item delivered</li>
                <li>• Incorrect quantity or weight</li>
                <li>• Missing items from your order</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Delivery Problems</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Late delivery outside promised window</li>
                <li>• Package left in inappropriate location</li>
                <li>• Delivery address confusion</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Return Process */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
            How to Return an Item
          </h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-ocean-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Contact Us Immediately</h3>
                  <p className="text-gray-600">
                    Call (850) 653-9419 or email orders@waterstreetseafood.com within 24 hours 
                    of delivery. Describe the issue and provide your order number.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-ocean-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Document the Issue</h3>
                  <p className="text-gray-600">
                    If possible, take photos of the product and packaging. This helps us 
                    improve our service and process your return faster.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-ocean-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Keep Product Refrigerated</h3>
                  <p className="text-gray-600">
                    Continue to store the seafood properly while we arrange pickup or 
                    provide return instructions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-ocean-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Receive Resolution</h3>
                  <p className="text-gray-600">
                    We'll issue a full refund, send a replacement, or provide store credit 
                    - your choice. Most issues are resolved the same day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Refund Policy */}
        <section className="mb-12">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
            Refund Policy
          </h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Refund Options</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-ocean-600 mr-2">•</span>
                    <span><strong>Full Refund:</strong> Money back to original payment method</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ocean-600 mr-2">•</span>
                    <span><strong>Store Credit:</strong> Credit for future purchases (no expiration)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ocean-600 mr-2">•</span>
                    <span><strong>Replacement:</strong> Fresh product sent at no charge</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Processing Time</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-ocean-600 mr-2">•</span>
                    <span><strong>Credit Cards:</strong> 3-5 business days</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ocean-600 mr-2">•</span>
                    <span><strong>Cash/Check:</strong> Same day if paid on delivery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-ocean-600 mr-2">•</span>
                    <span><strong>Store Credit:</strong> Applied immediately</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-coral-50 rounded-lg p-8">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
            Need Help with a Return?
          </h2>
          <p className="text-gray-600 mb-6">
            Our customer service team is here to help resolve any issues quickly and fairly.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-1">Phone: (850) 653-9419</p>
              <p className="text-gray-600 mb-1">Emergency: (850) 653-FISH</p>
              <p className="text-gray-600">Hours: Mon-Fri 5AM-6PM, Sat 5AM-4PM, Sun 6AM-2PM</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-1">orders@waterstreetseafood.com</p>
              <p className="text-gray-600 mb-1">Response time: Within 4 hours</p>
              <p className="text-gray-600">Include your order number for faster service</p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-white rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Remember:</strong> Time is critical with seafood returns. Contact us within 24 hours 
              of delivery for the fastest resolution. We're committed to making every customer experience 
              a positive one.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
} 