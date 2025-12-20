# OmniOrder PoC Implementation Plan

**Objective:** Create a closed-loop ecosystem where a Super Admin provisions a store, a Restaurant Owner manages the menu, a Customer places an order, and the Kitchen fulfills it in real-time.

**Visual Goal:** Move from "Developer Basic" to "Modern SaaS" using distinct layouts for Storefront (Branded), Admin (Clean/Dashboard), and KDS (High Contrast/Dark Mode).

---

## Phase 1: The "Manager" Experience (CMS & Auth)

*Current Gap: Menus are static or empty; no way for a tenant to log in.*

### 1.1 Tenant Authentication

We need a way for the restaurant owner to log in to their specific schema.

* **Backend:**
* Create `User` model in the **Tenant Schema** (not public).
* Implement JWT Authentication (`/api/v1/auth/login`).
* Update `provision_tenant` logic to auto-generate a default admin user (e.g., `admin@<tenant>.com` / `password`).


* **Frontend:**
* Create `/admin/login`.
* Implement `AuthProvider` context to store the JWT.



### 1.2 Menu Engineering (CRUD)

* **Database:**
* Add `categories` table (One-to-Many with `menu_items`).
* Add `image_url` and `description` to `menu_items`.


* **Backend:**
* Create `POST/PUT/DELETE` endpoints for Categories and Items (Protected by JWT).


* **Frontend (`/admin/menu`):**
* Build a "Menu Builder" UI.
* **Key Demo Feature:** "Live Preview." Show a mobile phone mockup on the right side of the screen that updates as the admin types the burger name.



---

## Phase 2: The "Consumer" Experience (Storefront Polish)

*Current Gap: Flat list of items, no cart, no categorization, basic styling.*

### 2.1 Visual Overhaul

* **Categories:** Group items by category (e.g., "Starters", "Mains", "Drinks").
* **Rich Media:** Display item images (use Unsplash placeholders for the PoC).
* **Cart Logic:** Implement a floating "View Cart" button and a slide-over drawer for order summary.

### 2.2 Branding Injection

* **Typography:** Allow the provisioning step to select a font (e.g., "Inter", "Playfair Display", "Space Mono").
* **Frontend:** Dynamically load the Google Font based on the API response in `App.tsx`.

---

## Phase 3: The "Kitchen" Experience (Real-Time KDS)

*Current Gap: Orders go into a black hole (database) and aren't seen.*

### 3.1 WebSocket Infrastructure

* **Backend:**
* Implement `FastAPI` WebSockets endpoint: `/api/v1/ws/kitchen`.
* **Challenge:** The WebSocket connection must also resolve the Tenant ID to listen to the correct "channel."
* Use an in-memory `ConnectionManager` (keyed by Tenant ID) to broadcast new orders to connected clients.


* **Triggers:**
* When `POST /orders` is successful, trigger the `ConnectionManager` to broadcast the payload to that tenant's socket.



### 3.2 KDS Interface (`/kitchen`)

* **Design:** Dark Mode default (easier on eyes in kitchens).
* **Layout:** Kanban-style cards for "Pending", "Preparing", "Ready".
* **Audio:** Play a "Ding" sound when a WebSocket message arrives.
* **Resilience:** Implement the `navigator.wakeLock` API (as mentioned in your README) so the screen doesn't sleep.

---

## Phase 4: Infrastructure & Seeding

### 4.1 Enhanced Provisioning Script

The current script is good, but for a demo, we want "Instant Value."

* Update `provision.py` (or the UI payload) to accept a `seed_data: bool` flag.
* If true, populate the new schema with a default template menu (Burgers, Fries, Shakes) so the store isn't empty upon creation.

### 4.2 Image Handling (MVP Shortcut)

* Instead of building a full AWS S3 upload pipeline (too complex for PoC), add a text field for `Image URL` in the admin panel and instruct users to paste publicly hosted links, or provide a dropdown of "Stock Images" in the UI.

---

## Technical Roadmap & Dependencies

### 1. Database Schema Updates (`models.py`)

```python
# Tenant Schema
class User(Base):
    email = Column(String, unique=True)
    hashed_password = Column(String)
    role = Column(String) # 'admin', 'manager'

class Category(Base):
    name = Column(String)
    rank = Column(Integer) # For sorting
    items = relationship("MenuItem", back_populates="category")

# Update MenuItem
MenuItem.category_id = Column(UUID, ForeignKey("categories.id"))
MenuItem.image_url = Column(String, nullable=True)
MenuItem.description = Column(String, nullable=True)

```

### 2. Frontend Routing Structure

We will need to introduce `react-router-dom` to handle the different personas.

```text
/                   -> Public Storefront (Redirects based on subdomain/path)
/admin/login        -> Login Form
/admin/dashboard    -> Management Area
/kitchen            -> KDS View

```

### 3. Visual Library

To make it "Sleek" without writing custom CSS for everything, I recommend installing **Lucide React** (icons) and potentially **Shadcn/UI** (headless components) or just sticking to raw Tailwind with a higher fidelity design system.

---

## The "Perfect Demo" Flow (Target State)

Once implemented, your demo flow will be:

1. **The Setup:** Open `admin.omniorder.localhost`. Create a tenant "Taco Fiesta" with Primary Color `Orange` and Font `Comic Neue` (for fun).
2. **The Management:** Log into `tacofiesta.localhost/admin`. Rename the default seeded "Burger" to "Super Taco".
3. **The Kitchen:** Open `tacofiesta.localhost/kitchen` on a tablet (or second window). It sits waiting (dark mode).
4. **The Customer:** Open `tacofiesta.localhost` on a mobile view. It looks distinct (Orange/Comic font).
5. **The Action:** Customer buys 3 Tacos.
6. **The Climax:** Instantly, the Kitchen screen goes **"Bzzt!"** and the card appears. The dashboard sales counter increments.

---