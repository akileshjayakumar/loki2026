# Visual Component Guide

This document provides a visual description of each component and section of The Yggdrasil Archive.

---

## 🎨 Colour Palette Reference

```
BACKGROUNDS:
████ #050810 (tva-darker)    - Deepest background
████ #0a0e17 (tva-dark)      - Panel backgrounds
████ #1a2332 (tva-blue)      - Interactive elements

PRIMARY ACCENTS:
████ #158f8a (tva-teal-500)  - Main teal accent
████ #2dd4bf (emerald-glow)  - Bright highlights
████ #d4941f (bronze-500)    - Warm bronze accent
████ #10b981 (emerald-bright) - Green for branches
```

---

## 🖥️ Section-by-Section Visual Breakdown

### 1. Header (Fixed)
```
╔════════════════════════════════════════════════════════════╗
║  ⟲ The Yggdrasil Archive    Timeline Lexicon Journey DB   ║
║    TVA EDUCATIONAL DATABASE             For All Time...   ║
╚════════════════════════════════════════════════════════════╝
```
**Visual Features**:
- Semi-transparent backdrop blur
- Rotating clock icon (emerald glow)
- Navigation links that glow on hover
- Serif title + mono subtitle
- Fixed to top, follows scroll

---

### 2. Hero Section - Yggdrasil Tree

**Desktop View** (SVG Tree):
```
        The Yggdrasil Archive
     MAPPING THE MCU MULTIVERSE

        Parallel (Bronze)
           ╱
          ●
         ╱
        ╱  Branch (Green)     Branch (Green)
       ●                              ●
      ╱                                ╲
     ╱                                  ╲
    ╱    Branch (Green)  Branch (Green) ╲
   ●                        ●             ●
    ╲                      ║             ╱
     ╲                     ║            ╱
      ╲        Sacred Timeline (Teal) ╱
       ╲                   ║          ╱
        ╲                  ║         ╱
         ●                 ║        ●
          ╲                ║       ╱
           ╲               ║      ╱
            ●              ║     ●
                           ║
                           ●

[Legend: ─ Sacred  ─ Branched  ─ Parallel]

Hover over any endpoint ● for detailed information
```

**Mobile View** (Vertical List):
```
╔═══════════════════════════════════════════╗
║ ▌ Sacred Timeline                        ║
║   A bundle of infinite threads...        ║
║                                          ║
║ ▌ Branched Timeline Alpha                ║
║   A divergence from Sacred Timeline...   ║
║                                          ║
║ ▌ Branched Timeline Beta                 ║
║   Another timeline branch...             ║
╚═══════════════════════════════════════════╝
```

**Animations**:
- Branches grow from base to tips (1.5s stagger)
- Endpoint circles scale on hover
- Glowing effects pulse gently
- Tooltip fades in below tree on hover

---

### 3. Temporal Lexicon Section

```
╔═══════════════════════════════════════════════════════╗
║            TEMPORAL LEXICON                          ║
║        CLARIFYING THE MECHANICS OF TIME              ║
║                                                      ║
║  [🔍 Search temporal concepts...]                   ║
║                                                      ║
║  [All] [Temporal] [Spatial] [Cosmic]  ← Filters    ║
║                                                      ║
║  Displaying 12 of 12 entries                        ║
║                                                      ║
║  ╔════════════════════════════════════════════╗     ║
║  ║ 📖 Timeline          [TEMPORAL]        ▼   ║     ║
║  ║ A sequence of events occurring in          ║     ║
║  ║ chronological order...                     ║     ║
║  ╚════════════════════════════════════════════╝     ║
║                                                      ║
║  ╔════════════════════════════════════════════╗     ║
║  ║ 📖 Dimension         [SPATIAL]         ▼   ║     ║
║  ║ A plane of existence with its own          ║     ║
║  ║ physical laws...                           ║     ║
║  ╚════════════════════════════════════════════╝     ║
║                                                      ║
║  ╔════════════════════════════════════════════╗     ║
║  ║ 📖 Yggdrasil         [COSMIC]          ▼   ║     ║
║  ║ The World Tree of Norse mythology...       ║     ║
║  ║ ┌──────────────────────────────────────┐   ║     ║
║  ║ │ KEY DISTINCTION:                     │   ║  ← Expanded
║  ║ │ Where the Loom controlled,           │   ║
║  ║ │ Yggdrasil nurtures...                │   ║
║  ║ └──────────────────────────────────────┘   ║     ║
║  ╚════════════════════════════════════════════╝     ║
╚═══════════════════════════════════════════════════════╝
```

