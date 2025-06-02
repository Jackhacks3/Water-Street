'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Anchor, Award, Users, Truck, Heart, Shield, Clock, Fish } from 'lucide-react'

export default function AboutPage() {
  const stats = [
    { number: '1987', label: 'Founded', icon: Anchor },
    { number: '500+', label: 'Restaurant Partners', icon: Users },
    { number: '15+', label: 'Seafood Varieties', icon: Fish },
    { number: '24/7', label: 'Fresh Delivery', icon: Truck }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Family Heritage',
      description: 'Four generations of the Morrison family have called Apalachicola home, building relationships with local fishermen and perfecting our craft.'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'Every piece of seafood meets our rigorous standards. If it\'s not the freshest you\'ve ever had, we\'ll make it right.'
    },
    {
      icon: Clock,
      title: 'From Boat to You',
      description: 'Our promise of "From the Boat to You in One Day" isn\'t just marketing – it\'s how we\'ve operated for over 35 years.'
    },
    {
      icon: Award,
      title: 'Industry Leadership',
      description: 'Recognized as the Florida Panhandle\'s largest seafood distributor, supplying premium restaurants across the Southeast.'
    }
  ]

  const team = [
    {
      name: 'Captain Jim Morrison',
      title: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Third-generation Apalachicola fisherman who started Water Street Seafood with a single boat and a vision for quality.'
    },
    {
      name: 'Sarah Morrison-Wells',
      title: 'Operations Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b000?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Jim\'s daughter who brought modern logistics and technology to the family business while preserving traditional values.'
    },
    {
      name: 'Chef Marcus Rodriguez',
      title: 'Culinary Director',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Former James Beard nominee who ensures our restaurant partners receive the perfect cuts for their culinary creations.'
    },
    {
      name: 'Captain Elena Vasquez',
      title: 'Fleet Operations',
      image: 'https://images.unsplash.com/photo-1551836022-8b2858c9c69b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      bio: 'Manages our fishing fleet and coordinates with local fishermen to ensure consistent, high-quality catches.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-ocean-600 to-seafoam-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            From a small family operation to the Florida Panhandle's largest seafood distributor, 
            our commitment to freshness and quality has never wavered.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-ocean-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-ocean-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                Deep Roots in Gulf Waters
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Water Street Seafood began in 1987 when Captain Jim Morrison, a third-generation Apalachicola 
                  fisherman, recognized the need for a reliable seafood distributor that could maintain the 
                  quality and freshness that Gulf Coast waters are famous for.
                </p>
                <p>
                  Starting with a single fishing boat and a commitment to quality, Jim built relationships 
                  with local fishermen and restaurant owners throughout the Florida Panhandle. Word spread 
                  quickly about the exceptional freshness and reliability of Water Street Seafood.
                </p>
                <p>
                  Today, we operate a fleet of vessels and work with dozens of local fishermen, but our 
                  core mission remains unchanged: deliver the finest Gulf seafood from boat to table in 
                  record time, maintaining the highest standards of quality and freshness.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Fresh Gulf seafood"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-coral-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">35+ Years</div>
                <div className="text-sm opacity-90">Serving the Gulf Coast</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="bg-ocean-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="h-6 w-6 text-ocean-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The dedicated professionals who ensure every customer receives the finest Gulf seafood.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-ocean-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-ocean-600 font-medium mb-4">{member.title}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sustainability Section */}
      <div className="py-20 bg-ocean-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Sustainable fishing practices"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                Committed to Sustainability
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  We believe in preserving the Gulf of Mexico for future generations. Our sustainable 
                  fishing practices and partnerships with responsible fishermen ensure that we can 
                  continue providing exceptional seafood while protecting marine ecosystems.
                </p>
                <p>
                  Every species we harvest follows strict guidelines for size, season, and quantity. 
                  We work closely with marine biologists and conservation organizations to monitor 
                  fish populations and adjust our practices as needed.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-gray-900 mb-2">Our Certifications</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Shield className="h-4 w-4 text-green-500 mr-2" />
                      Marine Stewardship Council (MSC) Certified
                    </li>
                    <li className="flex items-center">
                      <Shield className="h-4 w-4 text-green-500 mr-2" />
                      Best Aquaculture Practices (BAP) Verified
                    </li>
                    <li className="flex items-center">
                      <Shield className="h-4 w-4 text-green-500 mr-2" />
                      Gulf Seafood Institute Member
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-ocean-600 to-seafoam-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Experience the Water Street Difference
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Join hundreds of restaurants and thousands of families who trust us for the finest Gulf seafood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-ocean-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Browse Fresh Catch
            </button>
            <button className="bg-coral-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-coral-600 transition-colors">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 