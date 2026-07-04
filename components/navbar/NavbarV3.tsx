"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Menu,
    X,
    ChevronDown,
    ArrowRight,
    Briefcase,
    Users,
    Lightbulb,
    FileText,
    Mail,
    Sparkles,
    Star,
    CheckCircle,
    Zap,
    Coffee,
    Grid,
    Layers,
    TrendingUp,
    Award,
    ExternalLink,
    Monitor,
    Smartphone,
    Cloud,
    Palette,
    Shield,
    Building2,
    Code2,
} from "lucide-react";
import Link from "next/link";

// Service data (shortened for minimal design)
const serviceCategories = [
    {
        title: "Web Development",
        icon: Code2,
        items: ["Web Apps", "E-commerce", "CMS", "Portals", "PWA"],
    },
    {
        title: "Mobile Development",
        icon: Smartphone,
        items: ["iOS Apps", "Android Apps", "Cross Platform", "Flutter", "Maintenance"],
    },
    {
        title: "Cloud & DevOps",
        icon: Cloud,
        items: ["AWS", "Azure", "DevOps", "CI/CD", "IaC"],
    },
    {
        title: "UI/UX Design",
        icon: Palette,
        items: ["UX Design", "UI Design", "Product Design", "Design Systems", "Prototyping"],
    },
    {
        title: "IT & Security",
        icon: Shield,
        items: ["Security Testing", "Pen Testing", "Network Security", "Cloud Security", "IT Consulting"],
    },
    {
        title: "Enterprise Solutions",
        icon: Building2,
        items: ["ERP", "CRM", "BI", "Integration", "Modernization"],
    },
];

