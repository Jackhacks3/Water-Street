'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Anchor } from 'lucide-react'

interface Message {
  id: string
  content: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Ahoy! I'm Captain Catch, your friendly seafood expert! 🎣 I can help you find the perfect catch, cooking tips, or answer any questions about our fresh Gulf seafood. What can I help you with today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    
    if (input.includes('fresh') || input.includes('catch')) {
      return "Our daily catch is brought in fresh every morning! Today we have premium Red Snapper caught just 4 hours ago, Gulf Shrimp from 2 hours ago, and beautiful Grouper fillets. All caught in the pristine waters of the Gulf of Mexico. Would you like to know more about any specific seafood? 🐟"
    }
    
    if (input.includes('cooking') || input.includes('recipe') || input.includes('cook')) {
      return "I'd love to help with cooking tips! 👨‍🍳 Are you thinking about grilling, pan-searing, or maybe making a seafood stew? Each cooking method brings out different flavors in our Gulf seafood. What type of dish are you planning?"
    }
    
    if (input.includes('price') || input.includes('cost') || input.includes('$')) {
      return "Our pricing is very competitive! Red Snapper is $28.99/lb, Gulf Shrimp $16.99/lb, and Grouper $32.99/lb. We also offer bulk discounts for restaurants and free shipping on orders over $200. Would you like me to help you calculate costs for a specific order? 💰"
    }
    
    if (input.includes('delivery') || input.includes('shipping')) {
      return "We pride ourselves on our 'From Boat to You in One Day' promise! 🚚 We ship nationwide with refrigerated trucks and offer same-day delivery within Florida. Standard shipping is free on orders over $200. Where are you located? I can give you specific delivery times!"
    }
    
    if (input.includes('restaurant') || input.includes('wholesale')) {
      return "Ahoy there, restaurant owner! ⚓ We supply over 500 restaurants across the Southeast with the finest Gulf seafood. We offer wholesale pricing, custom cuts, and dedicated account management. Would you like me to connect you with our wholesale team?"
    }
    
    if (input.includes('sustainability') || input.includes('sustainable')) {
      return "Great question! 🌊 We work exclusively with local Apalachicola fishermen who use sustainable fishing practices. Our seafood is wild-caught using traditional methods that have been passed down for generations. We're committed to preserving both the Gulf ecosystem and our fishing heritage."
    }
    
    // Default response
    return "That's a great question! As Captain Catch, I'm here to help with anything seafood-related. You can ask me about our daily catch, cooking recommendations, pricing, delivery options, or our wholesale services. What specific information would you like to know? 🦐"
  }

  const quickQuestions = [
    "What's fresh today?",
    "How do I cook red snapper?",
    "What are your prices?",
    "Do you deliver nationwide?"
  ]

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 bg-ocean-500 hover:bg-ocean-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50">
          {/* Header */}
          <div className="bg-gradient-to-r from-ocean-500 to-seafoam-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white bg-opacity-20 p-2 rounded-full">
                <Anchor className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Captain Catch</h3>
                <p className="text-sm opacity-90">Your Seafood Expert</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-ocean-500 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-ocean-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 px-4 py-2 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => setInputValue(question)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask Captain Catch anything..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-ocean-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-ocean-500 hover:bg-ocean-600 disabled:bg-gray-300 text-white p-2 rounded-full transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatBot 