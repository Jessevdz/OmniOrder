import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
    id: string;
    name: string;
    price: number;
    qty: number;
    image_url?: string;
}

interface CartContextType {
    items: CartItem[];
    addToCart: (item: Omit<CartItem, 'qty'>) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    cartTotal: number;
    cartCount: number;
    isDrawerOpen: boolean;
    toggleDrawer: (open?: boolean) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Persist cart to local storage (per domain)
    useEffect(() => {
        const saved = localStorage.getItem('omni_cart');
        if (saved) setItems(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem('omni_cart', JSON.stringify(items));
    }, [items]);

    const addToCart = (newItem: Omit<CartItem, 'qty'>) => {
        setItems(prev => {
            const existing = prev.find(i => i.id === newItem.id);
            if (existing) {
                return prev.map(i => i.id === newItem.id ? { ...i, qty: i.qty + 1 } : i);
            }
            return [...prev, { ...newItem, qty: 1 }];
        });
        setIsDrawerOpen(true);
    };

    const removeFromCart = (id: string) => {
        setItems(prev => prev.filter(i => i.id !== id));
    };

    const clearCart = () => setItems([]);

    const cartTotal = items.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const cartCount = items.reduce((sum, item) => sum + item.qty, 0);

    const toggleDrawer = (open?: boolean) => {
        setIsDrawerOpen(prev => open !== undefined ? open : !prev);
    };

    return (
        <CartContext.Provider value={{
            items, addToCart, removeFromCart, clearCart,
            cartTotal, cartCount, isDrawerOpen, toggleDrawer
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within CartProvider');
    return context;
};