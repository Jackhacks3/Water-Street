'use client'

import { Anchor, Users, Award, Truck } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Anchor, label: 'Years in Business', value: '25+' },
    { icon: Users, label: 'Local Fishermen Partners', value: '150+' },
    { icon: Award, label: 'Restaurant Clients', value: '500+' },
    { icon: Truck, label: 'Daily Deliveries', value: '200+' }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Florida's Premier Seafood Distributor
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              For over 25 years, Water Street Seafood has been the trusted bridge between 
              Apalachicola's fishing boats and tables across America. We work directly with 
              local fishermen to ensure the freshest catch reaches you within hours of being pulled from the Gulf.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our commitment goes beyond just selling seafood. We're preserving a way of life, 
              supporting local fishing families, and bringing you the authentic taste of the Gulf Coast 
              with every order.
            </p>
            
            {/* Values */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-ocean-100 p-2 rounded-lg mt-1">
                  <Anchor className="h-5 w-5 text-ocean-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Authentically Local</h3>
                  <p className="text-gray-600">Direct relationships with Apalachicola Bay fishermen</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-seafoam-100 p-2 rounded-lg mt-1">
                  <Award className="h-5 w-5 text-seafoam-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Uncompromising Quality</h3>
                  <p className="text-gray-600">Restaurant-grade standards for every customer</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-coral-100 p-2 rounded-lg mt-1">
                  <Truck className="h-5 w-5 text-coral-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Swift Delivery</h3>
                  <p className="text-gray-600">From boat to your door in one day</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Apalachicola fishing boats"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Apalachicola Bay</h3>
              <p className="text-gray-200">Where our story begins</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-50 p-4 rounded-2xl mb-4 inline-block">
                <stat.icon className="h-8 w-8 text-ocean-600 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About 