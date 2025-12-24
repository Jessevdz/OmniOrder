# Stelly Visual Design & Experience Vision

## 1. Core Philosophy: "The Chameleon Engine"

Stelly is not a single app with a static design; it is a **structural canvas** that accepts a **brand injection**.

The core design principle is **Semantic Abstraction**. We do not design with "Red" or "Blue"; we design with `Primary` and `Secondary`. We do not design with "Rounded Corners"; we design with `Radius-Token`.

This approach allows the platform to service a high-end steakhouse (Sharp edges, Serif fonts, Monochrome) and a vegan juice bar (Round edges, Sans-serif, Vibrant Green) using the exact same codebase, without conditional CSS hell.

### Guiding Pillars

1. **Strict Separation of Structure & Skin:** React components define *what* is on screen (Structure). CSS Variables and Design Tokens define *how* it feels (Skin).
2. **Context-Aware Density:** The interface density shifts based on the user. The Storefront is spacious and immersive; the KDS is high-contrast and massive; the Admin panel is dense and data-rich.
3. **Motion as Feedback:** We use micro-interactions (hover lifts, active scales, modal slides) to make the interface feel "native" and responsive, masking API latency.

---

## 2. The Token Architecture

The design system relies on a set of CSS variables (`index.css`) mapped to Tailwind utilities (`tailwind.config.js`). This layer acts as the API between the database configuration and the frontend renderer.

### A. Color Semantics

Instead of fixed palettes, we use functional slots:

* `--color-primary`: The brand's dominant personality. Used for CTAs, active states, and highlights.
* `--color-primary-contrast`: Text color (White/Black) calculated to ensure accessibility against the primary.
* `--color-bg-app`: The canvas background. (e.g., Off-white for Luxe, Deep Navy for Tech).
* `--color-surface`: The container background. Used for cards, modals, and headers.
* `--color-text-main` / `--color-text-muted`: Hierarchy enforcement.

### B. Geometry & Texture

These tokens control the "vibe" of the interface:

* `--radius-sm/md/lg`: Controls corner sharpness. 0px = Serious/Luxury; 24px = Friendly/Casual.
* `--shadow-depth`: Controls elevation. Flat (border-only) vs. Floating (drop-shadows).
* `--glass-blur`: Controls modernity. Used in overlays and sticky headers to create depth.

### C. Typography

* `--font-heading`: Distinctive brand font (loaded dynamically via `FontLoader.tsx`).
* `--font-body`: Readable utilitarian font.
* `--font-heading-case`: `uppercase` vs `none`. A subtle but powerful branding tool.

---

## 3. Contextual Experience Models

Stelly serves four distinct personas. Each has a specific visual dialect.

### A. The Public Storefront (The "Stage")

**Goal:** Immersion & Frictionless Checkout.

* **Visual Style:** Fluid, image-heavy, brand-forward.
* **Key Pattern:** "Parallax & Sticky." The Hero section sets the mood (Parallax), while the Category Nav remains accessible (Sticky).
* **Layout Logic:** The `HeroSection` component creates layout shifts based on the preset:
* *Centered:* Cinematic, background-heavy.
* *Split:* Text left, Image right (good for storytelling).
* *Banner:* Low profile, map-focused (good for chains).


* **Checkout:** A non-intrusive floating bar on mobile (`CartFloatingButton`) transitions into a slide-out drawer (`CartDrawer`), keeping the menu visible.

### B. The Kitchen Display System (The "Cockpit")

**Goal:** Readability at a distance & Alertness.

* **Visual Style:** High Contrast Dark Mode (`#121212` background). Glare reduction is critical.
* **Key Pattern:** "Masonry Ticket Grid." Tickets flow left-to-right.
* **Feedback:**
* *Visual:* Tickets change color (Green -> Yellow -> Red) based on elapsed time logic (`KitchenTicket.tsx`).
* *Auditory:* Simple "Ding" on incoming WebSocket events.


