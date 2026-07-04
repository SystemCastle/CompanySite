"use client";

import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center overflow-hidden">
            {/* Background Color */}
            <div className="absolute inset-0" style={{ backgroundColor: "#1B244F" }} />

            {/* Video Background - 80vh from bottom */}
            <div className="absolute inset-x-0 bottom-0 h-[80vh]">
                <div className="relative w-full h-full">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        style={{
                            backgroundColor: "transparent",
                            mixBlendMode: "lighten",
                            opacity: 0.6
                        }}
                    >
                        <source src="/assets/video/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
                <div className="max-w-4xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                        We build software
                        <br />
                        <span className="text-white">people trust.</span>
                    </h1>

                    <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed">
                        Custom software development for startups and enterprises.
                        <br className="hidden sm:block" />
                        Scalable, secure and built to last.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-slate-900 rounded-full font-medium hover:bg-white/90 transition-all hover:shadow-lg">
                            Start a Project
                            <ArrowRight className="w-4 h-4" />
                        </button>

                        <button className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent text-white rounded-full font-medium hover:bg-white/10 transition-all border border-white/30 hover:border-white/50">
                            <Play className="w-4 h-4" />
                            View our work
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}