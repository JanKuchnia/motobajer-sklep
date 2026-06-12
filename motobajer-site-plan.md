# MOTOBAJER Website & Shop Implementation Plan

This document outlines the architecture, design, and step-by-step implementation plan for the new multi-page website and static online shop prototype for **MOTOBAJER Stanisław Bajer** in Myślenice.

---

## 📋 Project Overview

We are building a responsive, premium multi-page website for a local car workshop and parts shop. The project requires splitting their core services ("uslugi") into 6 dedicated subpages for maximum local SEO impact, alongside an interactive, static online shop prototype.

### Context Summary
- **Business Name:** MOTOBAJER Stanisław Bajer
- **Target Audience:** Local drivers in Myślenice and surrounding areas seeking professional car maintenance or purchasing auto parts.
- **Tech Stack:** HTML5, Tailwind CSS (via CDN v4), Vanilla CSS (for custom polish/glassmorphism), and Vanilla JavaScript.
- **Brand Palette:** Modern "blue-ish" theme (inspired by the EuroWarsztat network affiliation, accented with custom high-end details like soft gold/yellow accents).
- **Project Type:** **WEB**

---

## 🎯 Success Criteria

1. **Information Completeness:** All 6 workshop services from `docs/INFO.MD` have dedicated subpages.
2. **SEO Foundations:** Unique page titles, meta descriptions, semantic HTML5 tags, and schema.org markup (LocalBusiness) on each page.
3. **Interactive Shop Prototype:** 
   - A fully functional product catalog with search, category filtering, and sorting.
   - An active shopping cart stored in `LocalStorage` (persisting across page reloads and transitions).
   - Checkout flow that generates a detailed order summary and redirects the user to WhatsApp (pre-filled text) or submits a contact form.
4. **Visual Wow Factor:** Premium HSL-based blue palette, smooth transitions, card layouts, clear contact details, and micro-animations.
5. **No Placeholders:** High-quality illustrative graphics, real product catalog items, and actual service descriptions.

---

## 🎨 Tech Stack & Design System

