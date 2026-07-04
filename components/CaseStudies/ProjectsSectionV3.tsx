"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
    ShoppingBag,
    ArrowRight,
    Sparkles,
    Zap,
    CheckCircle2,
    ExternalLink,
    ChevronRight,
    Briefcase,
    TrendingUp,
    Globe,
    Smartphone,
    Monitor,
    Shield,
    Layers,
    Code2,
    Star,
    Play,
    X,
    ZoomIn,
    Award,
    Clock,
    Users,
    Rocket,
    Heart,
    Coffee,
    Camera,
    Palette,
    Gift,
    Lightbulb,
    PenTool,
    MessageCircle,
    Eye,
    Music,
    Film,
    Cloud,
    Database,
    Server,
    Cpu,
    GitBranch,
    Layout,
    Box,
    Terminal,
    Grid,
    ArrowUpRight,
    Circle,
    Square,
    Triangle,
    Hexagon,
    Diamond,
    Octagon
} from "lucide-react";

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    tags: string[];
    metrics: { label: string; value: string }[];
    color: string;
    gradient: string;
    icon: any;
    year: string;
    client: string;
    testimonial?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "4G Package Change Automation",
        category: "Telecom",
        description: "Revolutionized 4G package change procedure for a telecom giant using AI-powered automation, reducing errors and costs while improving customer satisfaction.",
        image: "/api/placeholder/800/500",
        tags: ["AI", "RPA", "Telecom"],
        metrics: [
            { label: "Faster Processing", value: "60%" },
            { label: "Cost Reduction", value: "40%" },
            { label: "Accuracy", value: "99.9%" }
        ],
        color: "from-blue-600 to-cyan-500",
        gradient: "from-blue-500/30 via-cyan-500/30 to-transparent",
        icon: Globe,
        year: "2024",
        client: "Telecom Giant",
        testimonial: "This automation transformed our operations completely. We've seen unprecedented efficiency gains."
    },
    {
        id: 2,
        title: "Account Closure System",
        category: "Fintech",
        description: "Overhauled a microfinance bank's account closure system, turning manual procedures into automated workflows for faster processing and fewer errors.",
        image: "/api/placeholder/800/500",
        tags: ["Fintech", "Automation", "Banking"],
        metrics: [
            { label: "Faster Closure", value: "70%" },
            { label: "Error Reduction", value: "50%" },
            { label: "Satisfaction", value: "95%" }
        ],
        color: "from-purple-600 to-pink-500",
        gradient: "from-purple-500/30 via-pink-500/30 to-transparent",
        icon: Shield,
        year: "2024",
        client: "Microfinance Bank",
        testimonial: "The new system has revolutionized how we handle account closures. Our customers love it."
    },
    {
        id: 3,
        title: "AI Customer Support Platform",
        category: "E-commerce",
        description: "Implemented AI-powered customer support for an e-commerce platform, handling thousands of queries simultaneously with human-like accuracy.",
        image: "/api/placeholder/800/500",
        tags: ["AI", "Chatbot", "E-commerce"],
        metrics: [
            { label: "Faster Response", value: "80%" },
            { label: "Cost Savings", value: "45%" },
            { label: "Resolution Rate", value: "92%" }
        ],
        color: "from-emerald-600 to-teal-500",
        gradient: "from-emerald-500/30 via-teal-500/30 to-transparent",
        icon: MessageCircle,
        year: "2023",
        client: "E-commerce Platform",
        testimonial: "Our support team's productivity has skyrocketed. This AI solution is a game-changer."
    },
    {
        id: 4,
        title: "Digital Banking Platform",
        category: "Fintech",
        description: "Built a comprehensive digital banking platform with real-time transactions, biometric authentication, and AI-powered fraud detection.",
        image: "/api/placeholder/800/500",
        tags: ["Banking", "Security", "Mobile"],
        metrics: [
            { label: "Users Onboarded", value: "50K+" },
            { label: "Uptime", value: "99.99%" },
            { label: "Security Score", value: "A+" }
        ],
        color: "from-orange-600 to-amber-500",
        gradient: "from-orange-500/30 via-amber-500/30 to-transparent",
        icon: Smartphone,
        year: "2024",
        client: "Digital Bank",
        testimonial: "The platform has exceeded all our expectations. Our users love the seamless experience."
    },
    {
        id: 5,
        title: "Smart IoT Solution",
        category: "IoT",
        description: "Developed an end-to-end IoT solution for smart building management, integrating sensors, cloud analytics, and real-time monitoring dashboards.",
        image: "/api/placeholder/800/500",
        tags: ["IoT", "Cloud", "Analytics"],
        metrics: [
            { label: "Energy Savings", value: "35%" },
            { label: "Devices Connected", value: "10K+" },
            { label: "Response Time", value: "<100ms" }
        ],
        color: "from-red-600 to-rose-500",
        gradient: "from-red-500/30 via-rose-500/30 to-transparent",
        icon: Database,
        year: "2023",
        client: "Smart Building Co",
        testimonial: "Our buildings are now smarter and more efficient than ever. This solution is incredible."
    },
    {
        id: 6,
        title: "Healthcare Management System",
        category: "Healthcare",
        description: "Created a comprehensive healthcare management platform with patient records, appointment scheduling, telemedicine, and AI-powered diagnostics.",
        image: "/api/placeholder/800/500",
        tags: ["Healthcare", "AI", "Mobile"],
        metrics: [
            { label: "Patients Served", value: "100K+" },
            { label: "Efficiency Gain", value: "55%" },
            { label: "Accuracy", value: "96%" }
        ],
        color: "from-indigo-600 to-violet-500",
        gradient: "from-indigo-500/30 via-violet-500/30 to-transparent",
        icon: Heart,
        year: "2024",
        client: "Healthcare Provider",
        testimonial: "This system has transformed patient care. Doctors and patients both love it."
    },
    {
        id: 7,
        title: "E-commerce Platform",
        category: "E-commerce",
        description: "Built a scalable e-commerce platform with advanced search, recommendation engine, and seamless payment integration.",
        image: "/api/placeholder/800/500",
        tags: ["E-commerce", "Search", "Payments"],
        metrics: [
            { label: "Revenue Growth", value: "150%" },
            { label: "Conversion Rate", value: "12%" },
            { label: "Products Listed", value: "100K+" }
        ],
        color: "from-pink-600 to-rose-500",
        gradient: "from-pink-500/30 via-rose-500/30 to-transparent",
        icon: ShoppingBag,
        year: "2023",
        client: "Retail Brand",
        testimonial: "Our online sales have skyrocketed since launching this platform. Couldn't be happier."
    },
    {
        id: 8,
        title: "AI Analytics Dashboard",
        category: "Analytics",
        description: "Developed a real-time AI analytics dashboard with predictive modeling, data visualization, and automated reporting capabilities.",
        image: "/api/placeholder/800/500",
        tags: ["AI", "Analytics", "Visualization"],
        metrics: [
            { label: "Data Points", value: "1M+" },
            { label: "Prediction Accuracy", value: "94%" },
            { label: "Reports Generated", value: "10K+" }
        ],
        color: "from-cyan-600 to-blue-500",
        gradient: "from-cyan-500/30 via-blue-500/30 to-transparent",
        icon: TrendingUp,
        year: "2024",
        client: "Data Company",
        testimonial: "The insights we're getting from this dashboard are invaluable. It's transformed our decision-making."
    },
    {
        id: 9,
        title: "Cloud Migration Project",
        category: "Cloud",
        description: "Managed end-to-end cloud migration for a large enterprise, including strategy, implementation, and optimization of cloud infrastructure.",
        image: "/api/placeholder/800/500",
        tags: ["Cloud", "DevOps", "Migration"],
        metrics: [
            { label: "Cost Savings", value: "40%" },
            { label: "Performance Gain", value: "60%" },
            { label: "Uptime", value: "99.99%" }
        ],
        color: "from-yellow-600 to-orange-500",
        gradient: "from-yellow-500/30 via-orange-500/30 to-transparent",
        icon: Cloud,
        year: "2023",
        client: "Enterprise Co",
        testimonial: "The migration was seamless and the results speak for themselves. Highly recommended."
    }
];

