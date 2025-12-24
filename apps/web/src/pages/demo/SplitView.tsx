import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { MenuPage } from '../../components/store/MenuPage';
import { KitchenDisplay } from '../kitchen/KitchenDisplay';
import { WelcomeOverlay } from '../../components/demo/WelcomeOverlay';
import { applyTheme } from '../../utils/theme';
import { FontLoader } from '../../components/FontLoader';
import { CartDrawer } from '../../components/CartDrawer';
import { CartFloatingButton } from '../../components/store/CartFloatingButton';
import { OrderStatusBanner } from '../../components/store/OrderStatusBanner';
import { CartProvider } from '../../context/CartContext';
import { DemoContextType } from '../../layouts/DemoLayout';

export function SplitView() {
    // Consume Context from DemoLayout
    const { config, preset } = useOutletContext<DemoContextType>();

    // Tour State
    const [tourActive, setTourActive] = useState(() => !sessionStorage.getItem('omni_demo_tour_seen'));
    const [tourStep, setTourStep] = useState(0);

    const handleTourComplete = () => {
        setTourActive(false);
        sessionStorage.setItem('omni_demo_tour_seen', 'true');
    };

    if (!config) return <div className="h-screen bg-neutral-950 text-white flex items-center justify-center">Loading Demo...</div>;

    const themeStyles = applyTheme(preset, {
        primary_color: config.primary_color,
        font_family: config.font_family,
    });

    const isLeftSpotlight = tourActive && tourStep === 1;
    const isRightSpotlight = tourActive && tourStep === 2;

    const leftPaneClass = `
        flex-1 relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 flex flex-col max-w-[500px] mx-auto md:mx-0 md:max-w-none transition-all duration-700 ease-in-out
        ${tourActive && tourStep === 2 ? 'opacity-30 blur-sm scale-[0.98]' : 'opacity-100 scale-100'}
        ${isLeftSpotlight ? 'z-[110] ring-4 ring-blue-500/50 shadow-[0_0_50px_rgba(0,0,0,0.5)]' : ''}
    `;

    const rightPaneClass = `
        flex-[1.5] hidden md:flex relative bg-neutral-900 rounded-2xl overflow-hidden shadow-2xl border border-neutral-800 flex-col transition-all duration-700 ease-in-out
        ${tourActive && tourStep === 1 ? 'opacity-30 blur-sm scale-[0.98]' : 'opacity-100 scale-100'}
        ${isRightSpotlight ? 'z-[110] ring-4 ring-blue-500/50 shadow-[0_0_50px_rgba(0,0,0,0.5)]' : ''}
    `;

    return (
        <div className="flex h-screen w-full bg-neutral-950 p-2 md:p-4 gap-4 relative">

            {tourActive && (
                <WelcomeOverlay
                    currentStep={tourStep}
                    onStepChange={setTourStep}
                    onComplete={handleTourComplete}
                />
            )}

            {/* LEFT: Customer View */}
            <div className={leftPaneClass}>
                {/* The "Notch" Header */}
                <div className="absolute top-0 left-0 w-full h-8 bg-neutral-100 border-b border-gray-200 z-50 flex items-center justify-center gap-2">
                    <div className="w-16 h-4 bg-black rounded-full" />
                </div>

                <div style={themeStyles} className="flex-1 overflow-y-auto bg-app text-text-main font-body pt-8 relative scroll-smooth no-scrollbar">
                    <FontLoader fontFamily={config.font_family} />
                    <CartProvider>
                        {/* ADJUSTMENT: 
                            1. Fixed positioning here works relative to the transform parent (leftPaneClass).
                            2. top-8 accounts for the 32px height of the notch header.
                            3. z-40 ensures it floats above content but below the notch (z-50).
                        */}
                        <OrderStatusBanner className="fixed top-8 left-0 w-full z-40 animate-in slide-in-from-top duration-300" />

                        <div className="pb-24">
                            {/* Pass config explicitly to ensure immediate re-render on context change */}
                            <MenuPage config={config} />
                        </div>
                        <CartFloatingButton />
                        <CartDrawer />
                    </CartProvider>
                </div>
            </div>

            {/* RIGHT: Kitchen View */}
            <div className={rightPaneClass}>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 opacity-50" />
                <div className="flex-1 overflow-hidden">
                    <KitchenDisplay />
                </div>
            </div>
        </div>
    );
}