### Technology Selection
- **HTML5:** Semantic layout (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- **Tailwind CSS (CDN):** Fast layout utility prototyping.
- **Vanilla CSS:** Custom keyframe animations, glassmorphic card overlays, custom font integration (`Outfit` or `Inter`), and complex variables.
- **Vanilla JavaScript:** Handle cart management, navigation interactions, catalog parsing, and checkout redirection.

### Brand Design Guidelines (Anti-Generic / Anti-Slop)
- **Palette (Blue-ish Core):**
  - **Dominant (60%):** Deep Slate Blue (`hsl(220, 40%, 12%)` for dark backgrounds / text, `hsl(215, 30%, 96%)` for light backgrounds).
  - **Secondary (30%):** Vibrant Electric Blue (`hsl(210, 100%, 45%)` for active states, secondary widgets, branding elements).
  - **Accent (10%):** High-end Chrome Gold/Yellow (`hsl(45, 100%, 50%)` for CTA highlights, trust indicators, reviews stars).
  - **🔴 Purple Ban:** Under no circumstances will any purple or violet hex/HSL codes be used.
- **Typography:**
  - Headings: `Outfit` (sans-serif, bold, geometric yet elegant).
  - Body Text: `Inter` (highly readable, clean).
- **UI Elements:**
  - Subtle borders (`border-white/10` or `border-slate-200`) and soft shadows (`shadow-sm`).
  - Glassmorphic card styling (`backdrop-blur-md bg-white/80` or `bg-slate-900/80`).
  - Hover micro-animations (scale, translate, color transitions).

---

## 📂 Proposed File Structure

```plaintext
/home/jankuchnia/Desktop/motobajer-sklep/
├── index.html                       # Home page (Hero, EuroWarsztat info, core highlights)
├── sklep.html                       # E-commerce store page (Product grid, cart UI, search)
├── kontakt.html                     # Contact page (Location mapping, contact forms, hours)
├── uslugi/                          # Service subpages (Separate sub-directory for SEO)
│   ├── mechanika-ogolna.html        # General repairs, clutches, engines
│   ├── diagnostyka.html             # Computer diagnostics, parameter tuning
│   ├── uklady-jezdne.html           # Brakes, suspension, steering
│   ├── klimatyzacja.html            # Refills, leak checks, ozonation
│   ├── elektryka.html               # Alternators, starters, electronics
│   └── wulkanizacja.html            # Tire change, wheel balancing
├── css/
│   └── styles.css                   # Custom global variables, overrides, animations
├── js/
│   ├── main.js                      # Shared UI script (mobile navigation, footer year, common actions)
│   ├── products.js                  # Product database (JSON-like array of static shop parts)
│   └── shop.js                      # E-commerce logic (cart, list rendering, WhatsApp API checkout)
└── assets/                          # Generated graphical assets / UI icons
```

---

## 🛠️ Task Breakdown

### Phase 1: Foundation & Layout Skeleton
- [ ] **F-01**: Create `css/styles.css` containing variables, typography imports, reset, and transition animations. (Agent: `frontend-specialist`, Skill: `frontend-design`, Priority: P0)
- [ ] **F-02**: Setup `js/main.js` containing shared scripts like responsive navigation toggle. (Agent: `frontend-specialist`, Skill: `clean-code`, Priority: P0)

### Phase 2: Navigation & Landing Page (Home)
- [ ] **H-01**: Implement `index.html` featuring hero, brand message, service list grid, locations overview, and customer reviews. (Agent: `frontend-specialist`, Skill: `frontend-design`, Priority: P0)

### Phase 3: Service Subpages (Uslugi)
- [ ] **S-01**: Implement `uslugi/mechanika-ogolna.html` for general repairs. (Agent: `frontend-specialist`, Skill: `frontend-design`, Priority: P1)
- [ ] **S-02**: Implement `uslugi/diagnostyka.html` for computer diagnostics. (Agent: `frontend-specialist`, Skill: `frontend-design`, Priority: P1)
- [ ] **S-03**: Implement `uslugi/uklady-jezdne.html` for suspension and brakes. (Agent: `frontend-specialist`, Skill: `frontend-design`, Priority: P1)
- [ ] **S-04**: Implement `uslugi/klimatyzacja.html` for A/C. (Agent: `frontend-specialist`, Skill: `frontend-design`, Priority: P1)
- [ ] **S-05**: Implement `uslugi/elektryka.html` for alternator and starter electrical service. (Agent: `frontend-specialist`, Skill: `frontend-design`, Priority: P1)
- [ ] **S-06**: Implement `uslugi/wulkanizacja.html` for tire replacement. (Agent: `frontend-specialist`, Skill: `frontend-design`, Priority: P1)

### Phase 4: E-Commerce Store Subpage
- [ ] **E-01**: Create `js/products.js` with static product catalogue array (8+ items). (Agent: `frontend-specialist`, Skill: `clean-code`, Priority: P1)
- [ ] **E-02**: Setup `sklep.html` layout (grid cards, search, category filters, slider cart). (Agent: `frontend-specialist`, Skill: `frontend-design`, Priority: P0)
- [ ] **E-03**: Implement `js/shop.js` logic (LocalStorage cart operations, WhatsApp API string format and checkout handler). (Agent: `frontend-specialist`, Skill: `clean-code`, Priority: P0)

### Phase 5: Contact Page & Final Polish
- [ ] **C-01**: Implement `kontakt.html` with addresses, map, business hours, phone dial shortcuts, and inquiry form. (Agent: `frontend-specialist`, Skill: `frontend-design`, Priority: P1)

---

## 🔬 Phase X: Verification & Pre-Deployment Checklist

Before marking the implementation as complete, we will execute the following verification steps:

### 1. Manual Quality Audit
- [ ] **Color Contrast / Purple Ban Check:** Verify HSL color scheme, no purple elements, appropriate color contrast (WCAG AA).
- [ ] **Responsive Design:** Inspect on mobile, tablet, and desktop viewports.
- [ ] **Data Persistence:** Add items to cart, refresh page, check if items remain. Navigate to a service page and check if cart status persists.

### 2. Automated Scripts Execution
We will execute the validation audits from the project's validation tools:
```bash
# Core UX and performance audit
python .agents/skills/frontend-design/scripts/ux_audit.py .

# Standard security scanning (checking for leaks/vulnerabilities)
python .agents/skills/vulnerability-scanner/scripts/security_scan.py .
```

---

## ✅ PHASE X COMPLETE
- Lint: ⏳ Pending Implementation
- Security: ⏳ Pending Implementation
- Build: ⏳ Pending Implementation
- Date: June 12, 2026
