import React from 'react';
import { Plus } from 'lucide-react';
import { BrandCard } from '../common/BrandCard';
import { BrandButton } from '../common/BrandButton';

interface MenuItemProps {
    item: any;
    onAdd: (item: any) => void;
    preset?: string; // To conditionally render "Add" button styles
}

export const MenuGridItem: React.FC<MenuItemProps> = ({ item, onAdd, preset = 'mono-luxe' }) => {

    // --- THEME LOGIC ---
    // Different presets have different "Add to Cart" interactions
    const renderAddButton = () => {
        if (preset === 'fresh-market' || preset === 'stelly') {
            // Big pill button at bottom
            return (
                <div className="mt-4">
                    <BrandButton
                        fullWidth
                        size="md"
                        onClick={(e) => {
                            e.stopPropagation();
                            onAdd(item);
                        }}
                    >
                        Add ${(item.price / 100).toFixed(2)}
                    </BrandButton>
                </div>
            );
        }

        if (preset === 'tech-ocean') {
            // Floating Action Button (FAB)
            return (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onAdd(item);
                    }}
                    className="absolute top-3 right-3 bg-primary text-white p-2 rounded-[var(--radius-sm)] shadow-lg hover:brightness-110 active:scale-95 transition-all"
                >
                    <Plus size={20} />
                </button>
            );
        }

        // Default: Mono Luxe (Minimalist corner icon)
        return (
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onAdd(item);
                }}
                className="
                    absolute bottom-0 right-0 
                    bg-primary text-primary-fg 
                    p-3 
                    rounded-tl-[var(--radius-lg)] 
                    hover:scale-110 transition-transform
                "
            >
                <Plus size={20} />
            </button>
        );
    };

    return (
        <BrandCard
            hoverEffect
            interactive
            className="flex flex-col h-full"
            onClick={() => onAdd(item)}
        >
            {/* Image Area */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 group">
                {item.image_url ? (
                    <img
                        src={item.image_url}
                        alt={item.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-text-muted text-sm">
                        No Image
                    </div>
                )}

                {/* Tech Ocean FAB lives inside the image area */}
                {preset === 'tech-ocean' && renderAddButton()}
            </div>

            {/* Content Area */}
            <div className="flex flex-col flex-1 p-5">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold font-heading text-text-main leading-tight case-brand">
                        {item.name}
                    </h3>
                    {/* For Mono Luxe/Tech Ocean, price is up top. For others, it's in the button. */}
                    {(preset !== 'fresh-market' && preset !== 'stelly') && (
                        <span className="font-bold text-primary text-lg">
                            ${(item.price / 100).toFixed(2)}
                        </span>
                    )}
                </div>

                <p className="text-sm text-text-muted line-clamp-2 mb-4 flex-1">
                    {item.description || "No description available."}
                </p>

                {/* Render Button based on Theme Logic - FIXED HERE */}
                {(preset === 'fresh-market' || preset === 'stelly') && renderAddButton()}
            </div>

            {/* Mono Luxe Button lives absolute bottom-right */}
            {preset === 'mono-luxe' && renderAddButton()}
        </BrandCard>
    );
};