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
                className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl py-6 px-8 border border-slate-700 shadow-2xl shadow-slate-900/40 hover:shadow-slate-950/60 transition-shadow duration-300 h-full flex flex-col overflow-hidden"
                style={{
                    transformStyle: "preserve-3d",
                }}
            >
                {/* Sophisticated gradient border on hover */}
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-slate-700/40 via-indigo-500/10 to-slate-700/40 -z-10"
                    />
                )}

                {/* Animated shine reflection */}
                <motion.div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(circle at ${reflectionX} ${reflectionY}, rgba(255,255,255,0.08) 0%, transparent 60%)`,
                        mixBlendMode: "screen",
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
                <div className="absolute -right-4 -top-4 text-8xl font-bold text-slate-700/20 select-none">
                    {String(index + 1).padStart(1, "0")}
                </div>

                {/* Content with 3D depth */}
                <div
                    style={{ transform: "translateZ(30px)" }}
                    className="relative z-10 flex-1 flex flex-col"
                >
                    {/* Icon */}
                    <div className="flex items-center gap-2">
                        <motion.div
                            whileHover={{ scale: 1.05, rotateZ: 3 }}
                            whileTap={{ scale: 0.95 }}
                            className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} shadow-lg flex items-center justify-center mb-0 relative flex-shrink-0`}
                        >
                            <div
                                className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} blur-xl opacity-30`}
                            />
                            {children}
                            <div className="absolute -inset-1 rounded-xl border-white/10" />
                        </motion.div>

                        <h3 className="pb-2 pt-4 text-lg font-semibold text-white tracking-tight">
                            {title}
                        </h3>
                    </div>

                    <p className="mt-4 text-sm text-slate-300 leading-relaxed flex-1">
                        {description}
                    </p>
                </div>

                {/* Bottom right decorative element */}
                <motion.div
                    animate={{
                        rotate: isHovered ? 90 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-3 right-3 text-slate-600"
                >
                    <div className="w-6 h-6 border border-slate-700 rounded-lg flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-slate-500" />
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default function ServicesSectionV3() {
    const services = [
        {
            icon: Globe,
            title: "Digital Solutions",
            description: "From strategy to deployment, we deliver complete digital solutions to streamline operations and enhance customer experiences.",
            gradient: "from-blue-600 to-cyan-500",
            delay: 0.1,
            stats: "94%",
            statLabel: "Success Rate"
        },
        {
            icon: Smartphone,
            title: "Mobile Development",
            description: "Native and cross-platform apps tailored for intuitive mobile experience.",
            gradient: "from-emerald-600 to-teal-500",
            delay: 0.2,
            stats: "150+",
            statLabel: "Apps Delivered"
        },
        {
            icon: Monitor,
            title: "Web Solutions",
            description: "Modern web technologies powering your digital success, engineered for performance and innovation.",
            gradient: "from-purple-600 to-pink-500",
            delay: 0.3,
            stats: "200+",
            statLabel: "Websites Launched"
        },
        {
            icon: Wifi,
            title: "Telecom Services",
            description: "Enabling next-generation connectivity with Advanced BSS solutions to enhance customer experience and business performance.",
            gradient: "from-orange-600 to-amber-500",
            delay: 0.4,
            stats: "50+",
            statLabel: "Telecom Partners"
        },
        {
            icon: Shield,
            title: "IT & Security Services",
            description: "From consultancy to complex integrations, we've got you covered with Smart IT and security solutions, to safeguard your digital ecosystem.",
            gradient: "from-red-600 to-rose-500",
            delay: 0.5,
            stats: "99.9%",
            statLabel: "Uptime Guarantee"
        },
        {
            icon: LifeBuoy,
            title: "Maintenance & Support",
            description: "24/7 support and proactive maintenance keep your systems running smoothly.",
            gradient: "from-indigo-600 to-violet-500",
            delay: 0.6,
            stats: "24/7",
            statLabel: "Support Available"
        },
    ];

    return (
        <section className="relative min-h-[100vh] flex items-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
            {/* Sophisticated gradient orbs */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"
                />

                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-emerald-500/10 blur-3xl"
                />
            </div>

            <div className="page-container relative z-10 w-full section-spacing">
                {/* Section Header - Professional */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-center mb-6"
                >
                    <h2 className="text-4xl italic sm:text-5xl lg:text-5xl font-bold text-white leading-tight">
                        <span className="block">We Empower</span>

                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                            We Deliver
                        </span>
                    </h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-4 max-w-3xl mx-auto"
                    >
                        <p className="text-lg text-pretty text-slate-300 leading-relaxed">
                            System Castle is an AI native global Digital Transformation services provider with experience in Telecom and software development domains in USA, Middle East & Asia.
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
