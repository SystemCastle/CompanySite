"use client";

const partners = [
    {
        name: "Google Cloud",
        logoSrc: "https://cdn.simpleicons.org/googlecloud",
        type: "Cloud Partner",
    },
    {
        name: "UiPath",
        logoSrc: "https://cdn.simpleicons.org/uipath",
        type: "Automation Partner",
    },
    {
        name: "SAP",
        logoSrc: "https://cdn.simpleicons.org/sap",
        type: "Enterprise Partner",
    },
    {
        name: "Accenture",
        logoSrc: "https://cdn.simpleicons.org/accenture",
        type: "Consulting Network",
    },
    {
        name: "Cisco",
        logoSrc: "https://cdn.simpleicons.org/cisco",
        type: "Network Partner",
    },
    {
        name: "VMware",
        logoSrc: "https://cdn.simpleicons.org/vmware",
        type: "Infrastructure Partner",
    },
    {
        name: "Red Hat",
        logoSrc: "https://cdn.simpleicons.org/redhat",
        type: "Platform Partner",
    },
    {
        name: "MongoDB",
        logoSrc: "https://cdn.simpleicons.org/mongodb",
        type: "Data Partner",
    },
    {
        name: "Docker",
        logoSrc: "https://cdn.simpleicons.org/docker",
        type: "DevOps Partner",
    },
    {
        name: "GitHub",
        logoSrc: "https://cdn.simpleicons.org/github",
        type: "Engineering Partner",
    },
];

const carouselItems = [...partners, ...partners];

export default function ClientPartnerCarousel() {
    return (
        <section className="relative overflow-hidden bg-white pt-6 pb-14 sm:pt-6 sm:pb-16 lg:pt-6 lg:pb-18">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white via-slate-50/70 to-white" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-8 max-w-2xl text-center">
                    {/* <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
                        Clients & Partners
                    </p> */}
                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                        Teams building with System Castle
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                        Trusted across automation, fintech, telecom, energy, cloud, and enterprise operations.
                    </p>
                </div>

                <div className="carousel-shell">
                    <div className="carousel-fade left-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
                    <div className="carousel-fade right-0 bg-gradient-to-l from-white via-white/90 to-transparent" />

                    <div className="carousel-track">
                        {carouselItems.map((partner, index) => (
                            <div className="logo-card" key={`${partner.name}-${index}`}>
                                <div className="logo-mark">
                                    <span
                                        className="logo-image"
                                        role="img"
                                        aria-label={`${partner.name} logo`}
                                        style={{ backgroundImage: `url(${partner.logoSrc})` }}
                                    />
                                </div>
                                <div className="min-w-0">
                                    <p className="truncate text-sm font-semibold text-slate-900">
                                        {partner.name}
                                    </p>
                                    <p className="mt-0.5 text-xs text-slate-500">{partner.type}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .carousel-shell {
                    position: relative;
                    overflow: hidden;
                    border-block: 1px solid rgba(226, 232, 240, 0.9);
                    padding-block: 18px;
                }

                .carousel-fade {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    z-index: 2;
                    width: 76px;
                    pointer-events: none;
                }

                .carousel-track {
                    display: flex;
                    width: max-content;
                    gap: 14px;
                    animation: logo-scroll 34s linear infinite;
                }

                .carousel-shell:hover .carousel-track {
                    animation-play-state: paused;
                }

                .logo-card {
                    width: 218px;
                    min-height: 82px;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    border: 1px solid rgba(226, 232, 240, 0.95);
                    border-radius: 14px;
                    background: rgba(255, 255, 255, 0.88);
                    padding: 14px;
                    box-shadow: 0 14px 32px rgba(15, 23, 42, 0.06);
                }

                .logo-mark {
                    width: 48px;
                    height: 42px;
                    flex: 0 0 auto;
                    display: grid;
                    place-items: center;
                    border-radius: 12px;
                    background: #f8fafc;
                    border: 1px solid rgba(226, 232, 240, 0.9);
                }

                .logo-image {
                    display: block;
                    width: 30px;
                    height: 24px;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: contain;
                }

                @keyframes logo-scroll {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(calc(-50% - 7px));
                    }
                }

                @media (max-width: 640px) {
                    .carousel-shell {
                        margin-inline: -16px;
                        padding-block: 14px;
                    }

                    .carousel-fade {
                        width: 34px;
                    }

                    .carousel-track {
                        gap: 10px;
                        animation-duration: 28s;
                    }

                    .logo-card {
                        width: 178px;
                        min-height: 72px;
                        border-radius: 12px;
                        padding: 12px;
                        gap: 10px;
                    }

                    .logo-mark {
                        width: 44px;
                        height: 38px;
                        border-radius: 11px;
                    }

                    .logo-image {
                        width: 28px;
                        height: 22px;
                    }
                }

                @media (prefers-reduced-motion: reduce) {
                    .carousel-track {
                        animation: none;
                        flex-wrap: wrap;
                        justify-content: center;
                        width: 100%;
                    }
                }
            `}</style>
        </section>
    );
}
