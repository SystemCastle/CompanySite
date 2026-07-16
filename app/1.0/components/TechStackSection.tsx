import MarqueeTrack from './MarqueeTrack';
import styles from './TechStackSection.module.css'
import { TechRow } from './types';

const techRows: TechRow[] = [
    {
        title: "Languages",
        items: [
            { name: "JavaScript", logoSrc: "javascript" },
            { name: "TypeScript", logoSrc: "typescript" },
            { name: "Python", logoSrc: "python" },
            { name: "Java", logoSrc: "openjdk" },
            { name: "C++", logoSrc: "cplusplus" },
            { name: "C#", logoSrc: "dotnet" },
            { name: "Go", logoSrc: "go" },
            { name: "PHP", logoSrc: "php" },
            { name: "Dart", logoSrc: "dart" },
            { name: "SQL", logoSrc: "mysql" },
            { name: "HTML5", logoSrc: "html5" },
            { name: "CSS3", logoSrc: "css" },
        ],
    },
    {
        title: "Frameworks & Libraries",
        reverse: true,
        items: [
            { name: "React", logoSrc: "react" },
            { name: "Next.js", logoSrc: "nextdotjs" },
            { name: "Node.js", logoSrc: "nodedotjs" },
            { name: "Express", logoSrc: "express" },
            { name: "Django", logoSrc: "django" },
            { name: "Spring", logoSrc: "spring" },
            { name: "Angular", logoSrc: "angular" },
            { name: "Vue", logoSrc: "vuedotjs" },
            { name: "Flutter", logoSrc: "flutter" },
            { name: "Tailwind CSS", logoSrc: "tailwindcss" },
            { name: "WordPress", logoSrc: "wordpress" },

            { name: "React Native", logoSrc: "react" },
            { name: "ASP.NET Core", logoSrc: "dotnet" },
            { name: "Entity Framework Core", logoSrc: "dotnet" },
            { name: "Bootstrap", logoSrc: "bootstrap" },
            { name: "REST API", logoSrc: "openapiinitiative" },
            { name: "YOLOv6", logoSrc: "opencv" },
            { name: "OpenCV", logoSrc: "opencv" },
            { name: "TensorFlow", logoSrc: "tensorflow" },
            { name: "PyTorch", logoSrc: "pytorch" },
            { name: "RDLC Reports", logoSrc: "microsoft" },
        ],
    },
    {
        title: "Databases",
        items: [
            { name: "PostgreSQL", logoSrc: "postgresql" },
            { name: "MySQL", logoSrc: "mysql" },
            { name: "MongoDB", logoSrc: "mongodb" },
            { name: "Redis", logoSrc: "redis" },
            { name: "Firebase", logoSrc: "firebase" },
            { name: "Supabase", logoSrc: "supabase" },
            { name: "SQLite", logoSrc: "sqlite" },
            { name: "MariaDB", logoSrc: "mariadb" },

            { name: "Microsoft SQL Server", logoSrc: "microsoftsqlserver" },
            { name: "Oracle Database", logoSrc: "oracle" },
        ],
    },
];

export default function TechStackSection() {
    return (
        <section className="relative overflow-hidden bg-white">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white" />

            <div className="page-container relative z-10 section-spacing">
                <div className="mx-auto mb-10 max-w-2xl text-center">
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
                            <div className="mt-16 mb-16 flex items-center justify-center">
                                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                                    {row.title}
                                </h3>
                            </div>

                            <div className={styles.marquee}>
                                <div className={`${styles.fade} ${styles['fade-left']}`} />
                                <div className={`${styles.fade} ${styles['fade-right']}`} />

                                <MarqueeTrack
                                    items={row.items}
                                    rowTitle={row.title}
                                    reverse={row.reverse}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
