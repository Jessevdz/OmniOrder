import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useTenantConfig } from './hooks/useTenantConfig';
import { MenuGrid } from './components/MenuGrid';
import { AuthProvider } from './context/AuthContext';
import { CartProvider, useCart } from './context/CartContext';
import { LoginPage } from './pages/admin/Login';
import { MenuBuilder } from './pages/admin/MenuBuilder';
import { FontLoader } from './components/FontLoader';
import { CartDrawer } from './components/CartDrawer';
import { ShoppingBag } from 'lucide-react';

// --- Components ---

const FloatingCartButton = () => {
    const { cartCount, toggleDrawer } = useCart();
    if (cartCount === 0) return null;

    return (
        <button
            onClick={() => toggleDrawer(true)}
            className="fixed bottom-6 right-6 bg-primary text-primary-fg px-6 py-4 rounded-full shadow-xl flex items-center gap-3 hover:scale-105 transition-transform z-30"
        >
            <ShoppingBag size={24} />
            <span className="font-bold text-lg">{cartCount}</span>
            <span className="text-sm opacity-90">View Order</span>
        </button>
    );
};

const StoreLayout = () => {
    const { config, loading, error } = useTenantConfig();

    if (loading) return <div className="h-screen flex items-center justify-center">Loading Store...</div>;

    if (error || !config) return (
        <div className="h-screen flex items-center justify-center bg-red-50 text-red-600 p-4">
            <div>
                <h1 className="text-2xl font-bold">Store Unavailable</h1>
                <p className="mt-2 text-sm">{error || "Configuration missing"}</p>
                <p className="text-xs text-gray-500 mt-4">Host: {window.location.host}</p>
            </div>
        </div>
    );

    const themeStyles = {
        '--primary': config.primary_color,
        '--primary-fg': '#ffffff', // Could calculate contrast here if needed
        'fontFamily': config.font_family,
    } as React.CSSProperties;

    return (
        <div style={themeStyles} className="min-h-screen bg-gray-50 text-gray-900 font-sans">
            <FontLoader fontFamily={config.font_family} />

            <header className="bg-white sticky top-0 z-20 shadow-sm border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-primary">{config.name}</h1>
                        <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Online Order</p>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto mt-8 px-4">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden min-h-[500px]">
                    <div className="h-32 bg-primary w-full relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="absolute bottom-4 left-6 text-white">
                            <h2 className="text-3xl font-bold">Menu</h2>
                        </div>
                    </div>
                    <div className="p-6">
                        <Outlet />
                    </div>
                </div>
            </main>

            <footer className="text-center text-gray-400 text-sm py-8 mt-8">
                Powered by OmniOrder &trade;
            </footer>

            <CartDrawer />
            <FloatingCartButton />
        </div>
    );
};

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

// --- Main App Component ---

function App() {
    return (
        <AuthProvider>
            <CartProvider>
                <BrowserRouter>
                    <Routes>
                        <Route element={<StoreLayout />}>
                            <Route path="/" element={<MenuGrid />} />
                        </Route>

                        {/* Admin Routes */}
                        <Route path="/admin/login" element={<LoginPage />} />
                        {/* ... Protected Admin Routes (Dashboard, MenuBuilder) from previous step ... */}
                        <Route path="/admin/menu" element={<MenuBuilder />} />
                    </Routes>
                </BrowserRouter>
            </CartProvider>
        </AuthProvider>
    );
}

export default App;