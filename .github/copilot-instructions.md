# Copilot Instructions for lakshayaacollectionsfinall-main

## Project Overview
- **Stack:** Vite + React + TypeScript + Tailwind CSS + shadcn-ui
- **Purpose:** E-commerce jewelry site with product catalog, cart, checkout, and informational pages.
- **Structure:**
  - `src/pages/`: Main route pages (Home, Shop, ProductDetails, Cart, Checkout, About, Contact, NotFound)
  - `src/components/`: Shared UI components and product cards
  - `src/context/`: React context for global state (e.g., CartContext)
  - `src/data/`: Static product data
  - `src/hooks/`: Custom React hooks
  - `src/lib/`: Utility functions
  - `public/`: Static assets

## Key Patterns & Conventions
- **Routing:** Page components in `src/pages/` are mapped to routes. Navigation handled via `Navigation.tsx`.
- **State Management:** Cart state is managed globally using React Context (`src/context/CartContext.tsx`).
- **UI Library:** Uses shadcn-ui for reusable UI primitives in `src/components/ui/`.
- **Styling:** Tailwind CSS is used throughout. Utility classes are preferred over custom CSS.
- **Data Flow:** Product data is imported from `src/data/products.ts` and passed down via props.
- **Component Structure:** Prefer functional components and hooks. Shared UI lives in `src/components/ui/`.
- **TypeScript:** All logic and components are typed. Use interfaces/types for props and data.

## Developer Workflows
- **Install dependencies:**
  ```sh
  npm install
  ```
- **Start dev server:**
  ```sh
  npm run dev
  ```
- **Build for production:**
  ```sh
  npm run build
  ```
- **Preview production build:**
  ```sh
  npm run preview
  ```
- **Linting:**
  ```sh
  npm run lint
  ```
- **No test suite detected.**

## Integration Points
- **External:**
  - Lovable platform integration (see README)
  - shadcn-ui components
- **Internal:**
  - Context API for cross-component state
  - Static data import for products

## Examples
- To add a new page, create a file in `src/pages/` and update navigation in `src/components/Navigation.tsx`.
- To add a new product, update `src/data/products.ts`.
- To add a new UI element, prefer extending `src/components/ui/` using shadcn-ui patterns.

## References
- See `README.md` for setup, deployment, and Lovable integration details.
- See `src/context/CartContext.tsx` for global state patterns.
- See `src/components/ui/` for UI conventions.

---
**Feedback:** If any section is unclear or missing, please specify what needs improvement or what additional context is needed.
