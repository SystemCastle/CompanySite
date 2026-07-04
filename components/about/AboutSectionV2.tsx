"use client";

import { useState, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
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
    Wifi
} from "lucide-react";

export default function AboutSectionV2() {
    const [activeTab, setActiveTab] = useState("horizontals");
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

    const stats = [
        {
            icon: BarChart3,
            value: "1000+",
            label: "Processes Worked On",
            gradient: "from-indigo-500 to-purple-600",
            color: "indigo"
        },
        {
            icon: Layers,
            value: "5",
            label: "Horizontals",
            gradient: "from-blue-500 to-cyan-600",
            color: "blue"
        },
        {
            icon: Building2,
            value: "4",
            label: "Verticals",
            gradient: "from-emerald-500 to-teal-600",
            color: "emerald"
        }
    ];

    const horizontals = [
        { name: "IT", icon: Cpu, description: "Information Technology" },
        { name: "HR", icon: Users, description: "Human Resources" },
        { name: "Finance", icon: Briefcase, description: "Financial Services" },
        { name: "Cyber Security", icon: Shield, description: "Security Solutions" },
        { name: "Contact Center", icon: HeadphonesIcon, description: "Customer Support" }
    ];

    const verticals = [
        { name: "Telco", icon: Wifi, description: "Telecommunications" },
        { name: "Fintech", icon: Smartphone, description: "Financial Technology" },
        { name: "Energy", icon: Zap, description: "Energy Sector" },
        { name: "BFSI", icon: Database, description: "Banking & Financial Services" }
    ];

    const regions = [
        "Americas", "Caribbean", "Europe",
        "Africa", "Middle East", "South Asia", "Pacific"
    ];

    return (
        <section ref={sectionRef} className="relative min-h-screen py-20 bg-white overflow-hidden">
            {/* Premium Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/20" />

                {/* Animated Gradient Mesh */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-l from-indigo-500/10 via-purple-500/5 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-500/10 via-cyan-500/5 to-transparent" />
                </div>

                {/* Floating Orbs */}
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -60, 0],
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 60, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-emerald-500/5 blur-3xl"
                />

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    {/* <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-200/50 mb-4">
                        <Sparkles className="w-4 h-4 text-indigo-600" />
                        <span className="text-sm font-medium text-indigo-600">About System Castle</span>
                    </div> */}
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                        <span className="block text-slate-900">Intelligent Automation</span>
                        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Professional Services
                        </span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                        System Castle redefines business efficiency through Intelligent Automation. We optimize value delivery, fuel growth, and elevate customer engagement.
                    </p>
                </motion.div>

                {/* Stats Row */}
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
                                whileHover={{ y: -4, scale: 1.02 }}
                                className={`bg-gradient-to-br ${stat.gradient} rounded-2xl p-6 text-white shadow-xl shadow-${stat.color}-500/20`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold">{stat.value}</p>
                                        <p className="text-sm text-white/80">{stat.label}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Horizontals & Verticals - Tabbed View */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/60 shadow-xl"
                >
                    {/* Tabs */}
                    <div className="flex items-center gap-2 mb-8">
                        <button
                            onClick={() => setActiveTab("horizontals")}
                            className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all ${activeTab === "horizontals"
                                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25"
                                : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                                }`}
                        >
                            <div className="flex items-center justify-center gap-2">
                                <Layers className="w-4 h-4" />
                                Horizontals (5)
                            </div>
                        </button>
                        <button
                            onClick={() => setActiveTab("verticals")}
                            className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all ${activeTab === "verticals"
                                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25"
                                : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                                }`}
                        >
                            <div className="flex items-center justify-center gap-2">
                                <Building2 className="w-4 h-4" />
                                Verticals (4)
                            </div>
                        </button>
                    </div>

                    {/* Content */}
                    <AnimatePresence mode="wait">
                        {activeTab === "horizontals" ? (
                            <motion.div
                                key="horizontals"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
                            >
                                {horizontals.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            whileHover={{ y: -4, scale: 1.05 }}
                                            className="bg-gradient-to-br from-blue-50/80 to-cyan-50/80 rounded-2xl p-4 text-center border border-blue-100/50 group"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 shadow-lg shadow-blue-500/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            <p className="text-sm font-semibold text-slate-800">{item.name}</p>
                                            <p className="text-xs text-slate-500">{item.description}</p>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="verticals"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                            >
                                {verticals.map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            whileHover={{ y: -4, scale: 1.05 }}
                                            className="bg-gradient-to-br from-emerald-50/80 to-teal-50/80 rounded-2xl p-4 text-center border border-emerald-100/50 group"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            <p className="text-sm font-semibold text-slate-800">{item.name}</p>
                                            <p className="text-xs text-slate-500">{item.description}</p>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Global Presence & 2030 Vision */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8"
                >
                    {/* Global Presence */}
                    <div className="bg-gradient-to-br from-indigo-50/80 to-purple-50/80 backdrop-blur-sm rounded-2xl p-6 border border-indigo-100/50">
                        <div className="flex items-center gap-3 mb-4">
                            <Globe className="w-5 h-5 text-indigo-600" />
                            <h3 className="text-sm font-semibold text-slate-800">Global Presence</h3>
                        </div>
                        <p className="text-sm text-slate-600 mb-4">
                            Spanning across <span className="font-semibold text-indigo-600">17 countries</span>
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {regions.map((region, i) => (
                                <span key={i} className="px-3 py-1 bg-white/70 backdrop-blur-sm rounded-full text-xs text-slate-600 border border-slate-200/50">
                                    {region}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* 2030 Vision */}
                    <div className="bg-gradient-to-br from-amber-50/80 to-orange-50/80 backdrop-blur-sm rounded-2xl p-6 border border-amber-100/50">
                        <div className="flex items-center gap-3 mb-4">
                            <Target className="w-5 h-5 text-amber-600" />
                            <h3 className="text-sm font-semibold text-slate-800">2030 Vision</h3>
                        </div>
                        <p className="text-sm text-slate-600">
                            By 2030, we aim to be a leading authority in the design and execution of digital transformation for enterprise-level organizations.
                        </p>
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