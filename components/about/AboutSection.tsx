"use client";

import { motion } from "framer-motion";
import {
    BarChart3,
    Building2,
    Layers,
    Sparkles,
    Award,
    TrendingUp,
    Users,
    Zap,
    ArrowRight
} from "lucide-react";

export default function AboutSection() {
    return (
        <section className="relative h-screen flex items-center bg-white overflow-hidden">
            {/* Premium Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/20" />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                    }}
                />

                {/* Animated Orbs */}
                <motion.div
                    animate={{
                        x: [0, 80, 0],
                        y: [0, -40, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -60, 0],
                        y: [0, 40, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-emerald-500/10 blur-3xl"
                />

                {/* Decorative Lines */}
                <div className="absolute top-1/3 right-0 w-64 h-px bg-gradient-to-l from-indigo-500/20 to-transparent" />
                <div className="absolute bottom-1/3 left-0 w-64 h-px bg-gradient-to-r from-purple-500/20 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Main Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6"
                    >
                        {/* Badge */}
                        {/* <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-200/50"
                        >
                            <Sparkles className="w-4 h-4 text-indigo-600" />
                            <span className="text-sm font-medium text-indigo-600">About System Castle</span>
                        </motion.div> */}

                        {/* Title */}
                        <h2 className="text-4xl sm:text-5xl lg:text-4xl font-bold leading-tight">
                            <span className="block text-slate-900">Intelligent Automation</span>
                            {/* <span className="block text-slate-900"></span> */}
                            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Professional Services
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-base text-slate-600 leading-relaxed max-w-lg">
                            System Castle redefines business efficiency through Intelligent Automation. We optimize value delivery, fuel growth, and elevate customer engagement.
                        </p>

                        <div className="flex items-center gap-4 pt-2">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-xs font-medium text-slate-600">Global Presence</span>
                            </div>
                            <div className="w-px h-4 bg-slate-200" />
                            <span className="text-xs text-slate-500">17 Countries</span>
                        </div>

                        {/* 2030 Vision */}
                        <div className="bg-gradient-to-r from-indigo-50/50 to-purple-50/50 rounded-2xl p-4 border border-indigo-100/50">
                            <p className="text-sm text-slate-700 flex items-start gap-2">
                                <Award className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                                <span>By 2030, we aim to be a leading authority in digital transformation for enterprise-level organizations.</span>
                            </p>
                        </div>
                    </motion.div>

                    {/* Right - Stats in Parallel */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Processes */}
                        <div className="bg-gradient-to-br from-indigo-50/80 to-purple-50/80 backdrop-blur-sm rounded-2xl p-6 border border-indigo-100/50 flex items-center gap-6 group hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <BarChart3 className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <p className="text-3xl font-bold text-slate-900">1000<span className="text-2xl text-indigo-600">+</span></p>
                                <p className="text-sm text-slate-600">Processes worked on</p>
                            </div>
                        </div>

                        {/* Horizontals & Verticals - Side by Side */}
                        <div className="grid grid-cols-2 gap-4">
                            {/* Horizontals */}
                            <div className="bg-gradient-to-br from-blue-50/80 to-cyan-50/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100/50 text-center group hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 shadow-lg shadow-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Layers className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <p className="text-3xl font-bold text-slate-900">5</p>
                                <p className="text-sm font-medium text-slate-700">Horizontals</p>
                                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                    IT, HR, Finance,<br />
                                    Cyber Security, Contact Center
                                </p>
                            </div>

                            {/* Verticals */}
                            <div className="bg-gradient-to-br from-emerald-50/80 to-teal-50/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100/50 text-center group hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Building2 className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <p className="text-3xl font-bold text-slate-900">4</p>
                                <p className="text-sm font-medium text-slate-700">Verticals</p>
                                <p className="text-xs text-slate-500 mt-1">Telco, Fintech, Energy, BFSI</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}