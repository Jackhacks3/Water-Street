'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingCart, User, Search, Fish, Calendar, Building2, Book, Users, Phone, Bell } from 'lucide-react'

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

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Live Inventory', href: '/inventory' },
    { name: 'Subscriptions', href: '/subscriptions' },
    { name: 'Recipes', href: '/recipes' },
    { name: 'About', href: '/about' },
    { name: 'Wholesale', href: '/wholesale' },
    { name: 'Contact', href: '/contact' }
  ]

  const accountItems = [
    { name: 'My Dashboard', href: '/dashboard' },
    { name: 'Order History', href: '/dashboard?tab=orders' },
    { name: 'Subscriptions', href: '/dashboard?tab=subscription' },
    { name: 'Favorites', href: '/dashboard?tab=favorites' }
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Fish className="h-8 w-8 text-ocean-600" />
              <span className="text-2xl font-display font-bold text-gray-900">
                Water Street Seafood
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-ocean-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Notifications */}
            <button className="relative p-2 text-gray-600 hover:text-ocean-600 transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                2
              </span>
            </button>

            {/* Cart */}
            <Link 
              href="/cart" 
              className="relative p-2 text-gray-600 hover:text-ocean-600 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-ocean-600 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                3
              </span>
            </Link>

            {/* Account Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-ocean-600 px-3 py-2 text-sm font-medium transition-colors">
                <User className="h-4 w-4" />
                <span>Account</span>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  {accountItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-ocean-50 hover:text-ocean-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <hr className="my-1" />
                  <Link
                    href="/auth/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-ocean-50 hover:text-ocean-600"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-ocean-50 hover:text-ocean-600"
                  >
                    Create Account
                  </Link>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/subscriptions"
              className="bg-ocean-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-ocean-700 transition-colors"
            >
              Subscribe Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-ocean-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-ocean-600 hover:bg-ocean-50 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Account Section */}
            <div className="border-t border-gray-200 pt-3 mt-3">
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Account
              </div>
              {accountItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-ocean-600 hover:bg-ocean-50 rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/auth/login"
                className="block px-3 py-2 text-gray-700 hover:text-ocean-600 hover:bg-ocean-50 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                className="block px-3 py-2 text-gray-700 hover:text-ocean-600 hover:bg-ocean-50 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Create Account
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="border-t border-gray-200 pt-3 mt-3 space-y-2">
              <Link
                href="/cart"
                className="flex items-center justify-between px-3 py-2 text-gray-700 hover:text-ocean-600 hover:bg-ocean-50 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span>Shopping Cart</span>
                <span className="bg-ocean-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  3
                </span>
              </Link>
              <Link
                href="/subscriptions"
                className="block w-full text-center bg-ocean-600 text-white px-4 py-3 rounded-md text-base font-medium hover:bg-ocean-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Subscribe Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
} 