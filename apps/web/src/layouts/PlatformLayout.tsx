import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LayoutDashboard, Users, Settings, LogOut, Hexagon, Server } from 'lucide-react';

export const PlatformLayout = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    return (
        <div className="min-h-screen flex bg-slate-50 font-sans text-slate-900">
            {/* Super Admin Sidebar */}
            <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col shadow-xl z-20">
                <div className="h-16 flex items-center px-6 border-b border-slate-800 bg-slate-950">
                    <div className="flex items-center gap-2 text-white font-bold text-lg tracking-tight">
                        <Hexagon className="text-blue-500 fill-blue-500/20" />
                        OMNI<span className="text-blue-500">PLATFORM</span>
                    </div>
                </div>

                <div className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    SaaS Management
                </div>

                <nav className="flex-1 px-3 space-y-1">
                    <NavLink
                        to="/platform/dashboard"
                        className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-md transition-all ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 hover:text-white'}`}
                    >
                        <Server size={18} />
                        Infrastructure
                    </NavLink>
                    <NavLink
                        to="/platform/tenants"
                        className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-md transition-all ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 hover:text-white'}`}
                    >
                        <Users size={18} />
                        Tenants
                    </NavLink>
                    <NavLink
                        to="/platform/settings"
                        className={({ isActive }) => `flex items-center gap-3 px-3 py-2.5 rounded-md transition-all ${isActive ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 hover:text-white'}`}
                    >
                        <Settings size={18} />
                        Global Settings
                    </NavLink>
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 w-full px-4 py-2 text-red-400 hover:bg-red-950/30 rounded-md transition-colors text-sm"
                    >
                        <LogOut size={18} />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
                <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shadow-sm">
                    <h2 className="font-semibold text-slate-700">Super Admin Portal</h2>
                    <div className="h-8 w-8 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700 font-bold text-xs">
                        SA
                    </div>
                </header>
                <main className="flex-1 overflow-y-auto p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};