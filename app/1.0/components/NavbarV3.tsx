"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
    ArrowRight,
    Building2,
    ChevronDown,
    Cloud,
    Code2,
    Menu,
    Palette,
    Shield,
    Smartphone,
    X,
} from "lucide-react";

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

const navLinks = [
    { label: "Services", href: "/1.0#services" },
    { label: "Product", href: "/1.0#product" },
    { label: "Partners", href: "/1.0#partners" },
    { label: "Company", href: "/1.0/company" },
    { label: "Contact Us", href: "/1.0#contact" },
];

export default function NavbarV3() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("Services");

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!isMobileMenuOpen) return;

        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isMobileMenuOpen]);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/95 backdrop-blur-lg shadow-sm border-b border-slate-200/60"
                : "bg-white/80 backdrop-blur-md border-b border-slate-200/20"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-12 lg:h-14">
                    <Link
                        href="/1.0"
                        className="font-bold text-lg tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent transition-opacity hover:opacity-80"
                    >
                        System Castle
                    </Link>

                    <nav className="hidden lg:flex items-center gap-0.5">
                        {navLinks.map((link) => (
                            <div key={link.label} className="relative group">
                                <Link
                                    href={link.href}
                                    onClick={() => setActiveLink(link.label)}
                                    onMouseEnter={() => setActiveLink(link.label)}
                                    onFocus={() => setActiveLink(link.label)}
                                    className={`nav-link px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${activeLink === link.label
                                        ? "text-indigo-600 bg-indigo-50/70"
                                        : "text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/50"
                                        }`}
                                >
                                    {link.label}
                                    {link.label === "Services" && (
                                        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                                    )}
                                </Link>

                                {link.label === "Services" && (
                                    <div className="absolute left-1/2 top-full pt-1.5 -translate-x-1/2 opacity-0 invisible transition-all duration-200 group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible">
                                        <div className="w-[640px] overflow-hidden rounded-xl border border-slate-100 bg-white shadow-xl shadow-slate-200/50">
                                            <div className="p-3">
                                                <div className="grid grid-cols-3 gap-1.5">
                                                    {serviceCategories.map((category) => {
                                                        const Icon = category.icon;

                                                        return (
                                                            <Link
                                                                key={category.title}
                                                                href="/1.0#services"
                                                                onClick={() => setActiveLink("Services")}
                                                                className="group/item flex items-start gap-2 rounded-lg p-2 transition-all hover:scale-[1.02] hover:bg-indigo-50/50"
                                                            >
                                                                <div className="rounded-md bg-indigo-50 p-1.5 text-indigo-600 transition-colors group-hover/item:bg-indigo-100">
                                                                    <Icon className="w-3.5 h-3.5" />
                                                                </div>
                                                                <div className="min-w-0 flex-1">
                                                                    <div className="text-xs font-medium text-slate-700 transition-colors group-hover/item:text-indigo-600">
                                                                        {category.title}
                                                                    </div>
                                                                    <div className="truncate text-[10px] text-slate-400">
                                                                        {category.items.slice(0, 3).join(" / ")}
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/80 px-3 py-2">
                                                <span className="text-[10px] text-slate-500">
                                                    Explore our core service areas
                                                </span>
                                                <Link
                                                    href="/1.0#services"
                                                    onClick={() => setActiveLink("Services")}
                                                    className="flex items-center gap-1 text-xs font-medium text-indigo-600 hover:text-indigo-700"
                                                >
                                                    View all
                                                    <ArrowRight className="w-3 h-3" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    <button
                        onClick={() => setIsMobileMenuOpen((open) => !open)}
                        className="lg:hidden p-1.5 rounded-lg hover:bg-indigo-50 transition-colors"
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-5 h-5 text-indigo-600" />
                        ) : (
                            <Menu className="w-5 h-5 text-slate-700" />
                        )}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="lg:hidden border-t border-slate-100 bg-white/98 backdrop-blur-lg shadow-lg">
                    <nav className="px-4 py-3 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => {
                                    setActiveLink(link.label);
                                    setIsMobileMenuOpen(false);
                                }}
                                className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${activeLink === link.label
                                    ? "bg-indigo-50 text-indigo-600"
                                    : "text-slate-700 hover:bg-indigo-50/50 hover:text-indigo-600"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
