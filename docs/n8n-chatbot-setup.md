# Captain Catch Chatbot - n8n Integration Guide

## Overview

This guide walks you through setting up the Captain Catch chatbot to work with n8n workflows, enabling sophisticated conversation flows, intent detection, and dynamic responses.

## Prerequisites

- n8n instance running (locally or cloud)
- Next.js application with the ChatBot component
- Basic understanding of n8n workflows

## Setup Steps

### 1. Install and Configure n8n

#### Option A: Local Installation
```bash
npm install n8n -g
n8n start
```

#### Option B: Docker
```bash
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  docker.n8n.io/n8nio/n8n
```

#### Option C: n8n Cloud
Sign up at [n8n.cloud](https://n8n.cloud) for hosted solution.

### 2. Import the Chatbot Workflow

1. Open your n8n instance (typically `http://localhost:5678`)
2. Click **"New Workflow"**
3. Click the **"..."** menu and select **"Import from File"**
4. Upload the `n8n-workflows/captain-catch-chatbot.json` file
5. Click **"Save"** to save the workflow

### 3. Configure the Webhook

1. In the workflow, click on the **"Webhook"** node
2. Copy the **Production URL** (it will look like: `https://your-n8n-instance.com/webhook/chatbot`)
3. Note this URL for your environment configuration

### 4. Environment Configuration

Create or update your `.env.local` file in your Next.js project:

```env
# n8n Configuration
NEXT_PUBLIC_N8N_WEBHOOK_URL=http://localhost:5678/webhook/chatbot

# For production, use your actual n8n webhook URL:
# NEXT_PUBLIC_N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/chatbot

# Optional: API key for authenticated requests
NEXT_PUBLIC_N8N_API_KEY=your_api_key_here

# Session timeout (in milliseconds)
NEXT_PUBLIC_CHATBOT_SESSION_TIMEOUT=3600000
```

### 5. Test the Integration

1. **Activate the workflow** in n8n by clicking the toggle switch
2. **Start your Next.js development server**:
   ```bash
   npm run dev
   ```
3. **Open your website** and click on the chatbot
4. **Send a test message** like "Hello" or "What's fresh today?"
5. **Check n8n execution log** to see the workflow processing

## Workflow Features

### Intent Detection
The workflow automatically detects user intents:
- **Greeting**: Hello, hi, hey
- **Inventory**: Fresh, today, available, stock
- **Cooking**: Cook, recipe, prepare, grill
- **Product Specific**: Snapper, grouper, shrimp, crab, oyster
- **Nutrition**: Nutrition, healthy, protein, omega
- **Pricing**: Price, cost, order, buy

### Dynamic Responses
- **Contextual suggestions** based on user intent
- **Randomized greetings** for natural conversation
- **Product-specific information** with current pricing
- **Cooking advice** tailored to preparation methods

### Data Flow
```
User Message → n8n Webhook → Intent Detection → Response Generation → ChatBot Display
```

## Advanced Configuration

### Adding Database Integration

You can extend the workflow to connect to your actual inventory database:

1. **Add HTTP Request node** to query your inventory API
2. **Replace static product data** with real-time database queries
3. **Add error handling** for database connection issues

Example database integration node:
```javascript
// In a new Code node after "Process Message"
const response = await $http.request({
  method: 'GET',
  url: 'https://your-api.com/inventory',
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN'
  }
});

return response.data;
```

### Adding User Sessions

Track conversation history by adding session management:

1. **Add Redis/Database node** for session storage
2. **Store conversation context** per user session
3. **Retrieve context** for personalized responses

### Email Integration

Add email notifications for specific intents:

1. **Add Email node** after certain responses
2. **Trigger on high-intent messages** (like "order", "buy")
3. **Send lead notifications** to your sales team

### Analytics

Track chatbot performance:

1. **Add HTTP Request node** to send analytics data
2. **Log user intents and responses**
3. **Monitor conversion rates** from chat to sales

## Troubleshooting

### Common Issues

1. **Webhook not responding**:
   - Check n8n is running
   - Verify webhook URL is correct
   - Ensure workflow is activated

2. **CORS errors**:
   - Add your domain to webhook allowed origins
   - For development, use `*` as allowed origin

3. **Fallback responses only**:
   - Check n8n logs for errors
   - Verify webhook endpoint is accessible
   - Test webhook URL directly with curl

### Testing Commands

Test webhook directly:
```bash
curl -X POST http://localhost:5678/webhook/chatbot \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Hello",
    "conversationHistory": [],
    "timestamp": "'$(date -u +%Y-%m-%dT%H:%M:%S.%3NZ)'",
    "sessionId": "test_session"
  }'
```

### Debug Mode

Enable debug mode in the ChatBot component:
```javascript
// Add to ChatBot.tsx
console.log('Sending to n8n:', payload);
console.log('n8n response:', response);
```

## Production Deployment

### Security Considerations

1. **Use HTTPS** for webhook URLs
2. **Implement API key authentication**
3. **Rate limiting** to prevent abuse
4. **Input validation** in n8n workflows

### Performance Optimization

1. **Cache responses** for common queries
2. **Implement webhook timeout handling**
3. **Use CDN** for static assets
4. **Monitor response times**

### Monitoring

Set up monitoring for:
- Webhook response times
- Error rates
- User satisfaction metrics
- Conversation completion rates

## Extending the Chatbot

### Adding New Intents

1. **Update intent detection** in "Process Message" node
2. **Add new switch condition** in "Route by Intent" node
3. **Create response node** for the new intent
4. **Connect to webhook response**

### Integrating with External APIs

- **Weather API** for fishing conditions
- **Inventory management system**
- **Customer database** for personalization
- **Payment processing** for direct orders

### AI Integration

Enhance with AI services:
- **OpenAI GPT** for more natural responses
- **Google Dialogflow** for advanced NLP
- **Custom ML models** for seafood expertise

## Support

For issues with the n8n integration:
1. Check the n8n execution log
2. Verify webhook configuration
3. Test with simple curl commands
4. Review browser network tab for errors

The chatbot will gracefully fall back to local responses if n8n is unavailable, ensuring your customers always receive helpful information about your fresh Gulf Coast seafood! 