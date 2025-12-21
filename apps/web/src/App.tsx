import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

// Layouts & Pages
import { StoreLayout } from './layouts/StoreLayout';
import { MenuPage } from './components/store/MenuPage';
import { LoginPage } from './pages/admin/Login';
import { MenuBuilder } from './pages/admin/MenuBuilder';
import { KitchenDisplay } from './pages/kitchen/KitchenDisplay';

function App() {
    return (
        <AuthProvider>
            <CartProvider>
                <BrowserRouter>
                    <Routes>
                        {/* Public Storefront */}
                        <Route element={<StoreLayout />}>
                            <Route path="/" element={<MenuPage />} />
                        </Route>

                        {/* Admin Routes */}
                        <Route path="/admin/login" element={<LoginPage />} />
                        <Route path="/admin/menu" element={<MenuBuilder />} />

                        {/* KDS Route */}
                        <Route path="/kitchen" element={<KitchenDisplay />} />

                    </Routes>
                </BrowserRouter>
            </CartProvider>
        </AuthProvider>
    );
}

export default App;