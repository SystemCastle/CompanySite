"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Menu,
    X,
    ChevronDown,
    Sparkles,
    Zap,
    Shield,
    Cloud,
    Smartphone,
    Monitor,
    Palette,
    Building2,
    ArrowRight,
    Briefcase,
    Users,
    Lightbulb,
    FileText,
    Mail
} from "lucide-react";
import Link from "next/link";

// Service data with icons and descriptions
const serviceCategories = [
    {
        title: "Web Development",
        icon: Monitor,
        description: "Build powerful web experiences",
        items: [
            "Web Applications",
            "E-commerce Solutions",
            "CMS Development",
            "Custom Portals",
            "Progressive Web Apps",
        ],
    },
    {
        title: "Mobile Development",
        icon: Smartphone,
        description: "Native & cross-platform apps",
        items: [
            "iOS App Development",
            "Android App Development",
            "Cross Platform Apps",
            "Flutter Development",
            "App Maintenance",
        ],
    },
    {
        title: "Cloud & DevOps",
        icon: Cloud,
        description: "Scalable cloud infrastructure",
        items: [
            "AWS Services",
            "Azure Services",
            "DevOps Consulting",
            "CI/CD Pipelines",
            "Infrastructure as Code",
        ],
    },
    {
        title: "UI/UX Design",
        icon: Palette,
        description: "Beautiful, user-centric design",
        items: [
            "User Experience Design",
            "User Interface Design",
            "Product Design",
            "Design Systems",
            "Prototyping",
        ],
    },
    {
        title: "IT & Security",
        icon: Shield,
        description: "Enterprise-grade security",
        items: [
            "Security Testing",
            "Penetration Testing",
            "Network Security",
            "Cloud Security",
            "IT Consulting",
        ],
    },
    {
        title: "Enterprise Solutions",
        icon: Building2,
        description: "Transform your business",
        items: [
            "ERP Solutions",
            "CRM Solutions",
            "Business Intelligence",
            "System Integration",
            "Legacy Modernization",
        ],
    },
];

