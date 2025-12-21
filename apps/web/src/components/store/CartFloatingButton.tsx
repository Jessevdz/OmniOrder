import { useCart } from '../../context/CartContext';
import { ShoppingBag } from 'lucide-react';

export const CartFloatingButton = () => {
    const { cartCount, cartTotal, toggleDrawer } = useCart();

    if (cartCount === 0) return null;

    return (
        <div className="fixed bottom-0 w-full md:w-auto md:bottom-6 md:right-6 z-40 p-4 md:p-0 bg-gradient-to-t from-white via-white to-transparent md:bg-none">
            <button
                onClick={() => toggleDrawer(true)}
                className="
                    w-full md:w-auto
                    bg-primary text-primary-fg 
                    px-6 py-4 
                    rounded-lg md:rounded-full 
                    shadow-depth 
                    flex items-center justify-between md:justify-center md:gap-4
                    hover:brightness-110 transition-all active:scale-95
                "
            >
                <div className="flex items-center gap-2">
                    <div className="bg-white/20 p-1.5 rounded-full">
                        <ShoppingBag size={20} />
                    </div>
                    <span className="font-bold">{cartCount} items</span>
                </div>

                <span className="font-bold text-lg">
                    ${(cartTotal / 100).toFixed(2)}
                </span>
            </button>
        </div>
    );
};