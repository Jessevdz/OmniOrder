import React from 'react';
import { Plus } from 'lucide-react';

interface MenuItemProps {
    item: any;
    onAdd: (item: any) => void;
}

export const MenuItemRow: React.FC<MenuItemProps> = ({ item, onAdd }) => {
    return (
        <div
            className="flex gap-4 p-4 bg-surface border border-border rounded-md hover:border-primary transition-colors cursor-pointer group"
            onClick={() => onAdd(item)}
        >
            {/* Text Content - 70% width on desktop */}
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-lg font-bold font-heading text-text-main group-hover:text-primary transition-colors">
                        {item.name}
                    </h3>
                    {item.description && (
                        <p className="text-sm text-text-muted mt-1 line-clamp-2">
                            {item.description}
                        </p>
                    )}
                </div>
                <div className="mt-3 font-semibold text-text-main">
                    ${(item.price / 100).toFixed(2)}
                </div>
            </div>

            {/* Image & Action - 30% width */}
            <div className="relative w-28 h-28 shrink-0">
                {item.image_url ? (
                    <img
                        src={item.image_url}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-md bg-app"
                    />
                ) : (
                    <div className="w-full h-full bg-app rounded-md flex items-center justify-center text-text-muted text-xs">
                        No Image
                    </div>
                )}

                {/* Floating Add Button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onAdd(item);
                    }}
                    className="absolute bottom-2 right-2 bg-white text-primary p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0"
                >
                    <Plus size={18} strokeWidth={3} />
                </button>
            </div>
        </div>
    );
};