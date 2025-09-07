# Animation Template | Next.js with AOS, Framer Motion & Meta Pixel

A comprehensive Next.js template featuring AOS (Animate On Scroll), Framer Motion animations, and Meta Pixel tracking with TypeScript and Tailwind CSS.

## ✨ Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **AOS (Animate On Scroll)** for scroll-triggered animations
- **Framer Motion** for advanced animations and interactions
- **Meta Pixel** for analytics and conversion tracking
- **Responsive Design** with mobile-first approach
- **Dark Mode** support
- **Performance Optimized** with lazy loading and code splitting

## 🚀 Quick Start

1. **Clone or use this template**

   ```bash
   git clone <repository-url>
   cd juracich-site-template
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and add your Meta Pixel ID:

   ```
   NEXT_PUBLIC_META_PIXEL_ID=your_actual_pixel_id_here
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 📦 What's Included

### Animation Libraries

- **AOS (Animate On Scroll)**

  - Fade, slide, zoom, and flip animations
  - Customizable duration, easing, and delays
  - Mobile optimization
  - Auto-refresh on route changes

- **Framer Motion**
  - Physics-based animations
  - Gesture recognition (hover, tap, drag)
  - Layout animations
  - Stagger animations
  - Spring animations

### Analytics & Tracking

- **Meta Pixel Integration**
  - TypeScript definitions
  - Standard events (Purchase, AddToCart, Lead, etc.)
  - Custom events
  - Debug mode for development
  - Privacy-compliant implementation

### Components Structure

```
app/
├── components/
│   ├── providers/
│   │   ├── AOSProvider.tsx       # AOS initialization
│   │   ├── FramerProvider.tsx    # Framer Motion setup
│   │   └── MetaPixelProvider.tsx # Meta Pixel tracking
│   └── examples/
│       ├── AOSExamples.tsx       # AOS demo components
│       ├── FramerExamples.tsx    # Framer Motion demos
│       └── MetaPixelExamples.tsx # Pixel tracking demos
├── lib/
│   └── types/
│       └── meta-pixel.ts         # TypeScript definitions
├── layout.tsx                    # Root layout with providers
└── page.tsx                      # Homepage with examples
```

## 🎨 Animation Examples

### AOS Animations

- Fade (up, down, left, right)
- Slide (up, down, left, right)
- Zoom (in, out)
- Flip (left, right, up, down)
- Custom timing and easing

### Framer Motion Animations

- Hover and tap interactions
- Spring physics
- Stagger animations
- Layout animations
- Gesture-based animations
- Custom transitions

### Meta Pixel Events

- Standard events (Purchase, AddToCart, Lead, etc.)
- Custom events
- E-commerce tracking
- Form submissions
- User interactions

## ⚙️ Configuration

### AOS Configuration

```typescript
// In AOSProvider.tsx
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
  mirror: false,
  offset: 120,
  disable: "phone", // Disable on mobile for performance
});
```

### Framer Motion Configuration

```typescript
// Using LazyMotion for performance
<LazyMotion features={domAnimation} strict>
  {children}
</LazyMotion>
```

### Meta Pixel Configuration

```typescript
// In layout.tsx
<MetaPixelProvider
  config={{
    pixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "YOUR_PIXEL_ID",
    autoConfig: true,
    debug: process.env.NODE_ENV === "development",
    testMode: process.env.NODE_ENV === "development",
  }}
>
```

## 🔧 Customization

### Adding New Animations

**AOS Example:**

```jsx
<div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
  Your content
</div>
```

**Framer Motion Example:**

```jsx
<m.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Your content
</m.div>
```

### Tracking Custom Events

```typescript
import {
  trackEvent,
  trackCustomEvent,
} from "@/app/components/providers/MetaPixelProvider";

// Standard event
trackEvent("Purchase", { value: 99.99, currency: "USD" });

// Custom event
trackCustomEvent("CustomAction", {
  category: "engagement",
  label: "button_click",
});
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Environment Variables

Create a `.env.local` file:

```env
# Meta Pixel
NEXT_PUBLIC_META_PIXEL_ID=your_pixel_id

# Optional
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 📱 Mobile Optimization

- AOS animations are disabled on mobile devices for better performance
- Framer Motion uses LazyMotion for reduced bundle size
- Responsive design with mobile-first approach
- Touch-friendly interactions

## 🌙 Dark Mode

The template includes built-in dark mode support using Tailwind CSS:

```jsx
<div className="bg-white dark:bg-gray-800">
  Content that adapts to dark mode
</div>
```

## 📊 Analytics Setup

### Meta Pixel Setup

1. Go to [Meta Business Manager](https://business.facebook.com/events_manager2)
2. Create a new Pixel or get your existing Pixel ID
3. Add the ID to your `.env.local` file
4. Test events using the Meta Pixel Helper Chrome extension

### Monitoring Events

- **Browser DevTools**: Network tab filtered by "facebook"
- **Meta Events Manager**: Real-time event monitoring
- **Meta Pixel Helper**: Chrome extension for debugging

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The template works with any platform that supports Next.js:

- Netlify
- Railway
- AWS Amplify
- Self-hosted

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [AOS](https://michalsnik.github.io/aos/) - Animate On Scroll library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Meta Pixel](https://developers.facebook.com/docs/meta-pixel/) - Analytics platform

## 📞 Support

If you have any questions or need help with the template:

1. Check the examples in the demo
2. Review the component documentation
3. Open an issue on GitHub
4. Contact the maintainer

---

**Happy coding! 🎉**
