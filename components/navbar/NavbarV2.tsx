"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Menu,
    X,
    ChevronDown,
    ArrowRight,
    Code2,
    Smartphone,
    Cloud,
    Palette,
    Shield,
    Building2,
    Globe,
    Layers,
    Zap,
    Sparkles,
    Star,
    Award,
    CheckCircle,
    TrendingUp,
    Coffee,
    Briefcase,
    Users,
    Lightbulb,
    FileText,
    Mail,
    ChevronRight,
    ExternalLink,
} from "lucide-react";
import Link from "next/link";

// Service data with enhanced metadata
const serviceCategories = [
    {
        title: "Web Development",
        icon: Code2,
        color: "from-blue-500 to-cyan-400",
        badge: "Popular",
        description: "Scalable web solutions",
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
        color: "from-green-500 to-emerald-400",
        badge: "New",
        description: "Native & cross-platform",
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
        color: "from-orange-500 to-amber-400",
        badge: "Enterprise",
        description: "Scalable infrastructure",
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
        color: "from-purple-500 to-pink-400",
        badge: "Creative",
        description: "Beautiful user experiences",
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
        color: "from-red-500 to-rose-400",
        badge: "Secure",
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
        color: "from-indigo-500 to-violet-400",
        badge: "Premium",
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
    { label: "Process", href: "#", icon: Layers },
    { label: "About", href: "#", icon: Users },
    { label: "Insights", href: "#", icon: TrendingUp },
    { label: "Contact", href: "#", icon: Mail },
];

// Quick action items
const quickActions = [
    { label: "Book a Call", icon: Coffee, color: "bg-amber-50 text-amber-600" },
    { label: "View Portfolio", icon: Star, color: "bg-purple-50 text-purple-600" },
    { label: "Get a Quote", icon: Sparkles, color: "bg-indigo-50 text-indigo-600" },
];

export default function NavbarV2() {
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
                ? "bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] border-b border-slate-100"
                : "bg-white/70 backdrop-blur-xl border-b border-slate-200/20"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-[72px]">
                    {/* Logo with badge */}
                    <Link
                        href="/"
                        className="group flex items-center gap-3"
                    >
                        <div className="relative">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
                                <span className="text-white font-bold text-lg">N</span>
                            </div>
                            <div className="absolute -top-1 -right-1 w-3 h-3">
                                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/50"></span>
                                <span className="absolute inset-0 rounded-full bg-emerald-400"></span>
                            </div>
                        </div>
                        <div>
                            <span className="text-xl font-bold tracking-tight text-slate-800">System Castle</span>
                            <span className="hidden sm:inline-block ml-2 text-[10px] font-medium text-white bg-gradient-to-r from-indigo-500 to-purple-500 px-2 py-0.5 rounded-full">
                                v2.0
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <div key={link.label} className="relative group">
                                {link.hasMega ? (
                                    <>
                                        <button
                                            onClick={() => setActiveLink(link.label)}
                                            className={`nav-link px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${activeLink === link.label
                                                ? "text-indigo-600 bg-indigo-50/70"
                                                : "text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/50"
                                                }`}
                                        >
                                            {link.label}
                                            <ChevronDown className={`w-4 h-4 transition-all duration-300 ${activeLink === link.label ? "rotate-180" : "group-hover:rotate-180"
                                                }`} />
                                        </button>

                                        {/* Modern Mega Menu - Card Layout */}
                                        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out">
                                            <div className="bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 w-[880px] xl:w-[960px] overflow-hidden">
                                                <div className="grid grid-cols-4 gap-0">
                                                    {/* Main Services Grid */}
                                                    <div className="col-span-3 p-6">
                                                        <div className="grid grid-cols-2 gap-3">
                                                            {serviceCategories.map((category, index) => {
                                                                const Icon = category.icon;
                                                                const isHovered = hoveredService === index;
                                                                return (
                                                                    <motion.div
                                                                        key={category.title}
                                                                        onMouseEnter={() => setHoveredService(index)}
                                                                        onMouseLeave={() => setHoveredService(null)}
                                                                        className="relative group/service rounded-xl p-4 transition-all duration-300 cursor-pointer border border-transparent hover:border-indigo-200"
                                                                        style={{
                                                                            background: isHovered
                                                                                ? "linear-gradient(135deg, rgba(99, 102, 241, 0.04), rgba(168, 85, 247, 0.04))"
                                                                                : "transparent",
                                                                        }}
                                                                        whileHover={{ x: 4 }}
                                                                    >
                                                                        <div className="flex items-start gap-3">
                                                                            <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} shadow-lg shadow-${category.color.split(' ')[1]}/20`}>
                                                                                <Icon className="w-5 h-5 text-white" />
                                                                            </div>
                                                                            <div className="flex-1 min-w-0">
                                                                                <div className="flex items-center gap-2">
                                                                                    <h4 className="text-sm font-semibold text-slate-800">
                                                                                        {category.title}
                                                                                    </h4>
                                                                                    {category.badge && (
                                                                                        <span className="text-[10px] font-medium text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded-full">
                                                                                            {category.badge}
                                                                                        </span>
                                                                                    )}
                                                                                </div>
                                                                                <p className="text-xs text-slate-500 mt-0.5">
                                                                                    {category.description}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="mt-3 ml-10 space-y-1">
                                                                            {category.items.slice(0, 3).map((item) => (
                                                                                <Link
                                                                                    key={item}
                                                                                    href="#"
                                                                                    className="flex items-center gap-2 text-sm text-slate-600 hover:text-indigo-600 transition-colors group/link"
                                                                                >
                                                                                    <span className="w-1 h-1 rounded-full bg-slate-300 group-hover/link:bg-indigo-400 transition-colors" />
                                                                                    {item}
                                                                                </Link>
                                                                            ))}
                                                                            {category.items.length > 3 && (
                                                                                <span className="text-xs text-slate-400 ml-2">+{category.items.length - 3} more</span>
                                                                            )}
                                                                        </div>
                                                                    </motion.div>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>

                                                    {/* Sidebar - Quick Actions */}
                                                    <div className="col-span-1 bg-gradient-to-b from-indigo-50/50 to-purple-50/50 p-6 border-l border-slate-100">
                                                        <div className="space-y-6">
                                                            <div>
                                                                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                                                                    Quick Actions
                                                                </h4>
                                                                <div className="space-y-2">
                                                                    {quickActions.map((action) => {
                                                                        const ActionIcon = action.icon;
                                                                        return (
                                                                            <Link
                                                                                key={action.label}
                                                                                href="#"
                                                                                className="flex items-center gap-3 p-3 rounded-xl bg-white/70 hover:bg-white transition-all hover:shadow-sm group/action"
                                                                            >
                                                                                <div className={`p-1.5 rounded-lg ${action.color}`}>
                                                                                    <ActionIcon className="w-4 h-4" />
                                                                                </div>
                                                                                <span className="text-sm font-medium text-slate-700 group-hover/action:text-indigo-600 transition-colors">
                                                                                    {action.label}
                                                                                </span>
                                                                                <ChevronRight className="w-4 h-4 text-slate-300 ml-auto group-hover/action:translate-x-1 transition-transform" />
                                                                            </Link>
                                                                        );
                                                                    })}
                                                                </div>
                                                            </div>

                                                            <div className="pt-4 border-t border-slate-200/50">
                                                                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-4 text-white">
                                                                    <div className="flex items-center gap-2 mb-2">
                                                                        <Zap className="w-4 h-4" />
                                                                        <span className="text-sm font-semibold">Need help?</span>
                                                                    </div>
                                                                    <p className="text-xs text-white/80 mb-3">
                                                                        Our experts are ready to assist you
                                                                    </p>
                                                                    <Link
                                                                        href="#"
                                                                        className="inline-flex items-center gap-1 text-xs font-medium bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg transition-colors"
                                                                    >
                                                                        Contact support
                                                                        <ArrowRight className="w-3 h-3" />
                                                                    </Link>
                                                                </div>
                                                            </div>

                                                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                                                <Award className="w-4 h-4 text-amber-500" />
                                                                <span>Top rated agency 2025</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Footer */}
                                                <div className="px-6 py-3 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
                                                    <div className="flex items-center gap-4">
                                                        <div className="flex -space-x-2">
                                                            {[1, 2, 3, 4].map((i) => (
                                                                <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-300 to-purple-300 border-2 border-white flex items-center justify-center text-xs text-white font-medium">
                                                                    {String.fromCharCode(64 + i)}
                                                                </div>
                                                            ))}
                                                            <div className="w-7 h-7 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs text-slate-600 font-medium">
                                                                +24
                                                            </div>
                                                        </div>
                                                        <span className="text-sm text-slate-600">
                                                            <span className="font-semibold text-slate-800">2.4k+</span> projects delivered
                                                        </span>
                                                    </div>
                                                    <Link
                                                        href="#"
                                                        className="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group"
                                                    >
                                                        Explore all services
                                                        <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        onClick={() => setActiveLink(link.label)}
                                        className={`nav-link px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeLink === link.label
                                            ? "text-indigo-600 bg-indigo-50/70"
                                            : "text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/50"
                                            }`}
                                    >
                                        {link.icon && <link.icon className="w-4 h-4" />}
                                        {link.label}
                                    </Link>
                                )}
                            </div>
                        ))}

                        {/* CTA Buttons Group */}
                        <div className="ml-4 flex items-center gap-2">
                            <Link
                                href="#"
                                className="hidden xl:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-indigo-600 px-4 py-2.5 rounded-xl hover:bg-indigo-50/50 transition-all"
                            >
                                <Star className="w-4 h-4" />
                                Book Demo
                            </Link>
                            <Link
                                href="#"
                                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                            >
                                <Sparkles className="w-4 h-4" />
                                Get Started
                            </Link>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2.5 rounded-xl hover:bg-indigo-50 transition-colors relative"
                        aria-label="Toggle menu"
                    >
                        <div className="relative w-6 h-6">
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6 text-indigo-600" />
                            ) : (
                                <Menu className="w-6 h-6 text-slate-700" />
                            )}
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay - Enhanced */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden fixed inset-x-0 top-16 bg-white border-t border-slate-100 overflow-y-auto max-h-[calc(100vh-4rem)]"
                    >
                        <div className="max-w-sm mx-auto px-4 py-6 space-y-2">
                            {/* Services with Enhanced Submenu */}
                            <div>
                                <button
                                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                                    className="w-full flex items-center justify-between py-3.5 px-4 bg-slate-50 rounded-xl hover:bg-indigo-50/50 transition-colors"
                                >
                                    <span className="font-semibold text-slate-800">Services</span>
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
                                            <div className="mt-3 space-y-3">
                                                {serviceCategories.map((category) => {
                                                    const Icon = category.icon;
                                                    return (
                                                        <div
                                                            key={category.title}
                                                            className="bg-slate-50 rounded-xl p-4 hover:bg-indigo-50/30 transition-colors"
                                                        >
                                                            <div className="flex items-center gap-3 mb-2">
                                                                <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                                                                    <Icon className="w-4 h-4 text-white" />
                                                                </div>
                                                                <div>
                                                                    <h4 className="text-sm font-semibold text-slate-800">
                                                                        {category.title}
                                                                    </h4>
                                                                    <p className="text-xs text-slate-500">{category.description}</p>
                                                                </div>
                                                            </div>
                                                            <ul className="ml-11 space-y-1.5">
                                                                {category.items.slice(0, 4).map((item) => (
                                                                    <li key={item}>
                                                                        <Link
                                                                            href="#"
                                                                            className="flex items-center gap-2 text-sm text-slate-600 hover:text-indigo-600 transition-colors"
                                                                        >
                                                                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-300" />
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
                                                    className="flex items-center justify-center gap-2 text-sm font-medium text-indigo-600 bg-indigo-50 py-3 rounded-xl hover:bg-indigo-100 transition-colors"
                                                >
                                                    View all services
                                                    <ArrowRight className="w-4 h-4" />
                                                </Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Other Nav Links with Icons */}
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
                                            className="flex items-center gap-3 py-3.5 px-4 font-medium text-slate-700 hover:bg-indigo-50/50 rounded-xl transition-colors"
                                        >
                                            {Icon && <Icon className="w-5 h-5 text-slate-400" />}
                                            {link.label}
                                        </Link>
                                    );
                                })}

                            {/* Mobile Quick Actions */}
                            <div className="pt-4 border-t border-slate-100 space-y-2">
                                {quickActions.map((action) => {
                                    const ActionIcon = action.icon;
                                    return (
                                        <Link
                                            key={action.label}
                                            href="#"
                                            className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-slate-50 transition-colors"
                                        >
                                            <div className={`p-2 rounded-lg ${action.color}`}>
                                                <ActionIcon className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-medium text-slate-700">{action.label}</span>
                                            <ChevronRight className="w-4 h-4 text-slate-300 ml-auto" />
                                        </Link>
                                    );
                                })}
                            </div>

                            {/* Mobile CTA */}
                            <Link
                                href="#"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-4 block bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <Sparkles className="w-5 h-5" />
                                    Get Started
                                </span>
                            </Link>

                            {/* Footer Badge */}
                            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-4">
                                <Award className="w-4 h-4 text-amber-400" />
                                <span>Top rated agency 2025</span>
                                <span className="w-1 h-1 rounded-full bg-slate-300" />
                                <span>2.4k+ projects</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}