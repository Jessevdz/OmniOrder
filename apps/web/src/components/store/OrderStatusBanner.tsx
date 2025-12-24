import { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext'; // <--- Import Auth
import { Loader2, CheckCircle2, ChefHat, X, ListStart } from 'lucide-react';

interface OrderStatus {
    id: string;
    ticket_number: number;
    status: 'PENDING' | 'QUEUED' | 'PREPARING' | 'READY' | 'COMPLETED';
}

// Add className prop for visual overrides
export const OrderStatusBanner = ({ className = "" }: { className?: string }) => {
    const { activeOrderId, setActiveOrderId } = useCart();
    const { token } = useAuth(); // <--- Get Token
    const [order, setOrder] = useState<OrderStatus | null>(null);
    const [isMinimized, setIsMinimized] = useState(false);

    useEffect(() => {
        if (!activeOrderId) return;

        let pollingInterval: number;

        const fetchStatus = async () => {
            try {
                // <--- Inject Token into headers to reach correct Schema
                const headers: HeadersInit = {};
                if (token) {
                    headers['Authorization'] = `Bearer ${token}`;
                }

                const res = await fetch(`/api/v1/store/orders/${activeOrderId}`, { headers });

                if (res.ok) {
                    const data = await res.json();
                    setOrder(data);

                    if (data.status === 'COMPLETED') {
                        clearInterval(pollingInterval);
                    }
                } else if (res.status === 404) {
                    setActiveOrderId(null);
                }
            } catch (err) {
                console.error("Polling error", err);
            }
        };

        fetchStatus();
        pollingInterval = setInterval(fetchStatus, 5000);

        return () => clearInterval(pollingInterval);
    }, [activeOrderId, setActiveOrderId, token]); // <--- Add token dependency

    if (!activeOrderId || !order) return null;

    // ... (rest of the switch/case logic remains exactly the same) ...
    const getStatusConfig = (status: string) => {
        switch (status) {
            case 'PENDING':
                return { label: 'Order Sent', desc: 'Waiting for kitchen confirmation...', icon: <Loader2 className="animate-spin" />, bg: 'bg-blue-600', progress: 'w-1/12' };
            case 'QUEUED':
                return { label: 'In Queue', desc: 'Your order is confirmed.', icon: <ListStart />, bg: 'bg-indigo-600', progress: 'w-1/3' };
            case 'PREPARING':
                return { label: 'Preparing', desc: 'Chef is working on your food.', icon: <ChefHat className="animate-pulse" />, bg: 'bg-orange-500', progress: 'w-2/3' };
            case 'READY':
                return { label: 'Ready for Pickup!', desc: `Please pick up order #${order.ticket_number}`, icon: <CheckCircle2 />, bg: 'bg-green-600', progress: 'w-full' };
            case 'COMPLETED':
                return { label: 'Completed', desc: 'Thank you for dining with us!', icon: <CheckCircle2 />, bg: 'bg-gray-600', progress: 'w-full' };
            default:
                return { label: 'Processing', desc: 'Update pending...', icon: <Loader2 />, bg: 'bg-gray-600', progress: 'w-full' };
        }
    };

    const config = getStatusConfig(order.status);

    // Apply custom className or default fixed positioning
    const containerClasses = className || "fixed top-0 left-0 w-full z-50 animate-in slide-in-from-top duration-300";
    const minimizedClasses = className
        ? `absolute top-4 right-4 z-50` // If embedded, use absolute
        : `fixed top-4 right-4 z-50`;    // If standard, use fixed

    if (isMinimized) {
        return (
            <button
                onClick={() => setIsMinimized(false)}
                className={`${minimizedClasses} ${config.bg} text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm flex items-center gap-2 animate-in slide-in-from-top-2`}
            >
                {config.icon}
                <span>#{order.ticket_number}</span>
            </button>
        );
    }

    return (
        <div className={containerClasses}>
            <div className={`${config.bg} text-white shadow-xl p-4 md:px-8`}>
                <div className="max-w-screen-xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                            {config.icon}
                        </div>
                        <div>
                            <h3 className="font-bold text-lg leading-none">
                                Ticket #{order.ticket_number}: {config.label}
                            </h3>
                            <p className="text-white/80 text-sm mt-1">{config.desc}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsMinimized(true)}
                            className="text-sm font-medium hover:underline opacity-80 hidden md:block"
                        >
                            Minimize
                        </button>
                        <button
                            onClick={() => setActiveOrderId(null)}
                            className="bg-black/20 hover:bg-black/40 p-1 rounded-full transition-colors"
                            title="Dismiss"
                        >
                            <X size={18} />
                        </button>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-black/20">
                    <div className={`h-full bg-white/50 transition-all duration-1000 ${config.progress}`} />
                </div>
            </div>
        </div>
    );
};