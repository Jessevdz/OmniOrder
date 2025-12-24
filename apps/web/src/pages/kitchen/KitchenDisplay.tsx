import { useEffect, useState, useRef } from 'react';
import { useTenantConfig } from '../../hooks/useTenantConfig';
import { Wifi, WifiOff, ChefHat, Bell, Loader2 } from 'lucide-react';
import { KitchenTicket } from '../../components/kds/KitchenTicket';

// --- Types ---
interface OrderItem {
    id: string;
    name: string;
    qty: number;
}

interface Order {
    id: string;
    ticket_number: number;
    customer_name: string;
    table_number?: string;
    total_amount: number;
    items: OrderItem[];
    status: string; // PENDING | QUEUED | PREPARING | READY
    created_at: string;
}

// Simple Base64 "Ding" Sound
const ALERT_SOUND = "data:audio/mp3;base64,//NExAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//NExAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";

// Lane Configuration
const LANES = [
    { id: 'PENDING', label: 'Bestellingen', color: 'border-blue-500/50' },
    { id: 'QUEUED', label: 'To Do', color: 'border-yellow-500/50' },
    { id: 'PREPARING', label: 'Koken', color: 'border-orange-500/50' },
    { id: 'READY', label: 'Klaar / Ophalen', color: 'border-green-500/50' },
];

