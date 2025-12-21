import React from 'react';

interface BrandCardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    hoverEffect?: boolean;
    interactive?: boolean;
}

export const BrandCard: React.FC<BrandCardProps> = ({
    children,
    className = '',
    onClick,
    hoverEffect = false,
    interactive = false
}) => {
    return (
        <div
            onClick={onClick}
            className={`
                relative overflow-hidden
                bg-surface 
                border border-border 
                shadow-depth 
                rounded-[var(--radius-md)]
                ${interactive ? 'cursor-pointer' : ''}
                ${hoverEffect ? 'group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/50' : ''}
                ${className}
            `}
        >
            {/* Optional Glass Texture Layer (controlled by --glass-blur) */}
            <div className="absolute inset-0 pointer-events-none backdrop-blur-[var(--glass-blur)] z-0 opacity-0" />

            {/* Content Layer */}
            <div className="relative z-10 h-full">
                {children}
            </div>
        </div>
    );
};