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

interface N8nResponse {
  text: string
  suggestions?: string[]
  products?: any[]
  recommendations?: any[]
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // n8n webhook URL - you'll need to replace this with your actual n8n webhook URL
  const N8N_WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || 'http://localhost:5678/webhook/chatbot'

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

  const sendToN8n = async (userInput: string, conversationHistory: Message[]): Promise<N8nResponse> => {
    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userInput,
          conversationHistory: conversationHistory.slice(-5), // Send last 5 messages for context
          timestamp: new Date().toISOString(),
          sessionId: 'session_' + Date.now(), // You might want to implement proper session management
          userAgent: navigator.userAgent,
          currentPage: window.location.pathname
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error sending message to n8n:', error)
      
      // Fallback to local responses if n8n is unavailable
      return getFallbackResponse(userInput)
    }
  }

  const getFallbackResponse = (userInput: string): N8nResponse => {
    const input = userInput.toLowerCase()

    // Simplified fallback responses when n8n is unavailable
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return {
        text: "Ahoy there! Welcome aboard! I'm Captain Catch. I'm having trouble connecting to my full knowledge base right now, but I can still help with basic seafood questions!",
        suggestions: ["What's available?", "Cooking tips", "Tell me about freshness"]
      }
    }

    if (input.includes('fresh') || input.includes('today') || input.includes('available')) {
      return {
        text: "🐟 We typically have fresh Gulf Red Snapper, Jumbo Shrimp, and Gulf Grouper available daily! For real-time inventory, check our Live Inventory page. I'm currently running in offline mode, so I can't check our exact current stock.",
        suggestions: ["View Live Inventory", "Tell me about shipping", "Cooking advice"]
      }
    }

    if (input.includes('cook') || input.includes('recipe') || input.includes('prepare')) {
      return {
        text: "🍳 I'd love to help with cooking advice! While my full recipe database is temporarily unavailable, I can share that Gulf seafood is best cooked simply - light seasoning, don't overcook, and let the natural flavors shine!",
        suggestions: ["Grilling tips", "Pan-searing basics", "Seasoning advice"]
      }
    }

    // Default fallback
    return {
      text: "I'm currently running in limited mode and may not have access to all my seafood expertise. For the best experience, please check our Live Inventory page or contact us directly. Is there anything specific about Gulf Coast seafood I can help with?",
      suggestions: [
        "View Live Inventory",
        "Contact Us", 
        "Browse Products",
        "Learn About Freshness"
      ]
    }
  }

  const handleSendMessage = async () => {
    if (!inputText.trim()) return

    addUserMessage(inputText)
    const currentInput = inputText
    setInputText('')
    setIsTyping(true)

    try {
      const response = await sendToN8n(currentInput, messages)
      
      // Simulate some processing time
      setTimeout(() => {
        addBotMessage(response.text, response.suggestions)
      }, 800 + Math.random() * 1200)
      
    } catch (error) {
      console.error('Error getting response:', error)
      setTimeout(() => {
        addBotMessage(
          "I'm having trouble processing your request right now. Please try again in a moment, or contact us directly for immediate assistance!",
          ["Try again", "Contact support", "View products"]
        )
      }, 1000)
    }
  }

  const handleSuggestionClick = async (suggestion: string) => {
    addUserMessage(suggestion)
    setIsTyping(true)

    try {
      const response = await sendToN8n(suggestion, messages)
      
      setTimeout(() => {
        addBotMessage(response.text, response.suggestions)
      }, 600 + Math.random() * 800)
      
    } catch (error) {
      console.error('Error getting response:', error)
      setTimeout(() => {
        addBotMessage(
          "I'm having trouble processing that request. Please try again or contact us directly!",
          ["Try again", "Contact support"]
        )
      }, 800)
    }
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
          Powered by Gulf Coast expertise & n8n automation
        </p>
      </div>
    </div>
  )
} 