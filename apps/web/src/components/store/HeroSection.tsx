import React from 'react';
import { MapPin, Clock, Star, Info } from 'lucide-react';
import { BrandButton } from '../common/BrandButton';

interface HeroProps {
    name: string;
    coverImage?: string;
    preset?: string; // We pass the preset ID to decide the layout
}

export const HeroSection: React.FC<HeroProps> = ({
    name,
    coverImage,
    preset = 'mono-luxe'
}) => {
    // Default fallback image
    const bgImage = coverImage || "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80";

    // 1. Determine Layout Mode based on Preset
    const layoutMode = {
        'mono-luxe': 'centered',
        'fresh-market': 'split',
        'tech-ocean': 'banner'
    }[preset] || 'centered';

    // --- SUB-COMPONENTS ---

    const StatusBadge = () => (
        <div className="inline-flex items-center gap-2 mb-3 bg-black/40 backdrop-blur-[var(--glass-blur)] px-3 py-1 rounded-[var(--radius-lg)] border border-white/10">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white font-heading">
                Open Now
            </span>
        </div>
    );

    const MetaPills = () => (
        <div className="flex flex-wrap items-center gap-3 mt-4 text-sm font-medium text-white/90">
            <div className="flex items-center gap-1.5">
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <span>4.8</span>
                <span className="opacity-60">(1.2k)</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
                <Clock size={16} />
                <span>20-30 min</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
                <MapPin size={16} />
                <span>1.2 mi</span>
            </div>
        </div>
    );

    // --- LAYOUT VARIANTS ---

    // Variant A: Centered (Mono Luxe)
    if (layoutMode === 'centered') {
        return (
            <div className="relative h-[55vh] min-h-[450px] w-full overflow-hidden flex items-center justify-center text-center group">
                {/* Parallax BG */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[3s] ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${bgImage})` }}
                />
                {/* Brand-Tinted Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

                {/* Primary Color Wash */}
                <div className="absolute inset-0 bg-primary mix-blend-overlay opacity-[var(--overlay-opacity)]" />

                <div className="relative z-10 p-6 max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <StatusBadge />
                    <h1 className="text-5xl md:text-7xl font-black font-heading text-white tracking-tighter uppercase case-brand drop-shadow-2xl">
                        {name}
                    </h1>
                    <div className="flex justify-center">
                        <MetaPills />
                    </div>
                    <div className="mt-8">
                        <BrandButton variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                            View Info
                        </BrandButton>
                    </div>
                </div>
            </div>
        );
    }

    // Variant B: Split (Fresh Market)
    if (layoutMode === 'split') {
        return (
            <div className="relative w-full bg-[var(--color-bg-app)] pt-20 pb-12 px-6">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left: Content */}
                    <div className="order-2 md:order-1 space-y-6">
                        <StatusBadge />
                        <h1 className="text-4xl md:text-6xl font-bold font-heading text-text-main leading-tight case-brand">
                            {name}
                        </h1>
                        <p className="text-lg text-text-muted max-w-md leading-relaxed">
                            Experience fresh, locally sourced ingredients delivered straight to your door.
                        </p>

                        {/* Dark pills for light background */}
                        <div className="flex gap-4 text-text-main font-medium">
                            <span className="flex gap-1 items-center bg-white px-3 py-1 rounded-[var(--radius-lg)] shadow-sm border border-border">
                                <Star size={14} className="fill-primary text-primary" /> 4.9
                            </span>
                            <span className="flex gap-1 items-center bg-white px-3 py-1 rounded-[var(--radius-lg)] shadow-sm border border-border">
                                <Clock size={14} className="text-primary" /> 25m
                            </span>
                        </div>

                        <div className="flex gap-4 pt-2">
                            <BrandButton size="lg">Order Now</BrandButton>
                            <BrandButton variant="ghost" icon={<Info size={18} />}>About Us</BrandButton>
                        </div>
                    </div>

                    {/* Right: Image Blob/Shape */}
                    <div className="order-1 md:order-2 relative">
                        <div className="aspect-square md:aspect-[4/3] rounded-[var(--radius-lg)] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img src={bgImage} className="w-full h-full object-cover" alt="Hero" />
                        </div>
                        {/* Decorative Blob behind */}
                        <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl -z-10" />
                    </div>
                </div>
            </div>
        );
    }

    // Variant C: Banner (Tech Ocean)
    return (
        <div className="relative h-[35vh] min-h-[300px] w-full overflow-hidden flex items-end">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            />
            {/* Hard Gradient Line */}
            <div className="absolute inset-0 bg-gradient-to-r from-app via-app/90 to-transparent" />

            <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 pb-10 flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="bg-primary text-primary-fg p-1.5 rounded-[var(--radius-sm)]">
                            <MapPin size={16} />
                        </div>
                        <span className="text-primary font-bold tracking-widest uppercase text-xs">San Francisco, CA</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-text-main case-brand mb-2">
                        {name}
                    </h1>
                    <div className="flex items-center gap-4 text-text-muted text-sm">
                        <span>$$$ • American • Burgers</span>
                        <span className="w-1 h-1 bg-border rounded-full" />
                        <span className="text-green-500 font-bold">Open until 11PM</span>
                    </div>
                </div>

                {/* Quick Stats Card */}
                <div className="hidden md:flex gap-8 bg-surface/50 backdrop-blur-md border border-white/10 p-4 rounded-[var(--radius-md)]">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-text-main">4.8</div>
                        <div className="text-[10px] uppercase text-text-muted font-bold">Rating</div>
                    </div>
                    <div className="w-px bg-border/50" />
                    <div className="text-center">
                        <div className="text-2xl font-bold text-text-main">20m</div>
                        <div className="text-[10px] uppercase text-text-muted font-bold">Delivery</div>
                    </div>
                </div>
            </div>
        </div>
    );
};