# Design

This document defines the visual systems and tokens for **MOTOBAJER**.

---

## 🎨 Palette (HSL Strategy: Committed)

We use a committed HSL color strategy centered around a deep slate blue baseline, electric blue elements, and warm gold accents. **Strict ban on purple/violet.**

### Backgrounds & Surfaces
- **Body Background (Light):** `hsl(215, 30%, 97%)`
- **Card/Surface Background (Light):** `hsl(0, 0%, 100%)`
- **Body Background (Dark):** `hsl(220, 40%, 8%)`
- **Card/Surface Background (Dark):** `hsl(220, 35%, 12%)`

### Ink / Typography
- **Ink Primary (Light):** `hsl(220, 40%, 12%)` (High-contrast near-black)
- **Ink Muted (Light):** `hsl(215, 15%, 40%)` (Contrast compliant gray)
- **Ink Primary (Dark):** `hsl(210, 20%, 98%)` (Crisp off-white)
- **Ink Muted (Dark):** `hsl(215, 15%, 75%)` (Muted gray)

### Branding & Accent Colors
- **Primary (Electric Blue):** `hsl(210, 100%, 48%)`
- **Primary Hover:** `hsl(210, 100%, 40%)`
- **Accent (Chrome Gold):** `hsl(45, 100%, 50%)` (Rating stars, trust accents)
- **Success:** `hsl(142, 76%, 36%)`

---

## 🔤 Typography

We restrict the typeface count to two well-tuned families.

- **Display & Headings:** `Outfit`, sans-serif (Geometric, bold character)
- **Prose & Body Copy:** `Inter`, sans-serif (Highly readable, neutral)

### Typography Scale
- **Display Heading:** `clamp(2.5rem, 5vw, 4.5rem)` (letter-spacing: `-0.03em`)
- **Section Heading (H2):** `clamp(1.75rem, 3.5vw, 2.5rem)` (letter-spacing: `-0.02em`)
- **Subsection Heading (H3):** `1.25rem` (semi-bold)
- **Body Copy:** `1rem` (line-height: `1.625`, max-width: `70ch`)
- **Badges & Small Labels:** `0.75rem` (bold, uppercase, tracked `0.05em`)

---

## 📦 Components & UI Tokens

### Cards
- **Borders:** `1px solid rgba(226, 232, 240, 0.6)`
- **Shadows:** `box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)`
- **Hover Transitions:** Smooth translateY scaling (`transform: translateY(-4px)`) and active primary border coloration.

### Buttons & Inputs
- **Radii:** `0.5rem` (`rounded-lg`)
- **Transitions:** `transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)`
- **Outlines:** Focused fields trigger a `ring-2 ring-sky-500` outline indicator.

---

## 🎬 Motion Principles

- **Entrance:** Content sections utilize a soft translateY translation (`translateY(10px)`) coupled with a fade-in animation duration of `0.5s` easing out.
- **Micro-Interactions:** Buttons rise slightly (`translateY(-2px)`) on hover state. No bounce or elastic effects.
- **Prefers-Reduced-Motion:** Standardize instant page snaps and zero-duration crossfades for active OS accessibility toggles.
