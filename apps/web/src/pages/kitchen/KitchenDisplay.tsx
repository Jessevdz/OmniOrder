import { useEffect, useState, useRef } from 'react';
import { useTenantConfig } from '../../hooks/useTenantConfig';
import { Clock, Wifi, WifiOff, CheckCircle, ChefHat, Bell } from 'lucide-react';

// --- Types ---
interface OrderItem {
    id: string;
    name: string;
    qty: number;
}

interface Order {
    id: string;
    customer_name: string;
    total_amount: number;
    items: OrderItem[];
    status: 'PENDING' | 'PREPARING' | 'READY';
    created_at: string;
}

// Simple Base64 "Ding" Sound for immediate testing
const ALERT_SOUND = "data:audio/mp3;base64,//NExAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";

export function KitchenDisplay() {
    const { config } = useTenantConfig();
    const [orders, setOrders] = useState<Order[]>([]);
    const [isConnected, setIsConnected] = useState(false);
    const [isActive, setIsActive] = useState(false); // For user interaction (Audio/WakeLock)

    // Refs
    const ws = useRef<WebSocket | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // --- 1. Audio & WakeLock Setup ---
    useEffect(() => {
        audioRef.current = new Audio(ALERT_SOUND);
    }, []);

    const enableSystem = async () => {
        setIsActive(true);

        // 1. Play silent sound to unlock AudioContext on iOS/Chrome
        audioRef.current?.play().catch(() => { });

        // 2. Request Wake Lock (Keep screen on)
        if ('wakeLock' in navigator) {
            try {
                // @ts-ignore - TS might not know wakeLock depending on version
                await navigator.wakeLock.request('screen');
                console.log("Screen Wake Lock active");
            } catch (err) {
                console.error("Wake Lock failed:", err);
            }
        }
    };

    // --- 2. WebSocket Connection ---
    useEffect(() => {
        if (!config) return;

        const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
        const wsUrl = `${protocol}://${window.location.host}/api/v1/ws/kitchen`;
        let isMounted = true;
        let reconnectTimeout: ReturnType<typeof setTimeout>;

        const connect = () => {
            // If we are unmounted, stop trying to connect
            if (!isMounted) return;

            ws.current = new WebSocket(wsUrl);

            ws.current.onopen = () => {
                if (isMounted) {
                    setIsConnected(true);
                    console.log("KDS Connected");
                }
            };

            ws.current.onmessage = (event) => {
                if (isMounted) {
                    const data = JSON.parse(event.data);
                    if (data.event === 'new_order') {
                        handleNewOrder(data.order);
                    }
                }
            };

            ws.current.onclose = () => {
                if (isMounted) {
                    setIsConnected(false);
                    // Only reconnect if the component is still mounted
                    reconnectTimeout = setTimeout(connect, 3000);
                }
            };
        };

        connect();

        return () => {
            isMounted = false;
            clearTimeout(reconnectTimeout); // Cancel pending reconnects
            ws.current?.close();
        };
    }, [config]);

    // --- 3. Logic ---
    const handleNewOrder = (order: Order) => {
        setOrders(prev => {
            if (prev.some(o => o.id === order.id)) return prev;
            return [...prev, order];
        });

        // Play Sound (Debounced slightly if needed, but safe here)
        audioRef.current?.play().catch(e => console.error("Audio play failed", e));
    };

    const updateStatus = (orderId: string, newStatus: Order['status']) => {
        // Optimistic UI Update
        setOrders(prev => prev.map(o =>
            o.id === orderId ? { ...o, status: newStatus } : o
        ));

        // TODO: In a real app, call API: PUT /api/v1/store/orders/{id}/status
    };

    // --- 4. Render Helpers ---
    const getOrdersByStatus = (status: string) => orders.filter(o => o.status === status);

    const formatTime = (isoString: string) => {
        const date = new Date(isoString);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    // --- 5. Render ---
    if (!config) return <div className="bg-gray-900 h-screen text-white flex items-center justify-center">Loading KDS...</div>;

    // Overlay to force user interaction (required for Audio/WakeLock)
    if (!isActive) {
        return (
            <div className="bg-gray-900 h-screen text-white flex flex-col items-center justify-center gap-6">
                <ChefHat size={64} className="text-primary" />
                <h1 className="text-3xl font-bold">Kitchen Display System</h1>
                <p className="text-gray-400">Tap to enable audio alerts and always-on screen</p>
                <button
                    onClick={enableSystem}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-full text-xl transition-all"
                >
                    Start Kitchen Shift
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 font-mono flex flex-col">
            {/* Header */}
            <header className="bg-gray-800 border-b border-gray-700 p-4 flex justify-between items-center shadow-md z-10">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold text-white tracking-wider">
                        {config.name} <span className="text-primary text-sm bg-gray-700 px-2 py-1 rounded ml-2">KDS</span>
                    </h1>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm">
                        {isConnected ? (
                            <span className="flex items-center gap-2 text-green-400"><Wifi size={18} /> Online</span>
                        ) : (
                            <span className="flex items-center gap-2 text-red-400 animate-pulse"><WifiOff size={18} /> Disconnected</span>
                        )}
                    </div>
                    <div className="text-xl font-bold font-sans">
                        {new Date().toLocaleTimeString()}
                    </div>
                </div>
            </header>

            {/* Kanban Board */}
            <main className="flex-1 p-4 overflow-hidden flex gap-4">

                {/* Column: Pending */}
                <div className="flex-1 flex flex-col bg-gray-800/50 rounded-xl border border-gray-700">
                    <div className="p-4 border-b border-gray-700 bg-red-900/20 rounded-t-xl flex justify-between items-center">
                        <h2 className="text-xl font-bold text-red-400 uppercase tracking-widest">Pending</h2>
                        <span className="bg-gray-700 px-3 py-1 rounded-full text-sm font-bold">{getOrdersByStatus('PENDING').length}</span>
                    </div>
                    <div className="flex-1 p-2 overflow-y-auto space-y-3">
                        {getOrdersByStatus('PENDING').map(order => (
                            <OrderCard
                                key={order.id}
                                order={order}
                                onAction={() => updateStatus(order.id, 'PREPARING')}
                                actionLabel="Start Prep"
                                actionColor="bg-blue-600 hover:bg-blue-500"
                                time={formatTime(order.created_at)}
                            />
                        ))}
                    </div>
                </div>

                {/* Column: Preparing */}
                <div className="flex-1 flex flex-col bg-gray-800/50 rounded-xl border border-gray-700">
                    <div className="p-4 border-b border-gray-700 bg-blue-900/20 rounded-t-xl flex justify-between items-center">
                        <h2 className="text-xl font-bold text-blue-400 uppercase tracking-widest">Preparing</h2>
                        <span className="bg-gray-700 px-3 py-1 rounded-full text-sm font-bold">{getOrdersByStatus('PREPARING').length}</span>
                    </div>
                    <div className="flex-1 p-2 overflow-y-auto space-y-3">
                        {getOrdersByStatus('PREPARING').map(order => (
                            <OrderCard
                                key={order.id}
                                order={order}
                                onAction={() => updateStatus(order.id, 'READY')}
                                actionLabel="Mark Ready"
                                actionColor="bg-green-600 hover:bg-green-500"
                                time={formatTime(order.created_at)}
                            />
                        ))}
                    </div>
                </div>

                {/* Column: Ready */}
                <div className="flex-1 flex flex-col bg-gray-800/50 rounded-xl border border-gray-700">
                    <div className="p-4 border-b border-gray-700 bg-green-900/20 rounded-t-xl flex justify-between items-center">
                        <h2 className="text-xl font-bold text-green-400 uppercase tracking-widest">Ready</h2>
                        <span className="bg-gray-700 px-3 py-1 rounded-full text-sm font-bold">{getOrdersByStatus('READY').length}</span>
                    </div>
                    <div className="flex-1 p-2 overflow-y-auto space-y-3 opacity-60">
                        {getOrdersByStatus('READY').map(order => (
                            <div key={order.id} className="bg-gray-700 p-4 rounded-lg border border-gray-600">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-lg font-bold text-white">#{order.id.slice(0, 4)}</span>
                                    <span className="text-green-400 font-bold flex items-center gap-1"><CheckCircle size={16} /> Done</span>
                                </div>
                                <div className="text-sm text-gray-300">{order.customer_name}</div>
                            </div>
                        ))}
                    </div>
                </div>

            </main>
        </div>
    );
}

// --- Subcomponent: Order Card ---
function OrderCard({ order, onAction, actionLabel, actionColor, time }: any) {
    return (
        <div className="bg-gray-700 rounded-lg p-4 border-l-4 border-l-primary shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="flex justify-between items-start mb-3 border-b border-gray-600 pb-2">
                <div>
                    <h3 className="text-2xl font-bold text-white">#{order.id.slice(0, 4)}</h3>
                    <p className="text-gray-300 font-medium truncate w-32">{order.customer_name}</p>
                </div>
                <div className="flex items-center text-gray-400 text-sm gap-1">
                    <Clock size={14} />
                    <span>{time}</span>
                </div>
            </div>

            <div className="space-y-2 mb-4">
                {order.items.map((item: any, idx: number) => (
                    <div key={idx} className="flex justify-between items-center text-lg">
                        <span className="text-gray-200 font-medium">{item.name}</span>
                        <span className="bg-gray-600 px-2 rounded text-white font-bold">x{item.qty}</span>
                    </div>
                ))}
            </div>

            <button
                onClick={onAction}
                className={`w-full py-3 rounded-lg text-white font-bold uppercase tracking-wide shadow-md transition-colors ${actionColor}`}
            >
                {actionLabel}
            </button>
        </div>
    );
}