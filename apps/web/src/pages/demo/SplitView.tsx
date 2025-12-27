import { useState, useEffect } from 'react';
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
import { Store, ChefHat } from 'lucide-react';

export function SplitView() {
    const { config, preset } = useOutletContext<DemoContextType>();
    const [tourActive, setTourActive] = useState(() => !sessionStorage.getItem('omni_demo_tour_seen'));
    const [tourStep, setTourStep] = useState(0);

    // Mobile Tab State
    const [mobileTab, setMobileTab] = useState<'store' | 'kitchen'>('store');

    const handleTourComplete = () => {
        setTourActive(false);
        // Reset to Store view so the user can start ordering immediately
        setMobileTab('store');
        sessionStorage.setItem('omni_demo_tour_seen', 'true');
    };

    // Auto-switch tabs during tour on mobile
    useEffect(() => {
        if (!tourActive) return;
        if (tourStep === 1) setMobileTab('store');
        if (tourStep === 2) setMobileTab('kitchen');
    }, [tourStep, tourActive]);

    if (!config) return <div className="h-screen bg-neutral-950 text-white flex items-center justify-center">Loading Demo...</div>;

    const themeStyles = applyTheme(preset, {
        primary_color: config.primary_color,
        font_family: config.font_family,
    });

    const isLeftSpotlight = tourActive && tourStep === 1;
    const isRightSpotlight = tourActive && tourStep === 2;

    // Mobile Visibility Classes
    // UPDATED: Changed h-full to min-h-0 to work with flex-1 in a column layout (prevents overflow)
    const mobileHiddenClass = "absolute opacity-0 pointer-events-none z-0";
    const mobileVisibleClass = "relative opacity-100 z-10 flex-1 min-h-0";

    // UPDATED: Removed explicit h-full from the end to allow flexbox to manage height on mobile
    const leftPaneClass = `
        bg-white md:rounded-2xl overflow-hidden shadow-2xl border-neutral-800 flex flex-col transition-all duration-700 ease-in-out
        ${mobileTab === 'store' ? mobileVisibleClass : `hidden md:flex ${mobileHiddenClass} md:opacity-100 md:relative md:pointer-events-auto`}
        ${tourActive && tourStep === 2 ? 'md:opacity-30 md:blur-sm md:scale-[0.98]' : 'md:opacity-100 md:scale-100'}
        ${isLeftSpotlight ? 'z-[110] ring-4 ring-blue-500/50 shadow-[0_0_50px_rgba(0,0,0,0.5)]' : ''}
        w-full md:flex-1 md:h-auto
    `;

    const rightPaneClass = `
        bg-neutral-900 md:rounded-2xl overflow-hidden shadow-2xl border-neutral-800 flex-col transition-all duration-700 ease-in-out
        ${mobileTab === 'kitchen' ? mobileVisibleClass : `hidden md:flex ${mobileHiddenClass} md:opacity-100 md:relative md:pointer-events-auto`}
        ${tourActive && tourStep === 1 ? 'md:opacity-30 md:blur-sm md:scale-[0.98]' : 'md:opacity-100 md:scale-100'}
        ${isRightSpotlight ? 'z-[110] ring-4 ring-blue-500/50 shadow-[0_0_50px_rgba(0,0,0,0.5)]' : ''}
        w-full md:flex-1 md:h-auto
    `;

    return (
        <div className="flex flex-col md:flex-row h-screen w-full bg-neutral-950 md:p-4 gap-0 md:gap-4 relative overflow-hidden">

            {/* Mobile View Toggler - Static Segmented Control */}
            <div className={`md:hidden w-full p-4 bg-neutral-950 shrink-0 ${tourActive ? 'z-[201] relative' : 'z-20'}`}>
                <div className="bg-neutral-900 border border-neutral-800 p-1 rounded-lg flex gap-1">
                    <button
                        onClick={() => setMobileTab('store')}
                        className={`flex-1 py-2.5 rounded-md flex items-center justify-center gap-2 text-sm font-bold transition-all ${mobileTab === 'store' ? 'bg-white text-black shadow-sm' : 'text-neutral-400 hover:text-white'}`}
                    >
                        <Store size={16} /> Winkel
                    </button>
                    <button
                        onClick={() => setMobileTab('kitchen')}
                        className={`flex-1 py-2.5 rounded-md flex items-center justify-center gap-2 text-sm font-bold transition-all ${mobileTab === 'kitchen' ? 'bg-blue-600 text-white shadow-sm' : 'text-neutral-400 hover:text-white'}`}
                    >
                        <ChefHat size={16} /> Keuken
                    </button>
                </div>
            </div>

            {tourActive && (
                <WelcomeOverlay
                    currentStep={tourStep}
                    onStepChange={setTourStep}
                    onComplete={handleTourComplete}
                />
            )}

            {/* LEFT: Customer View */}
            <div className={leftPaneClass}>
                {/* Notch only on desktop */}
                <div className="hidden md:flex absolute top-0 left-0 w-full h-8 bg-neutral-100 border-b border-gray-200 z-50 items-center justify-center gap-2">
                    <div className="w-16 h-4 bg-black rounded-full" />
                </div>

                {/* Content Container - removed pt-16 on mobile since toggle is now static */}
                <div style={themeStyles} className="flex-1 overflow-y-auto bg-app text-text-main font-body pt-0 md:pt-8 relative scroll-smooth no-scrollbar">
                    <FontLoader fontFamily={config.font_family} />
                    <CartProvider>
                        {/* Status banner logic adjusted: absolute on mobile to float over header, fixed on desktop within container */}
                        <OrderStatusBanner className="absolute top-4 left-0 w-full z-40 px-4 md:fixed md:top-8 md:px-0" />
                        <div className="pb-24">
                            <MenuPage config={config} />
                        </div>
                        <CartFloatingButton />
                        <CartDrawer />
                    </CartProvider>
                </div>
            </div>

            {/* RIGHT: Kitchen View */}
            <div className={rightPaneClass}>
                <div className="hidden md:block absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 opacity-50" />
                {/* Removed top padding on mobile since header is gone */}
                <div className="flex-1 overflow-hidden pt-0 md:pt-0">
                    <KitchenDisplay />
                </div>
            </div>
        </div>
    );
}