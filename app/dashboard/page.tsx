'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { 
  User, Package, Calendar, Heart, Settings, CreditCard, 
  Truck, Star, Bell, MapPin, Edit, Download, Eye 
} from 'lucide-react'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('orders')

  const tabs = [
    { id: 'orders', name: 'Order History', icon: Package },
    { id: 'subscription', name: 'Subscriptions', icon: Calendar },
    { id: 'favorites', name: 'Favorites', icon: Heart },
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'payment', name: 'Payment Methods', icon: CreditCard },
    { id: 'settings', name: 'Settings', icon: Settings },
  ]

  const recentOrders = [
    {
      id: '#WSS-2024-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 89.99,
      items: ['Gulf Red Snapper (2 lbs)', 'Jumbo Shrimp (1 lb)', 'Blue Crab (6 pieces)'],
      tracking: 'DLV-789456123'
    },
    {
      id: '#WSS-2024-002',
      date: '2024-01-08',
      status: 'Delivered',
      total: 124.50,
      items: ['Gulf Grouper (3 lbs)', 'Oysters (2 dozen)', 'Flounder (2 lbs)'],
      tracking: 'DLV-789456124'
    },
    {
      id: '#WSS-2024-003',
      date: '2024-01-01',
      status: 'Delivered',
      total: 67.25,
      items: ['Captain\'s Choice Subscription Box'],
      tracking: 'DLV-789456125'
    }
  ]

  const subscriptions = [
    {
      id: 'SUB-001',
      plan: 'Captain\'s Choice',
      frequency: 'Weekly',
      nextDelivery: '2024-01-22',
      status: 'Active',
      price: 89.99
    }
  ]

  const favorites = [
    {
      id: '1',
      name: 'Wild Gulf Red Snapper',
      price: 32.99,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      inStock: true
    },
    {
      id: '2',
      name: 'Jumbo Gulf Shrimp',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      inStock: true
    },
    {
      id: '3',
      name: 'Fresh Gulf Oysters',
      price: 18.99,
      image: 'https://images.unsplash.com/photo-1606731219412-3b1e4d0f7a90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      inStock: false
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'delivered': return 'text-green-600 bg-green-100'
      case 'shipped': return 'text-blue-600 bg-blue-100'
      case 'processing': return 'text-yellow-600 bg-yellow-100'
      case 'active': return 'text-green-600 bg-green-100'
      case 'paused': return 'text-yellow-600 bg-yellow-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'orders':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-display font-bold text-gray-900">Order History</h2>
              <button className="text-ocean-600 hover:text-ocean-700 font-medium">
                Download All Orders
              </button>
            </div>
            
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="bg-white border rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">{order.id}</h3>
                      <p className="text-gray-600 text-sm">Ordered on {order.date}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                      <p className="text-lg font-bold text-gray-900 mt-1">${order.total}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Items:</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      {order.items.map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t">
                    <p className="text-sm text-gray-600">
                      Tracking: <span className="font-medium">{order.tracking}</span>
                    </p>
                    <div className="space-x-2">
                      <button className="text-ocean-600 hover:text-ocean-700 text-sm font-medium">
                        View Details
                      </button>
                      <button className="text-ocean-600 hover:text-ocean-700 text-sm font-medium">
                        Reorder
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 'subscription':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-display font-bold text-gray-900">My Subscriptions</h2>
              <button className="bg-ocean-600 text-white px-4 py-2 rounded-md hover:bg-ocean-700">
                Add Subscription
              </button>
            </div>
            
            <div className="space-y-4">
              {subscriptions.map((sub) => (
                <div key={sub.id} className="bg-white border rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{sub.plan}</h3>
                      <p className="text-gray-600">{sub.frequency} delivery</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(sub.status)}`}>
                      {sub.status}
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Next Delivery</label>
                      <p className="font-semibold text-gray-900">{sub.nextDelivery}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Price</label>
                      <p className="font-semibold text-gray-900">${sub.price}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Subscription ID</label>
                      <p className="font-semibold text-gray-900">{sub.id}</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="flex-1 border border-ocean-600 text-ocean-600 py-2 px-4 rounded-md hover:bg-ocean-50">
                      Modify Subscription
                    </button>
                    <button className="flex-1 border border-yellow-600 text-yellow-600 py-2 px-4 rounded-md hover:bg-yellow-50">
                      Pause Subscription
                    </button>
                    <button className="flex-1 bg-ocean-600 text-white py-2 px-4 rounded-md hover:bg-ocean-700">
                      Manage Delivery
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 'favorites':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-gray-900">Favorite Products</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((item) => (
                <div key={item.id} className="bg-white border rounded-lg overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xl font-bold text-ocean-600">${item.price}</span>
                      {item.inStock ? (
                        <span className="text-green-600 text-sm font-medium">In Stock</span>
                      ) : (
                        <span className="text-red-600 text-sm font-medium">Out of Stock</span>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <button 
                        className={`flex-1 py-2 px-3 rounded-md text-sm font-medium ${
                          item.inStock 
                            ? 'bg-ocean-600 text-white hover:bg-ocean-700' 
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                        disabled={!item.inStock}
                      >
                        Add to Cart
                      </button>
                      <button className="text-red-600 hover:text-red-700 p-2">
                        <Heart className="h-5 w-5 fill-current" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 'profile':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-gray-900">Profile Information</h2>
            
            <div className="bg-white border rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    defaultValue="John"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-ocean-500 focus:border-ocean-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Smith"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-ocean-500 focus:border-ocean-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="john.smith@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-ocean-500 focus:border-ocean-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    defaultValue="(555) 123-4567"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-ocean-500 focus:border-ocean-500"
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Delivery Address</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Street Address
                    </label>
                    <input
                      type="text"
                      defaultValue="123 Coastal Drive"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-ocean-500 focus:border-ocean-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      defaultValue="Tallahassee"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-ocean-500 focus:border-ocean-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      State
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-ocean-500 focus:border-ocean-500">
                      <option value="FL">Florida</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      defaultValue="32301"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-ocean-500 focus:border-ocean-500"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <button className="bg-ocean-600 text-white px-6 py-2 rounded-md hover:bg-ocean-700">
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        )

      case 'payment':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-display font-bold text-gray-900">Payment Methods</h2>
              <button className="bg-ocean-600 text-white px-4 py-2 rounded-md hover:bg-ocean-700">
                Add Card
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white border rounded-lg p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900">•••• •••• •••• 4242</h3>
                    <p className="text-gray-600">Visa ending in 4242</p>
                    <p className="text-gray-600">Expires 12/26</p>
                  </div>
                  <div className="flex space-x-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                      Default
                    </span>
                    <button className="text-ocean-600 hover:text-ocean-700 text-sm">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-700 text-sm">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'settings':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-gray-900">Account Settings</h2>
            
            <div className="space-y-6">
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Email Preferences</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Order Updates</h4>
                      <p className="text-gray-600 text-sm">Receive notifications about your orders</p>
                    </div>
                    <input type="checkbox" defaultChecked className="h-4 w-4 text-ocean-600" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Fresh Catch Alerts</h4>
                      <p className="text-gray-600 text-sm">Get notified when new seafood arrives</p>
                    </div>
                    <input type="checkbox" defaultChecked className="h-4 w-4 text-ocean-600" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Weekly Newsletter</h4>
                      <p className="text-gray-600 text-sm">Recipes, tips, and seafood news</p>
                    </div>
                    <input type="checkbox" className="h-4 w-4 text-ocean-600" />
                  </div>
                </div>
              </div>
              
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Security</h3>
                <div className="space-y-4">
                  <button className="w-full text-left border border-gray-300 rounded-md p-4 hover:border-ocean-500">
                    <h4 className="font-medium text-gray-900">Change Password</h4>
                    <p className="text-gray-600 text-sm">Update your account password</p>
                  </button>
                  <button className="w-full text-left border border-gray-300 rounded-md p-4 hover:border-ocean-500">
                    <h4 className="font-medium text-gray-900">Two-Factor Authentication</h4>
                    <p className="text-gray-600 text-sm">Add extra security to your account</p>
                  </button>
                </div>
              </div>
              
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-red-600">Danger Zone</h3>
                <button className="w-full text-left border border-red-300 rounded-md p-4 hover:border-red-500">
                  <h4 className="font-medium text-red-900">Delete Account</h4>
                  <p className="text-red-600 text-sm">Permanently delete your account and all data</p>
                </button>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-gray-900">My Account</h1>
          <p className="text-gray-600">Manage your orders, subscriptions, and account preferences</p>
        </div>

        {/* Dashboard Layout */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-ocean-100 rounded-full p-3">
                  <User className="h-8 w-8 text-ocean-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">John Smith</h3>
                  <p className="text-gray-600 text-sm">Customer since 2023</p>
                </div>
              </div>
              
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                      activeTab === tab.id
                        ? 'bg-ocean-50 text-ocean-600 border-r-2 border-ocean-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <tab.icon className="h-5 w-5" />
                    <span>{tab.name}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderTabContent()}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 