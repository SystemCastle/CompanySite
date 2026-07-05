"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
    Globe,
    Smartphone,
    Monitor,
    Wifi,
    Shield,
    LifeBuoy,
    Users
} from "lucide-react";

// Advanced 3D Tilt Card with Reflection
function AdvancedTiltCard({
    children,
    index,
    gradient,
    title,
    description,
    stats,
    statLabel
}: {
    children: React.ReactNode;
    index: number;
    gradient: string;
    title: string;
    description: string;
    stats: string;
    statLabel: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.6, 0.6], ["8deg", "-8deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.6, 0.6], ["-8deg", "8deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const width = rect.width;
        const height = rect.height;
        const mouseX = (e.clientX - rect.left) / width - 0.5;
        const mouseY = (e.clientY - rect.top) / height - 0.5;
        x.set(mouseX);
        y.set(mouseY);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    // Calculate reflection gradient position
    const reflectionX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
    const reflectionY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative h-full"
        >
            <motion.div
                animate={{
                    scale: isHovered ? 1.02 : 1,
                    y: isHovered ? -6 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative bg-white rounded-2xl p-8 border border-slate-200/60 shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col overflow-hidden"
                style={{
                    transformStyle: "preserve-3d",
                }}
            >
                {/* Sophisticated gradient border on hover */}
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-slate-200/50 via-indigo-500/10 to-slate-200/50 -z-10"
                    />
                )}

                {/* Animated shine reflection */}
                <motion.div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(circle at ${reflectionX} ${reflectionY}, rgba(255,255,255,0.8) 0%, transparent 60%)`,
                        mixBlendMode: "overlay",
                    }}
                />

                {/* Top accent line */}
                <motion.div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ transformOrigin: "left" }}
                />

                {/* Decorative number - background */}
                <div className="absolute -right-4 -top-4 text-8xl font-bold text-slate-100/30 select-none">
                    {String(index + 1).padStart(2, '0')}
                </div>

                {/* Content with 3D depth */}
                <div style={{ transform: "translateZ(30px)" }} className="relative z-10 flex-1 flex flex-col">
                    {/* Icon with advanced styling */}
                    <motion.div
                        whileHover={{ scale: 1.05, rotateZ: 3 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} shadow-lg flex items-center justify-center mb-5 relative flex-shrink-0`}
                    >
                        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} blur-xl opacity-30`} />
                        {children}
                        <div className="absolute -inset-1 rounded-xl border-2 border-white/10" />
                    </motion.div>

                    <h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">
                        {title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed flex-1">
                        {description}
                    </p>

                    {/* Stats Badge */}
                    <div className="mt-3 flex items-center gap-3">
                        <div className="flex items-center gap-1.5">
                            <span className="text-lg font-bold text-slate-800">{stats}</span>
                            <span className="text-xs text-slate-500">{statLabel}</span>
                        </div>
                    </div>
                </div>

                {/* Bottom right decorative element */}
                <motion.div
                    animate={{
                        rotate: isHovered ? 90 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-3 right-3 text-slate-200"
                >
                    <div className="w-6 h-6 border border-slate-200 rounded-lg flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-slate-300" />
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

// Parallax floating elements
// function FloatingElements() {
//     const elements = [
//         // { icon: Users, x: 5, y: 80, delay: 0.5 },
//     ];

//     return (
//         <div className="absolute inset-0 pointer-events-none overflow-hidden">
//             {elements.map((el, i) => {
//                 const Icon = el.icon;
//                 return (
//                     <motion.div
//                         key={i}
//                         className="absolute hidden lg:block"
//                         style={{ left: `${el.x}%`, top: `${el.y}%` }}
//                         animate={{
//                             y: [0, -20, 0],
//                             x: [0, 10, 0],
//                             rotate: [0, 5, 0],
//                         }}
//                         transition={{
//                             duration: 6 + i * 2,
//                             repeat: Infinity,
//                             delay: el.delay,
//                             ease: "easeInOut",
//                         }}
//                     >
//                         <div className="bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-3 shadow-xl">
//                             <Icon className="w-5 h-5 text-indigo-500/60" />
//                         </div>
//                     </motion.div>
//                 );
//             })}
//         </div>
//     );
// }

// Animated background grid with dots
// function BackgroundGrid() {
//     return (
//         <div className="absolute inset-0 pointer-events-none">
//             <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
//                 <defs>
//                     <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//                         <circle cx="2" cy="2" r="1.5" fill="rgba(99, 102, 241, 0.08)" />
//                     </pattern>
//                 </defs>
//                 <rect width="100%" height="100%" fill="url(#grid)" />
//             </svg>
//         </div>
//     );
// }

export default function ServicesSectionV3() {
    const services = [
        {
            icon: Globe,
            title: "Digital Solutions",
            description: "Ensure sustained traffic to your website. Visitors become leads driving business growth.",
            gradient: "from-blue-600 to-cyan-500",
            delay: 0.1,
            stats: "94%",
            statLabel: "Success Rate"
        },
        {
            icon: Smartphone,
            title: "Mobile Development",
            description: "We Deliver Solutions that our client's users can interact online, anytime, anywhere.",
            gradient: "from-emerald-600 to-teal-500",
            delay: 0.2,
            stats: "150+",
            statLabel: "Apps Delivered"
        },
        {
            icon: Monitor,
            title: "Web Solutions",
            description: "Bring your brand's story to life through enhanced content, user experience, and web/app design.",
            gradient: "from-purple-600 to-pink-500",
            delay: 0.3,
            stats: "200+",
            statLabel: "Websites Launched"
        },
        {
            icon: Wifi,
            title: "Telecom Services",
            description: "Innovative and accessible Value added service provider.",
            gradient: "from-orange-600 to-amber-500",
            delay: 0.4,
            stats: "50+",
            statLabel: "Telecom Partners"
        },
        {
            icon: Shield,
            title: "IT & Security Services",
            description: "From Consultancy to complex integrations, we've got you covered.",
            gradient: "from-red-600 to-rose-500",
            delay: 0.5,
            stats: "99.9%",
            statLabel: "Uptime Guarantee"
        },
        {
            icon: LifeBuoy,
            title: "Maintenance & Support",
            description: "We provide customers and partners expert advice, timely problem resolution in case of issues.",
            gradient: "from-indigo-600 to-violet-500",
            delay: 0.6,
            stats: "24/7",
            statLabel: "Support Available"
        },
    ];

    return (
        <section className="relative min-h-[115vh] flex items-center bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
            {/* Advanced Background */}
            {/* <BackgroundGrid />
            <FloatingElements /> */}

            {/* Sophisticated gradient orbs */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-emerald-500/5 blur-3xl"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
                {/* Section Header - Professional */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    {/* Top badge */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200/60 shadow-sm mb-6"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                        <span className="text-sm font-medium text-slate-600">Our Services</span>
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                        <span className="block">We Empower</span>
                        <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                            We Deliver
                        </span>
                    </h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-4 max-w-2xl mx-auto"
                    >
                        <p className="text-lg text-slate-600 leading-relaxed">
                            System Castle is a leading Digital Transformation company focused on Telecom and Fintech solutions in the Middle East, Africa & Asia
                        </p>
                    </motion.div>
                </motion.div>

                {/* Services Grid - Advanced */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.08,
                            },
                        },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="h-full"
                            >
                                <AdvancedTiltCard
                                    index={index}
                                    gradient={service.gradient}
                                    title={service.title}
                                    description={service.description}
                                    stats={service.stats}
                                    statLabel={service.statLabel}
                                >
                                    <Icon className="w-6 h-6 text-white relative z-10" />
                                </AdvancedTiltCard>
                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
}
