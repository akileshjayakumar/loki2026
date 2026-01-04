# Quick Start Guide

## 🚀 Running the Project

The development server is currently running at:
- **Local**: http://localhost:3000
- **Network**: http://192.168.1.98:3000

## 📋 Available Commands

```bash
# Development
npm run dev      # Start development server (currently running)

# Production
npm run build    # Build optimised production bundle
npm start        # Start production server

# Code Quality
npm run lint     # Run ESLint to check code quality
```

## 🎨 Key Features to Explore

### 1. Interactive Yggdrasil Timeline Tree
- **Location**: Hero section (top of page)
- **Interaction**: Hover over branch endpoints to see tooltips
- **Mobile**: Automatically converts to vertical list layout
- **Colours**:
  - Teal gradient = Sacred Timeline trunk
  - Green branches = Branched timelines
  - Bronze circles = Parallel universes

### 2. Temporal Lexicon Database
- **Location**: Second section
- **Features**:
  - Search bar for filtering concepts
  - Category filters (All, Temporal, Spatial, Cosmic)
  - Click entries to expand and see detailed comparisons
  - Animated search results
- **Content**: 12 key concepts explained with distinctions

### 3. Loki's Journey Timeline
- **Location**: Third section
- **Features**:
  - Scroll-spy activation (sections highlight as you scroll)
  - Vertical timeline with alternating left/right layout
  - 5 major story stages including the Bootstrap Paradox
  - Animated dots that scale when stage is active
- **Mobile**: Single column layout with timeline on left

### 4. TVA Personnel Database
- **Location**: Fourth section (bottom)
- **Features**:
  - CRT terminal boot sequence (2-second animation on load)
  - Scan line and flicker effects for authenticity
  - 4 character files: Mobius, B-15, Sylvie, Ravonna
  - Click personnel files to view detailed records
  - Terminal-style green phosphor text

## 🎯 Design System

### Colours
- **Backgrounds**:
  - `tva-darker` (#050810) - Main background
  - `tva-dark` (#0a0e17) - Panel backgrounds
  - `tva-blue` (#1a2332) - Interactive elements

- **Accents**:
  - `tva-teal-500` (#158f8a) - Primary accent
  - `bronze-500` (#d4941f) - Secondary accent
  - `emerald-glow` (#2dd4bf) - Highlights and glows

### Typography
- **Headings**: Playfair Display (serif) - Elegant, dramatic
- **TVA Data**: Space Mono (monospace) - Technical, terminal-like
- **Body**: Inter (sans-serif) - Clean, readable

### Animations
- **Glitch effects**: Applied to text during hover
- **Glow pulse**: 2s infinite pulse on key elements
- **Branch growth**: 1.5s stroke animation for timeline branches
- **Scan line**: 8s linear infinite CRT scan effect
- **Hover states**: Scale and shadow transitions

## 🔧 Customisation Tips

### Changing Colours
Edit [tailwind.config.ts](tailwind.config.ts):
```typescript
colors: {
  tva: { /* ... */ },
  bronze: { /* ... */ },
  emerald: { /* ... */ },
}
```

### Modifying Animations
Edit [app/globals.css](app/globals.css):
- `.glitch-text` - Glitch effect
- `.crt-effect` - CRT monitor effect
- `.timeline-branch` - SVG branch animations

### Adding Content
- **Lexicon entries**: Edit `lexiconData` in [components/TemporalLexicon.tsx](components/TemporalLexicon.tsx)
- **Journey stages**: Edit `stages` in [components/LokiJourney.tsx](components/LokiJourney.tsx)
- **Personnel files**: Edit `personnelFiles` in [components/TVADatabase.tsx](components/TVADatabase.tsx)
- **Timeline branches**: Edit `branches` in [components/YggdrasilTree.tsx](components/YggdrasilTree.tsx)

## 📱 Testing Responsive Design

### Desktop (1920x1080)
- Full interactive visualisations
- Side-by-side layouts
- Hover effects active

### Tablet (768px)
- Optimised grid layouts
- Maintained interactivity
- Adjusted spacing

### Mobile (375px)
- Vertical timelines
- Stacked sections
- Touch-optimised interactions

## 🐛 Common Issues

### Port Already in Use
```bash
# Kill existing process on port 3000
lsof -ti:3000 | xargs kill -9
npm run dev
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### Styling Not Applied
```bash
# Rebuild Tailwind classes
rm -rf .next
npm run dev
```

## 📚 Project Structure

```
loki/
├── app/
│   ├── layout.tsx           # Root layout, fonts, metadata
│   ├── page.tsx             # Main page with all sections
│   └── globals.css          # Global styles, custom animations
│
├── components/
│   ├── YggdrasilTree.tsx    # SVG timeline tree (Hero)
│   ├── TemporalLexicon.tsx  # Searchable database
│   ├── LokiJourney.tsx      # Scroll-spy timeline
│   ├── TVADatabase.tsx      # CRT terminal UI
│   ├── Header.tsx           # Fixed header
│   └── Footer.tsx           # Footer with resources
│
├── tailwind.config.ts       # Custom theme, animations
├── tsconfig.json            # TypeScript config
└── package.json             # Dependencies
```

## 🎓 Learning Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **TypeScript**: https://www.typescriptlang.org/docs

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
```bash
# Build production bundle
npm run build

# The output will be in .next/ directory
# Upload to your hosting provider
```

---

**Enjoy exploring the multiverse!** 🌌

*"For All Time. Always."*
