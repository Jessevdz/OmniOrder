import { useAuth } from '../../context/AuthContext';
import { Hexagon, Lock } from 'lucide-react';

export function LoginPage() {
    const { login, isLoading, error } = useAuth();

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                {/* Header */}
                <div className="bg-slate-900 p-8 text-center">
                    <div className="flex justify-center mb-4">
                        <div className="bg-blue-600/20 p-3 rounded-full">
                            <Hexagon className="text-blue-500" size={48} />
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold text-white tracking-tight">OmniOrder Admin</h1>
                    <p className="text-slate-400 text-sm mt-2">Secure Tenant Access</p>
                </div>

                {/* Body */}
                <div className="p-8">
                    <div className="text-center space-y-6">
                        <div className="text-gray-600 text-sm">
                            <p>Authentication is managed by your organization's Identity Provider.</p>
                        </div>

                        {error && (
                            <div className="bg-red-50 text-red-600 text-xs p-3 rounded border border-red-100">
                                Error: {error.message}
                            </div>
                        )}

                        <button
                            onClick={() => login()}
                            disabled={isLoading}
                            className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <span>Connecting...</span>
                            ) : (
                                <>
                                    <Lock size={18} />
                                    Sign in with SSO
                                </>
                            )}
                        </button>

                        <div className="text-xs text-gray-400 mt-6">
                            Protected by Authentik • OIDC Standard
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center">
                <p className="text-xs text-gray-400">Current Context: <span className="font-mono text-gray-600">{window.location.host}</span></p>
            </div>
        </div>
    );
}