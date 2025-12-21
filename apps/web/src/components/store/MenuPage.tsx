import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { HeroSection } from "../../components/store/HeroSection";
import { CategoryNav } from "../../components/store/CategoryNav";
import { MenuItemRow } from "../../components/store/MenuItemRow";

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

export function MenuPage() {
    const { config } = useOutletContext<any>();
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

    if (loading) return <div className="p-12 text-center text-text-muted">Loading Menu...</div>;

    return (
        <>
            {/* 1. Hero Section */}
            <HeroSection name={config.name} />

            {/* 2. Sticky Navigation */}
            <CategoryNav categories={categories} />

            {/* 3. Menu Content */}
            <div className="max-w-screen-lg mx-auto px-4 py-8">
                {categories.map((cat) => {
                    if (cat.items.length === 0) return null;

                    return (
                        <div key={cat.id} id={`cat-${cat.id}`} className="mb-10 scroll-mt-36">
                            <h2 className="text-2xl font-bold font-heading mb-4 text-text-main pb-2 border-b border-border">
                                {cat.name}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {cat.items.map((item) => (
                                    <MenuItemRow
                                        key={item.id}
                                        item={item}
                                        onAdd={addToCart}
                                    />
                                ))}
                            </div>
                        </div>
                    );
                })}

                {categories.length === 0 && (
                    <div className="text-center py-20 text-text-muted">
                        No menu items found.
                    </div>
                )}
            </div>
        </>
    );
}