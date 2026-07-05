"use client";

type TechItem = {
    name: string;
    logoSrc: string;
};

type TechRow = {
    title: string;
    items: TechItem[];
    reverse?: boolean;
};

const iconUrl = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

const techRows: TechRow[] = [
    {
        title: "Languages",
        items: [
            { name: "JavaScript", logoSrc: iconUrl("javascript") },
            { name: "TypeScript", logoSrc: iconUrl("typescript") },
            { name: "Python", logoSrc: iconUrl("python") },
            { name: "Java", logoSrc: iconUrl("openjdk") },
            { name: "C++", logoSrc: iconUrl("cplusplus") },
            { name: "C#", logoSrc: iconUrl("dotnet") },
            { name: "Go", logoSrc: iconUrl("go") },
            { name: "PHP", logoSrc: iconUrl("php") },
            { name: "Dart", logoSrc: iconUrl("dart") },
        ],
    },
    {
        title: "Frameworks",
        reverse: true,
        items: [
            { name: "React", logoSrc: iconUrl("react") },
            { name: "Next.js", logoSrc: iconUrl("nextdotjs") },
            { name: "Node.js", logoSrc: iconUrl("nodedotjs") },
            { name: "Express", logoSrc: iconUrl("express") },
            { name: "Django", logoSrc: iconUrl("django") },
            { name: "Spring", logoSrc: iconUrl("spring") },
            { name: "Angular", logoSrc: iconUrl("angular") },
            { name: "Vue", logoSrc: iconUrl("vuedotjs") },
            { name: "Flutter", logoSrc: iconUrl("flutter") },
            { name: "Tailwind", logoSrc: iconUrl("tailwindcss") },
        ],
    },
    {
        title: "Databases",
        items: [
            { name: "PostgreSQL", logoSrc: iconUrl("postgresql") },
            { name: "MySQL", logoSrc: iconUrl("mysql") },
            { name: "MongoDB", logoSrc: iconUrl("mongodb") },
            { name: "Redis", logoSrc: iconUrl("redis") },
            { name: "Firebase", logoSrc: iconUrl("firebase") },
            { name: "Supabase", logoSrc: iconUrl("supabase") },
            { name: "SQLite", logoSrc: iconUrl("sqlite") },
            { name: "MariaDB", logoSrc: iconUrl("mariadb") },
        ],
    },
];

export default function TechStackSection() {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-18 lg:py-20">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-10 max-w-2xl text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
                        Tech Stack
                    </p>
                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
                        Technologies we build with
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                        A practical stack covering languages, frameworks, and databases for modern product delivery.
                    </p>
                </div>

                <div className="space-y-8">
                    {techRows.map((row) => (
                        <div className="tech-row" key={row.title}>
                            <div className="mb-4 flex items-center justify-center">
                                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                                    {row.title}
                                </h3>
                            </div>

                            <div className="marquee">
                                <div className="fade fade-left" />
                                <div className="fade fade-right" />

                                <div className={`marquee-track ${row.reverse ? "reverse" : ""}`}>
                                    {[...row.items, ...row.items].map((item, index) => (
                                        <div className="tech-item" key={`${row.title}-${item.name}-${index}`}>
                                            <span
                                                className="tech-logo"
                                                role="img"
                                                aria-label={`${item.name} logo`}
                                                style={{ backgroundImage: `url(${item.logoSrc})` }}
                                            />
                                            <span className="tech-name">{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .marquee {
                    position: relative;
                    overflow: hidden;
                    padding-block: 4px;
                }

                .fade {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    z-index: 2;
                    width: 84px;
                    pointer-events: none;
                }

                .fade-left {
                    left: 0;
                    background: linear-gradient(90deg, #f8fafc 0%, rgba(248, 250, 252, 0) 100%);
                }

                .fade-right {
                    right: 0;
                    background: linear-gradient(270deg, #f8fafc 0%, rgba(248, 250, 252, 0) 100%);
                }

                .marquee-track {
                    display: flex;
                    width: max-content;
                    gap: 34px;
                    animation: tech-scroll 32s linear infinite;
                }

                .marquee-track.reverse {
                    animation-direction: reverse;
                    animation-duration: 36s;
                }

                .marquee:hover .marquee-track {
                    animation-play-state: paused;
                }

                .tech-item {
                    width: 96px;
                    flex: 0 0 auto;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                    text-align: center;
                }

                .tech-logo {
                    width: 64px;
                    height: 64px;
                    display: block;
                    border-radius: 999px;
                    background-color: #ffffff;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: 32px 32px;
                    box-shadow: 0 14px 34px rgba(15, 23, 42, 0.08);
                }

                .tech-name {
                    color: #334155;
                    font-size: 13px;
                    font-weight: 600;
                    line-height: 1.2;
                    white-space: nowrap;
                }

                @keyframes tech-scroll {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(calc(-50% - 17px));
                    }
                }

                @media (max-width: 640px) {
                    .fade {
                        width: 36px;
                    }

                    .marquee-track {
                        gap: 24px;
                        animation-duration: 26s;
                    }

                    .marquee-track.reverse {
                        animation-duration: 30s;
                    }

                    .tech-item {
                        width: 78px;
                        gap: 8px;
                    }

                    .tech-logo {
                        width: 56px;
                        height: 56px;
                        background-size: 28px 28px;
                    }

                    .tech-name {
                        font-size: 12px;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .marquee-track,
                    .marquee-track.reverse {
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
