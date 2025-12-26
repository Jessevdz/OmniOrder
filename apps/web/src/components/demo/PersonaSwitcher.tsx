import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Settings, SplitSquareVertical, RotateCcw, Palette, Check, Store, ChefHat, X, SlidersHorizontal } from 'lucide-react';
import { THEME_PRESETS } from '../../utils/theme';
import { trackEvent } from '../../utils/analytics';

interface PersonaSwitcherProps {
    currentPreset: string;
    onPresetChange: (preset: string) => void;
}

export const PersonaSwitcher: React.FC<PersonaSwitcherProps> = ({ currentPreset, onPresetChange }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [showThemes, setShowThemes] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false); // Default open on desktop for visibility

    // Ref for click-outside detection
    const switcherRef = useRef<HTMLDivElement>(null);

    // Context Logic: Only show Vibe button if NOT in kitchen/admin
    const isStoreContext = !location.pathname.includes('/kitchen') && !location.pathname.includes('/admin');

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (switcherRef.current && !switcherRef.current.contains(event.target as Node)) {
                setShowThemes(false);
            }
        };

        if (showThemes) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showThemes]);

    const handleReset = async () => {
        if (!confirm("Reset Demo? Dit wist alle bestellingen en reset het menu.")) return;

        trackEvent('demo_reset', { from_path: location.pathname });

        const token = sessionStorage.getItem('demo_token');
        if (token) {
            try {
                await fetch('/api/v1/sys/reset-demo', {
                    method: 'POST',
                    headers: { 'Authorization': `Bearer ${token}` }
                });
            } catch (e) { console.error(e); }
        }
        sessionStorage.removeItem('omni_demo_tour_seen');
        window.location.href = '/demo/split';
    };

    const handleNavigation = (path: string) => {
        navigate(path);
        // UX Improvement: Auto-collapse on mobile after navigation
        if (window.innerWidth < 768) {
            setIsMinimized(true);
        }
    };

    const tabs = [
        { id: 'split', label: 'Split View', path: '/demo/split', icon: SplitSquareVertical, showOnMobile: true },
        { id: 'store', label: 'Winkel', path: '/demo/store', icon: Store, showOnMobile: false },
        { id: 'kitchen', label: 'Keuken', path: '/demo/kitchen', icon: ChefHat, showOnMobile: false },
        { id: 'admin', label: 'Manager', path: '/demo/admin/dashboard', icon: Settings, showOnMobile: true },
    ];

    // --- Minimized State (Desktop Only) ---
    if (isMinimized) {
        return (
            <button
                onClick={() => setIsMinimized(false)}
                // UPDATED: Added electric blue shadow and border tint to draw attention
                className="fixed bottom-4 left-4 md:bottom-8 md:left-8 z-[150] w-12 h-12 bg-neutral-900 text-white rounded-full shadow-[0_0_12px_rgba(37,99,235,0.5)] border border-blue-500/40 flex items-center justify-center hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 animate-in slide-in-from-left-10 duration-300"
                title="Open Demo Controls"
            >
                <SlidersHorizontal size={24} />
            </button>
        );
    }

    // --- Expanded State (Desktop Only) ---
    return (
        <div
            ref={switcherRef}
            className="fixed bottom-4 left-4 md:bottom-8 md:left-8 z-[150] flex flex-col items-start gap-2 animate-in slide-in-from-left-10 duration-300"
        >
            {/* Theme Picker Popover */}
            {showThemes && (
                <div className="bg-white/90 backdrop-blur-md border border-gray-200 p-2 rounded-2xl shadow-2xl animate-in slide-in-from-bottom-4 zoom-in-95 duration-200 mb-1 w-64 origin-bottom-left">
                    <div className="px-3 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100 mb-1">
                        Selecteer Vibe:
                    </div>
                    <div className="space-y-1">
                        {Object.keys(THEME_PRESETS).map((key) => {
                            const isActive = currentPreset === key;
                            // @ts-ignore
                            const presetName = THEME_PRESETS[key]['name'] || key;

                            return (
                                <button
                                    key={key}
                                    onClick={() => {
                                        trackEvent('demo_theme_change', { preset: key, previous_preset: currentPreset });
                                        onPresetChange(key);
                                        setShowThemes(false);
                                        if (window.innerWidth < 768) setIsMinimized(true);
                                    }}
                                    className={`
                                        w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-between
                                        ${isActive ? 'bg-black text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'}
                                    `}
                                >
                                    {presetName}
                                    {isActive && <Check size={14} />}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* Main Navigation Pill */}
            <div className="bg-neutral-900/95 backdrop-blur-md border border-neutral-700 p-1.5 rounded-full shadow-2xl flex items-center gap-1 max-w-[90vw] overflow-x-auto hide-scrollbar">

                <button
                    onClick={() => setIsMinimized(true)}
                    className="w-8 h-8 flex items-center justify-center rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-all mr-1 shrink-0"
                >
                    <X size={16} />
                </button>

                <div className="flex gap-1">
                    {tabs.map(tab => {
                        const isActive = location.pathname.startsWith(tab.path);
                        return (
                            <button
                                key={tab.id}
                                onClick={() => handleNavigation(tab.path)}
                                // UX Improvement: Always show labels (removed hidden md:inline)
                                className={`${displayClass} items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${isActive ? 'bg-white text-black shadow-lg' : 'text-neutral-400 hover:text-white hover:bg-white/10'}`}
                            >
                                <tab.icon size={18} />
                                <span>{tab.label}</span>
                            </button>
                        );
                    })}
                </div>

                <div className="w-px h-6 bg-neutral-700 mx-1 shrink-0 hidden md:block"></div>

                <div className="flex gap-1">
                    {/* Context check for Vibe button */}
                    {isStoreContext && (
                        <button
                            onClick={() => {
                                if (!showThemes) trackEvent('demo_theme_menu_open');
                                setShowThemes(!showThemes);
                            }}
                            className={`flex items-center gap-2 px-3 md:px-4 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${showThemes ? 'bg-blue-600 text-white shadow-lg' : 'text-neutral-400 hover:text-white hover:bg-white/10'}`}
                            title="Switch Brand Vibe"
                        >
                            <Palette size={18} />
                            <span>Vibe</span>
                        </button>
                    )}

                    <button
                        onClick={handleReset}
                        className="flex items-center justify-center w-10 h-10 rounded-full text-red-400 hover:text-white hover:bg-red-500/20 transition-all shrink-0"
                        title="Reset Demo Environment"
                    >
                        <RotateCcw size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};