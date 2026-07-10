import MarqueeTrack from './MarqueeTrack';
import styles from './TechStackSection.module.css'

const partners = [
    {
        name: "Google Cloud",
        logoSrc: "googlecloud",
    },
    {
        name: "UiPath",
        logoSrc: "uipath",
    },
    {
        name: "SAP",
        logoSrc: "sap",
    },
    {
        name: "Accenture",
        logoSrc: "accenture",
    },
    {
        name: "MongoDB",
        logoSrc: "mongodb",
    },
    {
        name: "Docker",
        logoSrc: "docker",
    },
    {
        name: "GitHub",
        logoSrc: "github",
    },
];

export default function ClientPartnerCarousel() {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-12 sm:py-14 lg:py-10">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-10 max-w-2xl text-center">
                    <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
                        Teams building with System Castle
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                        Trusted across automation, fintech, telecom, energy, cloud, and enterprise operations.
                    </p>
                </div>

                <div className="space-y-8">
                    <div className="tech-row">
                        <div className={styles.marquee}>
                            <div className={`${styles.fade} ${styles['fade-left']}`} />
                            <div className={`${styles.fade} ${styles['fade-right']}`} />

                            <MarqueeTrack
                                rowTitle="Client & Partner Logos"
                                items={partners}
                                reverse={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}