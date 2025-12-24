import React from 'react';
import { ArrowRight, ChefHat, Store, MonitorPlay } from 'lucide-react';
import { BrandButton } from '../common/BrandButton';

interface WelcomeOverlayProps {
    currentStep: number;
    onStepChange: (step: number) => void;
    onComplete: () => void;
}

export const WelcomeOverlay: React.FC<WelcomeOverlayProps> = ({ currentStep, onStepChange, onComplete }) => {
    // Determine positioning based on step to avoid covering the spotlighted area
    const positionClasses = {
        0: 'items-center justify-center', // Center
        1: 'items-center justify-end pr-20', // Right side (looking at Left)
        2: 'items-center justify-start pl-20', // Left side (looking at Right)
        3: 'items-center justify-center' // Center
    }[currentStep];

    const content = [
        {
            title: "Welkom bij Stelly",
            text: "Dit is een live demonstratie van ons bestelplatform. In deze tour leggen we snel uit wat je mag verwachten.",
            icon: <MonitorPlay size={48} className="text-blue-500" />,
            action: "Start Tour"
        },
        {
            title: "Voor de Klant",
            text: "Links zie de website van je zaak. Deze is volledig aanpasbaar: Het ontwerp, informatie, de menu, enzovoort. Klanten gebruiken dit om bestellingen te plaatsen.",
            icon: <Store size={48} className="text-green-500" />,
            action: "Volgende"
        },
        {
            title: "Voor de Keuken",
            text: "Rechts zie je het bestelscherm voor de keuken. Wanneer je links een bestelling plaatst, komt deze hier onmiddellijk binnen. De keuken organiseert en voltooit de bestellingen hier.",
            icon: <ChefHat size={48} className="text-orange-500" />,
            action: "Volgende"
        },
        {
            title: "Voor jou",
            text: "1. Maak links een bestelling.\n2. Verwerk die bestelling rechts.\n3. Wissel van design met de \'vibe\' knop",
            icon: <ArrowRight size={48} className="text-purple-500" />,
            action: "Naar de Demo"
        }
    ];

    const stepData = content[currentStep];

    return (
        <div className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm transition-all duration-500 flex ${positionClasses}`}>
            <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md animate-in fade-in zoom-in-95 duration-300 mx-4 border border-white/20">
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="bg-gray-50 p-4 rounded-full mb-2">
                        {stepData.icon}
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 font-heading">{stepData.title}</h2>
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">{stepData.text}</p>

                    <div className="pt-4 w-full">
                        <BrandButton
                            fullWidth
                            size="lg"
                            onClick={() => {
                                if (currentStep < 3) {
                                    onStepChange(currentStep + 1);
                                } else {
                                    onComplete();
                                }
                            }}
                        >
                            {stepData.action}
                        </BrandButton>
                    </div>

                    {currentStep >= 0 && (
                        <button
                            onClick={() => onComplete()}
                            className="text-xs text-gray-400 hover:text-gray-600 underline"
                        >
                            Overslaan
                        </button>
                    )}
                </div>

                {/* Progress Dots */}
                <div className="flex justify-center gap-2 mt-6">
                    {[0, 1, 2, 3].map(i => (
                        <div
                            key={i}
                            className={`h-2 w-2 rounded-full transition-all ${i === currentStep ? 'bg-blue-600 w-6' : 'bg-gray-200'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};