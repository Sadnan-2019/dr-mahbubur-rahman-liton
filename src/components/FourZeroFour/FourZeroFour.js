import React, { useState, useTransition } from 'react';
 
import forzeroFour from "../../assets/forzerofour.jpg";

const FourZeroFour = ({ brandName = "Oppora" }) => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [isPending, startTransition] = useTransition();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;

        startTransition(() => {
            // Add API endpoint here if needed
            setSubmitted(true);
        });
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 selection:bg-indigo-500 selection:text-white">
            <div className="max-w-xl w-full bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-center relative overflow-hidden">
                
                {/* Background Glow Effect */}
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-56 h-56 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

                {/* Hero Asset Container */}
                <div className="relative mb-6 rounded-2xl overflow-hidden border border-slate-800 shadow-inner group">
                    <img 
                        src={forzeroFour} 
                        alt="Page Under Development" 
                        className="w-full h-56 sm:h-64 object-cover object-center transform group-hover:scale-105 transition duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                </div>

                {/* Content */}
                <div className="space-y-3 mb-6">
                    <span className="inline-block bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
                        Work in Progress
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                        Page Under Construction
                    </h1>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
                        We're putting the finishing touches on this section for {brandName}. Leave your email to get notified when it goes live!
                    </p>
                </div>

                {/* Interactive Action: Email Signup or Navigation */}
                {submitted ? (
                    <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm rounded-xl font-medium animate-fadeIn mb-4">
                        ✓ Thank you! We'll reach out as soon as this page is live.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto mb-6">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            disabled={isPending}
                            className="flex-1 bg-slate-950/80 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition disabled:opacity-50"
                        />
                        <button
                            type="submit"
                            disabled={isPending}
                            className="bg-indigo-600 hover:bg-indigo-500 active:scale-95 disabled:bg-indigo-800 text-white font-medium px-5 py-2.5 rounded-xl text-sm transition focus:ring-2 focus:ring-indigo-500/50 flex items-center justify-center min-w-[110px]"
                        >
                            {isPending ? (
                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : (
                                'Notify Me'
                            )}
                        </button>
                    </form>
                )}

                {/* Quick Navigation Link */}
                <div className="border-t border-slate-800/80 pt-4">
                    <a 
                        href="/" 
                        className="inline-flex items-center text-xs font-medium text-slate-400 hover:text-white transition group"
                    >
                        <span className="transform group-hover:-translate-x-1 transition mr-1.5">←</span> Back to Homepage
                    </a>
                </div>

            </div>
        </div>
    );
};

export default FourZeroFour;