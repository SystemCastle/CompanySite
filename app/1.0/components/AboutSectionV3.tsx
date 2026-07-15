"use client";

import { type SVGProps, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    BarChart3,
    Building2,
    Layers,
    Users,
    Zap,
    Briefcase,
    Shield,
    Cpu,
    Database,
    Smartphone,
    Wifi,
    Book,
    Car,
    UsersRound,
    Hospital,
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
            value: "6",
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
        { name: "Citizen Services (G2C)", icon: UsersRound, color: "amber" },
        { name: "HealthTech", icon: Hospital, color: "red" },
        { name: "EdTech", icon: Book, color: "green" },
        { name: "Transportation", icon: Car, color: "gray" }
    ];

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[100svh] bg-white flex items-center"
        >


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
                    className="absolute top-1/4 right-1/4 w-72 h-72 lg:w-[460px] lg:h-[460px] rounded-full bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 80, 0],
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/4 left-1/4 w-64 h-64 lg:w-[360px] lg:h-[360px] rounded-full bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-emerald-500/5 blur-3xl"
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

            {/* <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-18 lg:py-12"> */}
            <div className="page-container relative z-10 section-spacing">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-7 lg:mb-6"
                >
                    <h2 className="text-[2rem] sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                        <span className="block text-slate-900">Intelligent Automation</span>
                        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Professional Services
                        </span>
                    </h2>
                    <p className="mt-3 text-sm sm:text-base lg:text-base text-slate-600 max-w-xl lg:max-w-2xl mx-auto leading-relaxed">
                        An ecosystem of telecom expertise and software innovation, built to solve your toughest digital challenges.
                    </p>
                </motion.div>

                <div className="pb-3" />


                {/* Stats Grid - Hexagon Style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 mb-5 lg:mb-5"
                >
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.03, y: -4 }}
                                className={`relative bg-gradient-to-br ${stat.gradient} rounded-xl p-4 sm:p-3 lg:p-4 text-white shadow-xl shadow-indigo-500/20 overflow-hidden group`}
                            >
                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-white/20" />
                                    <div className="absolute -left-10 -bottom-10 w-24 h-24 rounded-full bg-white/10" />
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-lg group-hover:scale-110 transition-transform">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="text-2xl lg:text-3xl font-bold leading-none">{stat.value}</p>
                                            <p className="mt-0.5 text-xs lg:text-xs text-white/80">{stat.label}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <div className="pb-5" />


                {/* Horizontals & Verticals - Side by Side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                    {/* Horizontals */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-gradient-to-br from-blue-50/80 to-cyan-50/80 backdrop-blur-sm rounded-2xl p-4 sm:p-5 lg:p-5 border border-blue-100/50 shadow-sm lg:shadow-none"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg shadow-blue-500/20">
                                <Layers className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-base lg:text-lg font-bold text-slate-800">5 Horizontals</h3>
                                <p className="text-xs text-slate-500">Our core service areas</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 lg:gap-2">
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
                                        className="bg-white/75 backdrop-blur-sm rounded-lg p-3 lg:p-2.5 text-center border border-white/50 shadow-sm"
                                    >
                                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${colorMap[item.color as keyof typeof colorMap]} shadow-lg flex items-center justify-center mx-auto mb-1.5`}>
                                            <Icon className="w-4 h-4 text-white" />
                                        </div>
                                        <p className="text-xs lg:text-[11px] font-medium text-slate-700 leading-tight">{item.name}</p>
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
                        className="bg-gradient-to-br from-emerald-50/80 to-teal-50/80 backdrop-blur-sm rounded-2xl p-4 sm:p-5 lg:p-5 border border-emerald-100/50 shadow-sm lg:shadow-none"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-lg shadow-emerald-500/20">
                                <Building2 className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-base lg:text-lg font-bold text-slate-800">{verticals.length} Verticals</h3>
                                <p className="text-xs text-slate-500">Industries we serve</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2.5 lg:gap-2">
                            {verticals.map((item, index) => {
                                const Icon = item.icon;
                                const colorMap = {
                                    indigo: "from-indigo-500 to-purple-600",
                                    pink: "from-pink-500 to-rose-600",
                                    amber: "from-amber-500 to-orange-600",
                                    red: "from-red-500 to-rose-600",
                                    green: "from-green-500 to-emerald-600",
                                    gray: "from-gray-500 to-slate-600",
                                };
                                return (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -4, scale: 1.05 }}
                                        className="bg-white/75 backdrop-blur-sm rounded-lg p-3 lg:p-2.5 text-center border border-white/50 shadow-sm"
                                    >
                                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${colorMap[item.color as keyof typeof colorMap]} shadow-lg flex items-center justify-center mx-auto mb-1.5`}>
                                            <Icon className="w-4 h-4 text-white" />
                                        </div>
                                        <p className="text-xs lg:text-[11px] font-medium text-slate-700 leading-tight">{item.name}</p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function HeadphonesIcon(props: SVGProps<SVGSVGElement>) {
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
