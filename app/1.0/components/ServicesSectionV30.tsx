"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

// Advanced 3D Tilt Card with Reflection
function AdvancedTiltCard({
    children,
    index,
    gradient,
    title,
    description,
}: {
    children: React.ReactNode;
    index: number;
    gradient: string;
    title: string;
    description: string;
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
                className="relative bg-white rounded-2xl py-6 px-8 border border-slate-200/60 shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col overflow-hidden"
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
                <div className="absolute -right-4 -top-4 text-8xl font-bold text-gray-200/30 select-none">
                    {String(index + 1).padStart(1, '0')}
                </div>

                {/* Content with 3D depth */}
                <div style={{ transform: "translateZ(30px)" }} className="relative z-10 flex-1 flex flex-col">
                    {/* Icon with advanced styling */}
                    <motion.div
                        whileHover={{ scale: 1.05, rotateZ: 3 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center mb-0 relative flex-shrink-0`}
                    >
                        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br blur-xl opacity-30`} />
                        {children}
                        <div className="absolute -inset-1 rounded-xl border-2 border-white/10" />
                    </motion.div>

                    <h3 className="pb-2 pt-4 text-lg font-semibold text-slate-900 tracking-tight">
                        {title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed flex-1">
                        {description}
                    </p>

                    {/* Stats Badge */}
                    {/* <div className="mt-2 mb-4 flex items-center gap-3">
                        <div className="flex items-center gap-1.5">
                            <span className="text-md font-bold text-slate-800">{stats}</span>
                            <span className="text-xs text-slate-500">{statLabel}</span>
                        </div>
                    </div> */}
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

export default function ServicesSectionV30() {
    const services = [
        {
            iconSrc: "/icons/digitalization.webp",
            title: "Digital Solutions",
            description: "From strategy to deployment, we deliver complete digital solutions to streamline operations and enhance customer experiences.",
            gradient: "from-blue-600 to-cyan-500",
            delay: 0.1,
        },
        {
            iconSrc: "/icons/mobile.webp",
            title: "Mobile Development",
            description: "Native and cross-platform apps tailored for intuitive mobile experience.",
            gradient: "from-emerald-600 to-teal-500",
            delay: 0.2,
        },
        {
            iconSrc: "/icons/web.webp",
            title: "Web Solutions",
            description: "Modern web technologies powering your digital success, engineered for performance and innovation.",
            gradient: "from-purple-600 to-pink-500",
            delay: 0.3,
        },
        {
            iconSrc: "/icons/telecom.webp",
            title: "Telecom Services",
            description: "Enabling next-generation connectivity with Advanced BSS solutions to enhance customer experience and business performance.",
            gradient: "from-orange-600 to-amber-500",
            delay: 0.4,
        },
        {
            iconSrc: "/icons/security.webp",
            title: "IT & Security Services",
            description: "From consultancy to complex integrations, we've got you covered with Smart IT and security solutions, to safeguard your digital ecosystem.",
            gradient: "from-red-600 to-rose-500",
            delay: 0.5,
        },
        {
            iconSrc: "/icons/support.webp",
            title: "Maintenance & Support",
            description: "24/7 support and proactive maintenance keep your systems running smoothly.",
            gradient: "from-indigo-600 to-violet-500",
            delay: 0.6,
        },
    ];

    return (
        <section className="relative min-h-[100vh] flex items-center bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">

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
                    className="text-center mb-6"
                >

                    <h2 className="text-4xl italic sm:text-5xl lg:text-5xl font-bold text-slate-900 leading-tight">
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
                    {services.map((service, index) => (
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
                            >
                                <Image
                                    src={service.iconSrc}
                                    alt={`${service.title} icon`}
                                    width={100}
                                    height={100}
                                    className="relative z-10 h-16 w-16 object-contain"
                                />
                            </AdvancedTiltCard>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
