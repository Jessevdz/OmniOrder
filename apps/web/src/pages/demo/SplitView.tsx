import { useState } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom'; // Reuse router context tricks if needed
import { MenuPage } from '../../components/store/MenuPage';
import { KitchenDisplay } from '../kitchen/KitchenDisplay';
import { ThemeWidget } from '../../components/demo/ThemeWidget';
import { useTenantConfig, TenantConfig } from '../../hooks/useTenantConfig';
import { applyTheme } from '../../utils/theme';
import { FontLoader } from '../../components/FontLoader';
import { CartDrawer } from '../../components/CartDrawer';
import { CartFloatingButton } from '../../components/store/CartFloatingButton';
import { OrderStatusBanner } from '../../components/store/OrderStatusBanner';
import { CartProvider } from '../../context/CartContext';

export function SplitView() {
    const { config: initialConfig, loading } = useTenantConfig();

    // Local state override for the theme to make it instant without waiting for DB roundtrip in demo
    const [localPreset, setLocalPreset] = useState<string | null>(null);

    if (loading) return <div className="h-screen bg-neutral-900 text-white flex items-center justify-center">Loading Demo Experience...</div>;

    const activeConfig = {
        ...initialConfig,
        preset: localPreset || initialConfig?.preset || 'mono-luxe'
    } as TenantConfig;

    const themeStyles = applyTheme(activeConfig.preset, {
        primary_color: activeConfig.primary_color,
        font_family: activeConfig.font_family,
    });

    const updateTheme = async (presetId: string) => {
        setLocalPreset(presetId);
        // In a real implementation, we would also PUT to /api/v1/admin/settings here
        try {
            await fetch('/api/v1/admin/settings', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...activeConfig, preset: presetId })
            });
        } catch (e) {
            console.warn("Failed to persist theme (expected if not logged in as admin)", e);
        }
    };

    return (
        <div className="flex h-screen w-full bg-neutral-950 p-2 md:p-4 gap-4">

            {/* --- LEFT: The Customer (Storefront) --- */}
            <div className="flex-1 relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 flex flex-col max-w-[500px] mx-auto md:mx-0 md:max-w-none transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-8 bg-neutral-100 border-b border-gray-200 z-50 flex items-center justify-center gap-2">
                    <div className="w-16 h-4 bg-black rounded-full" />
                </div>

                {/* Storefront wrapper with isolated context and styles */}
                <div style={themeStyles} className="flex-1 overflow-y-auto bg-app text-text-main font-body pt-8 relative scroll-smooth no-scrollbar">
                    <FontLoader fontFamily={activeConfig.font_family} />

                    <CartProvider>
                        <ThemeWidget currentPreset={activeConfig.preset} onPresetChange={updateTheme} />
                        <OrderStatusBanner />
                        {/* We manually render MenuPage here and provide context manually since we are bypassing the Router's layout nesting */}
                        <Outlet context={{ config: activeConfig }} />
                        <div className="pb-24">
                            <MenuPage />
                        </div>
                        <CartFloatingButton />
                        <CartDrawer />
                    </CartProvider>
                </div>
            </div>

            {/* --- RIGHT: The Kitchen (KDS) --- */}
            <div className="flex-[1.5] hidden md:flex relative bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 flex-col">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 opacity-50" />
                <div className="flex-1 overflow-hidden">
                    {/* KDS runs independently */}
                    <KitchenDisplay />
                </div>
            </div>

        </div>
    );
}