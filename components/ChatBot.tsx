'use client'

import { useState, useEffect, useRef } from 'react'
import { MessageCircle, X, Send, User, Bot, Anchor, Fish, Clock, MapPin } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  suggestions?: string[]
}

interface ProductRecommendation {
  name: string
  price: number
  image: string
  reason: string
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message
      setTimeout(() => {
        addBotMessage(
          "Ahoy! I'm Captain Catch, your personal seafood expert! 🎣 I'm here to help you find the perfect Gulf Coast seafood for any occasion. What can I help you with today?",
          [
            "What's fresh today?",
            "Help me plan dinner",
            "Cooking advice",
            "Nutritional info"
          ]
        )
      }, 500)
    }
  }, [isOpen])

  const addBotMessage = (text: string, suggestions?: string[]) => {
    const message: Message = {
      id: Date.now().toString(),
      text,
      sender: 'bot',
      timestamp: new Date(),
      suggestions
    }
    setMessages(prev => [...prev, message])
    setIsTyping(false)
  }

  const addUserMessage = (text: string) => {
    const message: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    }
    setMessages(prev => [...prev, message])
  }

  const getBotResponse = (userInput: string): { text: string; suggestions?: string[] } => {
    const input = userInput.toLowerCase()

    // Greetings
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return {
        text: "Ahoy there! Welcome aboard! I'm Captain Catch, and I've been working these Gulf waters for years. What brings you to our shores today?",
        suggestions: ["Show me today's catch", "I need cooking advice", "Tell me about freshness"]
      }
    }

    // Fresh catch inquiries
    if (input.includes('fresh') || input.includes('today') || input.includes('available')) {
      return {
        text: "🐟 Today's fresh catch is spectacular! We've got beautiful Gulf Red Snapper that came in this morning, sweet Jumbo Shrimp, and some prime Grouper. The boats brought in fantastic Blue Crab too! All caught within the last 24 hours. What type of seafood are you interested in?",
        suggestions: ["Tell me about the snapper", "What's good for grilling?", "Show me shellfish"]
      }
    }

    // Cooking advice
    if (input.includes('cook') || input.includes('recipe') || input.includes('prepare')) {
      return {
        text: "🍳 Ah, a fellow seafood chef! I've got plenty of cooking wisdom to share. What type of seafood are you working with? I can give you cooking times, temperatures, and my secret techniques passed down from generations of Gulf fishermen!",
        suggestions: ["Grilling techniques", "Pan-searing tips", "Seasoning advice"]
      }
    }

    // Nutritional information
    if (input.includes('nutrition') || input.includes('healthy') || input.includes('protein')) {
      return {
        text: "🥗 Gulf seafood is some of the healthiest protein you can eat! Rich in omega-3s, lean protein, and essential minerals. Red Snapper has about 25g protein per serving, Shrimp is incredibly low-calorie, and our Oysters are packed with zinc. What specific nutritional info do you need?",
        suggestions: ["Omega-3 content", "Calorie information", "Best for diet"]
      }
    }

    // Freshness and quality
    if (input.includes('freshness') || input.includes('quality') || input.includes('caught')) {
      return {
        text: "⚓ That's what sets us apart! Our 'From Boat to You in One Day' promise means everything you get was swimming in the Gulf less than 24 hours ago. We work directly with local fishing boats and maintain a perfect cold chain. You can actually taste the difference!",
        suggestions: ["How do you maintain freshness?", "Tell me about your boats", "Storage tips"]
      }
    }

    // Specific seafood types
    if (input.includes('snapper')) {
      return {
        text: "🐠 Gulf Red Snapper is the crown jewel of our waters! Sweet, firm flesh with a delicate flavor. Perfect for grilling, baking, or pan-searing. Our current batch was caught off the Panhandle yesterday - absolutely pristine quality at $32.99/lb. Want me to add some to your cart?",
        suggestions: ["Add to cart", "Cooking suggestions", "Tell me about grouper"]
      }
    }

    if (input.includes('shrimp')) {
      return {
        text: "🦐 Our Gulf Shrimp are legendary! These beauties are sweet, plump, and perfect for everything from shrimp and grits to coconut shrimp. We've got jumbo size at $24.99/lb - they're so fresh they practically jump off the ice! Great for quick weeknight dinners.",
        suggestions: ["Add shrimp to cart", "Shrimp recipes", "Size options"]
      }
    }

    if (input.includes('oyster')) {
      return {
        text: "🦪 Apalachicola Bay oysters - the best in the world! These beauties are briny, sweet, and perfect for raw bars or steamed. Fresh shucked daily at $18.99/dozen. Nothing beats Gulf oysters for that authentic coastal experience!",
        suggestions: ["Add oysters to cart", "Shucking tips", "Raw vs cooked"]
      }
    }

    // Dinner planning
    if (input.includes('dinner') || input.includes('meal') || input.includes('plan')) {
      return {
        text: "🍽️ Let me help you plan the perfect seafood dinner! Tell me: How many people are you cooking for? Do you prefer grilled, baked, or pan-seared? Any dietary restrictions? I'll recommend the perfect combination from today's catch!",
        suggestions: ["Dinner for 4 people", "Quick weeknight meal", "Special occasion"]
      }
    }

    // Pricing and ordering
    if (input.includes('price') || input.includes('cost') || input.includes('order')) {
      return {
        text: "💰 Our prices reflect the premium quality of day-boat fresh seafood. Red Snapper $32.99/lb, Jumbo Shrimp $24.99/lb, Grouper $28.99/lb, Oysters $18.99/dozen. Free shipping on orders over $75! Want me to help you build an order?",
        suggestions: ["Build my order", "Tell me about shipping", "Bulk pricing"]
      }
    }

    // Sustainability
    if (input.includes('sustainable') || input.includes('environment') || input.includes('fishing')) {
      return {
        text: "🌊 Sustainability is in our DNA! We work exclusively with local fishermen who use responsible fishing practices. Our Gulf waters are carefully managed, and we follow all seasonal restrictions to ensure healthy fish populations for generations to come.",
        suggestions: ["Tell me more about practices", "Seasonal availability", "Local partnerships"]
      }
    }

    // Default response with helpful suggestions
    return {
      text: "🤔 I want to make sure I give you the best advice! Could you tell me a bit more about what you're looking for? I'm here to help with everything from selecting the perfect catch to cooking techniques!",
      suggestions: [
        "What's the freshest today?",
        "Help me choose for dinner",
        "Cooking and preparation tips",
        "Nutritional information"
      ]
    }
  }

  const handleSendMessage = () => {
    if (!inputText.trim()) return

    addUserMessage(inputText)
    setInputText('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const response = getBotResponse(inputText)
      addBotMessage(response.text, response.suggestions)
    }, 1000 + Math.random() * 1000)
  }

  const handleSuggestionClick = (suggestion: string) => {
    addUserMessage(suggestion)
    setIsTyping(true)

    setTimeout(() => {
      const response = getBotResponse(suggestion)
      addBotMessage(response.text, response.suggestions)
    }, 800 + Math.random() * 800)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-ocean-600 hover:bg-ocean-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 transform hover:scale-110"
        >
          <div className="relative">
            <MessageCircle className="h-6 w-6" />
            <div className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-3 h-3 text-xs flex items-center justify-center animate-pulse">
              <Anchor className="h-2 w-2" />
            </div>
          </div>
        </button>
        <div className="absolute bottom-16 right-0 bg-white p-3 rounded-lg shadow-lg max-w-xs border border-ocean-200">
          <p className="text-sm text-gray-700">
            <Fish className="inline h-4 w-4 text-ocean-600 mr-1" />
            Ask Captain Catch about today's fresh Gulf seafood!
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-ocean-600 to-seafoam-600 text-white p-4 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-white bg-opacity-20 rounded-full p-2">
            <Anchor className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold">Captain Catch</h3>
            <p className="text-sm opacity-90">Your Seafood Expert</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-1' : 'order-2'}`}>
              <div className={`flex items-end space-x-2 ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.sender === 'user' 
                    ? 'bg-ocean-600 text-white' 
                    : 'bg-seafoam-100 text-seafoam-600'
                }`}>
                  {message.sender === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                </div>
                <div className={`rounded-lg p-3 ${
                  message.sender === 'user'
                    ? 'bg-ocean-600 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  <div className="flex items-center mt-1 space-x-1 opacity-70">
                    <Clock className="h-3 w-3" />
                    <span className="text-xs">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Suggestions */}
              {message.suggestions && message.sender === 'bot' && (
                <div className="mt-2 space-y-1">
                  {message.suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="block w-full text-left text-sm text-ocean-600 hover:text-ocean-700 bg-ocean-50 hover:bg-ocean-100 rounded-md p-2 transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        
        {/* Typing indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-end space-x-2">
              <div className="w-8 h-8 rounded-full bg-seafoam-100 text-seafoam-600 flex items-center justify-center">
                <Bot className="h-4 w-4" />
              </div>
              <div className="bg-gray-100 rounded-lg p-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about fresh seafood, cooking tips, or anything else..."
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim() || isTyping}
            className="bg-ocean-600 hover:bg-ocean-700 disabled:bg-gray-300 text-white rounded-lg p-2 transition-colors"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          <MapPin className="inline h-3 w-3 mr-1" />
          Powered by Gulf Coast expertise
        </p>
      </div>
    </div>
  )
} 