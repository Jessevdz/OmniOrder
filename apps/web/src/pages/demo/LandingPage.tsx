import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hexagon, ArrowRight, Layers, Smartphone, ChefHat, Zap } from 'lucide-react';
import { BrandButton } from '../../components/common/BrandButton';

export const LandingPage = () => {
    const navigate = useNavigate();

    const handleStartDemo = () => {
        // Navigating to a protected route triggers the DemoLayout's login check
        navigate('/demo/split');
    };

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-blue-500 selection:text-white overflow-hidden font-sans">
            {/* Background Gradients */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]" />
            </div>

            <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
                <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
                    <Hexagon className="text-blue-500 fill-blue-500/10" />
                    <span>Omni<span className="text-blue-500">Order</span></span>
                </div>
                <div className="text-sm font-medium text-gray-400">
                    v1.0.0-beta
                </div>
            </nav>

            <main className="relative z-10 max-w-7xl mx-auto px-6 pt-12 md:pt-24 pb-20">
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8">
                        <Zap size={12} fill="currentColor" /> Live Architecture Demo
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[1.1]">
                        Scalability shouldn't cost <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            your identity.
                        </span>
                    </h1>

                    <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
                        Experience the <strong>Chameleon Engine</strong>: A white-label ordering platform that radically adapts its interface to fit the brand, while running on a unified, high-scale infrastructure.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <button
                            onClick={handleStartDemo}
                            className="group relative px-8 py-4 bg-white text-black font-bold rounded-full text-lg hover:bg-gray-100 transition-all active:scale-95 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] flex items-center gap-2"
                        >
                            Launch Interactive Demo
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </button>
                        <span className="text-sm text-gray-500">No registration required</span>
                    </div>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {[
                        {
                            icon: Smartphone,
                            title: "Brand Sovereignty",
                            desc: "Don't look like a template. Our engine injects brand DNA (fonts, geometry, layouts) into the core UX instantly."
                        },
                        {
                            icon: Layers,
                            title: "Multi-Tenant Core",
                            desc: "Strict data isolation per tenant using Postgres schemas, serving thousands of restaurants from a single API deployment."
                        },
                        {
                            icon: ChefHat,
                            title: "Real-Time KDS",
                            desc: "Orders flow instantly from customer mobile devices to the kitchen display via segregated WebSocket channels."
                        }
                    ].map((feature, i) => (
                        <div key={i} className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/50 transition-colors">
                            <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-black rounded-lg border border-white/10 flex items-center justify-center mb-6 text-blue-400">
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Call to Action Footer */}
                <div className="border-t border-white/10 pt-16 text-center">
                    <h2 className="text-2xl font-bold mb-4">Help us build the future of hospitality.</h2>
                    <p className="text-gray-400 mb-8">
                        We are looking for beta testers and technical partners to stress-test the Chameleon Engine.
                    </p>
                    <a
                        href="mailto:hello@omniorder.localhost"
                        className="text-blue-400 hover:text-blue-300 font-medium underline underline-offset-4"
                    >
                        Get Early Access &rarr;
                    </a>
                </div>
            </main>
        </div>
    );
};