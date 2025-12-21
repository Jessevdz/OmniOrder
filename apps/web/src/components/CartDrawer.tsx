import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { BrandButton } from './common/BrandButton';
import { X, ShoppingBag, Trash2, User, Hash } from 'lucide-react';

export function CartDrawer() {
    const {
        items, isDrawerOpen, toggleDrawer, removeFromCart,
        cartTotal, clearCart
    } = useCart();

    // Local state for fulfillment details
    const [customerName, setCustomerName] = useState('');
    const [tableNumber, setTableNumber] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleCheckout = async () => {
        if (items.length === 0) return;
        if (!customerName.trim()) {
            alert("Please enter your name");
            return;
        }

        setIsSubmitting(true);

        const payload = {
            customer_name: customerName,
            table_number: tableNumber || null,
            items: items.map(i => ({
                id: i.id,
                qty: i.qty,
                modifiers: i.modifiers.map(m => ({ optionId: m.optionId }))
            }))
        };

        try {
            const res = await fetch('/api/v1/store/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                const data = await res.json();
                // Show Ticket Number in success message
                alert(`Order #${data.ticket_number} Placed!\nTotal: $${(data.total_amount / 100).toFixed(2)}`);
                clearCart();
                setCustomerName('');
                setTableNumber('');
                toggleDrawer(false);
            } else {
                const err = await res.json();
                alert(`Failed: ${err.detail || "Unknown error"}`);
            }
        } catch (e) {
            console.error(e);
            alert("Network Error");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isDrawerOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 bg-black/50 z-40 transition-opacity"
                onClick={() => toggleDrawer(false)}
            />

            <div className="fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-2xl z-50 flex flex-col transform transition-transform">
                <div className="p-4 bg-primary text-primary-fg flex justify-between items-center shadow-md">
                    <div className="flex items-center gap-2">
                        <ShoppingBag size={20} />
                        <h2 className="font-bold text-lg">Your Order</h2>
                    </div>
                    <button onClick={() => toggleDrawer(false)} className="hover:opacity-80">
                        <X size={24} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {items.length === 0 ? (
                        <div className="text-center text-gray-500 mt-10">
                            <p>Your cart is empty.</p>
                            <button
                                onClick={() => toggleDrawer(false)}
                                className="mt-4 text-primary font-medium hover:underline"
                            >
                                Browse Menu
                            </button>
                        </div>
                    ) : (
                        items.map(item => (
                            <div key={item.cartId} className="flex gap-3 border-b pb-4">
                                {item.image_url && (
                                    <div
                                        className="h-16 w-16 bg-cover bg-center rounded-md bg-gray-100"
                                        style={{ backgroundImage: `url(${item.image_url})` }}
                                    />
                                )}
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-800">{item.name}</h4>
                                    <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                                    {item.modifiers.length > 0 && (
                                        <div className="text-xs text-gray-500 mt-1">
                                            {item.modifiers.map(m => (
                                                <div key={m.optionId}>+ {m.optionName}</div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-col items-end justify-between">
                                    <span className="font-bold">
                                        ${(((item.price + item.modifiers.reduce((a, b) => a + b.price, 0)) * item.qty) / 100).toFixed(2)}
                                    </span>
                                    <button
                                        onClick={() => removeFromCart(item.cartId)}
                                        className="text-red-500 hover:bg-red-50 p-1 rounded"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Fulfillment Details Form */}
                {items.length > 0 && (
                    <div className="p-4 bg-gray-50 border-t space-y-3">
                        <h3 className="font-bold text-gray-700 text-sm uppercase">Guest Details</h3>

                        <div className="relative">
                            <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Your Name (Required)"
                                value={customerName}
                                onChange={(e) => setCustomerName(e.target.value)}
                                className="w-full pl-10 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary outline-none"
                            />
                        </div>

                        <div className="relative">
                            <Hash size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Table Number (Optional)"
                                value={tableNumber}
                                onChange={(e) => setTableNumber(e.target.value)}
                                className="w-full pl-10 p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary outline-none"
                            />
                        </div>
                    </div>
                )}

                {items.length > 0 && (
                    <div className="p-6 bg-white border-t">
                        <div className="flex justify-between text-lg font-bold mb-4">
                            <span>Total</span>
                            <span>${(cartTotal / 100).toFixed(2)}</span>
                        </div>
                        <BrandButton
                            fullWidth
                            size="lg"
                            onClick={handleCheckout}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Placing Order...' : 'Confirm Order'}
                        </BrandButton>
                    </div>
                )}
            </div>
        </>
    );
}