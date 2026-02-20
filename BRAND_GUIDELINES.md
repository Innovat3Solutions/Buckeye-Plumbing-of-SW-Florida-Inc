# Buckeye Plumbing of SW Florida, Inc.
## Brand Guidelines & Design System

**Version:** 1.0
**Last Updated:** February 2026
**Designed by:** INNOVAT3 Solutions

---

## Table of Contents
1. [Brand Overview](#brand-overview)
2. [Logo Usage](#logo-usage)
3. [Color Palette](#color-palette)
4. [Typography](#typography)
5. [Mascot System](#mascot-system)
6. [Component Library](#component-library)
7. [Spacing & Layout](#spacing--layout)
8. [Animation Guidelines](#animation-guidelines)
9. [Photography & Imagery](#photography--imagery)
10. [Voice & Tone](#voice--tone)
11. [Responsive Design](#responsive-design)
12. [Accessibility](#accessibility)

---

## Brand Overview

### Brand Identity
Buckeye Plumbing of SW Florida, Inc. is a professional, family-owned plumbing company serving Southwest Florida for over 25 years. The brand conveys:

- **Reliability** - Consistent, dependable service
- **Professionalism** - Licensed, insured, expert technicians
- **Approachability** - Friendly, community-focused service
- **Urgency** - 24/7 emergency availability

### Brand Promise
*"Forget the rest, we are the best."*

### Core Values
- 100% Customer Satisfaction Guarantee
- Licensed & Insured (CFC1429403)
- 25 Years of Experience
- 24/7 Emergency Service
- Same-Day Service Available
- Free Estimates

### Legal Disclaimer
*Buckeye Plumbing of SW Florida, Inc. is not associated with Buckeye Plumbing Inc.*

---

## Logo Usage

### Primary Logo
**File:** `/assets/logo-full.png`

The primary logo should be used in most applications. It includes the full company name and branding elements.

### Logo Sizing

| Context | Mobile | Desktop |
|---------|--------|---------|
| Navbar | 60px height | 64px height |
| Footer | 64px height | 64px height |
| Mobile Menu | 64px height | N/A |

### Clear Space
Maintain a minimum clear space around the logo equal to the height of the "B" in Buckeye.

### Logo Don'ts
- Do not stretch or distort the logo
- Do not change logo colors outside approved palette
- Do not place on busy backgrounds without proper contrast
- Do not add effects (shadows, gradients) to the logo itself
- Do not rotate the logo

### Logo Backgrounds
- **Preferred:** White or light gray backgrounds
- **Acceptable:** Dark backgrounds with proper contrast
- **On Images:** Only with sufficient gradient overlay for legibility

---

## Color Palette

### Primary Colors

#### Buckeye Red (Primary Brand Color)
```css
--color-buckeye-red: #E31E24;
```
- **Usage:** Primary buttons, accents, headlines, calls-to-action
- **Tailwind:** `bg-buckeye-red`, `text-buckeye-red`

#### Buckeye Red Dark
```css
--color-buckeye-red-dark: #B91015;
```
- **Usage:** Hover states, pressed states, gradients
- **Tailwind:** `bg-buckeye-red-dark`, `hover:bg-buckeye-red-dark`

#### Buckeye Red Light
```css
--color-buckeye-red-light: #FF4D52;
```
- **Usage:** Gradients, light accents
- **Tailwind:** `text-buckeye-red-light`

### Neutral Colors

#### Buckeye Gray
```css
--color-buckeye-gray: #6D6E71;
```
- **Usage:** Secondary backgrounds, dark sections
- **Tailwind:** `bg-buckeye-gray`

#### Buckeye Gray Dark
```css
--color-buckeye-gray-dark: #4A4B4D;
```
- **Usage:** Footer backgrounds, dark overlays

#### Buckeye Gray Light
```css
--color-buckeye-gray-light: #97999B;
```
- **Usage:** Secondary text, borders

### Supporting Colors

| Color | Hex | Usage |
|-------|-----|-------|
| White | `#FFFFFF` | Backgrounds, text on dark |
| Black | `#000000` | Body text base |
| Gray 50 | Tailwind default | Light backgrounds |
| Gray 100 | Tailwind default | Borders, dividers |
| Gray 200 | Tailwind default | Secondary borders |
| Gray 300 | Tailwind default | Disabled states |
| Gray 400 | Tailwind default | Placeholder text |
| Gray 600 | Tailwind default | Secondary body text |
| Gray 800 | Tailwind default | Card backgrounds (dark) |
| Gray 900 | Tailwind default | Dark section backgrounds |

### Status Colors

| Status | Color | Usage |
|--------|-------|-------|
| Success/Online | `bg-green-500` | Active indicators, success states |
| Warning | `bg-yellow-500` | Star ratings, warnings |
| Info | `bg-blue-500` | Badges (Local Guide) |

### Gradients

#### Primary Red Gradient
```css
bg-gradient-to-r from-buckeye-red to-buckeye-red-light
```
- **Usage:** Headline accents, special text

#### Dark Overlay Gradient
```css
bg-gradient-to-t from-black/60 via-transparent to-transparent
```
- **Usage:** Image overlays for text legibility

#### Hero Gradient
```css
bg-gradient-to-r from-gray-950 via-gray-950/80 to-gray-900/30
```
- **Usage:** Hero section background overlays

---

## Typography

### Font Families

#### Display Font - Oswald
```css
--font-display: "Oswald", ui-sans-serif, system-ui, sans-serif;
```
- **Weights:** 500 (Medium), 700 (Bold)
- **Usage:** All headings (H1-H6), navigation links, CTAs
- **Style:** UPPERCASE (automatically applied to h1-h6)
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Oswald:wght@500;700`

#### Body Font - Inter
```css
--font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
```
- **Weights:** 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- **Usage:** Body text, paragraphs, descriptions, labels
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700`

### Type Scale

| Element | Mobile | Desktop | Weight | Font |
|---------|--------|---------|--------|------|
| H1 (Hero) | text-5xl (48px) | text-7xl (72px) | Bold (700) | Oswald |
| H2 (Section) | text-3xl (30px) | text-5xl (48px) | Bold (700) | Oswald |
| H3 (Card) | text-xl (20px) | text-2xl (24px) | Bold (700) | Oswald |
| H4 (Subsection) | text-lg (18px) | text-xl (20px) | Bold (700) | Oswald |
| Body Large | text-base (16px) | text-xl (20px) | Regular (400) | Inter |
| Body | text-sm (14px) | text-base (16px) | Regular (400) | Inter |
| Body Small | text-xs (12px) | text-sm (14px) | Regular (400) | Inter |
| Caption | text-[10px] | text-xs (12px) | Medium (500) | Inter |

### Line Heights
- Headings: `leading-[0.9]` to `leading-tight`
- Body: `leading-relaxed`

### Letter Spacing
- Headings: `tracking-tight` to `tracking-wide`
- Uppercase Labels: `tracking-wide` to `tracking-wider`

---

## Mascot System

The Buckeye Plumber mascot is a friendly, cartoon-style plumber character that adds personality and approachability to the brand.

### Available Mascots

| Mascot | File | Usage |
|--------|------|-------|
| Thumbs Up | `/assets/mascot-thumbs-up.png` | Hero sections, testimonials, success states |
| Waving | `/assets/mascot-waving.png` | Service areas, features, welcome contexts |
| Phone | `/assets/mascot-phone.png` | About page, contact contexts |
| Toolbox | `/assets/mascot-toolbox.png` | Services page header |
| Pointing | `/assets/mascot-pointing.png` | CTAs, "View All" links, directing attention |

### Mascot Sizing

| Context | Mobile | Desktop |
|---------|--------|---------|
| Hero (corner) | w-24 (96px) | N/A |
| Hero (beside content) | N/A | w-[320px] to w-[400px] |
| Page Headers | w-24 (96px) | w-48 to w-56 (192-224px) |
| Inline CTAs | w-12 to w-20 (48-80px) | w-40 to w-48 (160-192px) |
| Decorative | w-20 (80px) | w-36 to w-44 (144-176px) |

### Mascot Usage Guidelines
- Always use `object-contain` to preserve proportions
- Apply `drop-shadow-2xl` or `drop-shadow-lg` for depth
- Use subtle animations on desktop (hover:scale-105)
- Keep mascots at reduced opacity (opacity-20 to opacity-90) when decorative
- Position mascots to direct attention toward content

---

## Component Library

### Buttons

#### Primary Button (Red)
```jsx
<button className="bg-buckeye-red hover:bg-buckeye-red-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-buckeye-red/30 transform hover:-translate-y-1 active:scale-95">
  Call Now
</button>
```

#### Secondary Button (White)
```jsx
<button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl transform hover:-translate-y-1 active:scale-95">
  Schedule Online
</button>
```

#### Outline Button
```jsx
<button className="border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-full font-bold hover:border-buckeye-red hover:text-buckeye-red transition-colors active:scale-95">
  Learn More
</button>
```

#### Button Sizes

| Size | Padding | Font Size |
|------|---------|-----------|
| Small | px-4 py-2.5 | text-xs to text-sm |
| Medium | px-6 py-3 | text-sm to text-base |
| Large | px-8 py-4 | text-lg |

### Cards

#### Service Card
```jsx
<div className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
  {/* Image with overlay */}
  <div className="h-44 md:h-56 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
    <img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
    <h3 className="absolute bottom-4 left-6 z-20 text-2xl font-bold font-display text-white drop-shadow-lg">
      Title
    </h3>
  </div>
  {/* Content */}
  <div className="p-4 md:p-6">
    {/* ... */}
  </div>
</div>
```

#### Testimonial Card
```jsx
<div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/10 relative group hover:bg-gray-800 transition-colors duration-300">
  {/* Quote icon */}
  <Quote className="absolute top-4 right-4 w-10 h-10 text-buckeye-red/10" />
  {/* Star rating */}
  {/* Testimonial text */}
  {/* Author info */}
</div>
```

### Badges & Pills

#### Status Badge (24/7 Emergency)
```jsx
<div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full text-sm font-semibold text-white">
  <span className="relative flex h-2.5 w-2.5">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
  </span>
  <span className="tracking-wide uppercase">24/7 Emergency Service</span>
</div>
```

#### Category Tab
```jsx
<button className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide transition-all ${
  isActive
    ? 'bg-buckeye-red text-white shadow-lg shadow-buckeye-red/30'
    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
}`}>
  <Icon className="w-5 h-5" />
  Label
</button>
```

### Form Elements

#### Text Input
```jsx
<input
  type="text"
  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-buckeye-red focus:border-transparent transition-all"
  placeholder="Your Name"
/>
```

#### Select
```jsx
<select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-buckeye-red focus:border-transparent bg-white">
  <option>Select an option</option>
</select>
```

### Trust Indicators
```jsx
<div className="flex items-center gap-2 text-sm font-medium text-gray-400 uppercase tracking-wider">
  <CheckCircle className="w-4 h-4 text-buckeye-red" />
  <span>Licensed</span>
</div>
```

---

## Spacing & Layout

### Spacing Scale
Use Tailwind's default spacing scale. Common values:

| Token | Value | Usage |
|-------|-------|-------|
| gap-2 | 8px | Inline elements, icon gaps |
| gap-3 | 12px | List items, small spacing |
| gap-4 | 16px | Default component spacing |
| gap-6 | 24px | Card content, section elements |
| gap-8 | 32px | Section spacing, layout gaps |
| gap-12 | 48px | Large section gaps |

### Container
```jsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

### Section Padding
- Mobile: `py-12` to `py-16`
- Desktop: `py-20`

### Border Radius

| Element | Radius |
|---------|--------|
| Buttons | rounded-full |
| Cards (mobile) | rounded-xl |
| Cards (desktop) | rounded-2xl |
| Inputs | rounded-xl |
| Large containers | rounded-2xl to rounded-3xl |
| Small badges | rounded-full |

---

## Animation Guidelines

### Motion Library
Using **Framer Motion** (`motion/react`)

### Standard Animations

#### Fade In Up
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

#### Fade In from Side
```jsx
<motion.div
  initial={{ opacity: 0, x: -30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
>
```

#### Scale In
```jsx
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
>
```

#### Viewport Animation
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.4, delay: index * 0.1 }}
>
```

### Timing Guidelines
- **Standard duration:** 0.3s - 0.6s
- **Fast interactions:** 0.2s - 0.3s
- **Stagger delay:** 0.1s per item
- **Spring animations:** `type: "spring", stiffness: 300, damping: 30`

### Hover Effects
- **Buttons:** `hover:-translate-y-1`, `active:scale-95`
- **Cards:** `hover:shadow-xl`, image `hover:scale-105`
- **Links:** Color transition with `transition-colors`

### CSS Animations
```css
/* Pulse animation for status indicator */
.animate-ping {
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}
```

---

## Photography & Imagery

### Image Style
- Professional, well-lit photography
- Real work environments (job sites, vans, installations)
- Clean, uncluttered compositions
- Shows branded elements where possible (van, uniforms)

### Service Images
**Location:** `/assets/service-images/`

| Image | Usage |
|-------|-------|
| hero-van.png | Hero background, About page |
| service-leak-repair.png | Leak services |
| service-water-heater.png | Water heater services |
| service-drain-cleaning.png | Drain services |
| service-repiping.png | Repiping, pipe services |
| service-commercial.png | Commercial services |
| service-new-construction.png | Construction services |

### Image Treatment
- Use gradient overlays for text legibility
- Apply `object-cover` for consistent sizing
- Add `group-hover:scale-105` for interactive cards
- Background images: `opacity-20` to `opacity-60`

---

## Voice & Tone

### Brand Voice
- **Professional** but approachable
- **Confident** without being arrogant
- **Helpful** and service-oriented
- **Local** and community-focused

### Key Messages
1. "Forget the rest, we are the best."
2. "Southwest Florida's Most Trusted Plumbers"
3. "100% Satisfaction Guarantee"
4. "Licensed, Insured, and Community-Focused"
5. "24/7 Emergency Service"

### Writing Guidelines
- Use active voice
- Keep sentences concise
- Focus on customer benefits
- Include service areas: Naples, Fort Myers, Cape Coral, Bonita Springs, Marco Island, Estero, Lehigh Acres
- Always mention licensing when relevant: CFC1429403

---

## Responsive Design

### Breakpoints
Using Tailwind's default breakpoints:

| Breakpoint | Min Width | Usage |
|------------|-----------|-------|
| Default | 0px | Mobile-first base styles |
| sm: | 640px | Large phones |
| md: | 768px | Tablets |
| lg: | 1024px | Desktop |
| xl: | 1280px | Large desktop |

### Mobile-First Approach
Always write mobile styles first, then add responsive modifiers:
```jsx
className="text-base md:text-lg lg:text-xl"
```

### Critical Responsive Patterns

#### Navigation
- Mobile: Hamburger menu with slide-in panel
- Desktop: Horizontal nav with CTA button

#### Hero Section
- Mobile: 75dvh height, stacked layout, corner mascot
- Desktop: 88dvh height, side-by-side with large mascot

#### Cards
- Mobile: Single column, smaller padding
- Desktop: Multi-column grid, larger padding

#### Mascots
- Mobile: Smaller (w-20 to w-24), often decorative
- Desktop: Larger (w-40 to w-56), prominent placement

---

## Accessibility

### Color Contrast
- Text on dark backgrounds: Minimum 4.5:1 ratio
- Buckeye Red on white: WCAG AA compliant
- Always test interactive elements

### Focus States
All interactive elements must have visible focus indicators:
```jsx
focus:ring-2 focus:ring-buckeye-red focus:ring-offset-2
```

### Touch Targets
- Minimum touch target: 44x44px
- Mobile inputs: 16px font-size (prevents iOS zoom)

### Screen Readers
- Use semantic HTML (h1-h6, nav, main, footer)
- Add `aria-label` to icon-only buttons
- Include alt text on all images

### Motion Preferences
Respect `prefers-reduced-motion` for users who prefer less animation.

---

## Implementation Reference

### Tech Stack
- **Framework:** React with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Routing:** React Router
- **Icons:** Lucide React

### File Structure
```
src/
├── components/
│   ├── Hero.tsx
│   ├── Layout.tsx (Header + Footer)
│   ├── Features.tsx
│   ├── ServicesPreview.tsx
│   ├── Testimonials.tsx
│   ├── MobileCallBar.tsx
│   └── ...
├── pages/
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── Tips.tsx
├── index.css
└── App.tsx

public/
└── assets/
    ├── logo-full.png
    ├── mascot-*.png
    └── service-images/
```

---

## Contact

**Brand Owner:** Buckeye Plumbing of SW Florida, Inc.
**Phone:** (239) 438-6662
**License:** CFC1429403

**Design & Development:** INNOVAT3 Solutions
**Website:** https://www.innovat3solutions.com/

---

*This brand guidelines document is the property of Buckeye Plumbing of SW Florida, Inc. and INNOVAT3 Solutions. All rights reserved.*
