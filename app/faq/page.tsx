'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqData = [
    {
      category: "Orders & Delivery",
      questions: [
        {
          question: "What is your delivery area?",
          answer: "We deliver throughout the Florida Panhandle, with same-day delivery available in Apalachicola, Tallahassee, and surrounding areas. For locations outside our standard delivery zone, please contact us for special arrangements."
        },
        {
          question: "How quickly can I get my seafood?",
          answer: "We pride ourselves on our 'From the Boat to You in One Day' guarantee. Most orders placed before 2 PM can be delivered the same day. For wholesale orders, we recommend placing orders 24 hours in advance."
        },
        {
          question: "Do you have minimum order requirements?",
          answer: "For retail customers, there's no minimum order. For wholesale customers, we have a $100 minimum for free delivery. Smaller orders can be picked up at our facility."
        }
      ]
    },
    {
      category: "Product Quality",
      questions: [
        {
          question: "How do you ensure freshness?",
          answer: "All our seafood is caught daily from Gulf waters and kept on ice immediately. We maintain a cold chain from boat to delivery, ensuring your seafood arrives at peak freshness."
        },
        {
          question: "Is your seafood wild-caught or farm-raised?",
          answer: "The majority of our seafood is wild-caught from Gulf waters. When we do carry farm-raised products, they are clearly labeled and meet our high-quality standards."
        },
        {
          question: "Do you test for mercury and contaminants?",
          answer: "Yes, we work with certified labs to regularly test our seafood for mercury levels and other contaminants. All our products meet or exceed FDA safety standards."
        }
      ]
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          question: "How is seafood priced?",
          answer: "Our prices reflect daily market conditions and seasonal availability. We update prices regularly to ensure you get the best value while supporting local fishermen."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, check, all major credit cards, and offer net-30 terms for qualified wholesale customers with approved credit."
        },
        {
          question: "Do you offer bulk pricing?",
          answer: "Yes! We offer tiered wholesale pricing for restaurants, retailers, and large orders. Contact us for a custom quote based on your needs."
        }
      ]
    },
    {
      category: "Preparation & Storage",
      questions: [
        {
          question: "How should I store fresh seafood?",
          answer: "Keep seafood on ice in the refrigerator and use within 1-2 days of purchase. For shellfish like oysters and clams, keep them alive until ready to cook."
        },
        {
          question: "Can you clean and prepare the seafood for me?",
          answer: "Absolutely! We offer filleting, cleaning, and preparation services for most seafood. Just let us know your preferences when ordering."
        },
        {
          question: "Do you sell frozen seafood?",
          answer: "While we specialize in fresh, daily-caught seafood, we do carry some frozen specialty items. Our frozen products are flash-frozen to maintain quality."
        }
      ]
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-ocean-600 to-seafoam-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Find answers to common questions about our seafood, delivery, and services.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {faqData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
              {category.category}
            </h2>
            
            <div className="space-y-4">
              {category.questions.map((faq, faqIndex) => {
                const globalIndex = categoryIndex * 100 + faqIndex // Simple way to create unique indices
                const isOpen = openFAQ === globalIndex
                
                return (
                  <div 
                    key={faqIndex}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(globalIndex)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-medium text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      {isOpen ? (
                        <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    
                    {isOpen && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}

        {/* Contact Section */}
        <div className="mt-16 bg-ocean-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Our team is here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-ocean-600 text-white px-6 py-3 rounded-md hover:bg-ocean-700 transition-colors font-medium"
            >
              Contact Us
            </a>
            <a 
              href="tel:(850)653-9419"
              className="border border-ocean-600 text-ocean-600 px-6 py-3 rounded-md hover:bg-ocean-50 transition-colors font-medium"
            >
              Call (850) 653-9419
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 