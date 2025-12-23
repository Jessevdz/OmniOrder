import { useState, useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { PersonaSwitcher } from '../components/demo/PersonaSwitcher';
import { useTenantConfig, TenantConfig } from '../hooks/useTenantConfig';
import { Loader2 } from 'lucide-react';

export interface DemoContextType {
    config: TenantConfig | null;
    preset: string;
    updatePreset: (newPreset: string) => Promise<void>;
}

export const DemoLayout = () => {
    // 1. Environment Check
    const isDemoDomain = window.location.hostname.includes('demo') || window.location.hostname.includes('localhost');
    const { config: initialConfig } = useTenantConfig();

    // 2. State
    const [demoToken, setDemoToken] = useState<string | null>(null);
    const [activePreset, setActivePreset] = useState<string>('mono-luxe');

    useEffect(() => {
        if (initialConfig?.preset) {
            setActivePreset(initialConfig.preset);
        }
    }, [initialConfig]);

    // 3. Authenticate (Magic Login)
    useEffect(() => {
        const authenticateDemo = async () => {
            try {
                // Check session storage first
                const existing = sessionStorage.getItem('demo_token');
                if (existing) {
                    setDemoToken(existing);
                    return;
                }

                // Login if no token
                const res = await fetch('/api/v1/sys/demo-login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ code: 'OMNI2025' })
                });

                if (res.ok) {
                    const data = await res.json();
                    setDemoToken(data.access_token);
                    sessionStorage.setItem('demo_token', data.access_token);
                }
            } catch (e) {
                console.error("Demo Auth failed", e);
            }
        };
        authenticateDemo();
    }, []);

    const handlePresetChange = async (newPreset: string) => {
        setActivePreset(newPreset);
        if (!demoToken || !initialConfig) return;

        try {
            await fetch('/api/v1/admin/settings', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${demoToken}`
                },
                body: JSON.stringify({
                    ...initialConfig,
                    preset: newPreset,
                    primary_color: getPresetDefaultColor(newPreset)
                })
            });
        } catch (e) {
            console.warn("Failed to persist theme", e);
        }
    };

    if (!isDemoDomain) return <Navigate to="/" replace />;

    // [CRITICAL FIX] Prevent child routes (MenuBuilder) from loading before token is ready
    if (!demoToken) {
        return (
            <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center text-white gap-4">
                <Loader2 className="animate-spin text-blue-500" size={48} />
                <p className="font-mono text-sm opacity-80">Initializing Demo Environment...</p>
            </div>
        );
    }

    const demoContext: DemoContextType = {
        config: initialConfig ? { ...initialConfig, preset: activePreset } : null,
        preset: activePreset,
        updatePreset: handlePresetChange
    };

    return (
        <div className="min-h-screen bg-neutral-950 font-sans selection:bg-blue-500 selection:text-white">
            <main className="relative h-screen w-screen overflow-hidden">
                <Outlet context={demoContext} />
            </main>

            <PersonaSwitcher
                currentPreset={activePreset}
                onPresetChange={handlePresetChange}
            />
        </div>
    );
};

function getPresetDefaultColor(preset: string): string {
    switch (preset) {
        case 'fresh-market': return '#16A34A';
        case 'tech-ocean': return '#3B82F6';
        default: return '#000000';
    }
}