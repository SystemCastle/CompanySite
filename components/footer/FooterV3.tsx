"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
    MapPin,
    Phone,
    Mail,
    ChevronRight,
    Heart,
    Globe,
    Briefcase,
    Users,
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
    Star,
    ArrowUpRight
} from "lucide-react";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaYoutube,
    FaInstagram,
    FaGithub
} from "react-icons/fa";

export default function FooterV3() {
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

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const socialLinks = [
        { icon: FaFacebookF, href: "#", label: "Facebook" },
        { icon: FaTwitter, href: "#", label: "Twitter" },
        { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
        { icon: FaYoutube, href: "#", label: "YouTube" },
        { icon: FaInstagram, href: "#", label: "Instagram" },
        { icon: FaGithub, href: "#", label: "GitHub" }
    ];

    const serviceLinks = [
        { label: "Web Development", href: "#", icon: Code2 },
        { label: "Mobile Development", href: "#", icon: Smartphone },
        { label: "Cloud & DevOps", href: "#", icon: Cloud },
        { label: "UI/UX Design", href: "#", icon: Palette },
        { label: "IT & Security", href: "#", icon: Shield },
        { label: "Enterprise Solutions", href: "#", icon: Building2 }
    ];

    const quickLinks = [
        { label: "About Us", href: "#" },
        { label: "Our Team", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Contact", href: "#" }
    ];

    const resourceLinks = [
        { label: "Case Studies", href: "#" },
        { label: "Portfolio", href: "#" },
        { label: "Testimonials", href: "#" },
        { label: "FAQ", href: "#" }
    ];

    const locations = [
        {
            flag: "🇦🇪",
            city: "Dubai",
            country: "UAE",
            address: "Suite 409-26, Deyaar Building, Al Barsha 1",
            phone: "+971-4-3927725",
            email: "info@systemcastle.com"
        },
        {
            flag: "🇸🇪",
            city: "Stockholm",
            country: "Sweden",
            address: "Impact Hub Stockholm, Regeringsgatan 65",
            phone: "",
            email: "info@systemcastle.com"
        },
        {
            flag: "🇵🇰",
            city: "Islamabad",
            country: "Pakistan",
            address: "Plot 324, Street no 4, Industrial Area, I-9/3",
            phone: "+92-51-8444567",
            email: "info@systemcastle.com"
        }
    ];

    return (
        <footer ref={sectionRef} className="relative bg-slate-900 text-white overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
                <motion.div
                    animate={{
                        x: [0, 80, 0],
                        y: [0, -40, 0],
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-indigo-600/5 via-purple-600/5 to-pink-600/5 blur-3xl"
                />
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            {/* Back to Top */}
            {showBackToTop && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 p-3 bg-indigo-600 text-white rounded-full shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all hover:scale-110"
                >
                    <ChevronUp className="w-5 h-5" />
                </motion.button>
            )}

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-16">
                    {/* Main Grid - 4 Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {/* Brand Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="space-y-4"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                                    <span className="text-white font-bold text-lg">N</span>
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold tracking-tight text-white">System Castle</h2>
                                    <p className="text-xs text-white/40 font-medium tracking-wider uppercase">Software Agency</p>
                                </div>
                            </div>

                            <p className="text-white/50 text-sm leading-relaxed">
                                We build software people trust. Custom software development for startups and enterprises.
                            </p>

                            <div className="flex items-center gap-3 text-sm">
                                <div className="flex items-center gap-1.5">
                                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                                </div>
                                <span className="text-xs text-white/40">4.9/5</span>
                            </div>

                            {/* Social Icons */}
                            <div className="flex gap-2 pt-2">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        whileHover={{ y: -3, scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/5 hover:border-indigo-500/30 flex items-center justify-center group"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Services Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4 flex items-center gap-2">
                                <Zap className="w-3.5 h-3.5 text-indigo-400" />
                                Services
                            </h3>
                            <ul className="space-y-2.5">
                                {serviceLinks.map((service, index) => {
                                    const Icon = service.icon;
                                    return (
                                        <motion.li
                                            key={index}
                                            whileHover={{ x: 3 }}
                                        >
                                            <Link
                                                href={service.href}
                                                className="flex items-center gap-2 text-white/40 hover:text-white text-sm transition-all group"
                                            >
                                                <Icon className="w-3.5 h-3.5 text-indigo-400/40 group-hover:text-indigo-400 transition-colors" />
                                                <span>{service.label}</span>
                                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                                            </Link>
                                        </motion.li>
                                    );
                                })}
                            </ul>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4 flex items-center gap-2">
                                <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
                                Company
                            </h3>
                            <ul className="space-y-2.5">
                                {quickLinks.map((link, index) => (
                                    <motion.li
                                        key={index}
                                        whileHover={{ x: 3 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-white/40 hover:text-white text-sm transition-all"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>

                            <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4 mt-6 flex items-center gap-2">
                                <Globe className="w-3.5 h-3.5 text-indigo-400" />
                                Resources
                            </h3>
                            <ul className="space-y-2.5">
                                {resourceLinks.map((link, index) => (
                                    <motion.li
                                        key={index}
                                        whileHover={{ x: 3 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-white/40 hover:text-white text-sm transition-all"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Contact & Locations */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="space-y-6"
                        >
                            <div>
                                <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                                    Locations
                                </h3>
                                <div className="space-y-4">
                                    {locations.map((location, index) => (
                                        <div key={index} className="space-y-1">
                                            <div className="flex items-center gap-2">
                                                <span className="text-lg">{location.flag}</span>
                                                <span className="text-sm font-medium text-white/80">{location.city}</span>
                                                <span className="text-xs text-white/30">{location.country}</span>
                                            </div>
                                            <p className="text-xs text-white/30 leading-relaxed pl-7">
                                                {location.address}
                                            </p>
                                            {location.phone && (
                                                <div className="flex items-center gap-2 text-xs text-white/30 pl-7">
                                                    <Phone className="w-3 h-3" />
                                                    <span>{location.phone}</span>
                                                </div>
                                            )}
                                            <div className="flex items-center gap-2 text-xs text-white/30 pl-7">
                                                <Mail className="w-3 h-3" />
                                                <span>{location.email}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-white/5 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-white/20">
                            © {new Date().getFullYear()} System Castle. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6 text-xs text-white/20">
                            <Link href="#" className="hover:text-white/40 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="hover:text-white/40 transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="#" className="hover:text-white/40 transition-colors">
                                Cookies
                            </Link>
                            <span className="flex items-center gap-1">
                                Made with <Heart className="w-3 h-3 text-red-400 fill-red-400/20" /> by System Castle
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}