**Interactions**:
- Search filters entries in real-time
- Category buttons filter by type
- Click entry title to expand/collapse
- Expanded entries show key distinctions
- Animated transitions for smooth UX

**Colour Coding**:
- **Temporal** entries: Emerald glow borders
- **Spatial** entries: Bronze borders
- **Cosmic** entries: Teal borders

---

### 4. Loki's Journey Timeline

**Desktop Layout** (Alternating):
```
                    1. Variant L1130
                    The Fugitive
                    ┌─────────────┐
                    │ 👑          │
                    │ After the   │
                    │ Avengers... │
                    └─────────────┘
                           ●
                           ║
                           ║
           2. TVA Analyst  ●
           ┌─────────────┐
           │ 🕐          │
           │ Recruited by│
           │ Mobius...   │
           └─────────────┘
                           ║
                           ●
                           ║
                    3. The Seeker
                    ┌─────────────┐
                    │ ⚡          │
                    │ Reaches the │
                    │ Citadel...  │
                    └─────────────┘
```

**Mobile Layout** (Single Column):
```
● 1. Variant L1130
┃ The Fugitive
┃ ┌─────────────────┐
┃ │ 👑              │
┃ │ After Avengers..│
┃ └─────────────────┘
┃
● 2. TVA Analyst
┃ Learning Time
┃ ┌─────────────────┐
┃ │ 🕐              │
┃ │ Recruited by... │
┃ └─────────────────┘
```

**Features**:
- Vertical gradient timeline (bronze → emerald)
- Cards alternate left/right on desktop
- Active stage glows and scales
- Scroll-spy: stage activates when scrolled into view
- Each stage has custom icon and colour

**Final Card**:
```
╔═══════════════════════════════════════════╗
║  "I know what I want. I know what kind   ║
║   of god I need to be. For you.          ║
║   For all of us."                        ║
║                                          ║
║   — Loki Laufeyson, God of Stories       ║
║ ┌────────────────────────────────────┐   ║
║ │ Loki's journey transformed him     │   ║
║ │ from a selfish trickster...        │   ║
║ └────────────────────────────────────┘   ║
╚═══════════════════════════════════════════╝
```

---

### 5. TVA Personnel Database

**CRT Terminal View**:
```
╔═══════════════════════════════════════════════════════════╗
║ ⚡ TVA PERSONNEL DATABASE                                 ║
║   Classification Level: Analyst | Authorised Personnel... ║
╠═══════════════════════════════════════════════════════════╣
║ FILE LIST      │  CONTENT VIEWER                         ║
║                │                                          ║
║ 📄 PERSONNEL   │  ╔═══════════════════════════════════╗  ║
║ FILES (4)      │  ║ Mobius M. Mobius                  ║  ║
║                │  ║ SENIOR ANALYST, TEMPORAL ANALYSIS ║  ║
║ ╔════════════╗ │  ║ [ANALYST] Status: Active          ║  ║
║ ║ Mobius M.  ║ │  ╠═══════════════════════════════════╣  ║
║ ║ Mobius  >  ║ │  ║ [BACKGROUND]                      ║  ║
║ ║ ANALYST    ║ │  ║ Formerly Don, a single father...  ║  ║
║ ╚════════════╝ │  ║                                   ║  ║
║                │  ║ [CURRENT ROLE]                    ║  ║
║ ╔════════════╗ │  ║ Mobius serves as the TVA's...     ║  ║
║ ║ B-15       ║ │  ║                                   ║  ║
║ ║ JUDGE      ║ │  ║ [KEY OPERATIONAL MOMENTS]         ║  ║
║ ╚════════════╝ │  ║ > Recruited Variant L1130...      ║  ║
║                │  ║ > Discovered truth about TVA...   ║  ║
║ ╔════════════╗ │  ║ > Regained memories of...         ║  ║
║ ║ Sylvie     ║ │  ╚═══════════════════════════════════╝  ║
║ ║ VARIANT    ║ │                                          ║
║ ╚════════════╝ │                                          ║
║                │                                          ║
║ ╔════════════╗ │                                          ║
║ ║ Ravonna    ║ │                                          ║
║ ║ JUDGE      ║ │                                          ║
║ ╚════════════╝ │                                          ║
╠═══════════════════════════════════════════════════════════╣
║ TVA Database Terminal v7.4.2           ◼ ONLINE          ║
╚═══════════════════════════════════════════════════════════╝

[Scan line effect moving vertically ↕]
[Screen flicker effect: subtle opacity variations]
[Phosphor glow: green text with slight blur]
```

**Boot Sequence** (First 2 seconds):
```
[TVA PERSONNEL DATABASE v7.4.2]
Initialising temporal protocols...
Loading encrypted files...
Access granted. Welcome, Analyst.
```

