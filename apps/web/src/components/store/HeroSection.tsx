import React from 'react';
import { MapPin, Clock, Star } from 'lucide-react';

interface HeroProps {
    name: string;
    coverImage?: string;
}

export const HeroSection: React.FC<HeroProps> = ({ name, coverImage }) => {
    // Default high-res food fallback
    const bgImage = coverImage || "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80";

    return (
        <div className="relative h-[45vh] min-h-[350px] w-full overflow-hidden group">
            {/* 1. Parallax/Zoom Background Layer */}
            {/* transform-gpu ensures smooth animation on mobile */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-105 transform-gpu"
                style={{ backgroundImage: `url(${bgImage})` }}
            />

            {/* 2. Gradient Overlay - Deepened for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />

            {/* 3. Content Layer */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 pb-8">
                <div className="max-w-screen-lg mx-auto flex flex-col gap-3 animate-in slide-in-from-bottom-4 fade-in duration-700">

                    {/* Status Badge with Pulsing Animation */}
                    <div className="flex items-center gap-2 mb-1">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest text-green-400 drop-shadow-md">
                            Open Now
                        </span>
                    </div>

                    {/* Main Title - Large and bold */}
                    <h1 className="text-4xl md:text-6xl font-black font-heading text-white drop-shadow-lg tracking-tight leading-none">
                        {name}
                    </h1>

                    {/* Meta Info Pills */}
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                        {/* Rating Pill */}
                        <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-white text-sm font-medium">
                            <Star size={14} className="fill-yellow-400 text-yellow-400" />
                            <span>4.8</span>
                            <span className="text-white/60 text-xs">(1.2k)</span>
                        </div>

                        {/* Time Pill */}
                        <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-white text-sm font-medium">
                            <Clock size={14} />
                            <span>15-25 min</span>
                        </div>

                        {/* Distance Pill */}
                        <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-white text-sm font-medium">
                            <MapPin size={14} />
                            <span>1.2 mi</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};