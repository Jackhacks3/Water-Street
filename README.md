# Water Street Seafood - Premium Gulf Coast Seafood Website

A modern, responsive e-commerce website for Water Street Seafood, Florida Panhandle's largest seafood distributor, featuring AI-powered customer assistance and premium seafood showcase.

## 🌊 Features

### Core Features
- **Modern Responsive Design** - Mobile-first approach with seamless desktop scaling
- **AI-Powered Chatbot** - "Captain Catch" assistant for product recommendations and support
- **Real-Time Inventory** - Live updates on daily catch availability and freshness
- **Premium Product Showcase** - Interactive product cards with freshness tracking
- **Dynamic Hero Section** - Rotating images showcasing Gulf Coast fishing heritage
- **Customer Testimonials** - Interactive slider with reviews from chefs and customers

### E-Commerce Features
- **Daily Catch Display** - Fresh seafood caught today with timing indicators
- **Featured Products** - Premium selections with special badges and pricing
- **Shopping Cart Integration** - Easy add-to-cart functionality
- **Wholesale Portal** - Dedicated interface for restaurant/bulk buyers
- **Delivery Tracking** - Real-time updates on refrigerated deliveries

### Business Features
- **Restaurant Quality Guarantee** - Premium standards for all customers
- **Sustainability Information** - Local fishing practices and heritage
- **Contact Integration** - Multiple communication channels
- **Newsletter Signup** - Daily catch updates and recipes
- **Social Media Integration** - Follow Gulf Coast fishing community

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd water-street-seafood
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🎨 Design System

### Color Palette
- **Ocean Blues**: Primary branding colors representing the Gulf waters
- **Seafoam Greens**: Secondary colors for freshness and coastal feel
- **Coral Oranges**: Accent colors for calls-to-action and highlights
- **Sand Beiges**: Warm neutrals for coastal elegance

### Typography
- **Display Font**: Poppins (headers and branding)
- **Body Font**: Inter (content and navigation)

### Components
- **Navigation**: Sticky header with mega-menu dropdown
- **Hero**: Full-screen carousel with dynamic content
- **Product Cards**: Interactive cards with hover effects
- **AI Chat**: Expandable chat interface with Captain Catch
- **Footer**: Comprehensive links and company information

## 🤖 AI Chatbot - Captain Catch

The AI assistant provides:
- **Product Recommendations** based on cooking method and preferences
- **Cooking Instructions** and preparation tips
- **Pricing Information** and bulk order calculations
- **Delivery Support** with shipping times and tracking
- **Sustainability Info** about Gulf fishing practices

### Chat Features
- Real-time conversation interface
- Quick question buttons for common queries
- Typing indicators and message timestamps
- Responsive design for mobile and desktop

## 📱 Responsive Design

- **Mobile-First**: Optimized for smartphones and tablets
- **Desktop Enhanced**: Rich interactions and advanced layouts
- **Touch-Friendly**: Large buttons and gesture support
- **Fast Loading**: Optimized images and code splitting

## 🛠 Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Modern icon library

### Development Tools
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing and optimization
- **React Hot Toast** - User notifications

## 📦 Project Structure

```
water-street-seafood/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx          # Homepage component
├── components/            # React components
│   ├── Navigation.tsx     # Header and navigation
│   ├── Hero.tsx          # Hero section with carousel
│   ├── DailyCatch.tsx    # Fresh catch display
│   ├── FeaturedProducts.tsx # Premium product showcase
│   ├── About.tsx         # Company story and values
│   ├── Testimonials.tsx  # Customer reviews slider
│   ├── Footer.tsx        # Site footer
│   └── ChatBot.tsx       # AI assistant interface
├── public/               # Static assets
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── next.config.js       # Next.js configuration
```

## 🌊 Brand Identity

### Company Information
- **Name**: Water Street Seafood
- **Location**: Apalachicola, Florida
- **Tagline**: "Fresh from the Gulf" / "From Boat to You in One Day"
- **Specialty**: Premium Gulf Coast seafood distribution
- **Target Market**: Restaurants, retailers, and direct consumers

### Unique Selling Points
- Direct relationships with local fishermen
- Same-day freshness guarantee
- Restaurant-quality standards for all customers
- 25+ years of Gulf Coast expertise
- Sustainable fishing practices

## 📞 Contact & Support

- **Phone**: (850) 653-9191
- **Email**: orders@waterstreetseafood.com
- **Address**: 123 Water Street, Apalachicola, FL 32320
- **Hours**: Mon-Fri 6AM-6PM EST, Sat 6AM-2PM EST

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Environment Variables
Create a `.env.local` file for:
- OpenAI API keys (for enhanced AI chat)
- Stripe payment processing
- Email service configuration
- Analytics tracking IDs

## 📈 Future Enhancements

- Real-time inventory API integration
- Advanced AI chat with OpenAI GPT-4
- Payment processing with Stripe
- Order tracking and management system
- Recipe database with cooking videos
- Seasonal availability calendar
- Restaurant portal with bulk ordering
- Mobile app development

## 🦐 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is proprietary software for Water Street Seafood. All rights reserved.

---

*Built with 💙 for the Gulf Coast fishing community* 