'use client'

import { Fish, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'Fresh Fish', href: '/products/fresh-fish' },
    { name: 'Shellfish', href: '/products/shellfish' },
    { name: 'Daily Catch', href: '/daily-catch' },
    { name: 'Wholesale', href: '/wholesale' },
    { name: 'Recipes', href: '/recipes' }
  ]

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Story', href: '/story' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' }
  ]

  const supportLinks = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Shipping Info', href: '/shipping' },
    { name: 'Returns', href: '/returns' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Track Order', href: '/track' }
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-ocean-500 p-2 rounded-lg">
                <Fish className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white">
                  Water Street Seafood
                </h3>
                <p className="text-gray-400">Fresh from the Gulf</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Florida Panhandle's largest seafood distributor, bringing you the freshest 
              Gulf Coast seafood from boat to your door in one day.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-ocean-400" />
                <span>(850) 653-9191</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-ocean-400" />
                <span>orders@waterstreetseafood.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-ocean-400" />
                <span>123 Water Street, Apalachicola, FL 32320</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-ocean-400" />
                <span>Mon-Fri: 6AM-6PM EST | Sat: 6AM-2PM EST</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-ocean-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-ocean-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Support Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 pt-8 border-t border-gray-800">
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Get daily catch updates, recipes, and special offers delivered to your inbox.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-ocean-500"
              />
              <button className="bg-ocean-500 hover:bg-ocean-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-ocean-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 Water Street Seafood. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <a href="/privacy" className="hover:text-ocean-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-ocean-400 transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="hover:text-ocean-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 