'use client'

import { useEffect, useState } from 'react'
import '@n8n/chat/style.css'
import { createChat } from '@n8n/chat'

interface N8nChatWidgetProps {
  webhookUrl?: string
}

// Type definitions for the n8n chat module
declare global {
  interface Window {
    createChat?: (config: any) => void;
  }
}

export default function N8nChatWidget({ 
  webhookUrl = 'https://jgewirz.app.n8n.cloud/webhook/a0032740-26d8-491b-93f9-2250906d0e17'
}: N8nChatWidgetProps) {
  const [chatError, setChatError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [useFallback, setUseFallback] = useState(false)
  
  useEffect(() => {
    // Test webhook connectivity first
    const testWebhook = async () => {
      try {
        console.log('Testing webhook connectivity to:', webhookUrl)
        
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: 'test connection',
            sessionId: 'test-session'
          })
        })
        
        console.log('Webhook test response status:', response.status)
        
        if (!response.ok) {
          throw new Error(`Webhook returned ${response.status}: ${response.statusText}`)
        }
        
        const data = await response.text()
        console.log('Webhook test response:', data)
        
        // If webhook test passes, initialize chat
        initializeN8nChat()
        
      } catch (error) {
        console.error('Webhook test failed:', error)
        console.log('Falling back to local API endpoint')
        setUseFallback(true)
        initializeFallbackChat()
      } finally {
        setIsLoading(false)
      }
    }

    // Function to initialize n8n chat
    const initializeN8nChat = () => {
      try {
        console.log('Initializing n8n chat with webhook:', webhookUrl)
        
        createChat({
          webhookUrl: webhookUrl.trim(),
          webhookConfig: {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
          },
          target: '#n8n-chat',
          mode: 'window',
          chatInputKey: 'message',
          chatSessionKey: 'sessionId',
          metadata: {
            source: 'water-street-seafood'
          },
          showWelcomeScreen: true,
          defaultLanguage: 'en',
          initialMessages: [
            'Ahoy! I\'m Captain Catch 🎣',
            'I\'m your Gulf Coast seafood expert. How can I help you today?'
          ],
          i18n: {
            en: {
              title: 'Captain Catch - Seafood Expert 🎣',
              subtitle: 'Ask me about fresh Gulf Coast seafood, cooking tips, and more!',
              footer: 'Water Street Seafood - Fresh from the Gulf',
              getStarted: 'Start Chatting',
              inputPlaceholder: 'Ask Captain Catch about fresh seafood...',
              closeButtonTooltip: 'Close chat'
            }
          }
        })
        
        console.log('n8n chat initialized successfully')
        
      } catch (error) {
        console.error('Failed to initialize n8n chat widget:', error)
        console.log('Falling back to local API endpoint')
        setUseFallback(true)
        initializeFallbackChat()
      }
    }

    // Function to initialize fallback chat using local API
    const initializeFallbackChat = () => {
      console.log('Initializing fallback chat with local API')
      
      try {
        createChat({
          webhookUrl: '/api/chat',
          webhookConfig: {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            }
          },
          target: '#n8n-chat',
          mode: 'window',
          chatInputKey: 'message',
          chatSessionKey: 'sessionId',
          metadata: {
            source: 'water-street-seafood-local'
          },
          showWelcomeScreen: true,
          defaultLanguage: 'en',
          initialMessages: [
            'Ahoy! I\'m Captain Catch 🎣',
            'I\'m your Gulf Coast seafood expert, running on backup systems.',
            'How can I help you today?'
          ],
          i18n: {
            en: {
              title: 'Captain Catch - Seafood Expert 🎣',
              subtitle: 'Ask me about fresh Gulf Coast seafood, cooking tips, and more!',
              footer: 'Water Street Seafood - Fresh from the Gulf (Local Mode)',
              getStarted: 'Start Chatting',
              inputPlaceholder: 'Ask Captain Catch about fresh seafood...',
              closeButtonTooltip: 'Close chat'
            }
          }
        })
        
        console.log('Fallback chat initialized successfully')
        
      } catch (error) {
        console.error('Failed to initialize fallback chat:', error)
        setChatError(`Chat system unavailable: ${error instanceof Error ? error.message : 'Unknown error'}`)
        showFallbackButton()
      }
    }

    const showFallbackButton = () => {
      // Remove any existing fallback chats first
      const existingFallbacks = document.querySelectorAll('.fallback-chat-button')
      existingFallbacks.forEach(btn => btn.remove())
      
      // Fallback: Show a simple message if the widget fails to load
      const fallbackDiv = document.createElement('div')
      fallbackDiv.className = 'fallback-chat-button'
      fallbackDiv.innerHTML = `
        <div style="
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: linear-gradient(135deg, #0066cc 0%, #0052a3 100%);
          color: white;
          padding: 15px 20px;
          border-radius: 50px;
          box-shadow: 0 4px 12px rgba(0, 102, 204, 0.3);
          cursor: pointer;
          font-family: system-ui;
          z-index: 1000;
          font-size: 14px;
          transition: all 0.3s ease;
        ">
          🎣 Chat with Captain Catch
          <br><small style="font-size: 10px; opacity: 0.8;">Connection issue detected</small>
        </div>
      `
      
      const button = fallbackDiv.firstElementChild as HTMLElement
      
      fallbackDiv.onmouseover = () => {
        if (button) {
          button.style.transform = 'scale(1.05)'
          button.style.boxShadow = '0 6px 20px rgba(0, 102, 204, 0.4)'
        }
      }
      
      fallbackDiv.onmouseout = () => {
        if (button) {
          button.style.transform = 'scale(1)'
          button.style.boxShadow = '0 4px 12px rgba(0, 102, 204, 0.3)'
        }
      }
      
      fallbackDiv.onclick = () => {
        const message = chatError 
          ? `Chat is temporarily unavailable due to: ${chatError}\n\nPlease contact us directly at (850) 555-FISH for assistance with your Gulf Coast seafood needs!`
          : 'Chat is temporarily unavailable. Please contact us directly at (850) 555-FISH for assistance with your Gulf Coast seafood needs!'
        
        alert(message)
      }
      
      document.body.appendChild(fallbackDiv)
    }

    // Start with webhook test
    testWebhook()

    // Cleanup function
    return () => {
      // Remove any existing chat widgets when component unmounts
      const existingChats = document.querySelectorAll('[data-n8n-chat]')
      existingChats.forEach(chat => chat.remove())
      
      // Remove fallback chat if it exists
      const fallbackChats = document.querySelectorAll('.fallback-chat-button')
      fallbackChats.forEach(chat => chat.remove())
    }

  }, [webhookUrl])

  return (
    <>
      {/* Mount point for n8n chat widget */}
      <div id="n8n-chat"></div>
      
      {/* Loading indicator */}
      {isLoading && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: '#f3f4f6',
          padding: '12px',
          borderRadius: '8px',
          fontSize: '12px',
          color: '#6b7280',
          zIndex: 999
        }}>
          Testing chat connection...
        </div>
      )}
      
      {/* Error indicator */}
      {chatError && !isLoading && (
        <div style={{
          position: 'fixed',
          bottom: '80px',
          right: '20px',
          background: '#fef2f2',
          border: '1px solid #fecaca',
          padding: '12px',
          borderRadius: '8px',
          fontSize: '12px',
          color: '#dc2626',
          maxWidth: '300px',
          zIndex: 999
        }}>
          <strong>Chat Error:</strong> {chatError}
        </div>
      )}
      
      {/* Custom styles for the n8n chat widget */}
      <style jsx global>{`
        /* Override n8n chat styles to match Water Street Seafood branding */
        .n8n-chat {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
        }
        
        .n8n-chat-window {
          border-radius: 12px !important;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12) !important;
          border: 1px solid #e2e8f0 !important;
        }
        
        .n8n-chat-header {
          background: linear-gradient(135deg, #0066cc 0%, #0052a3 100%) !important;
          color: white !important;
          border-radius: 12px 12px 0 0 !important;
          padding: 16px !important;
        }
        
        .n8n-chat-title {
          font-weight: 600 !important;
          font-size: 16px !important;
        }
        
        .n8n-chat-input-container {
          padding: 16px !important;
          background: #ffffff !important;
          border-radius: 0 0 12px 12px !important;
        }
        
        .n8n-chat-input {
          border: 1px solid #e2e8f0 !important;
          border-radius: 8px !important;
          padding: 12px 16px !important;
          font-size: 14px !important;
          transition: all 0.2s ease !important;
        }
        
        .n8n-chat-input:focus {
          outline: none !important;
          border-color: #0066cc !important;
          box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.1) !important;
        }
        
        .n8n-chat-message-bot {
          background: #f8fafc !important;
          border-radius: 12px 12px 12px 4px !important;
          color: #374151 !important;
          margin-bottom: 8px !important;
          padding: 12px 16px !important;
        }
        
        .n8n-chat-message-user {
          background: linear-gradient(135deg, #0066cc 0%, #0052a3 100%) !important;
          color: white !important;
          border-radius: 12px 12px 4px 12px !important;
          margin-bottom: 8px !important;
          padding: 12px 16px !important;
        }

        .n8n-chat-trigger {
          background: linear-gradient(135deg, #0066cc 0%, #0052a3 100%) !important;
          border-radius: 50px !important;
          box-shadow: 0 4px 12px rgba(0, 102, 204, 0.3) !important;
          transition: all 0.3s ease !important;
          border: none !important;
          padding: 16px !important;
          width: 56px !important;
          height: 56px !important;
        }

        .n8n-chat-trigger:hover {
          transform: scale(1.05) !important;
          box-shadow: 0 6px 20px rgba(0, 102, 204, 0.4) !important;
        }

        .n8n-chat-trigger-icon {
          color: white !important;
          font-size: 24px !important;
        }

        /* Welcome screen styling */
        .n8n-chat-welcome {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%) !important;
          border-radius: 12px !important;
          margin: 16px !important;
          padding: 20px !important;
          text-align: center !important;
        }

        .n8n-chat-welcome-title {
          color: #0066cc !important;
          font-weight: 600 !important;
          font-size: 18px !important;
          margin-bottom: 8px !important;
        }

        .n8n-chat-welcome-subtitle {
          color: #6b7280 !important;
          font-size: 14px !important;
          margin-bottom: 16px !important;
          line-height: 1.5 !important;
        }

        .n8n-chat-welcome-footer {
          color: #0066cc !important;
          font-size: 12px !important;
          font-weight: 500 !important;
          margin-top: 16px !important;
        }

        /* Message area styling */
        .n8n-chat-messages {
          padding: 16px !important;
          background: #ffffff !important;
          max-height: 400px !important;
          overflow-y: auto !important;
        }

        /* Send button styling */
        .n8n-chat-send-button {
          background: #0066cc !important;
          border-radius: 8px !important;
          border: none !important;
          padding: 12px !important;
          color: white !important;
          margin-left: 8px !important;
        }

        .n8n-chat-send-button:hover {
          background: #0052a3 !important;
        }

        /* Typing indicator */
        .n8n-chat-typing {
          color: #6b7280 !important;
          font-style: italic !important;
          padding: 8px 16px !important;
          font-size: 12px !important;
        }

        /* Custom placeholder styling */
        .n8n-chat-input::placeholder {
          color: #6b7280 !important;
          font-style: italic !important;
        }

        /* Get Started button */
        .n8n-chat-get-started {
          background: linear-gradient(135deg, #0066cc 0%, #0052a3 100%) !important;
          color: white !important;
          border: none !important;
          border-radius: 8px !important;
          padding: 12px 24px !important;
          font-weight: 600 !important;
          cursor: pointer !important;
          transition: all 0.2s ease !important;
        }

        .n8n-chat-get-started:hover {
          transform: translateY(-1px) !important;
          box-shadow: 0 4px 12px rgba(0, 102, 204, 0.3) !important;
        }

        /* Initial messages styling */
        .n8n-chat-initial-message {
          background: #f8fafc !important;
          border-radius: 12px 12px 12px 4px !important;
          color: #374151 !important;
          margin-bottom: 8px !important;
          padding: 12px 16px !important;
          border-left: 3px solid #0066cc !important;
        }
      `}</style>
    </>
  )
} 