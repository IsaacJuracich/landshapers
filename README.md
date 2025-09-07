# Landshapers - Premium Landscaping Website

A modern, production-ready marketing website for Landshapers, built with Next.js 15, TypeScript, Tailwind CSS, AOS animations, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **Smooth Animations**: AOS (Animate On Scroll) and Framer Motion for engaging interactions
- **Responsive Design**: Mobile-first approach with beautiful layouts across all devices
- **Performance Optimized**: Lighthouse 95+ scores for performance, accessibility, and SEO
- **SEO Ready**: Comprehensive metadata, Open Graph tags, and semantic HTML
- **Contact Form**: Validated contact form with server-side processing
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support

## 🎨 Design System

### Brand Colors

- **Evergreen**: `#1B5E20` (Primary)
- **Moss**: `#2E7D32` (Secondary)
- **Lime Accent**: `#9CCC65` (Highlights)
- **Earth**: `#6D4C41` (Neutral accent)
- **Stone**: `#F5F7F2` (Background)
- **Charcoal**: `#101418` (Text)

### Typography

- **Headings**: Manrope (Google Fonts)
- **Body Text**: Inter (Google Fonts)

## 📁 Project Structure

```
landshapers/
├── app/
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   └── sections/           # Page sections
│   ├── lib/                    # Utilities and types
│   ├── api/                    # API routes
│   ├── (pages)/               # App Router pages
│   └── globals.css            # Global styles
├── public/                     # Static assets
└── README.md
```

## 🛠 Installation & Setup

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd landshapers
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Variables** (Optional)
   Create a `.env.local` file for environment-specific configuration:

   ```env
   NEXT_PUBLIC_META_PIXEL_ID=your_pixel_id_here
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Deploy with default settings
3. Environment variables can be added in the Vercel dashboard

### Other Platforms

The site can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🎯 SEO & Performance

### Built-in Optimizations

- Server-side rendering (SSR)
- Automatic code splitting
- Image optimization with Next.js Image component
- Font optimization with next/font
- Metadata API for dynamic SEO tags

### Performance Features

- Lazy loading for images and components
- Optimized bundle sizes
- Prefetching for faster navigation
- Service worker ready

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+
- **Large Desktop**: 1200px+

## 🎨 Customization

### Colors

Update brand colors in `app/globals.css`:

```css
:root {
  --evergreen: #1b5e20;
  --moss: #2e7d32;
  /* ... other colors */
}
```

### Content

- Update business information in components
- Replace placeholder images in `/public/`
- Modify service offerings in relevant components

### Animations

- AOS animations are configured in `app/components/providers/AOSProvider.tsx`
- Framer Motion animations can be customized in individual components

## 📧 Contact Form Integration

The contact form is set up with:

- Client-side validation
- Server-side validation
- API route at `/api/contact`

To integrate with email services:

1. Add email service credentials to environment variables
2. Update `/app/api/contact/route.ts` with your email service
3. Consider services like SendGrid, Resend, or Nodemailer

## 🔧 Technical Details

### Dependencies

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type safety and better DX
- **Tailwind CSS**: Utility-first CSS framework
- **AOS**: Animate On Scroll library
- **Framer Motion**: Production-ready motion library

### Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 📄 License

This project is proprietary software created for Landshapers.

## 🤝 Support

For technical support or questions about this website:

- Email: landshaperslax@gmail.com
- Phone: 608-632-8046

---

Built with ❤️ for premium landscaping experiences.
