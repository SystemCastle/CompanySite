"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    BarChart3,
    Building2,
    Layers,
    Sparkles,
    Award,
    TrendingUp,
    Users,
    Zap,
    ArrowRight,
    Globe,
    CheckCircle2,
    Rocket,
    Target,
    Lightbulb,
    Briefcase,
    Shield,
    Cpu,
    Database,
    Cloud,
    Smartphone,
    Monitor,
    Wifi,
    Heart,
    Star,
    Clock,
    Calendar,
    ChevronRight
} from "lucide-react";

export default function AboutSectionV3() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

    const stats = [
        {
            icon: BarChart3,
            value: "1000+",
            label: "Processes Worked On",
            gradient: "from-indigo-500 to-purple-600"
        },
        {
            icon: Layers,
            value: "5",
            label: "Horizontals",
            gradient: "from-blue-500 to-cyan-600"
        },
        {
            icon: Building2,
            value: "4",
            label: "Verticals",
            gradient: "from-emerald-500 to-teal-600"
        }
    ];

    const horizontals = [
        { name: "IT", icon: Cpu, color: "blue" },
        { name: "HR", icon: Users, color: "purple" },
        { name: "Finance", icon: Briefcase, color: "emerald" },
        { name: "Cyber Security", icon: Shield, color: "red" },
        { name: "Contact Center", icon: HeadphonesIcon, color: "orange" }
    ];

    const verticals = [
        { name: "Telco", icon: Wifi, color: "indigo" },
        { name: "Fintech", icon: Smartphone, color: "pink" },
        { name: "Energy", icon: Zap, color: "amber" },
        { name: "BFSI", icon: Database, color: "cyan" }
    ];

    const timeline = [
        { year: "2020", label: "Founded", icon: Rocket, description: "Started our journey in automation" },
        { year: "2022", label: "Expansion", icon: Globe, description: "Reached 10+ countries" },
        { year: "2024", label: "Growth", icon: TrendingUp, description: "1000+ processes automated" },
        { year: "2030", label: "Vision", icon: Target, description: "Leading authority in digital transformation" }
    ];

    return (
        <section ref={sectionRef} className="relative min-h-screen py-20 bg-white overflow-hidden">
            {/* Premium Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/20" />

                {/* Animated Mesh */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/10 via-purple-500/5 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-blue-500/10 via-cyan-500/5 to-transparent" />
                </div>

                {/* Large Orbs */}
                <motion.div
                    animate={{
                        x: [0, 120, 0],
                        y: [0, -80, 0],
                    }}
                    transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 80, 0],
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-emerald-500/5 blur-3xl"
                />

                {/* Grid */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                    }}
                />

                {/* Decorative Lines */}
                <div className="absolute top-1/3 right-0 w-96 h-px bg-gradient-to-l from-indigo-500/20 to-transparent" />
                <div className="absolute bottom-1/3 left-0 w-96 h-px bg-gradient-to-r from-purple-500/20 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    {/* <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-200/50 mb-4">
                        <Heart className="w-4 h-4 text-indigo-600" />
                        <span className="text-sm font-medium text-indigo-600">About System Castle</span>
                    </div> */}
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                        <span className="block text-slate-900">Intelligent Automation</span>
                        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Professional Services
                        </span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Redefining business efficiency through Intelligent Automation. Optimizing value delivery, fueling growth, and elevating customer engagement.
                    </p>
                </motion.div>

                {/* Stats Grid - Hexagon Style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                >
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.03, y: -4 }}
                                className={`relative bg-gradient-to-br ${stat.gradient} rounded-2xl p-8 text-white shadow-2xl shadow-indigo-500/20 overflow-hidden group`}
                            >
                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-white/20" />
                                    <div className="absolute -left-12 -bottom-12 w-32 h-32 rounded-full bg-white/10" />
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl group-hover:scale-110 transition-transform">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-3xl font-bold">{stat.value}</p>
                                            <p className="text-sm text-white/80">{stat.label}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Horizontals & Verticals - Side by Side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                    {/* Horizontals */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-gradient-to-br from-blue-50/80 to-cyan-50/80 backdrop-blur-sm rounded-3xl p-8 border border-blue-100/50"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg shadow-blue-500/20">
                                <Layers className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800">5 Horizontals</h3>
                                <p className="text-sm text-slate-500">Our core service areas</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {horizontals.map((item, index) => {
                                const Icon = item.icon;
                                const colorMap = {
                                    blue: "from-blue-500 to-cyan-600",
                                    purple: "from-purple-500 to-pink-600",
                                    emerald: "from-emerald-500 to-teal-600",
                                    red: "from-red-500 to-rose-600",
                                    orange: "from-orange-500 to-amber-600"
                                };
                                return (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -4, scale: 1.05 }}
                                        className="bg-white/70 backdrop-blur-sm rounded-xl p-4 text-center border border-white/50 shadow-sm"
                                    >
                                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colorMap[item.color as keyof typeof colorMap]} shadow-lg flex items-center justify-center mx-auto mb-2`}>
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>
                                        <p className="text-xs font-medium text-slate-700">{item.name}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Verticals */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-gradient-to-br from-emerald-50/80 to-teal-50/80 backdrop-blur-sm rounded-3xl p-8 border border-emerald-100/50"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-lg shadow-emerald-500/20">
                                <Building2 className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-800">4 Verticals</h3>
                                <p className="text-sm text-slate-500">Industries we serve</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {verticals.map((item, index) => {
                                const Icon = item.icon;
                                const colorMap = {
                                    indigo: "from-indigo-500 to-purple-600",
                                    pink: "from-pink-500 to-rose-600",
                                    amber: "from-amber-500 to-orange-600",
                                    cyan: "from-cyan-500 to-blue-600"
                                };
                                return (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -4, scale: 1.05 }}
                                        className="bg-white/70 backdrop-blur-sm rounded-xl p-4 text-center border border-white/50 shadow-sm"
                                    >
                                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colorMap[item.color as keyof typeof colorMap]} shadow-lg flex items-center justify-center mx-auto mb-2`}>
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>
                                        <p className="text-xs font-medium text-slate-700">{item.name}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>

                {/* Timeline & Vision */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                >
                    {/* Global Presence */}
                    <div className="bg-gradient-to-br from-indigo-50/80 to-purple-50/80 backdrop-blur-sm rounded-2xl p-6 border border-indigo-100/50 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <Globe className="w-5 h-5 text-indigo-600" />
                            <h3 className="text-sm font-semibold text-slate-800">Global Reach</h3>
                        </div>
                        <p className="text-3xl font-bold text-indigo-600">17</p>
                        <p className="text-sm text-slate-600 mb-3">Countries across 7 regions</p>
                        <div className="flex flex-wrap gap-1.5">
                            {["Americas", "Caribbean", "Europe", "Africa", "Middle East", "South Asia", "Pacific"].map((region, i) => (
                                <span key={i} className="px-2 py-0.5 bg-white/70 backdrop-blur-sm rounded-full text-[10px] text-slate-600 border border-slate-200/50">
                                    {region}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 shadow-lg lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <Clock className="w-5 h-5 text-indigo-600" />
                            <h3 className="text-sm font-semibold text-slate-800">Our Journey</h3>
                        </div>
                        <div className="relative">
                            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400" />
                            <div className="space-y-6">
                                {timeline.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                            className="flex gap-4"
                                        >
                                            <div className="relative flex-shrink-0">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/20 flex items-center justify-center z-10 relative">
                                                    <Icon className="w-4 h-4 text-white" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs font-bold text-indigo-600">{item.year}</span>
                                                    <span className="text-sm font-semibold text-slate-800">{item.label}</span>
                                                </div>
                                                <p className="text-xs text-slate-500">{item.description}</p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Missing HeadphonesIcon
function HeadphonesIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
    );
}