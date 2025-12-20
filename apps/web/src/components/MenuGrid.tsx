import { useEffect, useState } from "react";

interface MenuItem {
    id: string;
    name: string;
    price: number;
    is_available: boolean;
}

export function MenuGrid() {
    const [items, setItems] = useState<MenuItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/v1/store/menu')
            .then(res => res.json())
            .then(data => {
                setItems(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const handleQuickOrder = async (item: MenuItem) => {
        const payload = {
            customer_name: "MVP Guest",
            total_amount: item.price,
            items: [{ id: item.id, qty: 1 }]
        };

        try {
            const res = await fetch('/api/v1/store/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                alert(`SUCCESS: Ordered ${item.name}! Check the database.`);
            } else {
                alert("Error placing order.");
            }
        } catch (e) {
            console.error(e);
            alert("Network error");
        }
    };

    if (loading) return <div className="p-4 text-center">Loading Menu...</div>;
    if (items.length === 0) return <div className="p-4 text-center">No items found.</div>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {items.map((item) => (
                <div key={item.id} className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center border-l-4 border-primary">
                    <div>
                        <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
                        <span className="text-gray-500 text-sm">
                            ${(item.price / 100).toFixed(2)}
                        </span>
                    </div>
                    <button
                        className="bg-primary text-white px-4 py-2 rounded hover:opacity-90 transition-opacity font-medium"
                        onClick={() => handleQuickOrder(item)}
                    >
                        Quick Buy
                    </button>
                </div>
            ))}
        </div>
    );
}