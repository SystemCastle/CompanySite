"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    Sparkles,
    Globe,
    Smartphone,
    Monitor,
    Shield,
    Layers,
    Code2,
    X,
    ZoomIn
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
    featured?: boolean;
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
        gradient: "from-blue-500/20 via-cyan-500/20 to-transparent",
        featured: true
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
        gradient: "from-purple-500/20 via-pink-500/20 to-transparent",
        featured: false
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
        gradient: "from-emerald-500/20 via-teal-500/20 to-transparent",
        featured: false
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
        gradient: "from-orange-500/20 via-amber-500/20 to-transparent",
        featured: false
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
        gradient: "from-red-500/20 via-rose-500/20 to-transparent",
        featured: false
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
        gradient: "from-indigo-500/20 via-violet-500/20 to-transparent",
        featured: false
    }
];

const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: (i * 37) % 100,
    y: (i * 53) % 100,
    size: (i % 3) + 1,
    duration: 10 + (i % 6) * 2,
    delay: (i % 5) * 0.4,
    opacity: 0.1 + (i % 4) * 0.06
}));

// Floating particles component
function FloatingParticles() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-gradient-to-r from-indigo-400/20 to-purple-400/20"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                    }}
                    animate={{
                        y: [0, -40, 0],
                        x: [0, 30, 0],
                        opacity: [particle.opacity, particle.opacity * 2, particle.opacity],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

export default function ProjectsSectionV2() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [filter, setFilter] = useState<string>("All");
    const containerRef = useRef<HTMLDivElement>(null);

    // Get unique categories
    const categories = ["All", ...new Set(projects.map(p => p.category))];

    // Filter projects
    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter);

    // Open modal
    const openModal = (project: Project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <section className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-50/30 via-purple-50/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-blue-50/20 to-transparent" />
            </div>
            <FloatingParticles />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200/60 shadow-sm mb-4">
                        <Sparkles className="w-4 h-4 text-indigo-600" />
                        <span className="text-sm font-medium text-slate-600">Our Portfolio</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
                        <span className="block">Featured</span>
                        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Explore our success stories and see how we&apos;ve helped businesses transform through technology
                    </p>
                </motion.div>

                {/* Filter Buttons */}
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
                                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    ref={containerRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredProjects.map((project, index) => {
                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onClick={() => openModal(project)}
                                className="group cursor-pointer"
                            >
                                <div className="relative bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-2xl transition-all duration-500 h-full">
                                    {/* Image/Placeholder */}
                                    <div className={`relative h-48 bg-gradient-to-br ${project.color}`}>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-white/20">
                                                {project.id === 1 && <Globe className="w-16 h-16" />}
                                                {project.id === 2 && <Shield className="w-16 h-16" />}
                                                {project.id === 3 && <Code2 className="w-16 h-16" />}
                                                {project.id === 4 && <Smartphone className="w-16 h-16" />}
                                                {project.id === 5 && <Layers className="w-16 h-16" />}
                                                {project.id === 6 && <Monitor className="w-16 h-16" />}
                                            </div>
                                        </div>
                                        {/* Overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                            <div className="flex items-center gap-3">
                                                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                                                    <ZoomIn className="w-6 h-6 text-white" />
                                                </div>
                                                <span className="text-white font-medium">View Project</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="text-xs font-medium text-indigo-600 mb-1">
                                            {project.category}
                                        </div>
                                        <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 line-clamp-2 mb-4">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tags.map((tag, idx) => (
                                                <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
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
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 shadow-2xl"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <div className="text-sm font-medium text-indigo-600 mb-1">
                                        {selectedProject.category}
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
                                <div className="text-white/20">
                                    {selectedProject.id === 1 && <Globe className="w-20 h-20" />}
                                    {selectedProject.id === 2 && <Shield className="w-20 h-20" />}
                                    {selectedProject.id === 3 && <Code2 className="w-20 h-20" />}
                                    {selectedProject.id === 4 && <Smartphone className="w-20 h-20" />}
                                    {selectedProject.id === 5 && <Layers className="w-20 h-20" />}
                                    {selectedProject.id === 6 && <Monitor className="w-20 h-20" />}
                                </div>
                            </div>

                            <p className="text-slate-600 leading-relaxed mb-6">
                                {selectedProject.description}
                            </p>

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
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
