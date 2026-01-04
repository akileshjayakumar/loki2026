# The Yggdrasil Archive: Mapping the MCU Multiverse

A high-end, interactive educational website exploring the complex temporal mechanics of Marvel's *Loki* series. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🌳 Overview

The Yggdrasil Archive is a comprehensive educational resource that clarifies the intricate concepts of timelines, dimensions, and realities in the Marvel Cinematic Universe. It features:

- **Interactive Timeline Tree**: An SVG visualisation of Yggdrasil showing the Sacred Timeline, branched timelines, and parallel universes
- **Temporal Lexicon**: A searchable database clarifying key concepts like Nexus Events, Absolute Points, the Temporal Loom, and more
- **Loki's Journey**: A scroll-spy timeline tracking Loki's transformation from Variant L1130 to the God of Stories
- **TVA Personnel Database**: A CRT terminal-styled interface with detailed files on Mobius, B-15, Sylvie, and Ravonna

## 🎨 Design Aesthetic

The site features a **"TVA-meets-Celestial"** dark mode aesthetic with:
- Deep teals (#158f8a) and dark backgrounds (#0a0e17)
- Bronze accents (#d4941f) for warmth
- Glowing emerald greens (#2dd4bf) for highlights
- Time-slip glitch effects
- Glowing line-art for timelines
- CRT monitor effects for the database terminal
- Elegant typography: Playfair Display (serif) for headings, Space Mono (monospace) for TVA data

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd loki
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Playfair Display, Space Mono, Inter (via Google Fonts)

## 📁 Project Structure

```
loki/
├── app/
│   ├── layout.tsx          # Root layout with font configuration
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and custom animations
├── components/
│   ├── YggdrasilTree.tsx   # Interactive SVG timeline tree
│   ├── TemporalLexicon.tsx # Searchable concept database
│   ├── LokiJourney.tsx     # Scroll-spy character timeline
│   ├── TVADatabase.tsx     # CRT terminal personnel files
│   ├── Header.tsx          # Site header with navigation
│   └── Footer.tsx          # Site footer with resources
├── tailwind.config.ts      # Tailwind configuration with custom theme
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## ✨ Key Features

### Interactive Timeline Tree
- SVG-based visualisation of Yggdrasil
- Animated branch growth using Framer Motion
- Hover tooltips explaining timeline concepts
- Responsive design: collapses to vertical list on mobile

### Temporal Lexicon
- Searchable database of 12+ temporal concepts
- Category filtering (Temporal, Spatial, Cosmic)
- Expandable entries with detailed comparisons
- Smooth animations for search results

### Loki's Journey
- Vertical scroll-spy timeline
- 5 major stages from Variant to God of Stories
- Includes the Bootstrap Paradox explanation
- Alternating left-right layout on desktop

### TVA Database
- Authentic CRT monitor effect with scan lines
- Boot sequence animation
- 4 detailed personnel files (Mobius, B-15, Sylvie, Ravonna)
- Terminal-style interface with green phosphor aesthetic

## 📚 Content Highlights

The archive explains:
- The Sacred Timeline is a **bundle of infinite threads**, not a single line
- The TVA's new mission: monitoring the 31st century for Kangs whilst protecting all realities
- The transition from mechanical control (Temporal Loom) to organic growth (Yggdrasil)
- The Victor Timely/He Who Remains bootstrap paradox and how Loki broke it
- Distinctions between timelines, dimensions, and realities

## 🎯 Key Concepts Covered

- **Timelines** vs **Dimensions** vs **Realities/Universes**
- **Nexus Events** vs **Absolute Points**
- **Temporal Loom** vs **Yggdrasil**
- **Sacred Timeline** structure and purpose
- **Kang Variants** and the Multiversal War
- **Bootstrap Paradox** in Loki Season 2

## 📱 Responsive Design

The site is fully responsive across all devices:
- Desktop: Full interactive visualisations
- Tablet: Optimised layouts with maintained functionality
- Mobile: Simplified vertical timelines and stacked content

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🎨 Customisation

The colour palette and animations can be customised in [tailwind.config.ts](tailwind.config.ts). Key colours:

- `tva-dark`: #0a0e17 (main background)
- `tva-teal-500`: #158f8a (primary accent)
- `bronze-500`: #d4941f (secondary accent)
- `emerald-glow`: #2dd4bf (highlights)

## 📄 Licence

This is an unofficial fan-made educational project. Marvel, Loki, the TVA, and all related characters and concepts are property of Marvel Studios and The Walt Disney Company.

## 🙏 Credits

- **Marvel Studios** for creating the Loki series
- **Disney+** for streaming the series
- **MCU Wiki** for comprehensive lore documentation
- Built with **Next.js**, **Tailwind CSS**, and **Framer Motion**

---

**"For All Time. Always."**
