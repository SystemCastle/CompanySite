import MarqueeTrack from './MarqueeTrack';
import styles from './TechStackSection.module.css'

const partners = [
    {
        name: "Huawei",
        logoSrc: "/company/huawei.webp",
    },
    {
        name: "Ericsson",
        logoSrc: "/company/ericsson.png",
    },
    {
        name: "Nokia",
        logoSrc: "/company/nokia.png",
    },
    {
        name: "Celcom",
        logoSrc: "/company/celcom.jpg",
    },
    {
        name: "Singtel",
        logoSrc: "/company/singtel.webp",
    },
    {
        name: "Orange",
        logoSrc: "/company/orangeorange.svg",
    },
    {
        name: "STC",
        logoSrc: "/company/stc.png",
    },
    {
        name: "Mobily",
        logoSrc: "/company/mobily.jpg",
    },
    {
        name: "OmanTel",
        logoSrc: "/company/omantel.webp",
    },
    {
        name: "Du",
        logoSrc: "/company/du.svg",
    },
    {
        name: "Batelco",
        logoSrc: "/company/batelco.png",
    },
    {
        name: "Qtel",
        logoSrc: "/company/ooredoo.png",
    },
    {
        name: "Lebara",
        logoSrc: "/company/lebara.jpg",
    },
];

export default function ClientPartnerCarousel() {
    return (

        <section className="relative overflow-hidden bg-white">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

            <div className="page-container relative z-10 section-spacing">
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
                            <div className={`${styles.fade} ${styles["fade-left"]}`} />
                            <div className={`${styles.fade} ${styles["fade-right"]}`} />

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