# Features

## Phase 1: Critical Viability (Must-Have for First Transaction)

*These features fill the gaps between "Prototype" and "Functioning Application."*

### 1. Menu Modifiers & Variations (Backend & Frontend) [DONE]

The current menu model (`MenuItem`) is flat. Real restaurants require customization.

* **Database:** Create `modifiers`, `modifier_groups`, and `item_modifiers` tables in the Tenant Schema.
* **Frontend (MenuBuilder):** Update the CMS to allow nested configurations (e.g., "Choose Size: S/M/L" or "Add-ons: Cheese +$1").
* **Frontend (Storefront):** Update `ItemDetailModal.tsx` to handle radio buttons (required choices) and checkboxes (optional add-ons) and calculate price adjustments dynamically.

### 2. Image Upload & Storage Service [DONE]

Currently, the app relies on external Unsplash URLs.

* **Infrastructure:** Integrate an S3-compatible object storage (AWS S3, MinIO, or Cloudflare R2).
* **API:** Create an endpoint `POST /api/v1/admin/upload` that accepts files, sanitizes them, uploads to the bucket, and returns a public URL.
* **Frontend:** Replace text inputs in `MenuBuilder.tsx` with a drag-and-drop file uploader.

### 3. KDS State Persistence & Sync

The current KDS performs an "optimistic" bump. If the browser refreshes, the status might revert or desync.

* **API:** Implement the `PUT /api/v1/store/orders/{id}/status` endpoint to update the database.
* **WebSockets:** Ensure the "Bump" event is broadcast back to *other* connected KDS screens (e.g., the expo station) so all screens stay in sync.

### 4. Order Payment Processing

Currently, the system creates orders without payment (`OrderCreateRequest`).

* **Integration:** Integrate Stripe Connect.
* **Data Model:** Add `payment_status`, `payment_provider_id` to the `Order` model.
* **Frontend:** Integrate Stripe Elements into the `CartDrawer.tsx` checkout flow. Orders should only be sent to the KDS via WebSocket webhook *after* payment success.

---

## Phase 2: Operational & Tenant Maturity

*These features are required to sell the product to actual restaurant owners.*

### 5. Async Tenant Migration (Worker)

`apps/api/app/worker.py` is currently empty.

* **Feature:** When `POST /provision` happens, it currently blocks the HTTP request while running SQL. This will timeout in production.
* **Implementation:** Move schema creation and Alembic migration triggers to a Celery/Redis background task.
* **Batch Updates:** Create a workflow to apply a new migration (e.g., adding a `loyalty_points` column) to *all* 1,000+ tenant schemas iteratively without downtime.

### 6. Staff Accounts & RBAC

Currently, there is only one `admin` user per tenant.

* **Data Model:** Expand `User` model to include permissions/scopes.
* **Middleware:** Update `get_current_user` in `deps.py` to enforce scopes (e.g., A "Kitchen" user should access the KDS WebSocket but *not* be able to delete menu items in the Admin API).

### 7. Store Configuration & Opening Hours

* **Database:** Expand `Tenant.theme_config` or add a `store_settings` table to include:
* Timezone.
* Operating Hours (Open/Close times per day).
* Tax Rate settings.


* **Logic:** Middleware to reject `POST /orders` if the current time is outside operating hours.

### 8. Order History & Reporting

The Tenant Dashboard mocks data.

* **API:** Create endpoints for aggregated data: `GET /api/v1/admin/analytics/sales`.
* **Implementation:** Efficient SQL queries to group orders by day/hour and calculate revenue.
* **Frontend:** Replace the hardcoded numbers in `TenantDashboard.tsx` with real data visualizations (using Recharts or Chart.js).

---

## Phase 3: Platform Scalability (The Super Admin)

*These features are for the SaaS business owner.*

### 9. Automated Domain & SSL Management

The vision mentions `order.joespizza.com`.

* **Edge:** Update Nginx configuration or use a dynamic proxy (Traefik/Caddy) to handle automatic Let's Encrypt certificate generation for incoming custom domains.
* **Verification:** Add a mechanism in `TenantsPage.tsx` to verify CNAME records before activating a custom domain.

### 10. SaaS Billing (Subscription Management)

The platform needs to get paid.

* **Integration:** Integrate Stripe Billing for the SaaS tier (Standard vs. Enterprise).
* **Logic:** Middleware check to disable access to `TenantLayout` routes if the subscription is inactive or past due.

### 11. Cross-Schema Analytics

The `PlatformDashboard.tsx` needs real data.

* **Technical Challenge:** Querying across 100s of schemas is expensive.
* **Solution:** Implement a data pipeline (ETL) or Materialized Views in the `public` schema that aggregate key metrics (Order Count, GMV) from tenant schemas periodically.

---

## Phase 4: The "Chameleon" Vision (Advanced UX)

*Features required to fully realize the design vision.*

### 12. Advanced Theme Engine

* **Typography:** The `FontLoader` currently assumes Google Fonts. It needs to handle font-weight loading strategies to prevent layout shift (CLS).
* **Presets:** Fully implement the CSS variables for the "Fresh Market" and "Tech Ocean" presets (currently `theme.ts` exists, but components like `ItemDetailModal` contain hardcoded conditional logic that should be moved to CSS tokens).

### 13. KDS Hardware Resiliency

* **Offline Mode:** Implement Service Workers (PWA) for the KDS. If the internet cuts out, the kitchen should still be able to bump tickets locally, syncing status when the connection returns.
* **Sound Context:** Improve the `AudioContext` handling in `KitchenDisplay.tsx`. Browsers often block auto-playing sounds; a robust "Unlock Audio" UI interaction flow is needed.

## 14. Customer Accounts & Loyalty

* **Data Model:** Add `Customers` table to Tenant schemas.
* **Features:** "Order Again" functionality, saving addresses, and a basic points-based loyalty system configurable by the tenant.
