import { TrendingUp, Users, ShoppingCart, Activity } from 'lucide-react';

export function PlatformDashboard() {
    return (
        <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold text-slate-800 mb-6">Platform Infrastructure Health</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                    { label: 'Active Tenants', val: '2', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
                    { label: 'Global Orders (24h)', val: '1,248', icon: ShoppingCart, color: 'text-green-600', bg: 'bg-green-50' },
                    { label: 'Avg API Latency', val: '45ms', icon: Activity, color: 'text-purple-600', bg: 'bg-purple-50' },
                    { label: 'MRR', val: '$12.4k', icon: TrendingUp, color: 'text-orange-600', bg: 'bg-orange-50' },
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
                        <div className={`p-3 rounded-lg ${stat.bg}`}>
                            <stat.icon size={24} className={stat.color} />
                        </div>
                        <div>
                            <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                            <p className="text-2xl font-bold text-slate-800">{stat.val}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-4 mb-4">System Nodes</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-sm font-medium"><div className="w-2 h-2 rounded-full bg-green-500"></div> API-Worker-01</span>
                        <span className="text-xs text-slate-400">Cpu: 12% | Mem: 450MB</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 text-sm font-medium"><div className="w-2 h-2 rounded-full bg-green-500"></div> DB-Primary</span>
                        <span className="text-xs text-slate-400">Connections: 45/100</span>
                    </div>
                </div>
            </div>
        </div>
    );
}