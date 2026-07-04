"use client";

import {
    Globe,
    Smartphone,
    Monitor,
    Wifi,
    Shield,
    LifeBuoy,
    ArrowRight
} from "lucide-react";

export default function Services() {
    const services = [
        {
            icon: Globe,
            title: "Digital Solutions",
            description: "Ensure sustained traffic to your website. Visitors become leads driving business growth."
        },
        {
            icon: Smartphone,
            title: "Mobile Development",
            description: "We Deliver Solutions that our client's users can interact online, anytime, anywhere."
        },
        {
            icon: Monitor,
            title: "Web Solutions",
            description: "Bring your brand's story to life through enhanced content, user experience, and web/app design."
        },
        {
            icon: Wifi,
            title: "Telecom Services",
            description: "Innovative and accessible Value added service provider."
        },
        {
            icon: Shield,
            title: "IT & Security Services",
            description: "From Consultancy to complex integrations, we've got you covered."
        },
        {
            icon: LifeBuoy,
            title: "Maintenance & Support",
            description: "We provide customers and partners expert advice, timely problem resolution in case of issues."
        }
    ];

    return (
        <section className="min-h-[115vh] flex items-center bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
                        We Empower <span className="text-indigo-600">We Deliver</span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                        System Castle is a leading Digital Transformation company focused on Telecom and Fintech solutions in the Middle East, Africa & Asia
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-indigo-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            >
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-xl bg-indigo-50 group-hover:bg-indigo-100 transition-colors flex items-center justify-center mb-4">
                                    <Icon className="w-6 h-6 text-indigo-600" />
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Learn More Link */}
                                <div className="mt-3">
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-1 text-indigo-600 font-medium hover:text-indigo-700 transition-colors text-sm group/link"
                                    >
                                        Learn More
                                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}