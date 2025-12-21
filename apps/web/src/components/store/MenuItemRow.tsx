import React from 'react';
import { Plus } from 'lucide-react';

interface MenuItemProps {
    item: any;
    onAdd: (item: any) => void;
}

export const MenuItemRow: React.FC<MenuItemProps> = ({ item, onAdd }) => {
    return (
        <div
            onClick={() => onAdd(item)}
            className="
                group relative flex gap-4 p-4 
                bg-surface rounded-xl border border-border/60 
                hover:border-primary/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] 
                transition-all duration-300 cursor-pointer overflow-hidden
            "
        >
            {/* Hover Effect: Subtle background tint based on brand color */}
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />

            {/* Content Section (Left) */}
            <div className="flex-1 flex flex-col justify-between z-10">
                <div>
                    <h3 className="text-lg font-bold font-heading text-text-main leading-tight mb-2 group-hover:text-primary transition-colors">
                        {item.name}
                    </h3>
                    {item.description && (
                        <p className="text-sm text-text-muted line-clamp-2 leading-relaxed opacity-90">
                            {item.description}
                        </p>
                    )}
                </div>

                <div className="mt-3 flex items-center justify-between">
                    <span className="font-bold text-text-main text-lg">
                        ${(item.price / 100).toFixed(2)}
                    </span>

                    {/* Mobile: Visible 'Add' Button */}
                    <button className="md:hidden bg-app hover:bg-primary hover:text-primary-fg text-primary p-2 rounded-full transition-colors active:scale-90">
                        <Plus size={18} strokeWidth={3} />
                    </button>
                </div>
            </div>

            {/* Image Section (Right) */}
            <div className="relative w-28 h-28 md:w-36 md:h-36 shrink-0 z-10 overflow-hidden rounded-xl bg-app shadow-sm border border-border/50">
                {item.image_url ? (
                    <img
                        src={item.image_url}
                        alt={item.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-text-muted/50 bg-gray-50 p-2 text-center text-xs">
                        <span className="font-medium">No Image</span>
                    </div>
                )}

                {/* Desktop: Floating 'Add' Button (Appears on Hover) */}
                <button
                    className="
                        hidden md:flex absolute bottom-2 right-2 
                        bg-white text-primary p-2.5 rounded-full shadow-lg 
                        opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
                        transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-fg
                    "
                >
                    <Plus size={20} strokeWidth={3} />
                </button>
            </div>
        </div>
    );
};