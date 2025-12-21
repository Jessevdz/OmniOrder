import React, { useState } from 'react';
import { X, Minus, Plus } from 'lucide-react';
import { BrandButton } from '../common/BrandButton';

interface ItemDetailModalProps {
    item: any;
    isOpen: boolean;
    onClose: () => void;
    onAddToCart: (item: any, qty: number, notes: string) => void;
    preset?: string;
}

export const ItemDetailModal: React.FC<ItemDetailModalProps> = ({
    item,
    isOpen,
    onClose,
    onAddToCart,
    preset = 'mono-luxe'
}) => {
    const [qty, setQty] = useState(1);
    const [notes, setNotes] = useState('');

    if (!isOpen || !item) return null;

    const handleAdd = () => {
        onAddToCart(item, qty, notes);
        onClose();
        setQty(1);
        setNotes('');
    };

    // --- THEME STYLES ---

    // 1. BACKDROP STYLES
    const backdropStyles = {
        'mono-luxe': 'bg-black/80 backdrop-blur-sm', // Dark & Cinematic
        'fresh-market': 'bg-green-900/20 backdrop-blur-md', // Organic Blur
        'tech-ocean': 'bg-[#0F172A]/70 backdrop-blur-[var(--glass-blur)]' // Deep Tech
    }[preset] || 'bg-black/50';

    // 2. MODAL CONTAINER STYLES
    const modalStyles = {
        'mono-luxe': 'rounded-none border border-white/10 max-w-2xl',
        'fresh-market': 'rounded-[32px] border-none shadow-2xl max-w-lg',
        'tech-ocean': 'rounded-xl border border-primary/30 shadow-[0_0_40px_rgba(59,130,246,0.2)] max-w-xl'
    }[preset] || 'rounded-lg';

    // 3. IMAGE STYLES
    const imageStyles = {
        'mono-luxe': 'aspect-video w-full object-cover',
        'fresh-market': 'aspect-square w-full object-cover rounded-[24px] m-4 w-[calc(100%-2rem)] shadow-md',
        'tech-ocean': 'h-48 w-full object-cover opacity-80'
    }[preset] || 'h-64 w-full object-cover';

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${backdropStyles} transition-all duration-300 animate-in fade-in`}>
            {/* Click outside to close */}
            <div className="absolute inset-0" onClick={onClose} />

            <div
                className={`
                    relative w-full bg-surface overflow-hidden flex flex-col max-h-[90vh] 
                    ${modalStyles} 
                    animate-in zoom-in-95 slide-in-from-bottom-4 duration-300
                `}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-md transition-all"
                >
                    <X size={20} />
                </button>

                {/* Hero Image */}
                <div className="shrink-0 relative bg-gray-100">
                    {item.image_url ? (
                        <img src={item.image_url} alt={item.name} className={imageStyles} />
                    ) : (
                        <div className="h-48 w-full flex items-center justify-center text-text-muted">No Image</div>
                    )}
                    {/* Tech Ocean Overlay Gradient */}
                    {preset === 'tech-ocean' && (
                        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
                    )}
                </div>

                {/* Content Scroll Area */}
                <div className="flex-1 overflow-y-auto p-6 md:p-8">
                    <div className="mb-6">
                        <div className="flex justify-between items-start gap-4">
                            <h2 className="text-3xl font-bold font-heading text-text-main case-brand leading-none">
                                {item.name}
                            </h2>
                            <span className="text-xl font-bold text-primary shrink-0">
                                ${(item.price / 100).toFixed(2)}
                            </span>
                        </div>
                        <p className="text-text-muted mt-3 leading-relaxed">
                            {item.description || "A delicious choice from our menu."}
                        </p>
                    </div>

                    {/* Special Instructions Input */}
                    <div className="mb-6">
                        <label className="block text-sm font-bold text-text-main mb-2 uppercase tracking-wide">
                            Special Instructions
                        </label>
                        <textarea
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            placeholder="Allergies, extra sauce, no onions..."
                            className="w-full bg-[var(--color-bg-app)] border-border border rounded-[var(--radius-md)] p-3 text-text-main placeholder:text-text-muted/50 focus:ring-2 focus:ring-primary/50 outline-none resize-none h-24"
                        />
                    </div>
                </div>

                {/* Sticky Footer Action */}
                <div className="p-6 border-t border-border bg-surface/50 backdrop-blur-sm">
                    <div className="flex items-center gap-4">
                        {/* Quantity Stepper */}
                        <div className="flex items-center gap-3 bg-[var(--color-bg-app)] p-1 rounded-[var(--radius-lg)] border border-border">
                            <button
                                onClick={() => setQty(Math.max(1, qty - 1))}
                                className="p-3 hover:bg-white hover:shadow-sm rounded-[var(--radius-lg)] text-text-main transition-all disabled:opacity-50"
                                disabled={qty <= 1}
                            >
                                <Minus size={18} />
                            </button>
                            <span className="font-bold text-lg w-6 text-center text-text-main">{qty}</span>
                            <button
                                onClick={() => setQty(qty + 1)}
                                className="p-3 hover:bg-white hover:shadow-sm rounded-[var(--radius-lg)] text-text-main transition-all"
                            >
                                <Plus size={18} />
                            </button>
                        </div>

                        {/* Add Button */}
                        <BrandButton
                            fullWidth
                            size="lg"
                            onClick={handleAdd}
                        >
                            Add to Order - ${((item.price * qty) / 100).toFixed(2)}
                        </BrandButton>
                    </div>
                </div>
            </div>
        </div>
    );
};