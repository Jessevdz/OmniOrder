import React from 'react';

interface HeroProps {
    name: string;
    coverImage?: string;
}

export const HeroSection: React.FC<HeroProps> = ({ name, coverImage }) => {
    // Default fallback image if none provided
    const bgImage = coverImage || "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1500&q=80";

    return (
        <div className="relative h-64 md:h-80 w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
                <div className="max-w-screen-lg mx-auto">
                    <span className="inline-block px-2 py-1 mb-2 text-xs font-bold uppercase tracking-wider text-black bg-white rounded-sm">
                        Open Now
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold font-heading text-white shadow-sm">
                        {name}
                    </h1>
                </div>
            </div>
        </div>
    );
};