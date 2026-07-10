"use client";

import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        quote: "System Castle transformed our fragmented operations into a streamlined automation roadmap, delivering structure, velocity, and expert engineering judgment from day one.",
        name: "Clint Cooper",
        role: "",
        company: "Teocalli Partners USA",
    },
    {
        quote: "System Castle transformed our fragmented operations into a streamlined automation roadmap, delivering structure, velocity, and expert engineering judgment from day one.",
        name: "Clint Cooper",
        role: "",
        company: "Teocalli Partners USA",
    },
    {
        quote: "System Castle transformed our fragmented operations into a streamlined automation roadmap, delivering structure, velocity, and expert engineering judgment from day one.",
        name: "Clint Cooper",
        role: "",
        company: "Teocalli Partners USA",
    },
    {
        quote: "System Castle transformed our fragmented operations into a streamlined automation roadmap, delivering structure, velocity, and expert engineering judgment from day one.",
        name: "Clint Cooper",
        role: "",
        company: "Teocalli Partners USA",
    },
];

const carouselItems = [...testimonials, ...testimonials];

export default function TestimonialsCarousel() {
    return (
        <section className="overflow-hidden bg-slate-950 py-16 text-white sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-10 max-w-2xl text-center">
                    {/* <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-300">
                        Testimonials
                    </p> */}
                    <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                        Trusted by teams solving real operational problems
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-slate-300 sm:text-base">
                        A High-Performance Delivery Culture Built on Transparency, Absolute Ownership, and Visible Business Impact.
                    </p>
                </div>

                <div className="testimonial-shell">
                    <div className="testimonial-fade left-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
                    <div className="testimonial-fade right-0 bg-gradient-to-l from-slate-950 via-slate-950/90 to-transparent" />

                    <div className="testimonial-track">
                        {carouselItems.map((item, index) => (
                            <article className="testimonial-card" key={`${item.name}-${index}`}>
                                <div className="mb-5 flex items-center justify-between">
                                    <Quote className="h-7 w-7 text-indigo-300" />
                                    <div className="flex gap-1 text-amber-300">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="h-4 w-4 fill-current" />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-sm leading-6 text-slate-200">
                                    {item.quote}
                                </p>
                                <div className="mt-6 border-t border-white/10 pt-4">
                                    <p className="font-semibold text-white">{item.name}</p>
                                    <p className="mt-1 text-xs text-slate-400">
                                        {item.role} {item.company && item.role ? "," : ""} {item.company}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .testimonial-shell {
                    position: relative;
                    overflow: hidden;
                }

                .testimonial-fade {
                    position: absolute;
                    bottom: 0;
                    top: 0;
                    z-index: 2;
                    width: 88px;
                    pointer-events: none;
                }

                .testimonial-track {
                    display: flex;
                    width: max-content;
                    gap: 18px;
                    animation: testimonial-scroll 42s linear infinite;
                }

                .testimonial-shell:hover .testimonial-track {
                    animation-play-state: paused;
                }

                .testimonial-card {
                    width: 360px;
                    min-height: 300px;
                    flex: 0 0 auto;
                    border-radius: 18px;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    background: linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.04));
                    padding: 24px;
                    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.22);
                }

                @keyframes testimonial-scroll {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(calc(-50% - 9px));
                    }
                }

                @media (max-width: 640px) {
                    .testimonial-fade {
                        width: 34px;
                    }

                    .testimonial-track {
                        gap: 14px;
                        animation-duration: 36s;
                    }

                    .testimonial-card {
                        width: 284px;
                        min-height: 340px;
                        border-radius: 16px;
                        padding: 20px;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .testimonial-track {
                        width: 100%;
                        flex-wrap: wrap;
                        justify-content: center;
                        animation: none;
                    }
                }
            `}</style>
        </section>
    );
}
