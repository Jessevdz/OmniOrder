import { useEffect, useState, useRef } from "react";
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
    const [activeCategory, setActiveCategory] = useState<string>('');
    const { addToCart } = useCart();

    // We use a ref to prevent observer setup on every render
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        fetch('/api/v1/store/menu')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
                // Set initial active category
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

    // --- SKELETON LOADER ---
    if (loading) return (
        <div className="min-h-screen bg-app animate-pulse">
            <div className="h-[45vh] min-h-[350px] w-full bg-gray-300" />
            <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200">
                <div className="max-w-screen-lg mx-auto px-4 py-4 flex gap-3 overflow-hidden">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-9 w-24 bg-gray-300 rounded-full shrink-0" />
                    ))}
                </div>
            </div>
            <div className="max-w-screen-lg mx-auto px-4 py-8 space-y-12">
                {[1, 2].map((section) => (
                    <div key={section} className="space-y-6">
                        <div className="h-8 w-48 bg-gray-300 rounded" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="flex gap-4 p-4 border border-gray-200 rounded-xl bg-white h-40">
                                    <div className="flex-1 space-y-3 py-1">
                                        <div className="h-6 w-3/4 bg-gray-300 rounded" />
                                        <div className="space-y-2">
                                            <div className="h-4 w-full bg-gray-200 rounded" />
                                            <div className="h-4 w-5/6 bg-gray-200 rounded" />
                                        </div>
                                    </div>
                                    <div className="w-28 h-28 md:w-36 md:h-36 bg-gray-300 rounded-xl shrink-0" />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <>
            <HeroSection name={config.name} />

            {/* Pass activeCategory to trigger the visual highlight */}
            <CategoryNav categories={categories} activeCategory={activeCategory} />

            <div className="max-w-screen-lg mx-auto px-4 py-8">
                {categories.map((cat) => {
                    if (cat.items.length === 0) return null;

                    return (
                        <div key={cat.id} id={`cat-${cat.id}`} className="mb-12 scroll-mt-40">
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