* **Interaction:** Large touch targets. No "cancel" buttons near "complete" buttons.

### C. Tenant Manager (The "Dashboard")

**Goal:** Operational Efficiency.

* **Visual Style:** Clean, White/Gray, Standard SaaS.
* **Key Pattern:** Sidebar Navigation + Breadcrumbs.
* **Components:** Data tables, Form inputs, and "Live Preview" panes (e.g., `MenuBuilder.tsx` split view).
* **Brand Injection:** Subtle. The sidebar logo and active states reflect the tenant's primary color, reminding the manager of the context without overwhelming the data.

### D. Platform Super-Admin (The "God View")

**Goal:** System Health & Governance.

* **Visual Style:** Technical, Slate/Blue (`slate-900` sidebar). Distinct from Tenant views to prevent context confusion.
* **Key Pattern:** Dense metrics grids and status indicators (Green/Red dots for server health).

---

## 4. Thematic Presets (The "Skins")

While tenants can override individual colors, Stelly provides three curated "Vibes" defined in `utils/theme.ts`.

### 1. Mono Luxe

* **Vibe:** Sophisticated, Serious, Expensive.
* **Target:** Steakhouses, Sushi, High-end Bistros.
* **Characteristics:**
* **Colors:** Monochrome (Black/White).
* **Shapes:** Sharp corners (`0px` radius).
* **Typography:** Uppercase, Heavy weights.
* **Layout:** Centered Hero text. No shadows (Borders only).



### 2. Fresh Market

* **Vibe:** Organic, Friendly, Healthy.
* **Target:** Salad bars, Juice shops, Vegan cafes.
* **Characteristics:**
* **Colors:** Vibrant Greens, Soft Ambers.
* **Shapes:** Highly rounded (`24px` radius). Pill-shaped buttons.
* **Typography:** Standard case, Humanist sans-serifs.
* **Texture:** Frosted glass blur (`--glass-blur: 12px`).



### 3. Tech Ocean

* **Vibe:** Modern, Trustworthy, Efficient.
* **Target:** Fast food, Ghost kitchens, Corporate catering.
* **Characteristics:**
* **Colors:** Royal Blue, Slate Grays.
* **Mode:** Dark Mode enabled by default.
* **Shapes:** Standard rounding (`8px`).
* **Interaction:** Glowing borders (`box-shadow`), Floating Action Buttons (FAB) for adding items.



---

## 5. Component Library Standards

All components must be built using the `Brand*` wrapper pattern to ensure they respect the active theme.

### Atoms

* **BrandButton:**
* Never hardcode `bg-blue-500`. Use `bg-primary`.
* Supports `variant` props (solid, outline, ghost) that adapt to the theme's contrast rules.


* **BrandCard:**
* Handles the `overflow-hidden`, `border`, and `shadow-depth` tokens automatically.
* Includes an optional `backdrop-blur` layer for the "Fresh Market" feel.



### Molecules

* **MenuGridItem:**
* Adapts the "Add to Cart" button placement based on the preset (Corner button for Luxe, Full-width for Fresh, FAB for Tech).


* **ItemDetailModal:**
* Adapts the backdrop opacity and modal radius.
* Handles image aspect ratio changes (Video format for Luxe, Square for Fresh).



---

## 6. Best Practices & Guidelines

1. **Font Loading:** Never bundle brand fonts. Always use the `FontLoader` hook to fetch them at runtime based on config. This keeps the initial bundle size small.
2. **CSS Layering:** Use Tailwind's `@layer components` or CSS Variables for theme overrides. Avoid inline styles unless dynamic (like the `HeroSection` background image).
3. **Accessibility (a11y):** The contrast color (`--primary-fg`) must be calculated or strictly defined in the preset to ensure WCAG compliance against the dynamic `--primary` color.
4. **No Leaking:** Tenant styles must never leak into the Super Admin portal. The `AdminLayout` and `PlatformLayout` should remain visually distinct (Slate/Blue) to indicate "System Context" vs "Brand Context."