const navLinks = [
    { label: "Services", href: "#", hasMega: true },
    { label: "Work", href: "#", icon: Briefcase },
    { label: "Process", href: "#", icon: Zap },
    { label: "About", href: "#", icon: Users },
    { label: "Insights", href: "#", icon: Lightbulb },
    { label: "Contact", href: "#", icon: Mail },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("Services");
    const [hoveredService, setHoveredService] = useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false);
                setIsServicesOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
                ? "bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-slate-200/50"
                : "bg-white/80 backdrop-blur-md border-b border-slate-200/20"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo with gradient */}
                    <Link
                        href="/"
                        className="group flex items-center gap-2 text-2xl font-bold tracking-tight"
                    >
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            SYSTEM CASTLE
                        </span>
                        <span className="text-xs font-normal text-slate-400 hidden sm:inline-block">
                            ✦
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-0.5">
                        {navLinks.map((link) => (
                            <div key={link.label} className="relative group">
                                {link.hasMega ? (
                                    <>
                                        <button
                                            onClick={() => setActiveLink(link.label)}
                                            className={`nav-link px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${activeLink === link.label
                                                ? "text-indigo-600 bg-indigo-50/80 shadow-sm"
                                                : "text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/50"
                                                }`}
                                        >
                                            {link.label}
                                            <ChevronDown className={`w-4 h-4 transition-all duration-300 ${activeLink === link.label ? "rotate-180" : "group-hover:rotate-180"
                                                }`} />
                                        </button>

                                        {/* Mega Menu Panel - Modern Design */}
                                        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out">
                                            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-indigo-500/10 border border-slate-200/50 p-6 w-[820px] xl:w-[920px]">
                                                {/* Header */}
                                                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-slate-800">Our Services</h3>
                                                        <p className="text-sm text-slate-500">Comprehensive solutions for your digital needs</p>
                                                    </div>
                                                    <Link
                                                        href="#"
                                                        className="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group"
                                                    >
                                                        View all
                                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                                    </Link>
                                                </div>

                                                {/* Services Grid */}
                                                <div className="grid grid-cols-3 gap-4">
                                                    {serviceCategories.map((category, index) => {
                                                        const Icon = category.icon;
                                                        const isHovered = hoveredService === index;

                                                        return (
                                                            <div
                                                                key={category.title}
                                                                onMouseEnter={() => setHoveredService(index)}
                                                                onMouseLeave={() => setHoveredService(null)}
                                                                className="group/service relative rounded-xl p-4 transition-all duration-300 cursor-pointer"
                                                                style={{
                                                                    background: isHovered
                                                                        ? "linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(168, 85, 247, 0.08))"
                                                                        : "transparent"
                                                                }}
                                                            >
                                                                {/* Animated background glow */}
                                                                {isHovered && (
                                                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/5 to-purple-500/5 blur-xl" />
                                                                )}

                                                                <div className="relative z-10">
                                                                    <div className="flex items-start gap-3 mb-2">
                                                                        <div className={`p-2 rounded-lg transition-all duration-300 ${isHovered
                                                                            ? "bg-indigo-100 text-indigo-600 shadow-sm"
                                                                            : "bg-slate-100 text-slate-600"
                                                                            }`}>
                                                                            <Icon className="w-5 h-5" />
                                                                        </div>
                                                                        <div>
                                                                            <h4 className="text-sm font-semibold text-slate-800">
                                                                                {category.title}
                                                                            </h4>
                                                                            <p className="text-xs text-slate-500">{category.description}</p>
                                                                        </div>
                                                                    </div>

                                                                    <ul className="space-y-1 ml-10">
                                                                        {category.items.slice(0, 4).map((item) => (
                                                                            <li key={item}>
                                                                                <Link
                                                                                    href="#"
                                                                                    className="text-sm text-slate-600 hover:text-indigo-600 transition-colors flex items-center gap-1.5 group/link"
                                                                                >
                                                                                    <span className="w-1 h-1 rounded-full bg-slate-300 group-hover/link:bg-indigo-400 transition-colors" />
                                                                                    {item}
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                        {category.items.length > 4 && (
                                                                            <li className="text-xs text-slate-400 ml-2">+ more</li>
                                                                        )}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>

                                                {/* Bottom CTA */}
                                                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                                                    <div className="flex items-center gap-4">
                                                        <div className="flex -space-x-2">
                                                            {[1, 2, 3].map((i) => (
                                                                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 border-2 border-white flex items-center justify-center text-xs text-white font-medium">
                                                                    {String.fromCharCode(64 + i)}
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <span className="text-sm text-slate-500">
                                                            Trusted by <span className="font-semibold text-slate-700">200+</span> companies
                                                        </span>
                                                    </div>
                                                    <Link
                                                        href="#"
                                                        className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105"
                                                    >
                                                        Start your project
                                                        <Sparkles className="w-4 h-4" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        onClick={() => setActiveLink(link.label)}
                                        className={`nav-link px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${activeLink === link.label
                                            ? "text-indigo-600 bg-indigo-50/80 shadow-sm"
                                            : "text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/50"
                                            }`}
                                    >
                                        {link.icon && <link.icon className="w-4 h-4" />}
                                        {link.label}
                                    </Link>
                                )}
                            </div>
                        ))}

                        {/* CTA Button */}
                        <Link
                            href="#"
                            className="ml-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                        >
                            <Sparkles className="w-4 h-4" />
                            Let's Talk
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2.5 rounded-xl hover:bg-indigo-50 transition-colors relative"
                        aria-label="Toggle menu"
                    >
                        <div className="relative w-6 h-6">
                            <motion.div
                                animate={isMobileMenuOpen ? "open" : "closed"}
                                className="absolute inset-0"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-6 h-6 text-indigo-600" />
                                ) : (
                                    <Menu className="w-6 h-6 text-slate-700" />
                                )}
                            </motion.div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden fixed inset-x-0 top-16 bg-white/95 backdrop-blur-xl border-t border-slate-200/50 overflow-y-auto max-h-[calc(100vh-4rem)]"
                    >
                        <div className="max-w-sm mx-auto px-4 py-6 space-y-1">
                            {/* Services with Submenu */}
                            <div>
                                <button
                                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                                    className="w-full flex items-center justify-between py-3.5 px-3 hover:bg-indigo-50/50 rounded-xl transition-colors"
                                >
                                    <span className="font-medium text-slate-800">Services</span>
                                    <motion.div
                                        animate={{ rotate: isServicesOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown className="w-5 h-5 text-slate-500" />
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {isServicesOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pl-3 mt-2 space-y-4 border-l-2 border-indigo-200">
                                                {serviceCategories.map((category) => {
                                                    const Icon = category.icon;
                                                    return (
                                                        <div key={category.title}>
                                                            <div className="flex items-center gap-2 mb-1">
                                                                <Icon className="w-4 h-4 text-indigo-500" />
                                                                <h4 className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                                                                    {category.title}
                                                                </h4>
                                                            </div>
                                                            <ul className="ml-6 space-y-1">
                                                                {category.items.map((item) => (
                                                                    <li key={item}>
                                                                        <Link
                                                                            href="#"
                                                                            className="block py-1.5 text-sm text-slate-600 hover:text-indigo-600 transition-colors"
                                                                        >
                                                                            {item}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    );
                                                })}
                                                <Link
                                                    href="#"
                                                    className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors pb-2"
                                                >
                                                    View all services
                                                    <ArrowRight className="w-4 h-4" />
                                                </Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Other Nav Links */}
                            {navLinks
                                .filter((link) => !link.hasMega)
                                .map((link) => {
                                    const Icon = link.icon;
                                    return (
                                        <Link
                                            key={link.label}
                                            href={link.href}
                                            onClick={() => {
                                                setActiveLink(link.label);
                                                setIsMobileMenuOpen(false);
                                            }}
                                            className="flex items-center gap-3 py-3.5 px-3 font-medium text-slate-700 hover:bg-indigo-50/50 rounded-xl transition-colors"
                                        >
                                            {Icon && <Icon className="w-5 h-5 text-slate-400" />}
                                            {link.label}
                                        </Link>
                                    );
                                })}

                            {/* Mobile CTA */}
                            <Link
                                href="#"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-4 block bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center px-6 py-3.5 rounded-xl font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <Sparkles className="w-4 h-4" />
                                    Let's Talk
                                </span>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}