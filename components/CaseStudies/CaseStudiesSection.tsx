"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Sparkles,
    CheckCircle2
} from "lucide-react";

interface CaseStudy {
    id: number;
    title: string;
    description: string;
    category: string;
    results: string[];
}

const caseStudies: CaseStudy[] = [
    {
        id: 1,
        title: "RPA - 4G Package Change",
        description: "We collaborated with a prominent telecommunications and broadband giant to revolutionize their 4G package change procedure. We helped this telco automate this process with AI, reducing errors and costs while improving customer satisfaction. Our automation solutions have led to remarkable outcomes, transforming the way they serve their valued customers.",
        category: "Telecom Automation",
        results: ["60% faster processing", "40% cost reduction", "99.9% accuracy"]
    },
    {
        id: 2,
        title: "RPA - Account Closure",
        description: "Discover how we overhauled a leading microfinance bank's account closure system, turned obstacles into opportunities, and reshaped the automation landscape. We explore the pain points, such as manual procedures, prolonged processing times, and frequent errors, which hindered customer satisfaction and strained the bank's resources.",
        category: "Fintech Automation",
        results: ["70% faster closure", "50% error reduction", "95% customer satisfaction"]
    },
    {
        id: 3,
        title: "AI - Customer Support",
        description: "We implemented an AI-powered customer support system for a major e-commerce platform, reducing response times and improving customer experience. Our solution handles thousands of queries simultaneously with human-like accuracy.",
        category: "AI Solutions",
        results: ["80% faster response", "45% cost savings", "92% resolution rate"]
    }
];

export default function CaseStudiesSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex, isAutoPlaying]);

    const handlePrevious = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
    };

    const handleDotClick = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    const currentStudy = caseStudies[currentIndex];

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? "100%" : "-100%",
            opacity: 0,
        }),
    };

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-indigo-50/80 backdrop-blur-sm px-4 py-2 rounded-full border border-indigo-100 mb-4">
                        <Sparkles className="w-4 h-4 text-indigo-600" />
                        <span className="text-sm font-medium text-indigo-600">Success Stories</span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
                        Case Studies
                    </h2>
                </div>

                {/* Carousel Container */}
                <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 rounded-3xl shadow-2xl overflow-hidden min-h-[500px] lg:min-h-[600px]">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.3) 0%, transparent 50%), 
                                 radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)`,
                            }}
                        />
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                                backgroundSize: '40px 40px',
                            }}
                        />
                    </div>

                    {/* Slides */}
                    <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 },
                                }}
                                className="absolute inset-0 flex items-center justify-center p-8 lg:p-16"
                            >
                                <div className="max-w-4xl mx-auto text-center text-white">
                                    {/* Category Badge */}
                                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                                        <span className="text-xs font-medium text-white/80">{currentStudy.category}</span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                                        {currentStudy.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto mb-8">
                                        {currentStudy.description}
                                    </p>

                                    {/* Results Badges */}
                                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                                        {currentStudy.results.map((result, idx) => (
                                            <div key={idx} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white/90">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                                {result}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Read More Link */}
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-2 text-white font-medium hover:text-indigo-200 transition-colors group border-b-2 border-white/30 hover:border-indigo-300 pb-1"
                                    >
                                        <span>Read more</span>
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Controls */}
                    <button
                        onClick={handlePrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
                    >
                        <ChevronRight className="w-5 h-5 text-white" />
                    </button>

                    {/* Dots */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                        {caseStudies.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`transition-all duration-300 ${currentIndex === index
                                    ? "w-8 h-2.5 bg-white rounded-full"
                                    : "w-2.5 h-2.5 bg-white/30 rounded-full hover:bg-white/50"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}