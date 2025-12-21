### Phase 1: The Design Token System

**Goal:** Replace hardcoded styles with the semantic variable system defined in the design doc. This allows the "Chameleon" architecture to switch between *Mono Luxe*, *Fresh Market*, and *Tech Ocean*.

#### 1.1 Update CSS Variables (`apps/web/src/index.css`)

Replace the current root definition with the full token set.

```css
@import "tailwindcss";

:root {
  /* Default Theme (Fallback: Mono Luxe) */
  --color-primary: #000000;
  --color-primary-contrast: #FFFFFF;
  --color-secondary: #6B7280;
  --color-bg-app: #F5F5F5;
  --color-bg-surface: #FFFFFF;
  --color-text-main: #111111;
  --color-text-muted: #6B7280;
  --color-border: #E5E5E5;
  
  --radius-sm: 0px;
  --radius-md: 0px;
  --radius-lg: 0px;
  
  --shadow-depth: none;
  --font-heading: 'Inter', sans-serif;
  --font-body: 'Inter', sans-serif;
}

/* Utility classes for theme transitions */
body {
  background-color: var(--color-bg-app);
  color: var(--color-text-main);
  transition: background-color 0.3s, color 0.3s;
}

```

#### 1.2 Map Tailwind Configuration (`apps/web/tailwind.config.js`)

Map the semantic names to Tailwind utilities.

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-fg": "var(--color-primary-contrast)",
        secondary: "var(--color-secondary)",
        surface: "var(--color-bg-surface)",
        app: "var(--color-bg-app)",
        "text-main": "var(--color-text-main)",
        "text-muted": "var(--color-text-muted)",
        border: "var(--color-border)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      boxShadow: {
        depth: "var(--shadow-depth)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      }
    },
  },
  plugins: [],
}

```

#### 1.3 Create Theme Resolver (`apps/web/src/utils/theme.ts`)

Create a utility to inject these variables based on the API response.

```typescript
// Define the 3 presets from the Design Doc
export const THEME_PRESETS: Record<string, React.CSSProperties> = {
  'mono-luxe': {
    '--color-primary': '#000000',
    '--color-primary-contrast': '#FFFFFF',
    '--color-bg-app': '#F5F5F5',
    '--color-bg-surface': '#FFFFFF',
    '--radius-md': '0px',
    '--shadow-depth': 'none',
    // ... add rest
  } as React.CSSProperties,
  'fresh-market': {
    '--color-primary': '#4CAF50',
    '--color-bg-app': '#F1F8E9',
    '--radius-md': '16px',
    '--shadow-depth': '0px 4px 15px rgba(76, 175, 80, 0.15)',
    // ... add rest
  } as React.CSSProperties,
  // ... Tech Ocean
};

export const applyTheme = (presetName: string, overrides: any) => {
  // Logic to merge preset with API overrides and return style object
};

```

---

### Phase 2: Public Storefront Implementation

**Goal:** Implement the "Hero + Sticky Nav + List View" architecture defined in Section 6 of the doc.

#### 2.1 Create Layout Component (`apps/web/src/layouts/StoreLayout.tsx`)

Refactor the current inline layout in `App.tsx` into a dedicated file.

* **Structure:** Navbar (Logo/Cart) -> Hero Section -> Sticky Nav -> Content.
* **Responsiveness:** Use `max-w-screen-lg mx-auto` for desktop constraint.

#### 2.2 Build Components

1. **`HeroSection.tsx`**: Accepts `image_url` and `store_name`. Uses a gradient overlay (`bg-gradient-to-t from-black/60 to-transparent`).
2. **`CategoryNav.tsx`**: A horizontal scroll container (`overflow-x-auto`, `whitespace-nowrap`). Uses `sticky top-0 z-40` CSS to pin to the top of the viewport when scrolling.
3. **`MenuItemRow.tsx`**: Replaces the current Card.
* **Layout:** `flex flex-row`.
* **Left (70%):** Title (`font-heading`), Desc (`text-muted line-clamp-2`), Price.
* **Right (30%):** Image (`rounded-md object-cover`).



#### 2.3 Refactor Cart

Update `FloatingCartButton` to be a full-width sticky footer on mobile (`w-full bottom-0 rounded-none`) and a floating pill on desktop (`bottom-6 right-6`).

---

### Phase 3: Kitchen Display System (KDS)

**Goal:** Move from "Kanban Columns" to the "Masonry Ticket" design defined in Section 7.

#### 3.1 Create Ticket Component (`apps/web/src/components/kds/KitchenTicket.tsx`)

Implement the high-contrast "Chit".

```tsx
export function KitchenTicket({ order, onBump }) {
  // Logic to calculate age color
  const age = useOrderAge(order.created_at); // Custom hook
  const headerColor = age > 20 ? 'bg-red-600' : age > 10 ? 'bg-yellow-600' : 'bg-green-600';

  return (
    <div className="bg-gray-800 border-2 border-gray-700 text-white flex flex-col h-full">
      <div className={`p-2 flex justify-between ${headerColor}`}>
        <span className="font-bold text-xl">#{order.id.slice(0,4)}</span>
        <span className="font-mono">{age}m</span>
      </div>
      <div className="p-4 flex-1">
        {/* Order Items Map */}
        {order.items.map(item => (
           <div className="flex justify-between text-lg py-1 border-b border-gray-700">
             <span>{item.name}</span>
             <span className="font-bold text-xl">x{item.qty}</span>
           </div>
        ))}
      </div>
      <button onDoubleClick={onBump} className="p-4 bg-gray-700 hover:bg-gray-600 uppercase font-bold tracking-widest">
        Bump
      </button>
    </div>
  )
}

```

#### 3.2 Refactor KDS Page (`apps/web/src/pages/kitchen/KitchenDisplay.tsx`)

* **Remove:** The 3-column Flex layout.
* **Add:** A CSS Grid layout.
* `grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4`


* **Filtering:** Only show `PENDING` and `PREPARING` tickets. `READY` tickets should disappear (or move to a small "Recall" history list).

---

### Phase 4: Super Admin Portal

**Goal:** Implement the Sidebar Dashboard architecture defined in Section 8.

#### 4.1 Create Admin Layout (`apps/web/src/layouts/AdminLayout.tsx`)

* **Sidebar:** Fixed width (`w-64`), dark theme (`bg-slate-900 text-white`). Links: Dashboard, Tenants, Settings.
* **Header:** White surface, Breadcrumbs, User Profile.
* **Main Content:** `flex-1 bg-gray-100 p-8`.

#### 4.2 Create Tenant Management View (`apps/web/src/pages/admin/Tenants.tsx`)

* **Table Component:**
* Headers: Status, Name, Domain, Plan.
* **Status Indicator:** Small circle `div` (`bg-green-500` or `bg-red-500`).


* **Provisioning Modal:** A form to hit the `POST /api/v1/sys/provision` endpoint. This connects the UI to the existing backend logic.

---

### Implementation Sequence

1. **Run Phase 1 (Tokens)** immediately. This is non-breaking but enables the design system.
2. **Refactor Public Storefront (Phase 2)**. This is the highest visibility change.
3. **Refactor KDS (Phase 3)**.
4. **Build Admin (Phase 4)**.
