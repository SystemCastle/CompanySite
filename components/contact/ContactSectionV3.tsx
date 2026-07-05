"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
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
    Sparkles,
    Clock,
    CheckCircle2,
    Award,
    Users,
    TrendingUp,
    Coffee,
    Star,
    Heart,
    Zap,
    Navigation,
    LocateFixed,
    Compass,
    Calendar,
    Play,
    Shield,
    ChevronRight,
    Copy,
    Check
} from "lucide-react";

export default function ContactSectionV3() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
        service: "web-development"
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [activeField, setActiveField] = useState<string | null>(null);
    const [copied, setCopied] = useState<string | null>(null);
    const [selectedLocation, setSelectedLocation] = useState(0);

    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

    const services = [
        { value: "web-development", label: "Web Development" },
        { value: "mobile-development", label: "Mobile Development" },
        { value: "cloud-devops", label: "Cloud & DevOps" },
        { value: "ui-ux-design", label: "UI/UX Design" },
        { value: "it-security", label: "IT & Security" },
        { value: "other", label: "Other" }
    ];

    const locations = [
        {
            id: 0,
            city: "Dubai",
            country: "UAE",
            flag: "🇦🇪",
            address: "Suite 409-26, Deyaar Building, Al Barsha 1",
            phone: "+971-4-3927725",
            email: "info@systemcastle.com",
            coordinates: "25.2048, 55.2708",
            gradient: "from-blue-600 to-cyan-500",
            office: "SYSTEM CASTLE SOLUTIONS LLC"
        },
        {
            id: 1,
            city: "Stockholm",
            country: "Sweden",
            flag: "🇸🇪",
            address: "Impact Hub Stockholm, Regeringsgatan 65",
            phone: "",
            email: "info@systemcastle.com",
            coordinates: "59.3293, 18.0686",
            gradient: "from-purple-600 to-pink-500",
            office: "SYSTEM CASTLE SWEDEN AB"
        },
        {
            id: 2,
            city: "Islamabad",
            country: "Pakistan",
            flag: "🇵🇰",
            address: "Plot 324, Street no 4, Industrial Area, I-9/3",
            phone: "+92-51-8444567",
            email: "info@systemcastle.com",
            coordinates: "33.6844, 73.0479",
            gradient: "from-emerald-600 to-teal-500",
            office: "SYSTEM CASTLE"
        }
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: "", email: "", company: "", message: "", service: "web-development" });
            setTimeout(() => setIsSubmitted(false), 3000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const copyToClipboard = (text: string, field: string) => {
        navigator.clipboard.writeText(text);
        setCopied(field);
        setTimeout(() => setCopied(null), 2000);
    };

    const getMapUrl = (coordinates: string) => {
        return `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10000!2d${coordinates.split(', ')[1]}!3d${coordinates.split(', ')[0]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1700000000000`;
    };

    return (
        <section ref={sectionRef} className="relative min-h-screen py-20 overflow-hidden bg-white">
            {/* Premium Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/20" />

                {/* Large animated gradient orbs */}
                <motion.div
                    animate={{
                        x: [0, 200, 0],
                        y: [0, -100, 0],
                    }}
                    transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -200, 0],
                        y: [0, 100, 0],
                    }}
                    transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-emerald-500/10 blur-3xl"
                />

                {/* Geometric patterns */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 border-2 border-indigo-500 rounded-full" />
                    <div className="absolute bottom-1/4 left-1/4 w-64 h-64 border-2 border-purple-500 rounded-full" />
                    <div className="absolute top-1/3 left-1/3 w-32 h-32 border-2 border-pink-500 rotate-45" />
                </div>

                {/* Grid overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-200/50 mb-6"
                    >
                        <Heart className="w-4 h-4 text-indigo-600 animate-pulse" />
                        <span className="text-sm font-medium text-indigo-600">We're Here to Help</span>
                    </motion.div>

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                        <span className="block text-slate-900">Let's Create</span>
                        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Something Amazing
                        </span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
                        Have a project in mind? We're just a message away. Let's turn your vision into reality.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="lg:col-span-1"
                    >
                        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/60 shadow-2xl h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl">
                                    <MessageSquare className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">Send a Message</h3>
                                    <p className="text-sm text-slate-500">We'll respond within 24 hours</p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <div className={`relative transition-all duration-300 ${activeField === 'name' ? 'scale-[1.02]' : ''}`}>
                                        <User className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${activeField === 'name' ? 'text-indigo-500' : 'text-slate-400'}`} />
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            onFocus={() => setActiveField('name')}
                                            onBlur={() => setActiveField(null)}
                                            required
                                            className="w-full pl-9 pr-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:bg-white transition-all outline-none"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <div className={`relative transition-all duration-300 ${activeField === 'email' ? 'scale-[1.02]' : ''}`}>
                                        <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${activeField === 'email' ? 'text-indigo-500' : 'text-slate-400'}`} />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            onFocus={() => setActiveField('email')}
                                            onBlur={() => setActiveField(null)}
                                            required
                                            className="w-full pl-9 pr-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:bg-white transition-all outline-none"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                        Company Name
                                    </label>
                                    <div className={`relative transition-all duration-300 ${activeField === 'company' ? 'scale-[1.02]' : ''}`}>
                                        <Briefcase className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${activeField === 'company' ? 'text-indigo-500' : 'text-slate-400'}`} />
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            onFocus={() => setActiveField('company')}
                                            onBlur={() => setActiveField(null)}
                                            className="w-full pl-9 pr-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:bg-white transition-all outline-none"
                                            placeholder="Company Inc."
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                        Service Interested In
                                    </label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:bg-white transition-all outline-none text-slate-700"
                                    >
                                        {services.map((service) => (
                                            <option key={service.value} value={service.value}>
                                                {service.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                                        Your Message <span className="text-red-500">*</span>
                                    </label>
                                    <div className={`relative transition-all duration-300 ${activeField === 'message' ? 'scale-[1.02]' : ''}`}>
                                        <MessageSquare className={`absolute left-3 top-3 w-4 h-4 transition-colors ${activeField === 'message' ? 'text-indigo-500' : 'text-slate-400'}`} />
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            onFocus={() => setActiveField('message')}
                                            onBlur={() => setActiveField(null)}
                                            required
                                            rows={3}
                                            className="w-full pl-9 pr-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:bg-white transition-all outline-none resize-none"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3.5 rounded-xl font-semibold hover:shadow-xl hover:shadow-indigo-500/30 transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                                >
                                    {isSubmitting ? (
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    ) : isSubmitted ? (
                                        <>
                                            <CheckCircle2 className="w-5 h-5" />
                                            Sent Successfully!
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </>
                                    )}
                                </button>

                                <p className="text-center text-xs text-slate-400 flex items-center justify-center gap-1">
                                    <Shield className="w-3 h-3 text-emerald-500" />
                                    Your information is safe and secure
                                </p>
                            </form>
                        </div>
                    </motion.div>

                    {/* Right - Map & Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="lg:col-span-1 space-y-4"
                    >
                        {/* Quick Contact Card */}
                        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-6 text-white shadow-2xl shadow-indigo-500/20">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-white/20 backdrop-blur-sm rounded-xl">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold">Quick Connect</h3>
                            </div>
                            <p className="text-white/80 text-sm mb-4">
                                Get a response within 24 hours. We're ready to discuss your project.
                            </p>
                            <div className="space-y-3">
                                <div
                                    className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/20 transition-all cursor-pointer group"
                                    onClick={() => window.location.href = "tel:+97143927725"}
                                >
                                    <Phone className="w-4 h-4" />
                                    <span className="text-sm font-medium">+971-4-3927725</span>
                                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div
                                    className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/20 transition-all cursor-pointer group"
                                    onClick={() => window.location.href = "mailto:info@systemcastle.com"}
                                >
                                    <Mail className="w-4 h-4" />
                                    <span className="text-sm font-medium">info@systemcastle.com</span>
                                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </div>


                        {/* Location Selector & Details */}
                        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-slate-200/60 shadow-xl">
                            <h4 className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                                <Compass className="w-4 h-4 text-indigo-600" />
                                Our Offices
                            </h4>
                            <div className="space-y-3">
                                {/* Location Tabs */}
                                <div className="flex gap-2">
                                    {locations.map((location, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedLocation(index)}
                                            className={`flex-1 flex items-center justify-center gap-2 p-2 rounded-xl transition-all text-sm font-medium ${selectedLocation === index
                                                ? "bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-200/50 text-indigo-600"
                                                : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                                                }`}
                                        >
                                            <span>{location.flag}</span>
                                            <span>{location.city}</span>
                                        </button>
                                    ))}
                                </div>

                                {/* Selected Location Details */}
                                <div className="pt-3 border-t border-slate-200/60">
                                    <div className="flex items-start gap-3">
                                        <div className={`p-2 rounded-xl bg-gradient-to-br ${locations[selectedLocation].gradient} shadow-lg flex-shrink-0`}>
                                            <Building2 className="w-4 h-4 text-white" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h5 className="text-sm font-bold text-slate-900">
                                                {locations[selectedLocation].office}
                                            </h5>
                                            <p className="text-xs text-slate-600 mt-0.5">
                                                {locations[selectedLocation].address}
                                            </p>
                                            <div className="mt-1.5 space-y-1">
                                                {locations[selectedLocation].phone && (
                                                    <div className="flex items-center gap-2 group">
                                                        <Phone className="w-3 h-3 text-indigo-500 flex-shrink-0" />
                                                        <span className="text-xs text-slate-600">{locations[selectedLocation].phone}</span>
                                                        <button
                                                            onClick={() => copyToClipboard(locations[selectedLocation].phone, 'phone')}
                                                            className="ml-auto p-1 rounded-lg hover:bg-slate-100 transition-colors opacity-0 group-hover:opacity-100"
                                                        >
                                                            {copied === 'phone' ? (
                                                                <Check className="w-3 h-3 text-emerald-500" />
                                                            ) : (
                                                                <Copy className="w-3 h-3 text-slate-400" />
                                                            )}
                                                        </button>
                                                    </div>
                                                )}
                                                <div className="flex items-center gap-2 group">
                                                    <Mail className="w-3 h-3 text-indigo-500 flex-shrink-0" />
                                                    <span className="text-xs text-slate-600">{locations[selectedLocation].email}</span>
                                                    <button
                                                        onClick={() => copyToClipboard(locations[selectedLocation].email, 'email')}
                                                        className="ml-auto p-1 rounded-lg hover:bg-slate-100 transition-colors opacity-0 group-hover:opacity-100"
                                                    >
                                                        {copied === 'email' ? (
                                                            <Check className="w-3 h-3 text-emerald-500" />
                                                        ) : (
                                                            <Copy className="w-3 h-3 text-slate-400" />
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        {/* Map Card */}
                        <div className="bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-200/60 shadow-xl">
                            <div className="relative h-[200px]">
                                <iframe
                                    src={getMapUrl(locations[selectedLocation].coordinates)}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="absolute inset-0"
                                />
                                <div className="absolute top-3 left-3 z-20 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 border border-slate-200/60 shadow-lg">
                                    <div className="flex items-center gap-2">
                                        <LocateFixed className="w-3 h-3 text-indigo-600 animate-pulse" />
                                        <span className="text-xs font-medium text-slate-700">
                                            {locations[selectedLocation].city}, {locations[selectedLocation].country}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Working Hours
                        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-slate-200/60 shadow-xl">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-indigo-50 rounded-xl">
                                    <Clock className="w-4 h-4 text-indigo-600" />
                                </div>
                                <h4 className="text-sm font-semibold text-slate-700">Working Hours</h4>
                            </div>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between text-slate-600">
                                    <span>Monday - Friday</span>
                                    <span className="font-medium text-slate-800">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between text-slate-600">
                                    <span>Saturday</span>
                                    <span className="font-medium text-slate-800">10:00 AM - 2:00 PM</span>
                                </div>
                                <div className="flex justify-between text-slate-600">
                                    <span>Sunday</span>
                                    <span className="font-medium text-slate-400">Closed</span>
                                </div>
                            </div>
                        </div> */}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}