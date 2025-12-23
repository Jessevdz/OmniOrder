import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTenantConfig } from '../hooks/useTenantConfig';
import { LayoutGrid, Utensils, Settings, LogOut, Store, ArrowLeft, Eye } from 'lucide-react';

export const TenantLayout = () => {
    const { logout } = useAuth();
    const { config } = useTenantConfig();
    const navigate = useNavigate();
    const location = useLocation();

    // Determine context
    const isDemoMode = location.pathname.startsWith('/demo');
    const basePath = isDemoMode ? '/demo/admin' : '/admin';

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-900">

            {/* --- DEMO CONTEXT BAR --- */}
            {isDemoMode && (
                <div className="bg-neutral-900 text-white px-4 py-2 flex justify-between items-center z-50 shadow-md shrink-0 border-b border-neutral-700">
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-600 p-1.5 rounded-md">
                            <Settings size={16} className="text-white" />
                        </div>
                        <span className="text-sm font-medium opacity-90">
                            <strong>Persona:</strong> Restaurant Manager &mdash; <span className="opacity-70 font-normal">Manage menus, settings, and branding.</span>
                        </span>
                    </div>
                    <button
                        onClick={() => navigate('/demo/split')}
                        className="flex items-center gap-2 text-xs font-bold bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-all border border-white/10"
                    >
                        <ArrowLeft size={14} /> Back to Omni View
                    </button>
                </div>
            )}

            <div className="flex flex-1 overflow-hidden">
                {/* Restaurant Admin Sidebar */}
                <aside className="w-64 bg-white border-r border-gray-200 flex flex-col z-20">
                    <div className="h-16 flex items-center px-6 border-b border-gray-100">
                        <div className="flex items-center gap-2 font-bold text-lg text-gray-800">
                            <Store className="text-primary" />
                            <span className="truncate">{config?.name || 'Loading...'}</span>
                        </div>
                    </div>

                    <div className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                        Restaurant Operations
                    </div>

                    <nav className="flex-1 px-3 space-y-1">
                        <NavLink
                            to={`${basePath}/dashboard`}
                            className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-md transition-all font-medium ${isActive ? 'bg-gray-100 text-primary' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
                        >
                            <LayoutGrid size={18} />
                            Overview
                        </NavLink>
                        <NavLink
                            to={`${basePath}/menu`}
                            className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-md transition-all font-medium ${isActive ? 'bg-gray-100 text-primary' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
                        >
                            <Utensils size={18} />
                            Menu Builder
                        </NavLink>
                        <NavLink
                            to={`${basePath}/settings`}
                            className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-md transition-all font-medium ${isActive ? 'bg-gray-100 text-primary' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
                        >
                            <Settings size={18} />
                            Settings
                        </NavLink>

                        {/* Quick Link to Storefront for Demo */}
                        {isDemoMode && (
                            <button
                                onClick={() => navigate('/demo/store')}
                                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md transition-all font-medium text-blue-600 hover:bg-blue-50 mt-4"
                            >
                                <Eye size={18} />
                                View Live Store
                            </button>
                        )}
                    </nav>

                    <div className="p-4 border-t border-gray-100">
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 w-full px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-md transition-colors text-sm"
                        >
                            <LogOut size={18} />
                            Sign Out
                        </button>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="flex-1 flex flex-col h-full overflow-hidden relative">
                    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0">
                        <h2 className="font-semibold text-gray-500">Manager Dashboard</h2>
                        <div className="text-sm text-gray-400">
                            Domain: <span className="font-mono text-gray-600">{window.location.host}</span>
                        </div>
                    </header>
                    <main className="flex-1 overflow-y-auto p-8 bg-gray-50">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    );
};