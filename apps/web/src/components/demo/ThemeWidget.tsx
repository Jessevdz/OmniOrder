import React, { useState } from 'react';
import { Palette, RefreshCw } from 'lucide-react';
import { THEME_PRESETS } from '../../utils/theme';

interface ThemeWidgetProps {
    currentPreset: string;
    onPresetChange: (presetId: string) => void;
}

export const ThemeWidget: React.FC<ThemeWidgetProps> = ({ currentPreset, onPresetChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSelect = async (presetId: string) => {
        setIsLoading(true);
        // Simulate network delay for effect or call API here
        await new Promise(resolve => setTimeout(resolve, 500));
        onPresetChange(presetId);
        setIsLoading(false);
        setIsOpen(false);
    };

    return (
        <div className="absolute top-4 right-4 z-50">
            {isOpen ? (
                <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-4 w-64 animate-in fade-in zoom-in-95 duration-200">
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wider">Switch Brand Vibe</h3>
                        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 text-xs">Close</button>
                    </div>
                    <div className="space-y-2">
                        {Object.keys(THEME_PRESETS).map((key) => {
                            const isActive = currentPreset === key;
                            // @ts-ignore - Accessing preset details strictly for demo
                            const presetName = key.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

                            return (
                                <button
                                    key={key}
                                    onClick={() => handleSelect(key)}
                                    className={`
                                        w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-between
                                        ${isActive ? 'bg-black text-white' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'}
                                    `}
                                >
                                    {presetName}
                                    {isLoading && isActive && <RefreshCw className="animate-spin" size={14} />}
                                </button>
                            );
                        })}
                    </div>
                </div>
            ) : (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-white/90 backdrop-blur text-black p-3 rounded-full shadow-lg border border-gray-200 hover:scale-110 transition-transform group"
                >
                    <Palette size={20} className="group-hover:rotate-12 transition-transform" />
                </button>
            )}
        </div>
    );
};