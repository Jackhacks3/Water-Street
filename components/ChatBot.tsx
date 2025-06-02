'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Anchor, Clock, MapPin, Fish } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'captain'
  timestamp: Date
  type?: 'quick-reply' | 'product-recommendation' | 'weather-update'
  data?: any
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Ahoy! I'm Captain Catch, your friendly Gulf Coast seafood guide! Just caught wind that we've got some mighty fine red snapper that came in this morning. What can I help you with today?",
      sender: 'captain',
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const quickReplies = [
    "What's fresh today?",
    "Show me shrimp",
    "Cooking tips",
    "Wholesale pricing",
    "Delivery options",
    "Recipe suggestions"
  ]

  const productData = {
    'red snapper': {
      name: 'Gulf Red Snapper',
      price: '$32.99/lb',
      freshness: 'Caught 4 hours ago',
      description: 'Premium wild-caught red snapper with firm, sweet meat',
      cooking: 'Perfect for grilling, pan-searing, or whole fish preparation',
      stock: 15
    },
    'shrimp': {
      name: 'Jumbo Gulf Shrimp',
      price: '$24.99/lb',
      freshness: 'Caught 2 hours ago',
      description: 'Large 16-20 count shrimp, peeled and deveined',
      cooking: 'Great for grilling, frying, or in pasta dishes',
      stock: 25
    },
    'grouper': {
      name: 'Fresh Gulf Grouper',
      price: '$36.99/lb',
      freshness: 'Caught 6 hours ago',
      description: 'Mild, sweet grouper with firm white meat',
      cooking: 'Excellent for blackening, grilling, or fish tacos',
      stock: 8
    },
    'oysters': {
      name: 'Apalachicola Oysters',
      price: '$18.99/pint',
      freshness: 'Harvested 1 hour ago',
      description: 'Famous for their sweet, briny flavor',
      cooking: 'Perfect raw, steamed, or for oyster rockefeller',
      stock: 30
    }
  }

  const weatherData = {
    condition: 'Calm seas',
    temperature: '78°F',
    windSpeed: '8 mph',
    visibility: 'Excellent',
    nextCatch: 'Tomorrow at 5 AM'
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const generateCaptainResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()
    
    // Greeting responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Well howdy there, matey! Welcome to Water Street Seafood! The Gulf's been mighty generous today - we've got some beautiful catches that'll make your taste buds dance a jig!"
    }
    
    // Fresh catch inquiries
    if (message.includes('fresh') || message.includes('today') || message.includes('catch')) {
      return "Arrr, you've come to the right captain! Today's fresh haul includes premium red snapper (caught 4 hours ago), jumbo shrimp (2 hours fresh), and some beautiful grouper. Our boats just docked, and everything's restaurant-quality. What catches your fancy?"
    }
    
    // Specific seafood inquiries
    if (message.includes('shrimp')) {
      return "Ahoy! Our Gulf shrimp are some of the finest you'll find - jumbo 16-20 count, sweet as the sea breeze. Caught just 2 hours ago in Apalachicola Bay. At $24.99/lb, they're perfect for your next seafood boil or grilling adventure. Want me to set some aside for ya?"
    }
    
    if (message.includes('snapper') || message.includes('red snapper')) {
      return "Aye, the red snapper is the jewel of today's catch! Beautiful wild-caught Gulf snapper, firm and sweet. Caught just 4 hours ago and selling for $32.99/lb. These beauties are perfect for pan-searing or throwing on the grill. Only got 15 fillets left, so don't wait too long!"
    }
    
    if (message.includes('grouper')) {
      return "Ahoy there! Our Gulf grouper is as fine as they come - mild, sweet, and perfect for any preparation. Caught 6 hours ago from the deep Gulf waters. At $36.99/lb, it's a premium catch that's worth every doubloon. Great for blackening or fish tacos!"
    }
    
    if (message.includes('oyster')) {
      return "Shiver me timbers, you've got good taste! Our Apalachicola oysters are world-famous for good reason - sweet, briny, and harvested just 1 hour ago. At $18.99/pint, they're perfect for slurping raw or making oyster rockefeller. Fresh as the morning tide!"
    }
    
    // Cooking advice
    if (message.includes('cook') || message.includes('recipe') || message.includes('prepare')) {
      return "Har har! Captain's been cooking Gulf seafood for decades! For fish, keep it simple - season with salt, pepper, and lemon. Grill skin-side down first. For shrimp, don't overcook 'em - 2-3 minutes per side max. Want specific recipes? I've got a treasure chest full of 'em!"
    }
    
    // Pricing inquiries
    if (message.includes('price') || message.includes('cost') || message.includes('how much')) {
      return "Aye, fair pricing for the finest catch! Red snapper runs $32.99/lb, shrimp is $24.99/lb, grouper at $36.99/lb, and our famous oysters are $18.99/pint. All caught fresh today and priced to move. Bulk orders get special captain's pricing!"
    }
    
    // Wholesale inquiries
    if (message.includes('wholesale') || message.includes('restaurant') || message.includes('bulk')) {
      return "Arrr, talking business are we? We supply restaurants throughout the Panhandle with the freshest catch. Wholesale pricing starts at 50 lbs, with daily delivery available. Call (850) 653-9419 and ask for our wholesale crew - they'll take good care of ya!"
    }
    
    // Delivery inquiries
    if (message.includes('deliver') || message.includes('shipping') || message.includes('send')) {
      return "Aye, we deliver fresh seafood faster than a dolphin on the hunt! Same-day delivery within 50 miles of Apalachicola, overnight shipping throughout Florida. Everything's packed in ice and arrives fresh as if you were here on the dock!"
    }
    
    // Hours and location
    if (message.includes('hours') || message.includes('open') || message.includes('location') || message.includes('where')) {
      return "You'll find us at Water Street in historic Apalachicola, Florida - been here since the town was founded! Open daily 7 AM to 6 PM, but the real action starts when our boats come in around 2 PM with the day's fresh catch!"
    }
    
    // Weather and fishing conditions
    if (message.includes('weather') || message.includes('fishing') || message.includes('conditions')) {
      return `The Gulf's looking mighty fine today - ${weatherData.condition.toLowerCase()}, ${weatherData.temperature} with ${weatherData.windSpeed} winds. Perfect conditions for fishing! Our next boats head out at dawn, so tomorrow's catch should be just as spectacular!`
    }
    
    // Quality and freshness
    if (message.includes('quality') || message.includes('guarantee') || message.includes('fresh')) {
      return "Arrr, that's what sets us apart! Every piece of seafood comes with Captain's guarantee - 'From the Boat to You in One Day' isn't just our motto, it's our promise. If it's not the freshest, finest seafood you've ever had, bring it back for a full refund!"
    }
    
    // Default response
    return "Arrr, that's a fine question! I'm here to help with anything seafood-related - fresh catches, cooking tips, pricing, or just sharing tales of the sea. What specific treasure are you seeking today, matey?"
  }

  const handleSendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const response = generateCaptainResponse(inputText)
      const captainMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'captain',
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, captainMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuickReply = (reply: string) => {
    setInputText(reply)
    handleSendMessage()
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-ocean-500 to-seafoam-500 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 z-50 animate-bounce"
      >
        <MessageCircle className="h-6 w-6" />
        <div className="absolute -top-2 -left-2 bg-coral-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
          !
        </div>
      </button>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-ocean-600 to-seafoam-600 text-white p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-white bg-opacity-20 p-2 rounded-full">
            <Anchor className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Captain Catch</h3>
            <div className="flex items-center space-x-2 text-sm opacity-90">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Online • Apalachicola, FL</span>
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-full transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Weather/Status Bar */}
      <div className="bg-ocean-50 px-4 py-2 border-b border-ocean-100">
        <div className="flex items-center justify-between text-xs text-ocean-700">
          <div className="flex items-center space-x-2">
            <Clock className="h-3 w-3" />
            <span>Fresh catch arrived 2 PM</span>
          </div>
          <div className="flex items-center space-x-2">
            <Fish className="h-3 w-3" />
            <span>15+ species available</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] ${
              message.sender === 'user'
                ? 'bg-ocean-500 text-white rounded-2xl rounded-br-sm'
                : 'bg-white text-gray-800 rounded-2xl rounded-bl-sm shadow-sm border border-gray-100'
            } px-4 py-3`}>
              {message.sender === 'captain' && (
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-ocean-500 to-seafoam-500 rounded-full flex items-center justify-center">
                    <Anchor className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-xs font-medium text-ocean-600">Captain Catch</span>
                </div>
              )}
              <p className="text-sm leading-relaxed">{message.text}</p>
              <div className="text-xs opacity-70 mt-2">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white rounded-2xl rounded-bl-sm shadow-sm border border-gray-100 px-4 py-3">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-6 h-6 bg-gradient-to-r from-ocean-500 to-seafoam-500 rounded-full flex items-center justify-center">
                  <Anchor className="h-3 w-3 text-white" />
                </div>
                <span className="text-xs font-medium text-ocean-600">Captain Catch</span>
              </div>
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Replies */}
      <div className="px-4 py-2 border-t border-gray-200 bg-white">
        <div className="flex flex-wrap gap-2 mb-3">
          {quickReplies.slice(0, 3).map((reply, index) => (
            <button
              key={index}
              onClick={() => handleQuickReply(reply)}
              className="px-3 py-1 bg-ocean-100 text-ocean-700 rounded-full text-xs hover:bg-ocean-200 transition-colors"
            >
              {reply}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200 bg-white">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ask Captain Catch anything..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-ocean-500 text-sm"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim()}
            className="bg-ocean-500 text-white p-2 rounded-full hover:bg-ocean-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatBot 