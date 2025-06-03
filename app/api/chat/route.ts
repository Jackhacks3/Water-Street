import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { message, sessionId } = body

    // Process the message and determine intent (similar to n8n workflow)
    const userMessage = message || ''
    const keywords = userMessage.toLowerCase().match(/\b\w+\b/g) || []
    
    let intent = 'general'
    let responseText = ''
    let suggestions: string[] = []

    // Intent detection logic
    if (keywords.some((word: string) => ['fresh', 'today', 'available', 'stock', 'inventory'].includes(word))) {
      intent = 'inventory_inquiry'
      responseText = `🐟 Today's fresh catch looks fantastic! Here's what just came in:

• **Gulf Red Snapper** - $32.99/lb (12 lbs available)
• **Jumbo Gulf Shrimp** - $24.99/lb (25 lbs available)  
• **Gulf Grouper** - $36.99/lb (8 lbs available)
• **Blue Crab** - $8.99/lb (35 lbs available)
• **Apalachicola Oysters** - $18.99/dozen (15 dozen available)

⚓ All caught within the last 24 hours with our "From Boat to You in One Day" guarantee!`
      suggestions = ["Tell me about the snapper", "What's good for grilling?", "Show me cooking tips", "Check shipping options"]

    } else if (keywords.some((word: string) => ['cook', 'recipe', 'prepare', 'grill', 'bake', 'fry'].includes(word))) {
      intent = 'cooking_advice'
      responseText = `🍳 I'd love to share some Gulf Coast cooking wisdom with you!

For grilling Gulf seafood:
• Preheat grill to medium-high
• Lightly oil the grates  
• For fish: 3-4 minutes per side for 1-inch thick fillets
• For shrimp: 2-3 minutes per side
• Keep it simple with lemon, herbs, and light seasoning!`
      suggestions = ["Seasoning tips", "What about grouper?", "Show me recipes", "Grilling shellfish"]

    } else if (keywords.some((word: string) => ['snapper', 'grouper', 'shrimp', 'crab', 'oyster'].includes(word))) {
      intent = 'product_specific'
      if (keywords.includes('snapper')) {
        responseText = `🐠 Gulf Red Snapper is the crown jewel of our waters! Sweet, firm flesh with a delicate flavor that's perfect for any preparation. Our current batch was caught yesterday off the Panhandle - absolutely pristine quality at $32.99/lb.

Perfect for grilling, baking, or pan-searing!`
      } else if (keywords.includes('shrimp')) {
        responseText = `🦐 Our Gulf Shrimp are legendary! These beauties are sweet, plump, and perfect for everything from shrimp and grits to coconut shrimp. Current jumbo size at $24.99/lb - so fresh they practically jump off the ice!`
      } else {
        responseText = `🐟 I'd love to tell you about any of our Gulf specialties! What specific seafood are you interested in?`
      }
      suggestions = ["Add to cart", "Cooking suggestions", "Tell me about grouper", "Check availability"]

    } else if (keywords.some((word: string) => ['hello', 'hi', 'hey', 'greetings'].includes(word))) {
      intent = 'greeting'
      const greetings = [
        "Ahoy there! I'm Captain Catch, your Gulf Coast seafood expert! 🎣 What brings you to our waters today?",
        "Welcome aboard! I'm Captain Catch. I've been working these Gulf waters for decades - how can I help you find the perfect seafood?",
        "Ahoy! Captain Catch here, ready to help you navigate our fresh Gulf Coast offerings!"
      ]
      responseText = greetings[Math.floor(Math.random() * greetings.length)]
      suggestions = ["What's fresh today?", "Show me cooking tips", "Tell me about your freshness guarantee", "Help me plan dinner"]

    } else {
      // Default response
      const fallbackResponses = [
        "🤔 I want to make sure I give you the best advice! Could you tell me a bit more about what you're looking for? I'm here to help with everything from selecting the perfect catch to cooking techniques!",
        "⚓ As your Gulf Coast seafood expert, I'm here to help! What specific information can I provide about our fresh catches?",
        "🎣 I've got decades of experience with Gulf seafood - what can I help you with today?"
      ]
      responseText = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)]
      suggestions = ["What's the freshest today?", "Help me choose for dinner", "Cooking and preparation tips", "Tell me about pricing"]
    }

    return NextResponse.json({
      text: responseText,
      suggestions,
      intent,
      sessionId,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { 
        text: "🚨 Ahoy! Seems like we hit some rough waters. Let me get back to you in a moment!",
        suggestions: ["Try again", "Contact support"],
        error: true 
      },
      { status: 500 }
    )
  }
} 