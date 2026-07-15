"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HashNavLink from "./HashNavLink";
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
    { label: "Company", href: "/1.0/#about" },
    { label: "Contact Us", href: "/1.0#contact" },
];

const trackedSections = [
    { label: "Company", id: "about" },
    { label: "Partners", id: "partners" },
    { label: "Services", id: "services" },
    { label: "", id: "tech-stack" },
    { label: "Product", id: "product" },
    { label: "Contact Us", id: "contact" },
];

export default function NavbarV3() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("");

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

    useEffect(() => {
        const sectionElements = trackedSections
            .map((link) => {
                const element = document.getElementById(link.id);
                return element ? { ...link, element } : null;
            })
            .filter((section): section is { label: string; id: string; element: HTMLElement } => Boolean(section))
            .sort((a, b) => a.element.offsetTop - b.element.offsetTop);

        if (!sectionElements.length) return;

        const updateActiveLink = () => {
            const headerOffset = 90;
            const viewportAnchor = window.scrollY + headerOffset;
            let currentLabel = "";
            let currentId = "";

            for (const section of sectionElements) {
                if (section.element.offsetTop <= viewportAnchor) {
                    currentLabel = section.label;
                    currentId = section.id;
                }
            }

            setActiveLink(currentLabel);

            const basePath = pathname || window.location.pathname || "/1.0";
            const nextUrl = currentId
                ? `${basePath}${window.location.search}#${currentId}`
                : `${basePath}${window.location.search}`;
            const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;

            if (currentUrl !== nextUrl) {
                window.history.replaceState(window.history.state, "", nextUrl);
            }
        };

        updateActiveLink();
        window.addEventListener("scroll", updateActiveLink, { passive: true });
        window.addEventListener("resize", updateActiveLink);

        return () => {
            window.removeEventListener("scroll", updateActiveLink);
            window.removeEventListener("resize", updateActiveLink);
        };
    }, [pathname]);

    return (
        <header className="absolute top-0 left-0 w-full z-50">
            {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
            <div className="page-container">
                <div className="flex items-center justify-between h-12 lg:h-14">
                    <Link
                        href="/1.0"
                        className="flex items-center gap-2 transition-opacity hover:opacity-85"
                    >
                        <Image
                            src="/logo.jpeg"
                            alt="System Castle"
                            width={34}
                            height={34}
                            className="h-8 w-8 rounded-md object-cover"
                            priority
                        />
                        <span className="font-bold text-lg tracking-tight text-white">
                            System Castle
                        </span>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-0.5">
                        {navLinks.map((link) => (
                            <div key={link.label} className="relative group">
                                <HashNavLink
                                    href={link.href}
                                    onClick={() => setActiveLink(link.label)}
                                    className={`nav-link px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1 ${activeLink === link.label
                                        ? "text-white"
                                        : "text-white/70 hover:text-white"
                                        }`}
                                >
                                    {link.label}
                                    {link.label === "Services" && (
                                        <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                                    )}
                                </HashNavLink>

                                {link.label === "Services" && (
                                    <div className="absolute left-1/2 top-full pt-1.5 -translate-x-1/2 opacity-0 invisible transition-all duration-200 group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible">
                                        <div className="w-[640px] overflow-hidden rounded-xl border border-white/10 bg-black/90 backdrop-blur-lg">
                                            <div className="p-3">
                                                <div className="grid grid-cols-3 gap-1.5">
                                                    {serviceCategories.map((category) => {
                                                        const Icon = category.icon;

                                                        return (
                                                            <HashNavLink
                                                                key={category.title}
                                                                href="/1.0#services"
                                                                onClick={() => setActiveLink("Services")}
                                                                className="group/item flex items-start gap-2 rounded-lg p-2 transition-all hover:scale-[1.02] hover:bg-white/5"
                                                            >
                                                                <div className="rounded-md bg-white/10 p-1.5 text-white transition-colors group-hover/item:bg-white/20">
                                                                    <Icon className="w-3.5 h-3.5" />
                                                                </div>
                                                                <div className="min-w-0 flex-1">
                                                                    <div className="text-xs font-medium text-white/90 transition-colors group-hover/item:text-white">
                                                                        {category.title}
                                                                    </div>
                                                                    <div className="truncate text-[10px] text-white/40">
                                                                        {category.items.slice(0, 3).join(" / ")}
                                                                    </div>
                                                                </div>
                                                            </HashNavLink>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between border-t border-white/10 px-3 py-2">
                                                <span className="text-[10px] text-white/50">
                                                    Explore our core service areas
                                                </span>
                                                <HashNavLink
                                                    href="/1.0#services"
                                                    onClick={() => setActiveLink("Services")}
                                                    className="flex items-center gap-1 text-xs font-medium text-white hover:text-white/80"
                                                >
                                                    View all
                                                    <ArrowRight className="w-3 h-3" />
                                                </HashNavLink>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    <button
                        onClick={() => setIsMobileMenuOpen((open) => !open)}
                        className="lg:hidden p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-5 h-5 text-white" />
                        ) : (
                            <Menu className="w-5 h-5 text-white" />
                        )}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="lg:hidden border-t border-white/10">
                    <nav className="px-4 py-3 space-y-1">
                        {navLinks.map((link) => (
                            <HashNavLink
                                key={link.label}
                                href={link.href}
                                onClick={() => {
                                    setActiveLink(link.label);
                                    setIsMobileMenuOpen(false);
                                }}
                                className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${activeLink === link.label
                                    ? "text-white"
                                    : "text-white/70 hover:text-white"
                                    }`}
                            >
                                {link.label}
                            </HashNavLink>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
