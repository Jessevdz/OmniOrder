import { useState, useEffect } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { PersonaSwitcher } from '../components/demo/PersonaSwitcher';
import { useTenantConfig, TenantConfig } from '../hooks/useTenantConfig';

// Define the Context Type for consumers (SplitView, etc)
export interface DemoContextType {
    config: TenantConfig | null;
    preset: string;
    updatePreset: (newPreset: string) => Promise<void>;
}

export const DemoLayout = () => {
    // 1. Environment Check
    const isDemoDomain = window.location.hostname.includes('demo') || window.location.hostname.includes('localhost');
    const { config: initialConfig, loading: configLoading } = useTenantConfig();

    // 2. State
    const [demoToken, setDemoToken] = useState<string | null>(null);
    // Lifted Preset State (Defaults to 'mono-luxe' until config loads)
    const [activePreset, setActivePreset] = useState<string>('mono-luxe');

    // Sync local state with fetched config once loaded
    useEffect(() => {
        if (initialConfig?.preset) {
            setActivePreset(initialConfig.preset);
        }
    }, [initialConfig]);

    // 3. Authenticate (Magic Login)
    useEffect(() => {
        const authenticateDemo = async () => {
            try {
                const existing = sessionStorage.getItem('demo_token');
                if (existing) {
                    setDemoToken(existing);
                    return;
                }

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

    // 4. Action: Update Theme
    const handlePresetChange = async (newPreset: string) => {
        // Optimistic Update
        setActivePreset(newPreset);

        if (!demoToken || !initialConfig) return;

        try {
            // Persist to Backend
            await fetch('/api/v1/admin/settings', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${demoToken}`
                },
                body: JSON.stringify({
                    ...initialConfig,
                    preset: newPreset,
                    // Reset primary color to default of the preset if switching
                    primary_color: getPresetDefaultColor(newPreset)
                })
            });
        } catch (e) {
            console.warn("Failed to persist theme", e);
        }
    };

    if (!isDemoDomain) return <Navigate to="/" replace />;

    // Context object to pass to Outlet
    const demoContext: DemoContextType = {
        config: initialConfig ? { ...initialConfig, preset: activePreset } : null,
        preset: activePreset,
        updatePreset: handlePresetChange
    };

    return (
        <div className="min-h-screen bg-neutral-950 font-sans selection:bg-blue-500 selection:text-white">
            <main className="relative h-screen w-screen overflow-hidden">
                {/* Pass context to sub-routes (SplitView, Store, etc) */}
                <Outlet context={demoContext} />
            </main>

            <PersonaSwitcher
                currentPreset={activePreset}
                onPresetChange={handlePresetChange}
            />
        </div>
    );
};

// Helper to reset color when switching themes
function getPresetDefaultColor(preset: string): string {
    switch (preset) {
        case 'fresh-market': return '#16A34A';
        case 'tech-ocean': return '#3B82F6';
        default: return '#000000';
    }
}