// 3D Card Component
function ProjectCard3D({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = cardRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x, y });
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
            className="relative cursor-pointer group"
            style={{
                perspective: 1000,
            }}
        >
            <motion.div
                animate={{
                    rotateX: isHovered ? -mousePosition.y * 8 : 0,
                    rotateY: isHovered ? mousePosition.x * 8 : 0,
                    scale: isHovered ? 1.02 : 1,
                    y: isHovered ? -8 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="relative bg-white rounded-3xl overflow-hidden border border-slate-200/60 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Icon Background */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <project.icon className="w-full h-full" />
                </div>

                {/* Content */}
                <div className="relative p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-2xl bg-gradient-to-br ${project.color} shadow-lg`}>
                            <project.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-xs font-medium text-slate-400">{project.year}</div>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2 mb-4">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.slice(0, 3).map((tag, idx) => (
                            <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100">
                        {project.metrics.slice(0, 3).map((metric, idx) => (
                            <div key={idx} className="text-center">
                                <p className="text-base font-bold text-slate-900">{metric.value}</p>
                                <p className="text-[10px] text-slate-500">{metric.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-indigo-600/90 via-purple-600/90 to-transparent flex items-center justify-center pointer-events-none"
                >
                    <div className="text-center text-white">
                        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full inline-block mb-2">
                            <ZoomIn className="w-6 h-6" />
                        </div>
                        <p className="font-medium">View Project</p>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

// Timeline Component
function Timeline() {
    const timelineRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start end", "end start"],
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div ref={timelineRef} className="relative py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200/60 shadow-sm mb-4">
                        <Clock className="w-4 h-4 text-indigo-600" />
                        <span className="text-sm font-medium text-slate-600">Our Journey</span>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">Project Timeline</h2>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <motion.div
                        style={{ scaleY }}
                        className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-600 origin-top h-full"
                    />

                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                        >
                            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                                <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200/60">
                                    <div className="flex items-center gap-2 mb-2 justify-end">
                                        <span className="text-xs font-medium text-indigo-600">{project.year}</span>
                                        <span className="text-xs text-slate-400">•</span>
                                        <span className="text-xs text-slate-500">{project.category}</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-2">{project.title}</h4>
                                    <p className="text-sm text-slate-600">{project.description}</p>
                                </div>
                            </div>

                            {/* Timeline Dot */}
                            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 border-4 border-white shadow-lg" />

                            <div className="w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function ProjectsSectionV3() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [filter, setFilter] = useState<string>("All");

    const categories = ["All", ...new Set(projects.map(p => p.category))];
    const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

    const openModal = (project: Project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-emerald-500/5 blur-3xl"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200/60 shadow-sm mb-4">
                        <Award className="w-4 h-4 text-indigo-600" />
                        <span className="text-sm font-medium text-slate-600">Our Portfolio</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
                        <span className="block">Projects That</span>
                        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Make a Difference
                        </span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Explore our success stories and see how we've helped businesses transform through technology
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
                >
                    {[
                        { label: "Projects Delivered", value: "200+", icon: Briefcase },
                        { label: "Happy Clients", value: "150+", icon: Users },
                        { label: "Success Rate", value: "98%", icon: TrendingUp },
                        { label: "Years Experience", value: "10+", icon: Award },
                    ].map((stat, index) => (
                        <div key={index} className="bg-white rounded-2xl p-6 text-center border border-slate-200/60 shadow-sm">
                            <stat.icon className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
                            <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                            <p className="text-sm text-slate-500">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-2 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === category
                                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25"
                                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                        >
                            <ProjectCard3D
                                project={project}
                                index={index}
                                onClick={() => openModal(project)}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Timeline */}
                <Timeline />

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <div className="inline-flex items-center gap-6 bg-white border border-slate-200/60 rounded-full px-6 py-2.5 shadow-sm hover:shadow-md transition-shadow">
                        <span className="text-sm text-slate-600">Ready to start your project?</span>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all hover:scale-105"
                        >
                            <Rocket className="w-4 h-4" />
                            Let's Talk
                            <ChevronRight className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="fixed inset-0 z-50 bg-slate-900/90 backdrop-blur-sm flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 50 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                        >
                            <div className="p-8">
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-medium text-indigo-600">{selectedProject.category}</span>
                                            <span className="text-xs text-slate-400">•</span>
                                            <span className="text-xs text-slate-400">{selectedProject.year}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900">
                                            {selectedProject.title}
                                        </h3>
                                    </div>
                                    <button
                                        onClick={closeModal}
                                        className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
                                    >
                                        <X className="w-5 h-5 text-slate-600" />
                                    </button>
                                </div>

                                <div className={`h-48 rounded-2xl bg-gradient-to-br ${selectedProject.color} mb-6 flex items-center justify-center`}>
                                    <selectedProject.icon className="w-24 h-24 text-white/20" />
                                </div>

                                <p className="text-slate-600 leading-relaxed mb-6">
                                    {selectedProject.description}
                                </p>

                                {selectedProject.testimonial && (
                                    <div className="bg-indigo-50 rounded-2xl p-6 mb-6 border border-indigo-100">
                                        <p className="text-sm text-indigo-800 italic">"{selectedProject.testimonial}"</p>
                                        <p className="text-xs text-indigo-600 mt-2 font-medium">— {selectedProject.client}</p>
                                    </div>
                                )}

                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    {selectedProject.metrics.map((metric, idx) => (
                                        <div key={idx} className="text-center bg-slate-50 rounded-xl p-4">
                                            <p className="text-2xl font-bold text-slate-900">{metric.value}</p>
                                            <p className="text-xs text-slate-500">{metric.label}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.tags.map((tag, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <button
                                    onClick={closeModal}
                                    className="mt-6 w-full bg-slate-900 text-white py-3 rounded-xl font-medium hover:bg-slate-800 transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}