"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
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
        title: "Healthcare Management Information System",
        category: "HealthTech",
        description: "An end-to-end healthcare platform unifying patient records, clinical workflows, doctor scheduling, and medical billing.",
        image: "/images/HMIS.png",
        tags: [
            "ASP.NET Core",
            "Entity Framework Core",
            "Microsoft SQL Server",
            "React JS",
            "React Native",
            "Next JS",
            "RESTful APIs",
            "Reporting & Analytics",
            "Responsive Web UI"
        ],

        metrics: [
            { label: "Patient Records Digitized", value: "Full EHR" },
            { label: "Scheduling Efficiency", value: "60%" },
            { label: "Billing Accuracy", value: "99%" }
        ],
        color: "",
        gradient: "",
        featured: false
    },
    {
        id: 2,
        title: "Campus Management System",
        category: "EdTech",
        description: "A unified campus management platform integrating student, staff, and institutional ERP portals.",
        image: "/images/CampusManagement.jpeg",
        tags: ["ASP.NET Core", "Entity Framework Core", "Microsoft SQL Server", "React Native", "Bootstrap", "RDLC Reports", "REST APIS", "Next JS"],
        metrics: [
            { label: "Modules Integrated", value: "10+" },
            { label: "Process Efficiency", value: "50%" },
            { label: "Users Onboarded", value: "5K+" }
        ],
        color: "",
        gradient: "",
        featured: false
    },
    {
        id: 3,
        title: "Safe City Project",
        category: "Citizen Services (G2C)",
        description: "The ultimate command & control platform for an integrated emergency response system — Police-15, Rescue 1122, and a unified inter-agency communication and radio dispatch framework.",
        image: "/images/SafeCity.jpeg",
        tags: ["SQL Server", "Oracle DBMS", "NoSQL", "SAN/NAS Storage", "Flutter / React Native", "Java / Python / Node.js"],
        metrics: [
            { label: "Agencies Unified", value: "Multi-Agency" },
            { label: "Real-Time Dispatch", value: "24/7" },
            { label: "Data Reliability", value: "High Availability" }
        ],
        color: "from-blue-600 to-indigo-500",
        gradient: "from-blue-500/20 via-indigo-500/20 to-transparent",
        featured: true
    },
    {
        id: 4,
        title: "AI-Powered Road Maintenance System",
        category: "Transportation",
        description: "Next-gen AI and data analytics for smart road monitoring, infrastructure preservation, and maintenance.",
        image: "/images/AI-Road-Maintenance.jpeg",
        // tags: ["YOLOv6", "Python", "AI", "Computer Vision"],
        tags: [
            "PostgreSQL",
            "TensorFlow",
            "OpenCV",
            "PowerBI",
            "Yolo V4",
            "GeoServer",
            "React",
            "Python"
        ],
        metrics: [
            { label: "Detection Accuracy", value: "98%" },
            { label: "Monitoring", value: "Real-Time" },
            { label: "Maintenance Planning", value: "Automated" }
        ],
        color: "",
        gradient: "",
        featured: false
    },
    {
        id: 5,
        title: "Women Safety Mobile App",
        category: "Citizen Services (G2C)",
        description: "An intelligent women's safety app featuring an IVR helpline, instant SOS, and automated police, media, and legal routing.",
        image: "/images/WomenSafetyAppp.jpeg",
        tags: ["React JS", "Flutter", "Node JS", "SQL Server", "IVR System", "AWS"],
        metrics: [
            { label: "SOS Response Time", value: "<30s" },
            { label: "Agencies Connected", value: "3+" },
            { label: "Uptime", value: "99.9%" }
        ],
        color: "",
        gradient: "",
        featured: true
    },
]



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
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/10 via-purple-500/5 to-transparent" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-cyan-500/10 via-blue-500/5 to-transparent" />

                {/* Glass glow */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-indigo-500/5 blur-3xl" />
                <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-cyan-500/5 blur-3xl" />

                {/* Grid */}
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>


            <div className="page-container relative z-10 section-spacing">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                        <span>Featured </span>
                        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>

                    <p className="mt-4 text-lg text-pretty text-slate-400 max-w-3xl mx-auto">
                        Explore our success stories and see how we&apos;ve helped businesses transform through technology and innovation.
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
                                ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg shadow-indigo-500/25"
                                : "bg-white/5 backdrop-blur-md border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
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
                                <div className="relative bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 rounded-2xl overflow-hidden border border-white/10 shadow-sm hover:shadow-2xl transition-all duration-500 h-full">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} to-transparent`} />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                            <div className="flex items-center gap-3">
                                                <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                                                    <ZoomIn className="w-6 h-6 text-white" />
                                                </div>

                                                <span className="text-white font-medium">
                                                    View Project
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="text-xs font-medium text-indigo-300 mb-1">
                                            {project.category}
                                        </div>

                                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                                            {project.title}
                                        </h3>

                                        <p className="text-sm text-slate-400 line-clamp-2 mb-4">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tags.map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    className="text-xs bg-white/5 backdrop-blur-sm border border-white/10 text-slate-300 px-2 py-0.5 rounded-full"
                                                >
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
                        className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 shadow-2xl border border-white/10"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <div className="text-sm font-medium text-indigo-300 mb-1">
                                        {selectedProject.category}
                                    </div>

                                    <h3 className="text-2xl font-bold text-white">
                                        {selectedProject.title}
                                    </h3>
                                </div>

                                <button
                                    onClick={closeModal}
                                    className="p-2 hover:bg-white/10 rounded-xl transition-colors"
                                >
                                    <X className="w-5 h-5 text-slate-300" />
                                </button>
                            </div>

                            <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
                                <Image
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 768px"
                                    className="object-cover"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.gradient} to-transparent`} />
                            </div>

                            <p className="text-slate-300 leading-relaxed mb-6">
                                {selectedProject.description}
                            </p>

                            <div className="grid grid-cols-3 gap-4 mb-6">
                                {selectedProject.metrics.map((metric, idx) => (
                                    <div
                                        key={idx}
                                        className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4"
                                    >
                                        <p className="text-2xl font-bold text-white">
                                            {metric.value}
                                        </p>
                                        <p className="text-xs text-slate-400">
                                            {metric.label}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {selectedProject.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 text-slate-300 rounded-full text-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <button
                                onClick={closeModal}
                                className="mt-6 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-3 rounded-xl font-medium hover:opacity-90 transition-colors"
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
