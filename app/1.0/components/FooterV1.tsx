"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    ChevronRight,
    Shield,
    Code2,
    Smartphone,
    Cloud,
    Palette,
    Building2,
    Award,
} from "lucide-react";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function FooterV1() {
    const socialLinks = [
        { icon: FaXTwitter, href: "#", label: "X", color: "text-white" },
        { icon: FaYoutube, href: "#", label: "YouTube", color: "text-red-500" },
        { icon: FaInstagram, href: "#", label: "Instagram", color: "text-pink-500" },
        { icon: FaGithub, href: "#", label: "GitHub", color: "text-slate-100" }
    ];

    const services = [
        { icon: Code2, label: "Web Development", href: "#" },
        { icon: Smartphone, label: "Mobile Development", href: "#" },
        { icon: Cloud, label: "Cloud & DevOps", href: "#" },
        { icon: Palette, label: "UI/UX Design", href: "#" },
        { icon: Shield, label: "IT & Security", href: "#" },
        { icon: Building2, label: "Enterprise Solutions", href: "#" }
    ];

    const company = [
        { label: "About Us", href: "#" },
        { label: "Our Team", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Contact", href: "#" }
    ];

    const resources = [
        { label: "Case Studies", href: "#" },
        { label: "Portfolio", href: "#" },
        { label: "Testimonials", href: "#" },
        { label: "FAQ", href: "#" },
        { label: "Support", href: "#" }
    ];

    // const locations = [
    //     { flag: "🇦🇪", city: "Dubai", country: "UAE" },
    //     { flag: "🇸🇪", city: "Stockholm", country: "Sweden" },
    //     { flag: "🇵🇰", city: "Islamabad", country: "Pakistan" }
    // ];

    return (
        <footer className="relative bg-slate-900 text-white overflow-hidden">
            {/* Premium Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-500/10 via-purple-500/5 to-transparent" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-500/10 via-cyan-500/5 to-transparent" />
                <div className="absolute inset-0 opacity-[0.02]">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
                            backgroundSize: '40px 40px',
                        }}
                    />
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-16 grid grid-cols-2 lg:grid-cols-12 gap-8">
                    {/* Brand Column - 4 cols */}
                    <div className="col-span-2 lg:col-span-4 space-y-6">
                        <div className="flex items-center gap-3">
                            <Image
                                src="/logo.jpeg"
                                alt="System Castle"
                                width={48}
                                height={48}
                                className="h-12 w-12 rounded-lg object-cover shadow-lg"
                            />
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight">System Castle</h2>
                                <p className="text-sm text-white/50">Software Agency</p>
                            </div>
                        </div>

                        <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                            We build software people trust. Custom software development for startups and enterprises. Scalable, secure and built to last.
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-sm">
                                <Award className="w-4 h-4 text-indigo-400" />
                                <span className="text-white/70">Trusted by 150+ companies</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-2">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    whileHover={{ y: -3, scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 hover:border-indigo-500/30"
                                    aria-label={social.label}
                                >
                                    <social.icon className={`w-4 h-4 ${social.color} transition-colors`} />
                                </motion.a>
                            ))}
                        </div>

                        {/* Locations */}
                        {/* <div className="flex flex-wrap gap-3">
                            {locations.map((location, index) => (
                                <div key={index} className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-1.5 border border-white/5">
                                    <span className="text-lg">{location.flag}</span>
                                    <span className="text-xs text-white/70">{location.city}</span>
                                </div>
                            ))}
                        </div> */}
                    </div>

                    {/* Services - 3 cols */}
                    <div className="col-span-1 lg:col-span-3">
                        <h3 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-4">
                            Services
                        </h3>
                        <ul className="space-y-2.5">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <Link
                                        href={service.href}
                                        className="flex items-center gap-2 text-white/60 hover:text-white transition-all group"
                                    >
                                        <service.icon className="w-3.5 h-3.5 text-indigo-400" />
                                        <span className="text-sm">{service.label}</span>
                                        <ChevronRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity group-hover:translate-x-1" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company & Resources - 2 cols each */}
                    <div className="col-span-1 justify-self-end text-left lg:justify-self-auto lg:col-span-2">
                        <h3 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-4">
                            Company
                        </h3>
                        <ul className="space-y-2.5">
                            {company.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        className="inline-block text-white/60 hover:text-white text-sm transition-all hover:pl-1"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="hidden lg:block lg:col-span-3">
                        <h3 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-4">
                            Resources
                        </h3>
                        <ul className="space-y-2.5">
                            {resources.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        className="whitespace-nowrap text-white/60 hover:text-white text-sm transition-all hover:pl-1"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter & Bottom Bar */}



            </div>
        </footer>
    );
}
