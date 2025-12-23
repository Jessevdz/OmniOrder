import { useNavigate, useLocation } from 'react-router-dom';
import { ChefHat, Store, Settings, SplitSquareVertical, RotateCcw } from 'lucide-react';

export const PersonaSwitcher = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const tabs = [
        { id: 'split', label: 'Omni View', path: '/demo/split', icon: SplitSquareVertical },
        { id: 'store', label: 'Storefront', path: '/demo/store', icon: Store },
        { id: 'kds', label: 'Kitchen', path: '/demo/kitchen', icon: ChefHat },
        { id: 'admin', label: 'Manager', path: '/demo/admin', icon: Settings },
    ];

    const handleReset = async () => {
        if (!confirm("Reset Demo?\n\nThis will clear all orders, reset the theme to 'Mono Luxe', and restart the tour.")) return;

        const token = sessionStorage.getItem('demo_token');
        if (token) {
            try {
                await fetch('/api/v1/sys/reset-demo', {
                    method: 'POST',
                    headers: { 'Authorization': `Bearer ${token}` }
                });
            } catch (e) {
                console.error("Reset failed", e);
            }
        }

        // Clear Tour State
        sessionStorage.removeItem('omni_demo_tour_seen');

        // Force Reload to reset state
        window.location.href = '/demo/split';
    };

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-bottom-10 duration-500">
            <div className="bg-neutral-900/90 backdrop-blur-md border border-neutral-700 p-1.5 rounded-full shadow-2xl flex items-center gap-1">
                {tabs.map((tab) => {
                    const isActive = location.pathname === tab.path;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => navigate(tab.path)}
                            className={`
                                flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold transition-all
                                ${isActive
                                    ? 'bg-white text-black shadow-lg scale-105'
                                    : 'text-neutral-400 hover:text-white hover:bg-white/10'
                                }
                            `}
                        >
                            <tab.icon size={18} />
                            <span className="hidden md:inline">{tab.label}</span>
                        </button>
                    );
                })}

                {/* Divider */}
                <div className="w-px h-6 bg-neutral-700 mx-1"></div>

                {/* Reset Button */}
                <button
                    onClick={handleReset}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold text-red-400 hover:text-white hover:bg-red-500/20 transition-all"
                    title="Reset Demo Environment"
                >
                    <RotateCcw size={18} />
                </button>
            </div>
        </div>
    );
};