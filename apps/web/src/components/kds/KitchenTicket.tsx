import React, { useState, useEffect } from 'react';
import { Clock, Check, Users } from 'lucide-react';

interface OrderItem {
    id: string;
    name: string;
    qty: number;
}

interface Order {
    id: string;
    ticket_number: number; // We use this now
    customer_name: string;
    table_number?: string; // We use this now
    status: string;
    items: OrderItem[];
    created_at: string;
}

interface KitchenTicketProps {
    order: Order;
    onBump: () => void;
}

export const KitchenTicket: React.FC<KitchenTicketProps> = ({ order, onBump }) => {
    const [elapsed, setElapsed] = useState(0);

    useEffect(() => {
        const startTime = new Date(order.created_at).getTime();
        const updateTimer = () => {
            const now = new Date().getTime();
            const diffInSeconds = Math.floor((now - startTime) / 1000);
            setElapsed(diffInSeconds > 0 ? diffInSeconds : 0);
        };
        updateTimer();
        const interval = setInterval(updateTimer, 1000);
        return () => clearInterval(interval);
    }, [order.created_at]);

    const getHeaderColor = () => {
        if (elapsed > 1200) return 'bg-red-600';
        if (elapsed > 600) return 'bg-yellow-600 text-black';
        return 'bg-green-600';
    };

    const formatTime = (totalSeconds: number) => {
        const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
        const s = (totalSeconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };

    return (
        <div className="flex flex-col bg-gray-800 border-2 border-gray-700 shadow-xl h-full animate-in fade-in zoom-in-95 duration-200">
            {/* Header Strip with Ticket Number */}
            <div className={`p-3 flex justify-between items-center ${getHeaderColor()} font-mono`}>
                <span className="text-3xl font-black">
                    #{order.ticket_number.toString().padStart(3, '0')}
                </span>
                <div className="flex items-center gap-2 font-bold text-lg">
                    <Clock size={20} strokeWidth={2.5} />
                    <span>{formatTime(elapsed)}</span>
                </div>
            </div>

            {/* Meta Data: Name & Table */}
            <div className="bg-gray-900 px-4 py-2 border-b border-gray-700 flex flex-col text-sm font-mono gap-1">
                <div className="flex justify-between items-center">
                    <span className="truncate font-bold text-lg text-white">{order.customer_name}</span>
                </div>
                {order.table_number && (
                    <div className="flex items-center gap-2 text-blue-400">
                        <Users size={14} />
                        <span className="font-bold">Table {order.table_number}</span>
                    </div>
                )}
            </div>

            {/* Items List */}
            <div className="p-4 flex-1 space-y-3 overflow-y-auto min-h-[120px]">
                {order.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-start text-gray-100 border-b border-gray-700/50 pb-2 last:border-0">
                        <span className="text-lg font-bold leading-tight">{item.name}</span>
                        <span className="text-xl font-black text-gray-300 ml-4">x{item.qty}</span>
                    </div>
                ))}
            </div>

            <button
                onClick={onBump}
                className="w-full py-4 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-2 border-t border-gray-600"
            >
                <Check size={24} strokeWidth={3} />
                Bump Ticket
            </button>
        </div>
    );
};