// Nav items with submenus
const navLinks = [
    {
        label: "Services",
        href: "#",
        hasMega: true,
        icon: Grid,
    },
    {
        label: "Solutions",
        href: "#",
        hasDropdown: true,
        icon: Layers,
        subItems: [
            { label: "Enterprise", href: "#" },
            { label: "Startups", href: "#" },
            { label: "E-commerce", href: "#" },
            { label: "Healthcare", href: "#" },
            { label: "Fintech", href: "#" },
        ]
    },
    {
        label: "Work",
        href: "#",
        icon: Briefcase,
    },
    {
        label: "Company",
        href: "#",
        hasDropdown: true,
        icon: Users,
        subItems: [
            { label: "About Us", href: "#" },
            { label: "Team", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Culture", href: "#" },
        ]
    },
    {
        label: "Insights",
        href: "#",
        icon: Lightbulb,
    },
    {
        label: "Contact",
        href: "#",
        icon: Mail,
    },
];

const quickActions = [
    { label: "Book Demo", icon: Coffee },
    { label: "Get Quote", icon: Sparkles },
];

export default function NavbarV3() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
    const [activeLink, setActiveLink] = useState("Services");

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
                setMobileExpanded(null);
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
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/95 backdrop-blur-lg shadow-sm border-b border-slate-200/50"
                : "bg-white/80 backdrop-blur-md border-b border-slate-200/20"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-12 lg:h-14">
                    {/* Logo - Minimal */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 font-bold text-lg tracking-tight text-slate-800 hover:text-indigo-600 transition-colors"
                    >
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            System Castle
                        </span>
                        <span className="hidden sm:inline text-[10px] font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                            v3
                        </span>
                    </Link>

                    {/* Desktop Navigation - Compact */}
                    <nav className="hidden lg:flex items-center gap-0.5">
                        {navLinks.map((link) => (
                            <div key={link.label} className="relative">
                                {link.hasMega ? (
                                    // Services - Mega Menu
                                    <div className="group">
                                        <button
                                            onClick={() => {
                                                setActiveLink(link.label);
                                                setActiveDropdown(activeDropdown === link.label ? null : link.label);
                                            }}
                                            className={`nav-link px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${activeLink === link.label
                                                ? "text-indigo-600 bg-indigo-50/70"
                                                : "text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/50"
                                                }`}
                                        >
                                            {link.icon && <link.icon className="w-3.5 h-3.5" />}
                                            {link.label}
                                            <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                                        </button>

                                        {/* Mega Menu - Compact Grid */}
                                        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                            <div className="bg-white rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 w-[640px] overflow-hidden">
                                                <div className="p-3">
                                                    <div className="grid grid-cols-3 gap-1.5">
                                                        {serviceCategories.map((category) => {
                                                            const Icon = category.icon;
                                                            return (
                                                                <Link
                                                                    key={category.title}
                                                                    href="#"
                                                                    className="group/item flex items-start gap-2 p-2 rounded-lg hover:bg-indigo-50/50 transition-all hover:scale-[1.02]"
                                                                >
                                                                    <div className="p-1.5 rounded-md bg-indigo-50 text-indigo-600 group-hover/item:bg-indigo-100 transition-colors">
                                                                        <Icon className="w-3.5 h-3.5" />
                                                                    </div>
                                                                    <div className="flex-1 min-w-0">
                                                                        <div className="text-xs font-medium text-slate-700 group-hover/item:text-indigo-600 transition-colors">
                                                                            {category.title}
                                                                        </div>
                                                                        <div className="text-[10px] text-slate-400 truncate">
                                                                            {category.items.slice(0, 3).join(" · ")}
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                                <div className="px-3 py-2 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex -space-x-1.5">
                                                            {[1, 2, 3].map((i) => (
                                                                <div key={i} className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-300 to-purple-300 border-2 border-white flex items-center justify-center text-[8px] text-white font-medium">
                                                                    {String.fromCharCode(64 + i)}
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <span className="text-[10px] text-slate-500">
                                                            <span className="font-medium text-slate-700">200+</span> clients
                                                        </span>
                                                    </div>
                                                    <Link
                                                        href="#"
                                                        className="text-xs font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
                                                    >
                                                        View all
                                                        <ArrowRight className="w-3 h-3" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : link.hasDropdown ? (
                                    // Other nav items with dropdown
                                    <div className="group">
                                        <button
                                            onClick={() => {
                                                setActiveLink(link.label);
                                                setActiveDropdown(activeDropdown === link.label ? null : link.label);
                                            }}
                                            className={`nav-link px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${activeLink === link.label
                                                ? "text-indigo-600 bg-indigo-50/70"
                                                : "text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/50"
                                                }`}
                                        >
                                            {link.icon && <link.icon className="w-3.5 h-3.5" />}
                                            {link.label}
                                            <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                                        </button>

                                        {/* Dropdown Menu - Compact */}
                                        <div className="absolute left-0 top-full pt-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                            <div className="bg-white rounded-lg shadow-lg shadow-slate-200/50 border border-slate-100 min-w-[160px] py-1">
                                                {link.subItems?.map((item) => (
                                                    <Link
                                                        key={item.label}
                                                        href={item.href}
                                                        className="flex items-center gap-2 px-4 py-1.5 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/50 transition-colors"
                                                    >
                                                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    // Simple nav link
                                    <Link
                                        href={link.href}
                                        onClick={() => setActiveLink(link.label)}
                                        className={`nav-link px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${activeLink === link.label
                                            ? "text-indigo-600 bg-indigo-50/70"
                                            : "text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/50"
                                            }`}
                                    >
                                        {link.icon && <link.icon className="w-3.5 h-3.5" />}
                                        {link.label}
                                    </Link>
                                )}
                            </div>
                        ))}

                        {/* CTA Group - Compact */}
                        <div className="ml-2 flex items-center gap-1.5">
                            {quickActions.map((action) => {
                                const ActionIcon = action.icon;
                                return (
                                    <Link
                                        key={action.label}
                                        href="#"
                                        className="hidden xl:flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-indigo-600 px-3 py-1.5 rounded-lg hover:bg-indigo-50/50 transition-all"
                                    >
                                        <ActionIcon className="w-3.5 h-3.5" />
                                        {action.label}
                                    </Link>
                                );
                            })}
                            <Link
                                href="#"
                                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1.5 rounded-lg text-xs font-medium hover:shadow-md hover:shadow-indigo-500/20 transition-all duration-200 hover:scale-105 flex items-center gap-1.5"
                            >
                                <Sparkles className="w-3.5 h-3.5" />
                                Get Started
                            </Link>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-1.5 rounded-lg hover:bg-indigo-50 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-5 h-5 text-indigo-600" />
                        ) : (
                            <Menu className="w-5 h-5 text-slate-700" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Minimal */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden fixed inset-x-0 top-12 bg-white border-t border-slate-100 overflow-y-auto max-h-[calc(100vh-3rem)]"
                    >
                        <div className="px-4 py-3 space-y-0.5">
                            {navLinks.map((link) => {
                                const Icon = link.icon;
                                const isExpanded = mobileExpanded === link.label;

                                if (link.hasMega || link.hasDropdown) {
                                    return (
                                        <div key={link.label}>
                                            <button
                                                onClick={() => {
                                                    setMobileExpanded(isExpanded ? null : link.label);
                                                    setActiveLink(link.label);
                                                }}
                                                className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-indigo-50/50 transition-colors"
                                            >
                                                <span className="flex items-center gap-2 text-sm font-medium text-slate-700">
                                                    {Icon && <Icon className="w-4 h-4 text-slate-400" />}
                                                    {link.label}
                                                </span>
                                                <motion.div
                                                    animate={{ rotate: isExpanded ? 180 : 0 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <ChevronDown className="w-4 h-4 text-slate-400" />
                                                </motion.div>
                                            </button>

                                            <AnimatePresence>
                                                {isExpanded && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="ml-6 pl-3 border-l-2 border-indigo-200 space-y-0.5 py-1">
                                                            {link.label === "Services" ? (
                                                                // Services submenu
                                                                serviceCategories.map((category) => {
                                                                    const CatIcon = category.icon;
                                                                    return (
                                                                        <Link
                                                                            key={category.title}
                                                                            href="#"
                                                                            className="flex items-center gap-2 py-1.5 px-2 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/30 rounded-lg transition-colors"
                                                                        >
                                                                            <CatIcon className="w-3.5 h-3.5 text-slate-400" />
                                                                            <span>{category.title}</span>
                                                                        </Link>
                                                                    );
                                                                })
                                                            ) : (
                                                                // Other dropdowns
                                                                link.subItems?.map((item) => (
                                                                    <Link
                                                                        key={item.label}
                                                                        href={item.href}
                                                                        className="flex items-center gap-2 py-1.5 px-2 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/30 rounded-lg transition-colors"
                                                                    >
                                                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                                                        {item.label}
                                                                    </Link>
                                                                ))
                                                            )}
                                                            <Link
                                                                href="#"
                                                                className="flex items-center gap-1 text-xs font-medium text-indigo-600 py-1.5 px-2 hover:bg-indigo-50/30 rounded-lg transition-colors"
                                                            >
                                                                View all
                                                                <ArrowRight className="w-3 h-3" />
                                                            </Link>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                }

                                return (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        onClick={() => {
                                            setActiveLink(link.label);
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className="flex items-center gap-2 py-2.5 px-3 text-sm font-medium text-slate-700 hover:bg-indigo-50/50 rounded-lg transition-colors"
                                    >
                                        {Icon && <Icon className="w-4 h-4 text-slate-400" />}
                                        {link.label}
                                    </Link>
                                );
                            })}

                            {/* Mobile CTA */}
                            <div className="pt-3 border-t border-slate-100 space-y-1.5">
                                {quickActions.map((action) => {
                                    const ActionIcon = action.icon;
                                    return (
                                        <Link
                                            key={action.label}
                                            href="#"
                                            className="flex items-center gap-2 py-2 px-3 text-sm text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/50 rounded-lg transition-colors"
                                        >
                                            <ActionIcon className="w-4 h-4" />
                                            {action.label}
                                        </Link>
                                    );
                                })}
                                <Link
                                    href="#"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2.5 rounded-lg text-sm font-medium hover:shadow-md transition-all"
                                >
                                    <Sparkles className="w-4 h-4" />
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}