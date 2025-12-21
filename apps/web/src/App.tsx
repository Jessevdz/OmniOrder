import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

// Layouts
import { StoreLayout } from './layouts/StoreLayout';
import { PlatformLayout } from './layouts/PlatformLayout';
import { TenantLayout } from './layouts/TenantLayout';

// Public Store Pages
import { MenuPage } from './components/store/MenuPage';

// Shared Pages
import { LoginPage } from './pages/admin/Login';

// Platform Pages (Super Admin)
import { TenantsPage } from './pages/platform/Tenants';
import { PlatformDashboard } from './pages/platform/Dashboard';

// Tenant Pages (Restaurant Admin)
import { MenuBuilder } from './pages/tenant/MenuBuilder';
import { TenantDashboard } from './pages/tenant/Dashboard';
import { TenantSettings } from './pages/tenant/Settings';

// KDS
import { KitchenDisplay } from './pages/kitchen/KitchenDisplay';

function App() {
    return (
        <AuthProvider>
            <CartProvider>
                <BrowserRouter>
                    <Routes>
                        {/* -----------------------------------------------------
                            1. PUBLIC STOREFRONT 
                            (Accessed via pizza.localhost, etc.)
                           ----------------------------------------------------- */}
                        <Route element={<StoreLayout />}>
                            <Route path="/" element={<MenuPage />} />
                        </Route>

                        {/* -----------------------------------------------------
                            2. KITCHEN DISPLAY SYSTEM 
                            (Accessed via pizza.localhost/kitchen)
                           ----------------------------------------------------- */}
                        <Route path="/kitchen" element={<KitchenDisplay />} />

                        {/* -----------------------------------------------------
                            3. AUTHENTICATION 
                           ----------------------------------------------------- */}
                        <Route path="/admin/login" element={<LoginPage />} />

                        {/* -----------------------------------------------------
                            4. SUPER ADMIN / PLATFORM PORTAL 
                            (Ideally admin.omniorder.localhost/platform)
                           ----------------------------------------------------- */}
                        <Route path="/platform" element={<PlatformLayout />}>
                            <Route index element={<Navigate to="dashboard" replace />} />
                            <Route path="dashboard" element={<PlatformDashboard />} />
                            <Route path="tenants" element={<TenantsPage />} />
                            <Route path="settings" element={<div>Global Settings Placeholder</div>} />
                        </Route>

                        {/* -----------------------------------------------------
                            5. TENANT ADMIN / MANAGER PORTAL 
                            (Accessed via pizza.localhost/admin)
                           ----------------------------------------------------- */}
                        <Route path="/admin" element={<TenantLayout />}>
                            <Route index element={<Navigate to="dashboard" replace />} />
                            <Route path="dashboard" element={<TenantDashboard />} />
                            <Route path="menu" element={<MenuBuilder />} />
                            <Route path="staff" element={<div>Staff Management Placeholder</div>} />
                            <Route path="settings" element={<TenantSettings />} />
                        </Route>

                    </Routes>
                </BrowserRouter>
            </CartProvider>
        </AuthProvider>
    );
}

export default App;