'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingCart, User, Search, Fish, Calendar, Building2, Book, Users, Phone } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const megaMenuItems = {
    products: {
      title: 'Seafood',
      sections: [
        {
          title: 'Fresh Fish',
          items: [
            { name: 'Red Snapper', href: '/products?category=fish&species=red-snapper' },
            { name: 'Grouper', href: '/products?category=fish&species=grouper' },
            { name: 'Mahi Mahi', href: '/products?category=fish&species=mahi-mahi' },
            { name: 'Flounder', href: '/products?category=fish&species=flounder' }
          ]
        },
        {
          title: 'Shellfish',
          items: [
            { name: 'Gulf Shrimp', href: '/products?category=shellfish&species=shrimp' },
            { name: 'Blue Crab', href: '/products?category=shellfish&species=crab' },
            { name: 'Lobster', href: '/products?category=shellfish&species=lobster' },
            { name: 'Crawfish', href: '/products?category=shellfish&species=crawfish' }
          ]
        },
        {
          title: 'Mollusks',
          items: [
            { name: 'Oysters', href: '/products?category=mollusks&species=oysters' },
            { name: 'Scallops', href: '/products?category=mollusks&species=scallops' },
            { name: 'Clams', href: '/products?category=mollusks&species=clams' },
            { name: 'Mussels', href: '/products?category=mollusks&species=mussels' }
          ]
        },
        {
          title: 'Quick Links',
          items: [
            { name: 'Daily Fresh Catch', href: '/products?filter=daily-catch' },
            { name: 'Seasonal Specials', href: '/seasonal-calendar' },
            { name: 'Bulk Orders', href: '/wholesale' },
            { name: 'Recipe Ideas', href: '/recipes' }
          ]
        }
      ]
    },
    resources: {
      title: 'Resources',
      sections: [
        {
          title: 'Planning Tools',
          items: [
            { name: 'Seasonal Calendar', href: '/seasonal-calendar' },
            { name: 'Recipe Collection', href: '/recipes' },
            { name: 'Cooking Guides', href: '/guides' },
            { name: 'Nutritional Info', href: '/nutrition' }
          ]
        },
        {
          title: 'Business',
          items: [
            { name: 'Wholesale Portal', href: '/wholesale' },
            { name: 'Restaurant Partners', href: '/wholesale?tab=testimonials' },
            { name: 'Custom Orders', href: '/custom-orders' },
            { name: 'Delivery Schedule', href: '/delivery' }
          ]
        },
        {
          title: 'Support',
          items: [
            { name: 'FAQ', href: '/faq' },
            { name: 'Contact Us', href: '/contact' },
            { name: 'Shipping Info', href: '/shipping' },
            { name: 'Returns', href: '/returns' }
          ]
        }
      ]
    }
  }

  return (
    <nav className="bg-white shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Fish className="h-8 w-8 text-ocean-600" />
            <span className="text-xl font-display font-bold text-gray-900">
              Water Street Seafood
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Products Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/products"
                className="text-gray-700 hover:text-ocean-600 font-medium transition-colors"
              >
                Seafood
              </Link>
              
              {activeDropdown === 'products' && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-5xl bg-white shadow-xl rounded-lg border border-gray-200 p-8">
                  <div className="grid grid-cols-4 gap-8">
                    {megaMenuItems.products.sections.map((section, index) => (
                      <div key={index}>
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">{section.title}</h3>
                        <ul className="space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <Link
                                href={item.href}
                                className="text-sm text-gray-600 hover:text-ocean-600 transition-colors"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Seasonal Calendar */}
            <Link
              href="/seasonal-calendar"
              className="text-gray-700 hover:text-ocean-600 font-medium transition-colors flex items-center space-x-1"
            >
              <Calendar className="h-4 w-4" />
              <span>Seasonal</span>
            </Link>

            {/* Recipes */}
            <Link
              href="/recipes"
              className="text-gray-700 hover:text-ocean-600 font-medium transition-colors flex items-center space-x-1"
            >
              <Book className="h-4 w-4" />
              <span>Recipes</span>
            </Link>

            {/* Wholesale */}
            <Link
              href="/wholesale"
              className="text-gray-700 hover:text-ocean-600 font-medium transition-colors flex items-center space-x-1"
            >
              <Building2 className="h-4 w-4" />
              <span>Wholesale</span>
            </Link>

            {/* Resources Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-gray-700 hover:text-ocean-600 font-medium transition-colors">
                Resources
              </button>
              
              {activeDropdown === 'resources' && (
                <div className="absolute top-full right-0 mt-2 w-96 bg-white shadow-xl rounded-lg border border-gray-200 p-6">
                  <div className="grid grid-cols-1 gap-6">
                    {megaMenuItems.resources.sections.map((section, index) => (
                      <div key={index}>
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">{section.title}</h3>
                        <ul className="space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <Link
                                href={item.href}
                                className="text-sm text-gray-600 hover:text-ocean-600 transition-colors"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* About */}
            <Link
              href="/about"
              className="text-gray-700 hover:text-ocean-600 font-medium transition-colors"
            >
              About
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="text-gray-600 hover:text-ocean-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>

            {/* Account */}
            <button className="text-gray-600 hover:text-ocean-600 transition-colors">
              <User className="h-5 w-5" />
            </button>

            {/* Cart */}
            <Link
              href="/cart"
              className="text-gray-600 hover:text-ocean-600 transition-colors relative"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-coral-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-600 hover:text-ocean-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            <Link
              href="/products"
              className="block text-gray-700 hover:text-ocean-600 font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Seafood
            </Link>
            
            <Link
              href="/seasonal-calendar"
              className="block text-gray-700 hover:text-ocean-600 font-medium transition-colors flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <Calendar className="h-4 w-4" />
              <span>Seasonal Calendar</span>
            </Link>
            
            <Link
              href="/recipes"
              className="block text-gray-700 hover:text-ocean-600 font-medium transition-colors flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <Book className="h-4 w-4" />
              <span>Recipes</span>
            </Link>
            
            <Link
              href="/wholesale"
              className="block text-gray-700 hover:text-ocean-600 font-medium transition-colors flex items-center space-x-2"
              onClick={() => setIsOpen(false)}
            >
              <Building2 className="h-4 w-4" />
              <span>Wholesale</span>
            </Link>
            
            <Link
              href="/about"
              className="block text-gray-700 hover:text-ocean-600 font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            <div className="border-t border-gray-200 pt-4 space-y-4">
              <h3 className="text-sm font-semibold text-gray-900">Quick Actions</h3>
              <Link
                href="/cart"
                className="block text-gray-700 hover:text-ocean-600 font-medium transition-colors flex items-center space-x-2"
                onClick={() => setIsOpen(false)}
              >
                <ShoppingCart className="h-4 w-4" />
                <span>Shopping Cart (3)</span>
              </Link>
              <button className="block text-gray-700 hover:text-ocean-600 font-medium transition-colors flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>My Account</span>
              </button>
              <button className="block text-gray-700 hover:text-ocean-600 font-medium transition-colors flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>Contact Us</span>
              </button>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="bg-ocean-50 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-ocean-900 mb-2">Need Help?</h4>
                <p className="text-xs text-ocean-700 mb-3">
                  Call us for fresh catch updates and custom orders
                </p>
                <a
                  href="tel:850-653-9419"
                  className="text-sm font-medium text-ocean-600 hover:text-ocean-800"
                >
                  (850) 653-9419
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
} 