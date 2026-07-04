"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
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
    Compass,
    Navigation,
    LocateFixed,
    Clock,
    CheckCircle2,
    Award,
    Users,
    TrendingUp,
    Coffee,
    Star,
    Heart,
    Zap
} from "lucide-react";

export default function ContactSectionV2() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
            title: "Dubai",
            subtitle: "SYSTEM CASTLE SOLUTIONS LLC",
            address: "Suite 409-26, Deyaar Building, Al Barsha 1",
            city: "Dubai, UAE",
            phone: "+971-4-3927725",
            email: "info@systemcastle.com",
            flag: "🇦🇪",
            gradient: "from-blue-600 to-cyan-500",
            icon: Building2
        },
        {
            title: "Stockholm",
            subtitle: "SYSTEM CASTLE SWEDEN AB",
            address: "Impact Hub Stockholm, Regeringsgatan 65",
            city: "111 56 Stockholm, Sweden",
            phone: "",
            email: "info@systemcastle.com",
            flag: "🇸🇪",
            gradient: "from-purple-600 to-pink-500",
            icon: Globe
        },
        {
            title: "Islamabad",
            subtitle: "SYSTEM CASTLE",
            address: "Plot 324, Street no 4, Industrial Area",
            city: "I-9/3, Islamabad, Pakistan",
            phone: "+92-51-8444567",
            email: "info@systemcastle.com",
            flag: "🇵🇰",
            gradient: "from-emerald-600 to-teal-500",
            icon: MapPin
        }
    ];

    const stats = [
        { icon: Award, label: "Years Experience", value: "10+" },
        { icon: Users, label: "Happy Clients", value: "150+" },
        { icon: TrendingUp, label: "Projects Delivered", value: "200+" },
        { icon: Coffee, label: "Coffee Consumed", value: "10K+" }
    ];

    return (
        <section ref={sectionRef} className="relative min-h-screen py-20 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30" />

                {/* Animated Gradient Orbs */}
                <motion.div
                    animate={{
                        x: [0, 150, 0],
                        y: [0, -100, 0],
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -150, 0],
                        y: [0, 100, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-emerald-500/10 blur-3xl"
                />

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                    }}
                />

                {/* Animated Lines */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with Interactive Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-200/50 mb-4"
                    >
                        <Sparkles className="w-4 h-4 text-indigo-600" />
                        <span className="text-sm font-medium text-indigo-600">Let's Connect</span>
                    </motion.div>
                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                        <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                            Get in
                        </span>

                        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Touch
                        </span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Have a project in mind? Let's create something extraordinary together.
                    </p>
                </motion.div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
                >
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                whileHover={{ y: -4, scale: 1.02 }}
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center border border-slate-200/60 shadow-lg"
                            >
                                <Icon className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
                                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                                <p className="text-xs text-slate-500">{stat.label}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Form - Takes 3/5 on desktop */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="lg:col-span-3 bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/60 shadow-2xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500">
                                <MessageSquare className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">Send a Message</h3>
                                <p className="text-sm text-slate-500">We'll get back to you within 24 hours</p>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                                        Full Name
                                    </label>
                                    <div className={`relative transition-all duration-300 ${focusedField === 'name' ? 'scale-[1.02]' : ''}`}>
                                        <User className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${focusedField === 'name' ? 'text-indigo-500' : 'text-slate-400'}`} />
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            className="w-full pl-9 pr-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:bg-white transition-all outline-none"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-slate-700 mb-1.5">
                                        Company Name
                                    </label>
                                    <div className={`relative transition-all duration-300 ${focusedField === 'company' ? 'scale-[1.02]' : ''}`}>
                                        <Briefcase className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${focusedField === 'company' ? 'text-indigo-500' : 'text-slate-400'}`} />
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            onFocus={() => setFocusedField('company')}
                                            onBlur={() => setFocusedField(null)}
                                            className="w-full pl-9 pr-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:bg-white transition-all outline-none"
                                            placeholder="Company Inc."
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                                    Email Address
                                </label>
                                <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'scale-[1.02]' : ''}`}>
                                    <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${focusedField === 'email' ? 'text-indigo-500' : 'text-slate-400'}`} />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('email')}
                                        onBlur={() => setFocusedField(null)}
                                        required
                                        className="w-full pl-9 pr-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:bg-white transition-all outline-none"
                                        placeholder="john@company.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-slate-700 mb-1.5">
                                    Your Message
                                </label>
                                <div className={`relative transition-all duration-300 ${focusedField === 'message' ? 'scale-[1.02]' : ''}`}>
                                    <MessageSquare className={`absolute left-3 top-3 w-4 h-4 transition-colors ${focusedField === 'message' ? 'text-indigo-500' : 'text-slate-400'}`} />
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        required
                                        rows={4}
                                        className="w-full pl-9 pr-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:bg-white transition-all outline-none resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3.5 rounded-xl font-medium hover:shadow-xl hover:shadow-indigo-500/30 transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
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

                            <p className="text-center text-xs text-slate-400">
                                <CheckCircle2 className="w-3 h-3 inline mr-1 text-emerald-500" />
                                We respect your privacy. Your information is safe with us.
                            </p>
                        </form>
                    </motion.div>

                    {/* Right Side - Map & Locations - Takes 2/5 on desktop */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="lg:col-span-2 space-y-4"
                    >
                        {/* Map Card */}
                        <div className="bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-200/60 shadow-2xl">
                            <div className="relative h-[200px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 pointer-events-none z-10" />
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
                                <div className="absolute top-3 left-3 z-20 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 border border-slate-200/60 shadow-lg">
                                    <div className="flex items-center gap-2">
                                        <LocateFixed className="w-3 h-3 text-indigo-600 animate-pulse" />
                                        <span className="text-xs font-medium text-slate-700">Our Locations</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Location Cards */}
                        <div className="space-y-3">
                            {locations.map((location, index) => {
                                const Icon = location.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                        whileHover={{ x: 4, scale: 1.02 }}
                                        className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 border border-slate-200/60 shadow-lg hover:shadow-xl transition-all group"
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className={`p-2 rounded-xl bg-gradient-to-br ${location.gradient} shadow-lg flex-shrink-0`}>
                                                <Icon className="w-4 h-4 text-white" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2">
                                                    <h4 className="text-sm font-bold text-slate-900">{location.title}</h4>
                                                    <span className="text-lg">{location.flag}</span>
                                                </div>
                                                <p className="text-[10px] text-slate-500 font-medium">{location.subtitle}</p>
                                                <p className="text-xs text-slate-600 mt-0.5">{location.address}</p>
                                                <p className="text-xs text-slate-500">{location.city}</p>
                                                {location.phone && (
                                                    <p className="text-xs text-slate-600 mt-1 flex items-center gap-1.5">
                                                        <Phone className="w-3 h-3 text-indigo-500" />
                                                        {location.phone}
                                                    </p>
                                                )}
                                                <p className="text-xs text-slate-600 flex items-center gap-1.5">
                                                    <Mail className="w-3 h-3 text-indigo-500" />
                                                    {location.email}
                                                </p>
                                            </div>
                                            <motion.div
                                                whileHover={{ rotate: 45 }}
                                                className="p-1.5 rounded-lg bg-slate-100 opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                <ArrowRight className="w-3 h-3 text-slate-400" />
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Trust Badge */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-4 border border-indigo-200/50"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-300 to-purple-300 border-2 border-white flex items-center justify-center text-[8px] text-white font-medium">
                                            {String.fromCharCode(64 + i)}
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-800">Trusted by 150+ companies</p>
                                    <div className="flex items-center gap-1">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                        ))}
                                        <span className="text-xs text-slate-500 ml-1">4.9/5</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}