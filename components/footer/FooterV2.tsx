"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    ArrowRight,
    MapPin,
    Phone,
    Mail,
    Send,
    ChevronRight,
    Sparkles,
    Heart,
    Globe,
    Briefcase,
    Users,
    Lightbulb,
    Shield,
    Code2,
    Smartphone,
    Cloud,
    Palette,
    Building2,
    Award,
    Clock,
    Zap,
    ChevronUp,
    CheckCircle2,
    Rocket,
    Star,
    TrendingUp,
    Coffee,
    MessageCircle,
    Headphones,
    BookOpen,
    Play,
    ExternalLink,
    ArrowUpRight,
    MoveUpRight,
    Timer,
    Route,
    Gift
} from "lucide-react";

export default function FooterV2() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail("");
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const socialLinks = [
        // { icon: Facebook, href: "#", label: "Facebook", color: "#1877f2" },
        { icon: Timer, href: "#", label: "Twitter", color: "#1da1f2" },
        // { icon: Linkedin, href: "#", label: "LinkedIn", color: "#0a66c2" },
        { icon: Route, href: "#", label: "YouTube", color: "#ff0000" },
        { icon: Star, href: "#", label: "Instagram", color: "#e4405f" },
        { icon: Gift, href: "#", label: "GitHub", color: "#333" }
    ];

    const quickLinks = [
        { label: "About Us", href: "#", icon: Users },
        { label: "Our Team", href: "#", icon: Briefcase },
        { label: "Careers", href: "#", icon: Rocket },
        { label: "Blog", href: "#", icon: BookOpen },
        { label: "Contact", href: "#", icon: MessageCircle }
    ];

    const serviceLinks = [
        { label: "Web Development", href: "#", icon: Code2 },
        { label: "Mobile Development", href: "#", icon: Smartphone },
        { label: "Cloud & DevOps", href: "#", icon: Cloud },
        { label: "UI/UX Design", href: "#", icon: Palette },
        { label: "IT & Security", href: "#", icon: Shield },
        { label: "Enterprise Solutions", href: "#", icon: Building2 }
    ];

    const resourceLinks = [
        { label: "Case Studies", href: "#" },
        { label: "Portfolio", href: "#" },
        { label: "Testimonials", href: "#" },
        { label: "FAQ", href: "#" },
        { label: "Support", href: "#" }
    ];

    const stats = [
        { value: "150+", label: "Happy Clients", icon: Users },
        { value: "200+", label: "Projects Delivered", icon: Briefcase },
        { value: "98%", label: "Success Rate", icon: TrendingUp },
        { value: "10+", label: "Years Experience", icon: Award }
    ];

    const locations = [
        { flag: "🇦🇪", city: "Dubai", country: "UAE", gradient: "from-blue-500/20 to-cyan-500/20" },
        { flag: "🇸🇪", city: "Stockholm", country: "Sweden", gradient: "from-purple-500/20 to-pink-500/20" },
        { flag: "🇵🇰", city: "Islamabad", country: "Pakistan", gradient: "from-emerald-500/20 to-teal-500/20" }
    ];

    return (
        <footer ref={sectionRef} className="relative bg-slate-950 text-white overflow-hidden">
            {/* Premium Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />

                {/* Animated Orbs */}
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-600/10 blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-emerald-600/10 blur-3xl"
                />

                {/* Geometric Pattern */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute top-1/3 right-1/3 w-96 h-96 border border-indigo-500/30 rounded-full" />
                    <div className="absolute bottom-1/3 left-1/3 w-64 h-64 border border-purple-500/30 rotate-45" />
                </div>

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            {/* Back to Top Button */}
            <AnimatePresence>
                {showBackToTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all hover:scale-110"
                    >
                        <ChevronUp className="w-5 h-5" />
                    </motion.button>
                )}
            </AnimatePresence>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-16">
                    {/* Top Section - Brand + Stats */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 pb-16 border-b border-white/5">
                        {/* Brand */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-1 space-y-5"
                        >
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                                        <span className="text-white font-bold text-2xl">N</span>
                                    </div>
                                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-slate-950 animate-pulse" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                                        System Castle
                                    </h2>
                                    <p className="text-xs text-white/40 font-medium tracking-wider uppercase">Software Agency</p>
                                </div>
                            </div>

                            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                                We build software people trust. Custom software development for startups and enterprises. Scalable, secure and built to last.
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {locations.map((location, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -2 }}
                                        className={`flex items-center gap-2 bg-gradient-to-r ${location.gradient} backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/5`}
                                    >
                                        <span className="text-sm">{location.flag}</span>
                                        <span className="text-xs text-white/70">{location.city}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="lg:col-span-2"
                        >
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {stats.map((stat, index) => {
                                    const Icon = stat.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            whileHover={{ y: -4, scale: 1.02 }}
                                            className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/5 hover:border-indigo-500/20 transition-all"
                                        >
                                            <Icon className="w-5 h-5 text-indigo-400 mx-auto mb-2" />
                                            <p className="text-xl font-bold text-white">{stat.value}</p>
                                            <p className="text-xs text-white/50">{stat.label}</p>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>

                    {/* Middle Section - Links */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-16">
                        {/* Services */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-4"
                        >
                            <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4 flex items-center gap-2">
                                <Zap className="w-4 h-4 text-indigo-400" />
                                Services
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {serviceLinks.map((service, index) => {
                                    const Icon = service.icon;
                                    return (
                                        <motion.div
                                            key={index}
                                            whileHover={{ x: 4 }}
                                            className="group"
                                        >
                                            <Link
                                                href={service.href}
                                                className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-all"
                                            >
                                                <Icon className="w-3.5 h-3.5 text-indigo-400/50 group-hover:text-indigo-400 transition-colors" />
                                                <span>{service.label}</span>
                                                <ArrowUpRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-all" />
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="lg:col-span-3"
                        >
                            <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4 flex items-center gap-2">
                                <Users className="w-4 h-4 text-indigo-400" />
                                Company
                            </h3>
                            <ul className="space-y-2.5">
                                {quickLinks.map((link, index) => {
                                    const Icon = link.icon;
                                    return (
                                        <motion.li
                                            key={index}
                                            whileHover={{ x: 4 }}
                                        >
                                            <Link
                                                href={link.href}
                                                className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-all group"
                                            >
                                                <Icon className="w-3.5 h-3.5 text-indigo-400/50" />
                                                <span>{link.label}</span>
                                            </Link>
                                        </motion.li>
                                    );
                                })}
                            </ul>
                        </motion.div>

                        {/* Resources */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="lg:col-span-2"
                        >
                            <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4 flex items-center gap-2">
                                <BookOpen className="w-4 h-4 text-indigo-400" />
                                Resources
                            </h3>
                            <ul className="space-y-2.5">
                                {resourceLinks.map((link, index) => (
                                    <motion.li
                                        key={index}
                                        whileHover={{ x: 4 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-white/50 hover:text-white text-sm transition-all"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Newsletter */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="lg:col-span-3"
                        >
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/5">
                                <h3 className="text-sm font-semibold text-white/90 mb-1 flex items-center gap-2">
                                    <Sparkles className="w-4 h-4 text-indigo-400" />
                                    Stay Updated
                                </h3>
                                <p className="text-xs text-white/40 mb-4">
                                    Get the latest insights and updates from our team.
                                </p>
                                <form onSubmit={handleSubscribe} className="space-y-3">
                                    <div className="flex gap-2">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            required
                                            className="flex-1 px-3 py-2.5 bg-white/10 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-indigo-500/50 transition-all text-sm"
                                        />
                                        <motion.button
                                            type="submit"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all flex items-center gap-2 text-sm whitespace-nowrap"
                                        >
                                            {subscribed ? (
                                                <CheckCircle2 className="w-4 h-4" />
                                            ) : (
                                                <Send className="w-4 h-4" />
                                            )}
                                        </motion.button>
                                    </div>
                                    <p className="text-[10px] text-white/30 flex items-center gap-1">
                                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                        No spam. Unsubscribe anytime.
                                    </p>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 py-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-6">
                            <p className="text-xs text-white/30">
                                © {new Date().getFullYear()} System Castle. All rights reserved.
                            </p>
                            <div className="flex items-center gap-4 text-xs text-white/30">
                                <Link href="#" className="hover:text-white/60 transition-colors">
                                    Privacy
                                </Link>
                                <Link href="#" className="hover:text-white/60 transition-colors">
                                    Terms
                                </Link>
                                <Link href="#" className="hover:text-white/60 transition-colors">
                                    Cookies
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-xs text-white/30">Follow us:</span>
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/5 hover:border-indigo-500/30 group"
                                    aria-label={social.label}
                                    style={{ '--social-color': social.color } as React.CSSProperties}
                                >
                                    <social.icon className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-colors" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div className="mt-4 text-center">
                        <p className="text-[10px] text-white/20 flex items-center justify-center gap-1">
                            Made with <Heart className="w-3 h-3 text-red-400 fill-red-400/20 animate-pulse" /> by System Castle
                            <span className="mx-2">•</span>
                            <span>Built with ❤️ for innovation</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}