export function KitchenDisplay() {
    const { config } = useTenantConfig();
    const [orders, setOrders] = useState<Order[]>([]);
    const [isConnected, setIsConnected] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [loading, setLoading] = useState(true);

    // Refs
    const ws = useRef<WebSocket | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // --- 1. Audio & WakeLock Setup ---
    useEffect(() => {
        audioRef.current = new Audio(ALERT_SOUND);
    }, []);

    const enableSystem = async () => {
        setIsActive(true);
        // 1. Unlock AudioContext
        audioRef.current?.play().catch(() => { });
        // 2. Request Wake Lock
        if ('wakeLock' in navigator) {
            try {
                // @ts-ignore 
                await navigator.wakeLock.request('screen');
                console.log("Wake Lock Active");
            } catch (err) {
                console.error("Wake Lock failed:", err);
            }
        }
    };

    // --- 2. Initial Data Fetch (Persistence) ---
    useEffect(() => {
        if (!config || !isActive) return;

        fetch('/api/v1/store/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                setLoading(false);
            })
            .catch(err => console.error("Failed to fetch KDS orders", err));
    }, [config, isActive]);

    // --- 3. WebSocket Connection & Sync ---
    useEffect(() => {
        if (!config || !isActive) return;

        const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
        const wsUrl = `${protocol}://${window.location.host}/api/v1/ws/kitchen`;
        let isMounted = true;
        let reconnectTimeout: ReturnType<typeof setTimeout>;

        const connect = () => {
            if (!isMounted) return;
            ws.current = new WebSocket(wsUrl);

            ws.current.onopen = () => {
                if (isMounted) setIsConnected(true);
            };

            ws.current.onmessage = (event) => {
                if (!isMounted) return;
                const data = JSON.parse(event.data);

                // Handle New Orders
                if (data.event === 'new_order') {
                    setOrders(prev => {
                        if (prev.some(o => o.id === data.order.id)) return prev;
                        return [...prev, data.order];
                    });
                    audioRef.current?.play().catch(e => console.error("Audio failed", e));
                }

                // Handle Status Updates (Sync from other screens)
                if (data.event === 'order_update') {
                    const { id, status } = data.order;
                    setOrders(prev => {
                        if (status === 'COMPLETED') {
                            return prev.filter(o => o.id !== id);
                        }
                        return prev.map(o => o.id === id ? { ...o, status } : o);
                    });
                }
            };

            ws.current.onclose = () => {
                if (isMounted) {
                    setIsConnected(false);
                    reconnectTimeout = setTimeout(connect, 3000);
                }
            };
        };

        connect();

        return () => {
            isMounted = false;
            clearTimeout(reconnectTimeout);
            ws.current?.close();
        };
    }, [config, isActive]);

    // --- 4. Logic ---
    const handleStatusChange = async (orderId: string, newStatus: string) => {
        // Optimistic UI Update
        setOrders(prev => {
            if (newStatus === 'COMPLETED') {
                return prev.filter(o => o.id !== orderId);
            }
            return prev.map(o => o.id === orderId ? { ...o, status: newStatus } : o);
        });

        // API Call to Persist
        try {
            await fetch(`/api/v1/store/orders/${orderId}/status`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus })
            });
        } catch (err) {
            console.error("Failed to update order status", err);
        }
    };

    // --- 5. Render ---
    if (!config) return <div className="bg-neutral-950 h-screen text-white flex items-center justify-center">Loading KDS...</div>;

    if (!isActive) {
        return (
            <div className="bg-neutral-950 h-screen text-white flex flex-col items-center justify-center gap-8">
                <ChefHat size={80} className="text-blue-500" />
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-2">Keukendisplay</h1>
                </div>
                <button
                    onClick={enableSystem}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-12 rounded-full text-2xl transition-all shadow-[0_0_20px_rgba(22,163,74,0.5)]"
                >
                    START SHIFT
                </button>
            </div>
        );
    }

    return (
        <div className="h-screen bg-[#121212] text-gray-100 font-sans flex flex-col overflow-hidden">
            {/* Top Bar */}
            <header className="bg-neutral-900 border-b border-gray-800 p-4 flex justify-between items-center h-16 shadow-md shrink-0">
                <div className="flex items-center gap-4">
                    <h1 className="text-xl font-bold tracking-wider text-gray-200">
                        KEUKEN
                    </h1>
                    <span className="bg-gray-800 text-gray-400 px-3 py-1 rounded text-sm font-mono border border-gray-700">
                        {config.name}
                    </span>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <span className="text-gray-400 text-sm uppercase tracking-widest font-bold">Bestellingen:</span>
                        <span className="text-2xl font-black text-white">{orders.length}</span>
                    </div>
                    <div className="h-6 w-px bg-gray-700"></div>
                    <div className="flex items-center gap-2">
                        {isConnected ? (
                            <Wifi size={20} className="text-green-500" />
                        ) : (
                            <WifiOff size={20} className="text-red-500 animate-pulse" />
                        )}
                    </div>
                </div>
            </header>

            {/* Kanban Board */}
            <main className="flex-1 p-4 overflow-hidden">
                {loading ? (
                    <div className="h-full flex items-center justify-center">
                        <Loader2 className="animate-spin text-gray-600" size={48} />
                    </div>
                ) : (
                    <div className="grid grid-cols-4 gap-4 h-full">
                        {LANES.map(lane => {
                            const laneOrders = orders.filter(o => o.status === lane.id);

                            return (
                                <div key={lane.id} className="flex flex-col h-full bg-neutral-900/50 rounded-lg border border-gray-800">
                                    {/* Lane Header */}
                                    <div className={`p-3 border-b-2 ${lane.color} bg-neutral-900 flex justify-between items-center sticky top-0`}>
                                        <h2 className="font-bold uppercase tracking-wider text-sm text-gray-300">{lane.label}</h2>
                                        <span className="bg-gray-800 text-gray-400 text-xs px-2 py-0.5 rounded-full font-mono">
                                            {laneOrders.length}
                                        </span>
                                    </div>

                                    {/* Lane Content */}
                                    <div className="flex-1 overflow-y-auto p-2 space-y-3">
                                        {laneOrders.length === 0 && (
                                            <div className="text-center text-gray-600 italic text-sm mt-10">Empty</div>
                                        )}
                                        {laneOrders.map(order => (
                                            <KitchenTicket
                                                key={order.id}
                                                order={order}
                                                onStatusChange={handleStatusChange}
                                            />
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </main>
        </div>
    );
}