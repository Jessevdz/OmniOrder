Here is a prioritized list of UX and layout improvements for the mobile demo experience.

The core issue is that the "Split View" concept works beautifully on desktop (side-by-side) but creates context-switching friction on mobile. Additionally, complex interfaces like the KDS (Kitchen Display System) are currently trying to squeeze desktop grids into mobile screens.

### 1. KDS: Transform "Lanes" into "Tabs" (High Priority)

**File:** `apps/web/src/pages/kitchen/KitchenDisplay.tsx`

Currently, the KDS uses `flex-row overflow-x-auto` on mobile. This forces the user to scroll horizontally to see different statuses ("Pending", "Preparing", etc.). This is disorienting on a phone.

* **The Fix:** Implement a **Tabbed Interface** for mobile.
* **How:** Instead of rendering all 4 lanes simultaneously with horizontal scroll, render **one lane at a time** based on a selected state.
* **UX Benefit:** The chef can focus entirely on "Preparing" without accidentally scrolling to "Completed".
* **Action:** Add a Sticky Header below the main header with 4 tabs (Pending, Queued, Cooking, Ready). Show a badge count on each tab.

### 2. Split View Toggle: Move from "Floating" to "Static"

**File:** `apps/web/src/pages/demo/SplitView.tsx`

The current toggle (`Winkel | Keuken`) is `fixed top-4`. On the Storefront, this obscures the Brand Header or the Category Nav. On the KDS, it might cover the WiFi status or order counts.

* **The Fix:** Make the toggle a **static block** at the very top of the DOM, pushing the content down, rather than floating over it.
* **Styling:** Use a "Segmented Control" style (iOS style) spanning the full width of the screen.
* **UX Benefit:** No content is ever hidden behind the button. It clearly delineates the "Mode" of the demo.

### 3. Storefront: Compact Hero for Mobile

**File:** `apps/web/src/components/store/HeroSection.tsx`

The `HeroSection` currently uses `min-h-[500px]` or `h-[65vh]`. On mobile, this pushes the actual menu (the "value") way below the fold. A user shouldn't have to scroll twice just to see the first burger.

* **The Fix:**
* **Desktop:** Keep the cinematic `h-[65vh]`.
* **Mobile:** Reduce to `h-[35vh]` or `min-h-[250px]`.
* **Parallax:** Disable parallax on mobile to improve scrolling performance (jank reduction).


* **UX Benefit:** Faster time-to-value. The user sees the brand *and* the top categories immediately.

### 4. Optimize the "Persona Switcher" Position

**File:** `apps/web/src/components/demo/PersonaSwitcher.tsx`

The `PersonaSwitcher` is fixed to the bottom-left. The `CartFloatingButton` is fixed to the bottom (full width or right). On mobile, these often overlap or create a "cluttered basement" effect.

* **The Fix:**
* **Mobile:** Collapse the Persona Switcher into a tiny "Fab" (Floating Action Button) that expands on click, or move it to the Top-Right corner (absolute) inside the Split View navigation bar.
* **Z-Index:** Ensure the Cart Floating Button always sits *above* the Persona switcher, or add bottom padding to the page so the Persona switcher doesn't block the checkout button.



### 5. Menu Grid: "List View" for Mobile

**File:** `apps/web/src/components/store/MenuPage.tsx` & `MenuGridItem.tsx`

Currently, `grid-cols-1` results in large cards stacked vertically. While visually pleasing for "Mono Luxe", it makes browsing a large menu tedious.

* **The Fix:**
* **Layout:** Switch to a **Horizontal Card** layout for mobile (Image Left, Text Right) *OR* a denser Grid (2 columns) for items without descriptions.
* **"Fresh Market" Preset:** Keep the large cards (it fits the vibe).
* **"Tech Ocean" / "Mono Luxe":** Use a dense list view.


* **UX Benefit:** Users can scan 4-5 items per screen height instead of just 1-2.

### 6. Modal Usability (The "Thumb Zone")

**File:** `apps/web/src/components/store/ItemDetailModal.tsx`

The modal centers itself on the screen. On mobile, reaching the top "X" close button often requires stretching the thumb or using a second hand.

* **The Fix:** Convert the Modal into a **Bottom Sheet** (Drawer) for mobile.
* **How:**
* Animate `slide-in-from-bottom`.
* Anchor to `bottom-0`.
* Add a "Drag Handle" visual cue at the top.
* Allow swiping down to close.


* **UX Benefit:** Native app feel and significantly better one-handed usability.