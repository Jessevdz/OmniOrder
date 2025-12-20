import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { Plus } from "lucide-react";

interface MenuItem {
    id: string;
    name: string;
    description?: string;
    price: number;
    image_url?: string;
    is_available: boolean;
}

interface Category {
    id: string;
    name: string;
    items: MenuItem[];
}

export function MenuGrid() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();

    useEffect(() => {
        fetch('/api/v1/store/menu')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) return (
        <div className="p-12 text-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="text-gray-400">Loading Menu...</p>
        </div>
    );

    if (categories.length === 0) return (
        <div className="p-12 text-center bg-white rounded-lg border border-dashed border-gray-300">
            <p className="text-gray-500">Menu is currently empty.</p>
        </div>
    );

    return (
        <div className="pb-20">
            {categories.map((cat) => {
                if (cat.items.length === 0) return null;

                return (
                    <div key={cat.id} id={`cat-${cat.id}`} className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">{cat.name}</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {cat.items.map((item) => (
                                <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex">
                                    <div className="flex-1 p-4 flex flex-col justify-between">
                                        <div>
                                            <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
                                            {item.description && (
                                                <p className="text-gray-500 text-sm mt-1 line-clamp-2">{item.description}</p>
                                            )}
                                        </div>
                                        <div className="mt-4 flex items-center justify-between">
                                            <span className="font-semibold text-gray-800">
                                                ${(item.price / 100).toFixed(2)}
                                            </span>
                                            <button
                                                onClick={() => addToCart(item)}
                                                className="bg-gray-100 text-gray-800 p-2 rounded-full hover:bg-primary hover:text-primary-fg transition-colors"
                                            >
                                                <Plus size={20} />
                                            </button>
                                        </div>
                                    </div>
                                    {item.image_url && (
                                        <div
                                            className="w-32 bg-cover bg-center"
                                            style={{ backgroundImage: `url(${item.image_url})` }}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}