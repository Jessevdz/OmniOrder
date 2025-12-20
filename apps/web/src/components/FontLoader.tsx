import { useEffect } from 'react';

export function FontLoader({ fontFamily }: { fontFamily: string }) {
    useEffect(() => {
        if (!fontFamily || fontFamily === 'Inter') return;

        const link = document.createElement('link');
        link.href = `https://fonts.googleapis.com/css2?family=${fontFamily.replace(/\s+/g, '+')}:wght@400;500;700&display=swap`;
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, [fontFamily]);

    return null;
}