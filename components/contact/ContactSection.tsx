"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Send,
    MapPin,
    Phone,
    Mail,
    Building2,
    Globe,
    MessageSquare,
    User,
    Briefcase,
    ArrowRight,
    Sparkles
} from "lucide-react";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: "", email: "", company: "", message: "" });
            setTimeout(() => setIsSubmitted(false), 3000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const locations = [
        {
            title: "SYSTEM CASTLE SOLUTIONS LLC",
            address: "Suite 409-26, Deyaar Building,\nAl Barsha 1, Dubai, UAE",
            phone: "+971-4-3927725",
            email: "info@systemcastle.com",
            icon: Building2,
            flag: "🇦🇪"
        },
        // {
        //     title: "SYSTEM CASTLE SWEDEN AB",
        //     address: "Impact Hub Stockholm\nRegeringsgatan 65\n111 56 Stockholm\nSweden",
        //     phone: "",
        //     email: "info@systemcastle.com",
        //     icon: Globe,
        //     flag: "🇸🇪"
        // },
        // {
        //     title: "SYSTEM CASTLE",
        //     address: "Plot 324, Street no 4,\nIndustrial Area, I-9/3, Islamabad,\nPakistan",
        //     phone: "+92-51-8444567",
        //     email: "info@systemcastle.com",
        //     icon: MapPin,
        //     flag: "🇵🇰"
        // }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
                        CONTACT US
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left - Form */}
                    <div className="order-2 lg:order-1 bg-white rounded-2xl p-8">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    ENTER NAME
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                                    placeholder=""
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    ENTER EMAIL ADDRESS
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                                    placeholder=""
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    ENTER COMPANY NAME
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                                    placeholder=""
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    WRITE YOUR MESSAGE HERE...
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none resize-none"
                                    placeholder=""
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-slate-900 text-white py-3.5 rounded-lg font-medium hover:bg-slate-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto" />
                                ) : isSubmitted ? (
                                    "✓ Sent Successfully!"
                                ) : (
                                    "SEND"
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Right - Map & Locations */}
                    <div className="order-1 lg:order-2 space-y-6">
                        {/* Map */}
                        <div className="bg-slate-100 rounded-2xl overflow-hidden h-[300px] relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d144440.8903358193!2d55.098214155548996!3d25.204849188585975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0"
                            />
                        </div>

                        {/* Location Cards */}
                        <div className="bg-white rounded-2xl p-8">
                            <div className="space-y-6">
                                {locations.map((location, index) => {
                                    const Icon = location.icon;
                                    return (
                                        <div key={index} className="pb-6 border-b border-slate-200 last:border-b-0 last:pb-0">
                                            <h4 className="text-sm font-semibold text-slate-900 mb-2">
                                                {location.title}
                                            </h4>
                                            <p className="text-sm text-slate-600 whitespace-pre-line">
                                                {location.address}
                                            </p>
                                            {location.phone && (
                                                <p className="text-sm text-slate-600 mt-1 flex items-center gap-2">
                                                    <span>📞</span>
                                                    {location.phone}
                                                </p>
                                            )}
                                            <p className="text-sm text-slate-600 flex items-center gap-2">
                                                <span>📧</span>
                                                {location.email}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}