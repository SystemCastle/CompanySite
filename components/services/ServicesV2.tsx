"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
    Globe,
    Smartphone,
    Monitor,
    Wifi,
    Shield,
    LifeBuoy,
    Sparkles,
    ArrowRight,
    Zap
} from "lucide-react";

// 3D Tilt Card Component
interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
}

function TiltCard({ children, className = "" }: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

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
            className={`relative ${className}`}
        >
            <motion.div
                animate={{
                    scale: isHovered ? 1.02 : 1,
                    y: isHovered ? -4 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col"
                style={{
                    transformStyle: "preserve-3d",
                }}
            >
                {/* Glow effect on hover */}
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute -inset-px bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl -z-10"
                    />
                )}
                {children}
            </motion.div>
        </motion.div>
    );
}

// Floating Particles Background
function FloatingParticles() {
    const particles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-gradient-to-r from-indigo-400/30 to-purple-400/30"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                        opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

// Animated Gradient Orbs
function GradientOrbs() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
                className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"
                animate={{
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-emerald-500/10 blur-3xl"
                animate={{
                    x: [0, -40, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}

export default function ServicesV2() {
    const services = [
        {
            icon: Globe,
            title: "Digital Solutions",
            description: "Ensure sustained traffic to your website. Visitors become leads driving business growth.",
            gradient: "from-blue-500 to-cyan-400",
            delay: 0.1,
        },
        {
            icon: Smartphone,
            title: "Mobile Development",
            description: "We Deliver Solutions that our client's users can interact online, anytime, anywhere.",
            gradient: "from-green-500 to-emerald-400",
            delay: 0.2,
        },
        {
            icon: Monitor,
            title: "Web Solutions",
            description: "Bring your brand's story to life through enhanced content, user experience, and web/app design.",
            gradient: "from-purple-500 to-pink-400",
            delay: 0.3,
        },
        {
            icon: Wifi,
            title: "Telecom Services",
            description: "Innovative and accessible Value added service provider.",
            gradient: "from-orange-500 to-amber-400",
            delay: 0.4,
        },
        {
            icon: Shield,
            title: "IT & Security Services",
            description: "From Consultancy to complex integrations, we've got you covered.",
            gradient: "from-red-500 to-rose-400",
            delay: 0.5,
        },
        {
            icon: LifeBuoy,
            title: "Maintenance & Support",
            description: "We provide customers and partners expert advice, timely problem resolution in case of issues.",
            gradient: "from-indigo-500 to-violet-400",
            delay: 0.6,
        },
    ];

    return (
        <section className="relative min-h-[115vh] flex items-center bg-slate-50 overflow-hidden">
            {/* Background Elements */}
            <GradientOrbs />
            <FloatingParticles />

            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
                {/* Section Header with Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-indigo-50/80 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-100 mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-indigo-600" />
                        <span className="text-sm font-medium text-indigo-600">Our Expertise</span>
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
                        We Empower <br className="sm:hidden" />
                        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            We Deliver
                        </span>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        System Castle is a leading Digital Transformation company focused on Telecom and Fintech solutions in the Middle East, Africa & Asia
                    </motion.p>
                </motion.div>

                {/* Services Grid with Staggered Animation */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
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
                                transition={{ duration: 0.5, delay: service.delay }}
                                className="h-full"
                            >
                                <TiltCard className="h-full">
                                    {/* Icon with 3D effect and gradient background */}
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotateZ: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg shadow-${service.gradient.split(' ')[1]}/20 flex items-center justify-center mb-5 relative flex-shrink-0`}
                                    >
                                        {/* Glow behind icon */}
                                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} blur-xl opacity-50`} />
                                        <Icon className="w-7 h-7 text-white relative z-10" />

                                        {/* Decorative ring */}
                                        <motion.div
                                            animate={{
                                                rotate: 360,
                                            }}
                                            transition={{
                                                duration: 20,
                                                repeat: Infinity,
                                                ease: "linear",
                                            }}
                                            className="absolute -inset-2 rounded-2xl border-2 border-white/20 border-dashed"
                                        />
                                    </motion.div>

                                    {/* Content with 3D depth - flex-1 to fill remaining space */}
                                    <div style={{ transform: "translateZ(20px)" }} className="flex-1 flex flex-col">
                                        <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed flex-1">
                                            {service.description}
                                        </p>

                                        {/* Learn More Link with animation */}
                                        <motion.a
                                            href="#"
                                            whileHover={{ x: 5 }}
                                            className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700 transition-colors mt-4 group/link"
                                        >
                                            <span>Learn More</span>
                                            <motion.span
                                                animate={{ x: [0, 4, 0] }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                }}
                                            >
                                                <ArrowRight className="w-4 h-4" />
                                            </motion.span>
                                        </motion.a>
                                    </div>

                                    {/* Top-right decorative badge */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 + index * 0.1 }}
                                        className="absolute top-4 right-4"
                                    >
                                        <div className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-2 py-1 rounded-full">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                    </motion.div>
                                </TiltCard>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <div className="inline-flex items-center gap-6 bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-full px-6 py-3 shadow-lg">
                        <span className="text-sm text-slate-600">Ready to transform your business?</span>
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.05 }}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
                        >
                            <Zap className="w-4 h-4" />
                            Get Started Now
                            <ArrowRight className="w-4 h-4" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}