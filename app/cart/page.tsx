'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Minus, Plus, Trash2, ShoppingBag, Truck, Clock, Shield, CreditCard, MapPin, Gift } from 'lucide-react'

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  weight: string
  image: string
  freshness: string
  caughtTime: string
  maxQuantity: number
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Wild Gulf Red Snapper',
      price: 32.99,
      quantity: 2,
      weight: '2-3 lbs',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      freshness: 'Excellent',
      caughtTime: '4 hours ago',
      maxQuantity: 15
    },
    {
      id: '2',
      name: 'Jumbo Gulf Shrimp',
      price: 24.99,
      quantity: 1,
      weight: '1 lb',
      image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      freshness: 'Excellent',
      caughtTime: '2 hours ago',
      maxQuantity: 25
    },
    {
      id: '3',
      name: 'Gulf Oysters',
      price: 18.99,
      quantity: 3,
      weight: '1 pint',
      image: 'https://images.unsplash.com/photo-1606731219412-3b1e4d0f7a90?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      freshness: 'Excellent',
      caughtTime: '1 hour ago',
      maxQuantity: 30
    }
  ])

  const [deliveryOption, setDeliveryOption] = useState('standard')
  const [promoCode, setPromoCode] = useState('')
  const [promoApplied, setPromoApplied] = useState(false)

  const deliveryOptions = [
    {
      id: 'standard',
      name: 'Standard Delivery',
      description: 'Next day delivery by 6 PM',
      price: 15.99,
      icon: Truck
    },
    {
      id: 'express',
      name: 'Express Delivery',
      description: 'Same day delivery by 2 PM',
      price: 29.99,
      icon: Clock
    },
    {
      id: 'pickup',
      name: 'Store Pickup',
      description: 'Ready in 2 hours at Apalachicola',
      price: 0,
      icon: MapPin
    }
  ]

  const updateQuantity = (id: string, newQuantity: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, Math.min(newQuantity, item.maxQuantity)) }
          : item
      ).filter(item => item.quantity > 0)
    )
  }

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === 'fresh20') {
      setPromoApplied(true)
      setPromoCode('')
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const promoDiscount = promoApplied ? subtotal * 0.2 : 0
  const selectedDelivery = deliveryOptions.find(option => option.id === deliveryOption)
  const deliveryFee = selectedDelivery?.price || 0
  const tax = (subtotal - promoDiscount) * 0.08
  const total = subtotal - promoDiscount + deliveryFee + tax

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">Looks like you haven't added any fresh seafood to your cart yet.</p>
            <button className="bg-ocean-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-ocean-600 transition-colors">
              Browse Fresh Catch
            </button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-start space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-600">Weight: {item.weight}</p>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            {item.freshness}
                          </span>
                          <span className="text-xs text-gray-500">Caught {item.caughtTime}</span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-xl font-bold text-ocean-600">${item.price}</div>
                        <div className="text-sm text-gray-500">/lb</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-full border border-gray-300 hover:bg-gray-50"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        
                        <span className="text-lg font-medium w-8 text-center">{item.quantity}</span>
                        
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          disabled={item.quantity >= item.maxQuantity}
                          className="p-1 rounded-full border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                        
                        <span className="text-sm text-gray-500">
                          ({item.maxQuantity} available)
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="text-lg font-semibold text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 p-1"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Delivery Options */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Delivery Options</h3>
              <div className="space-y-3">
                {deliveryOptions.map((option) => (
                  <label key={option.id} className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="delivery"
                        value={option.id}
                        checked={deliveryOption === option.id}
                        onChange={(e) => setDeliveryOption(e.target.value)}
                        className="text-ocean-600 focus:ring-ocean-500"
                      />
                      <div className="flex items-center space-x-2">
                        <option.icon className="h-5 w-5 text-gray-400" />
                        <div>
                          <div className="font-medium text-gray-900">{option.name}</div>
                          <div className="text-sm text-gray-600">{option.description}</div>
                        </div>
                      </div>
                    </div>
                    <div className="font-semibold text-gray-900">
                      {option.price === 0 ? 'Free' : `$${option.price}`}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Promo Code */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Promo Code</h3>
              {!promoApplied ? (
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter promo code"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-ocean-500"
                  />
                  <button
                    onClick={applyPromoCode}
                    className="px-4 py-2 bg-ocean-500 text-white rounded-lg hover:bg-ocean-600 transition-colors"
                  >
                    Apply
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between bg-green-50 p-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Gift className="h-5 w-5 text-green-600" />
                    <span className="text-green-800 font-medium">FRESH20 Applied</span>
                  </div>
                  <button
                    onClick={() => setPromoApplied(false)}
                    className="text-green-600 hover:text-green-800"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                
                {promoApplied && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount (20%)</span>
                    <span>-${promoDiscount.toFixed(2)}</span>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery</span>
                  <span className="font-medium">
                    {deliveryFee === 0 ? 'Free' : `$${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-ocean-600">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 bg-coral-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-coral-600 transition-colors flex items-center justify-center space-x-2">
                <CreditCard className="h-5 w-5" />
                <span>Proceed to Checkout</span>
              </button>

              <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Shield className="h-4 w-4" />
                  <span>Secure Checkout</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Truck className="h-4 w-4" />
                  <span>Insured Delivery</span>
                </div>
              </div>
            </div>

            {/* Freshness Guarantee */}
            <div className="bg-ocean-50 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-ocean-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-ocean-900 mb-2">Freshness Guarantee</h4>
                  <p className="text-sm text-ocean-700">
                    Not satisfied with the freshness? We'll provide a full refund or replacement within 24 hours of delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 