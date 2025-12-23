import { Outlet, Navigate } from 'react-router-dom';
import { PersonaSwitcher } from '../components/demo/PersonaSwitcher';

export const DemoLayout = () => {
    // Check for demo environment (Simple check for now)
    const isDemoDomain = window.location.hostname.includes('demo') || window.location.hostname.includes('localhost');

    if (!isDemoDomain) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="min-h-screen bg-neutral-950 font-sans selection:bg-blue-500 selection:text-white">
            <main className="relative h-screen w-screen overflow-hidden">
                <Outlet />
            </main>
            <PersonaSwitcher />
        </div>
    );
};