**Visual Effects**:
1. **CRT Effect**: Horizontal scan lines every 4px
2. **Scan Line**: Bright line moving top to bottom
3. **Flicker**: Subtle opacity changes (0.97-1.0)
4. **Glow**: Green phosphor text shadow
5. **Border**: Thick teal border with rounded corners

---

### 6. Footer

```
╔═══════════════════════════════════════════════════════════╗
║                                                          ║
║  ABOUT THIS ARCHIVE  │  THE NEW TVA MISSION  │ RESOURCES║
║                      │                       │           ║
║  An educational fan  │  ▸ Monitor 31st      │ 🔗 MCU    ║
║  project exploring   │    century for Kangs │   Wiki    ║
║  temporal mechanics  │  ▸ Protect Earth-    │ 🔗 Disney+║
║  of Loki series...   │    199999 realities  │ 🔗 Marvel ║
║                      │  ▸ Natural timeline   │           ║
║                      │    growth             │           ║
║                      │  ▸ No more pruning    │           ║
║─────────────────────────────────────────────────────────║
║        REMEMBER THESE KEY POINTS:                        ║
║                                                          ║
║  Sacred Timeline      Loom vs. Yggdrasil   Loki's       ║
║  Bundle of infinite   Mechanical control   Sacrifice    ║
║  threads             → organic growth      for eternity ║
║─────────────────────────────────────────────────────────║
║  Built with ♥ for    © 2026 Yggdrasil     For All Time. ║
║  the God of Stories     Archive            Always.       ║
║─────────────────────────────────────────────────────────║
║  Disclaimer: Unofficial fan project. Marvel & Disney... ║
╚═══════════════════════════════════════════════════════════╝
```

---

## 🎭 Animation Showcase

### On Page Load:
1. **Header**: Slides down from top (0.6s)
2. **Hero Title**: Fades in and rises (0.8s, delay 0.3s)
3. **Tree Trunk**: Draws from bottom to top (1.5s)
4. **Branches**: Grow outward in sequence (staggered 0.3-1.0s)
5. **Background**: Gradual parallax movement on scroll

### On Scroll:
1. **Section Headers**: Fade in and rise when entering viewport
2. **Timeline Stages**: Activate and scale when centred
3. **Lexicon Entries**: Stagger animation (50ms between each)
4. **Background Blobs**: Move at different speeds (parallax)

### On Hover:
1. **Tree Endpoints**: Scale to 1.3x, show tooltip
2. **Lexicon Cards**: Border glows emerald, shadow increases
3. **Timeline Dots**: Glow intensifies
4. **Database Files**: Slide right 4px, border brightens
5. **Nav Links**: Colour shifts to emerald glow

### On Click:
1. **Lexicon Entry**: Expands to show comparison (0.3s)
2. **Database File**: Content switches with fade transition
3. **Category Filter**: Background fills with emerald glow

---

## 📱 Responsive Breakpoints

### Desktop (1024px+)
- Full tree visualisation
- Two-column layouts
- Hover interactions active
- Alternating timeline cards

### Tablet (768px - 1023px)
- Optimised tree scaling
- Adjusted spacing
- Touch-optimised targets
- Single-column sections

### Mobile (< 768px)
- Vertical list timeline tree
- Stacked components
- Full-width cards
- Simplified navigation
- Touch gestures

---

## 🎨 Typography Scale

```
h1: 6xl / 8xl (96px / 128px)  - Hero title
h2: 5xl (48px)                - Section headers
h3: 2xl / 3xl (24px / 30px)   - Card titles
h4: sm (14px)                 - Subsections
p:  base (16px)               - Body text
small: xs / sm (12px / 14px)  - Captions
```

---

## ✨ Special Effects

### Glitch Text
```
TEXT  ← Original
T̴E̷X̸T̶  ← Glitch overlay 1 (magenta offset)
T̷E̸X̴T̶  ← Glitch overlay 2 (cyan offset)
```

### Glow Effects
- **Emerald Glow**: 3-layer shadow (10px, 20px, 30px)
- **Bronze Glow**: 2-layer shadow (10px, 20px)
- **Pulsing**: Opacity 1.0 → 0.7 → 1.0 (2s cycle)

### CRT Effects
- **Scan Lines**: Horizontal lines every 4px
- **Moving Scan**: Bright line (2px) moving vertically
- **Flicker**: Random opacity variations
- **Curvature**: Subtle border radius for screen curve
- **Phosphor Glow**: Green text with soft blur

---

**This visual guide should help you understand the aesthetic and layout of each component!**

*Navigate to http://localhost:3000 to see it all in action!*
