# KaamSaathi (कामसाथी) - Worker Assistant

A mobile-first, responsive support assistant designed for Indian gig and informal workers, including food delivery partners, courier riders, cab/auto drivers, and daily wage earners.

Built for hackathons and demonstration showcasing how frontline informal workers can gain transparent insights into their net earnings, protect their statutory rights, find social security schemes, and generate audit-ready dispute letters.

---

## 🚀 Key Features

1. **Earnings Tracking & Deduction Calculator:**
   - Real-time pure JavaScript mathematical calculations.
   - Computes true net take-home earnings by factoring in fuel/charging costs, vehicle maintenance, and platform penalty cuts.
   - Effective hourly wage calculation with Indian Rupee (`₹`) formatting.
   - Connected action trigger: directly transfer detected deduction shortfalls to the complaint drafter.

2. **Grievance and Dispute Drafting (Core Problem Solver):**
   - Pure local template engine generating structured, polite, and audit-ready complaint letters in English and Hindi.
   - 5 realistic prefilled dispute scenarios (withheld payment, unexpected penalties, lower trip rate cards, account deactivations, unanswered support tickets).
   - Fully editable text preview area with instant one-click copy to clipboard and success toast confirmation.

3. **Worker Rights & Protections Knowledge Base:**
   - Practical, plain-language guides on handling delayed payments, wrongful deactivations, and algorithmic penalties.
   - Clear escalation hierarchies from in-app support to hub supervisors and Nodal Grievance Officers.

4. **Welfare Scheme Finder (Demonstration):**
   - Curated fictional demonstration welfare programs (Accident & Disability Relief, Family Healthcare, Vehicle Maintenance Grants).
   - Plain-language checklists of eligibility rules, required documents, and application steps.

5. **Worker Safety & Incident Guidance:**
   - Practical protocols for road safety, hostile customer de-escalation, severe weather (45°C+ heatwaves, monsoons), and minor collision response.
   - Direct emergency hotline contact cards (112, 108, 1095, 14434).

6. **Document Assistance:**
   - Plain-language walkthroughs of complex pay-slips, deduction codes, ID proofs (Aadhaar, e-Shram), and platform notices.
   - 100% privacy preserving — zero document uploads or sensitive data collection.

---

## 🎨 Design System & Visual Philosophy

- **Faithful Implementation of `DESIGN-clay.md` / `design system.md`:**
  - **Canvas:** Cream-tinted warm canvas (`#fffaf0`) for a warm, welcoming, human feel.
  - **Primary CTAs:** Near-black (`#0a0a0a`) with 12px rounded borders (`rounded.md`).
  - **Saturated Feature Card Palette:** Brand Pink (`#ff4d8b`), Brand Teal (`#1a3a3a`), Brand Lavender (`#b8a4ed`), Brand Peach (`#ffb084`), Brand Ochre (`#e8b94a`), and Surface Cream (`#f5f0e0`).
  - **Warm Footer:** Strictly cream-tinted (`#faf5e8`) matching the Clay specification — no harsh dark footers.
  - **Typography:** Inter with tight letter-spacing for display headings, comfortable body sizes, and WCAG-compliant touch targets (min 44px).
  - **Mobile-First Responsiveness:** Includes an accessible sticky bottom navigation bar on mobile viewports (<768px).

---

## 🛠️ Technology Stack & Constraints

- **Framework:** React 18 + Vite 6
- **Icons:** Lucide React
- **Logic:** 100% Pure Local JavaScript (no external APIs, no backend, no databases, no external LLM runtime dependency)
- **Internationalization:** Instant toggle between English and Hindi (हिन्दी)
- **Demo Mode:** Clearly labeled demonstration data adhering to hackathon requirements.

---

## 🏃 Getting Started

### Prerequisites
- Node.js v18+ (tested on Node v24)
- npm v9+

### Installation & Development
```bash
# Install dependencies
npm install

# Start Vite development server
npm run dev

# Build for production
npm run build
```
