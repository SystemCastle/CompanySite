import Image from "next/image";
import Link from "next/link";
import HashNavLink from "./HashNavLink";
import {
    Shield,
    Code2,
    Smartphone,
    Cloud,
    Palette,
    Building2,
    Award,
} from "lucide-react";

export default function FooterV1() {
    const services = [
        { icon: Code2, label: "Web Development", href: "/1.0#services" },
        { icon: Smartphone, label: "Mobile Development", href: "/1.0#services" },
        { icon: Cloud, label: "Cloud & DevOps", href: "/1.0#services" },
        { icon: Shield, label: "IT & Security", href: "/1.0#services" },
        { icon: Building2, label: "Enterprise Solutions", href: "/1.0#services" }
    ];

    const company = [
        { label: "Home", href: "/1.0" },
        { label: "About Us", href: "/1.0/#about" },
        { label: "Contact", href: "/1.0#contact" }
    ];

    const resources = [
        { label: "Product", href: "/1.0#product" },
        { label: "Partners", href: "/1.0#partners" }
    ];

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
                                {/* <p className="text-sm text-white/50">Software Agency</p> */}
                            </div>
                        </div>

                        <p className="text-white/70 text-sm leading-relaxed max-w-sm">
                            We build software people trust. Custom software development for startups and enterprises. Scalable, secure and built to last.
                        </p>

                        {/* <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-sm">
                                <Award className="w-4 h-4 text-indigo-400" />
                                <span className="text-white/70">Trusted by 150+ companies</span>
                            </div>
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
                                    <HashNavLink
                                        href={service.href}
                                        className="flex items-center gap-2 text-white/60 hover:text-white transition-all group"
                                    >
                                        <service.icon className="w-3.5 h-3.5 text-indigo-400" />
                                        <span className="text-sm">{service.label}</span>
                                    </HashNavLink>
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
                                    {item.href.includes("#") ? (
                                        <HashNavLink
                                            href={item.href}
                                            className="inline-block text-white/60 hover:text-white text-sm transition-all hover:pl-1"
                                        >
                                            {item.label}
                                        </HashNavLink>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="inline-block text-white/60 hover:text-white text-sm transition-all hover:pl-1"
                                        >
                                            {item.label}
                                        </Link>
                                    )}
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
                                    <HashNavLink
                                        href={item.href}
                                        className="whitespace-nowrap text-white/60 hover:text-white text-sm transition-all hover:pl-1"
                                    >
                                        {item.label}
                                    </HashNavLink>
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
