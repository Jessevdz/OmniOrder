import { useEffect, useState, useRef } from "react";
import { useOutletContext } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { HeroSection } from "../../components/store/HeroSection";
import { CategoryNav } from "../../components/store/CategoryNav";
// 1. Import new component
import { MenuGridItem } from "../../components/store/MenuGridItem";

interface MenuItem {
    id: string;
    name: string;
    description?: string;
    price: number;
    image_url?: string;
    is_available: boolean;
    category_id: string; // Ensure this exists in type
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
    const [activeCategory, setActiveCategory] = useState<string>('');
    const { addToCart } = useCart();
    const observerRef = useRef<IntersectionObserver | null>(null);

    // Get preset for logic
    const presetName = config.theme_config?.preset || 'mono-luxe';

    useEffect(() => {
        fetch('/api/v1/store/menu')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
                if (data.length > 0) setActiveCategory(data[0].id);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    // --- INTERSECTION OBSERVER LOGIC ---
    useEffect(() => {
        if (loading || categories.length === 0) return;

        // Cleanup previous observer
        if (observerRef.current) observerRef.current.disconnect();

        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // The ID format is "cat-UUID", we strip "cat-" to get the raw ID
                        const id = entry.target.id.replace('cat-', '');
                        setActiveCategory(id);
                    }
                });
            },
            {
                // rootMargin defines the "active area" of the viewport.
                // -100px from top: Accounts for the sticky nav height so we don't trigger too early.
                // -60% from bottom: We only care if the section is in the top 40% of the screen.
                rootMargin: '-100px 0px -60% 0px',
                threshold: 0
            }
        );

        // Observe all category sections
        categories.forEach((cat) => {
            const el = document.getElementById(`cat-${cat.id}`);
            if (el) observerRef.current?.observe(el);
        });

        return () => observerRef.current?.disconnect();
    }, [loading, categories]);

    // --- RENDER ---
    return (
        <>
            <HeroSection name={config.name} preset={presetName} />
            <CategoryNav categories={categories} activeCategory={activeCategory} />

            <div className="max-w-screen-xl mx-auto px-4 py-8 md:px-8">
                {categories.map((cat) => {
                    if (cat.items.length === 0) return null;

                    return (
                        <div key={cat.id} id={`cat-${cat.id}`} className="mb-16 scroll-mt-32">
                            <h2 className="text-3xl font-bold font-heading mb-6 text-text-main case-brand flex items-center gap-4">
                                {cat.name}
                                <span className="h-px flex-1 bg-border/60"></span>
                            </h2>

                            {/* 2. Changed from list to responsive grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {cat.items.map((item) => (
                                    <MenuGridItem
                                        key={item.id}
                                        item={item}
                                        onAdd={addToCart}
                                        preset={presetName}
                                    />
                                ))}
                            </div>
                        </div>
                    );
                })}

                {categories.length === 0 && !loading && (
                    <div className="text-center py-20 text-text-muted">
                        No menu items found.
                    </div>
                )}
            </div>
        </>
    );
}