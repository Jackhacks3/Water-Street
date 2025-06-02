'use client'

import { useState } from 'react'
import { Fish, Menu, X, ShoppingCart, User, Phone, MapPin } from 'lucide-react'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const menuItems = [
    {
      name: 'Products',
      href: '/products',
      dropdown: [
        { name: 'Fresh Fish', href: '/products/fresh-fish' },
        { name: 'Shellfish', href: '/products/shellfish' },
        { name: 'Frozen Seafood', href: '/products/frozen' },
        { name: 'Seasonal Specials', href: '/products/seasonal' },
        { name: 'Custom Cuts', href: '/products/custom-cuts' }
      ]
    },
    {
      name: 'Daily Catch',
      href: '/daily-catch'
    },
    {
      name: 'Wholesale',
      href: '/wholesale',
      dropdown: [
        { name: 'Restaurant Orders', href: '/wholesale/restaurants' },
        { name: 'Retail Partners', href: '/wholesale/retail' },
        { name: 'Bulk Pricing', href: '/wholesale/pricing' },
        { name: 'Account Portal', href: '/wholesale/portal' }
      ]
    },
    {
      name: 'Recipes',
      href: '/recipes'
    },
    {
      name: 'About',
      href: '/about'
    },
    {
      name: 'Contact',
      href: '/contact'
    }
  ]

  return (
    <>
      {/* Top bar */}
      <div className="bg-ocean-700 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>(850) 653-9191</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Apalachicola, FL</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span>Free shipping on orders over $200</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-ocean-500 p-2 rounded-lg">
                <Fish className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-display font-bold text-ocean-700">
                  Water Street Seafood
                </h1>
                <p className="text-sm text-gray-600">Fresh from the Gulf</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-ocean-600 font-medium transition-colors duration-200 py-2"
                  >
                    {item.name}
                  </a>
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-gray-700 hover:bg-ocean-50 hover:text-ocean-600 transition-colors duration-200"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-ocean-600 transition-colors">
                <User className="h-6 w-6" />
              </button>
              <button className="relative p-2 text-gray-600 hover:text-ocean-600 transition-colors">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-coral-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
              
              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2 text-gray-600 hover:text-ocean-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              {menuItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block text-gray-700 hover:text-ocean-600 font-medium py-2"
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block text-gray-600 hover:text-ocean-600 py-1"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navigation 