'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import N8nChatWidget from '@/components/N8nChatWidget'
import { Eye, EyeOff, Fish, Mail, Lock, User, Building, Phone, ArrowLeft, MapPin, CheckCircle, Star, Truck } from 'lucide-react'

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [accountType, setAccountType] = useState<'personal' | 'business'>('personal')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    businessName: '',
    businessType: '',
    taxId: '',
    agreeToTerms: false,
    subscribeNewsletter: true
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = 'checked' in e.target ? e.target.checked : false
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Signup attempt:', formData, 'Account type:', accountType)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full space-y-8">
          {/* Header */}
          <div className="text-center">
            <Link href="/" className="inline-flex items-center space-x-2 text-ocean-600 hover:text-ocean-700 mb-6">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Water Street Seafood</span>
            </Link>
            
            <div className="flex justify-center mb-4">
              <Fish className="h-12 w-12 text-ocean-600" />
            </div>
            <h2 className="text-3xl font-display font-bold text-gray-900">
              Join Water Street Seafood
            </h2>
            <p className="mt-2 text-gray-600">
              Create your account to access the freshest Gulf Coast seafood
            </p>
          </div>

          {/* Account Type Selection */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Type</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setAccountType('personal')}
                className={`p-4 rounded-lg border-2 transition-colors ${
                  accountType === 'personal'
                    ? 'border-ocean-600 bg-ocean-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <User className="h-8 w-8 mx-auto mb-2 text-ocean-600" />
                <h4 className="font-semibold text-gray-900">Personal Account</h4>
                <p className="text-sm text-gray-600 mt-1">
                  For home cooking and personal seafood orders
                </p>
              </button>

              <button
                type="button"
                onClick={() => setAccountType('business')}
                className={`p-4 rounded-lg border-2 transition-colors ${
                  accountType === 'business'
                    ? 'border-ocean-600 bg-ocean-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Building className="h-8 w-8 mx-auto mb-2 text-ocean-600" />
                <h4 className="font-semibold text-gray-900">Business Account</h4>
                <p className="text-sm text-gray-600 mt-1">
                  For restaurants, retailers, and wholesale orders
                </p>
              </button>
            </div>
          </div>

          {/* Signup Form */}
          <form className="bg-white p-6 rounded-lg shadow-sm border space-y-6" onSubmit={handleSubmit}>
            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-ocean-500 focus:border-ocean-500"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-ocean-500 focus:border-ocean-500"
                    placeholder="Smith"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-ocean-500 focus:border-ocean-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-ocean-500 focus:border-ocean-500"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Business Information (if business account) */}
            {accountType === 'business' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Name
                    </label>
                    <input
                      name="businessName"
                      type="text"
                      required={accountType === 'business'}
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-ocean-500 focus:border-ocean-500"
                      placeholder="Your Restaurant Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Type
                    </label>
                    <select
                      name="businessType"
                      required={accountType === 'business'}
                      value={formData.businessType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-ocean-500 focus:border-ocean-500"
                    >
                      <option value="">Select business type</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="retail">Retail Store</option>
                      <option value="catering">Catering Company</option>
                      <option value="distributor">Food Distributor</option>
                      <option value="hotel">Hotel/Resort</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tax ID (Optional)
                    </label>
                    <input
                      name="taxId"
                      type="text"
                      value={formData.taxId}
                      onChange={handleInputChange}
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-ocean-500 focus:border-ocean-500"
                      placeholder="XX-XXXXXXX"
                    />
                    <p className="mt-1 text-sm text-gray-500">
                      Required for wholesale pricing and tax exemptions
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Password */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Security</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-ocean-500 focus:border-ocean-500"
                      placeholder="Create a strong password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      required
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-ocean-500 focus:border-ocean-500"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Terms and Newsletter */}
            <div className="space-y-4">
              <div className="flex items-start">
                <input
                  name="agreeToTerms"
                  type="checkbox"
                  required
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-ocean-600 focus:ring-ocean-500 border-gray-300 rounded mt-1"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  I agree to the{' '}
                  <Link href="/terms" className="text-ocean-600 hover:text-ocean-500">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-ocean-600 hover:text-ocean-500">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <div className="flex items-start">
                <input
                  name="subscribeNewsletter"
                  type="checkbox"
                  checked={formData.subscribeNewsletter}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-ocean-600 focus:ring-ocean-500 border-gray-300 rounded mt-1"
                />
                <label className="ml-2 block text-sm text-gray-700">
                  Subscribe to our newsletter for fresh catch updates and special offers
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-ocean-600 hover:bg-ocean-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ocean-500 transition-colors"
            >
              Create Account
            </button>

            {/* Sign In Link */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link
                  href="/auth/login"
                  className="font-medium text-ocean-600 hover:text-ocean-500"
                >
                  Sign in to your account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      <Footer />
      <N8nChatWidget />
    </div>
  )
} 