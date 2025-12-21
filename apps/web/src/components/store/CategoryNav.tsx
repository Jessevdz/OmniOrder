import React from 'react';

interface Category {
    id: string;
    name: string;
}

interface CategoryNavProps {
    categories: Category[];
    activeCategory?: string;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({ categories, activeCategory }) => {
    const scrollToCategory = (id: string) => {
        const element = document.getElementById(`cat-${id}`);
        if (element) {
            // Offset for the sticky header height
            const y = element.getBoundingClientRect().top + window.scrollY - 140;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="sticky top-0 z-30 bg-surface border-b border-border shadow-sm">
            <nav className="max-w-screen-lg mx-auto flex overflow-x-auto whitespace-nowrap hide-scrollbar px-4 py-3 gap-2">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => scrollToCategory(cat.id)}
                        className={`
                            px-4 py-2 rounded-full text-sm font-medium transition-colors
                            ${activeCategory === cat.id
                                ? 'bg-primary text-primary-fg shadow-md'
                                : 'bg-app text-text-muted hover:bg-gray-200'}
                        `}
                    >
                        {cat.name}
                    </button>
                ))}
            </nav>
        </div>
    );
};