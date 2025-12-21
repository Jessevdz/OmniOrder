import { DollarSign, ClipboardList, Clock } from 'lucide-react';

export function TenantDashboard() {
    return (
        <div className="max-w-5xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Today's Overview</h1>
            <p className="text-gray-500 mb-8">Here is what's happening at your restaurant today.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-gray-500 text-sm font-medium">Total Revenue</h3>
                        <div className="p-2 bg-green-50 text-green-600 rounded-md"><DollarSign size={20} /></div>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">$1,450.00</p>
                    <p className="text-xs text-green-600 mt-2">↑ 12% from yesterday</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-gray-500 text-sm font-medium">Orders Processed</h3>
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-md"><ClipboardList size={20} /></div>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">45</p>
                    <p className="text-xs text-gray-400 mt-2">8 Pending in Kitchen</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-gray-500 text-sm font-medium">Avg Prep Time</h3>
                        <div className="p-2 bg-orange-50 text-orange-600 rounded-md"><Clock size={20} /></div>
                    </div>
                    <p className="text-3xl font-bold text-gray-900">14m</p>
                    <p className="text-xs text-red-500 mt-2">↑ 2m slower than target</p>
                </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-lg mb-4">Recent Orders</h3>
                <div className="text-center py-10 text-gray-400 bg-gray-50 rounded border border-dashed">
                    Order history chart visualization would go here.
                </div>
            </div>
        </div>
    );
}