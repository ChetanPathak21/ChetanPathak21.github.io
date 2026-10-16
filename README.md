# Chetan Pathak — Minimalist Personal Portfolio

A fast, responsive, and minimalist single-page portfolio built for **Chetan Pathak**, pursuing B.Tech in Computer Science and Engineering (Artificial Intelligence).

## Highlights & Design System

- **Strict Monochrome Palette**: Uses exclusively black, white, and neutral grays with zero color tints.
  - **Dark Mode (Default)**: `#000000` background, `#FFFFFF` text, `#A3A3A3` secondary text, `#262626` borders, `#171717` hover backgrounds, white buttons with black text.
  - **Light Mode**: `#FFFFFF` background, `#111111` text, `#666666` secondary text, `#E5E5E5` borders, `#F5F5F5` hover backgrounds, black buttons with white text.
- **Zero-Flash Theme Toggle**: Persists in `localStorage` with a synchronous head script ensuring immediate theme resolution on initial paint.
- **Static Export Ready**: Fully configured with `output: 'export'` for GitHub Pages, Cloudflare Pages, Vercel, or Netlify.
- **Pure Client/Server Separation**: Server Components by default with client interaction confined to theme toggling and the mobile navigation drawer.
- **Accessibility & Motion**: Proper semantic HTML, ARIA attributes, keyboard focus rings, and `prefers-reduced-motion` overrides.

## Tech Stack

- **Framework**: Next.js 15 (App Router, Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with CSS Variables
- **Icons**: Lucide React

## Project Structure

```
├── app/
│   ├── globals.css          # Strict monochrome CSS variables & resets
│   ├── layout.tsx           # Root layout with FOUC prevention & metadata
│   ├── not-found.tsx        # Minimalist 404 error page
│   └── page.tsx             # Single-page layout assembling all sections
├── components/
│   ├── Navbar.tsx           # Responsive nav with desktop center-alignment & mobile hamburger drawer
│   ├── ThemeToggle.tsx      # Accessible dark/light toggle
│   ├── ThemeProvider.tsx    # Context provider with localStorage sync
│   ├── Hero.tsx             # Typography-driven responsive hero section
│   ├── About.tsx            # Clean editorial about section
│   ├── Skills.tsx           # Technical skills & foundations (C, Python, DSA in C)
│   ├── Learning.tsx         # 2-column minimalist learning interests
│   ├── CurrentFocus.tsx     # Philosophy & current focus
│   ├── Contact.tsx          # Minimal text contact links with mobile-friendly touch targets
│   └── Footer.tsx           # Minimalist centered watermark notice
├── data/
│   └── profile.ts           # Centralized portfolio data & content
├── next.config.ts           # Static export configuration
└── tailwind.config.ts       # Tailwind monochrome design tokens
```

## Getting Started Locally

### Prerequisites

- Node.js (v18.17+ or v20+)
- npm / pnpm / yarn

### Installation & Run

1. Clone or navigate to the repository:
   ```bash
   cd Chetan
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Build and export static files:
   ```bash
   npm run build
   ```
   The static website is exported to the `out/` folder, ready for any static web host.

## Deployment to GitHub Pages

This repository includes a continuous deployment workflow via GitHub Actions (`.github/workflows/deploy.yml`):
1. Go to repository **Settings** > **Pages** on GitHub.
2. Under **Build and deployment** > **Source**, ensure **GitHub Actions** is selected.
3. Every push to `main` will automatically build and publish to:
   **https://chetanpathak21.github.io/**

## Customization

All personal details, links, and text are centralized in `data/profile.ts`. To update your email or social links, simply edit:

```ts
// data/profile.ts
contact: {
  email: "your-email@example.com",
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
}
```
Setting any link to empty (`""`) automatically hides that link cleanly.
