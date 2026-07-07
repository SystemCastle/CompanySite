import Link from "next/link";
import {
    ArrowRight,
    BarChart3,
    CheckCircle2,
    Globe2,
    Layers3,
    ShieldCheck,
    Sparkles,
    Target,
    Users,
    Workflow,
} from "lucide-react";
import FooterV1 from "../components/FooterV1";
import NavbarV3 from "../components/NavbarV3";
import TestimonialsCarousel from "../components/TestimonialsCarousel";

const metrics = [
    { value: "1000+", label: "processes worked on" },
    { value: "17", label: "countries across delivery regions" },
    { value: "5", label: "core service horizontals" },
    { value: "4", label: "enterprise verticals served" },
];

const principles = [
    {
        icon: Target,
        title: "Outcome-led delivery",
        text: "Every engagement starts with business goals, operational constraints, and measurable value before tools or implementation details.",
    },
    {
        icon: Workflow,
        title: "Process-first automation",
        text: "We map how work actually moves through people, systems, and approvals so automation improves the real operating model.",
    },
    {
        icon: ShieldCheck,
        title: "Enterprise reliability",
        text: "Security, maintainability, documentation, and governance are treated as product requirements, not afterthoughts.",
    },
];

const capabilities = [
    "Intelligent automation strategy",
    "Custom software engineering",
    "Cloud-native product platforms",
    "Data, workflow, and system integrations",
    "UI/UX for operational tools",
    "Security-aware modernization",
];

const industries = [
    "Telecom",
    "Fintech",
    "Energy",
    "BFSI",
    "Enterprise Operations",
    "Contact Centers",
];

const process = [
    {
        step: "01",
        title: "Discover",
        text: "Understand the workflows, users, systems, risks, and business case.",
    },
    {
        step: "02",
        title: "Design",
        text: "Shape the experience, architecture, delivery plan, and success metrics.",
    },
    {
        step: "03",
        title: "Build",
        text: "Develop in tight cycles with demos, validation, and integration checkpoints.",
    },
    {
        step: "04",
        title: "Scale",
        text: "Harden, document, train, monitor, and evolve the solution after launch.",
    },
];

export default function CompanyPage() {
    return (
        <>
            <NavbarV3 />
            <main className="bg-white pt-14">
                <section className="relative overflow-hidden bg-slate-950 text-white">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
                        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
                        <div
                            className="absolute inset-0 opacity-[0.05]"
                            style={{
                                backgroundImage: "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
                                backgroundSize: "34px 34px",
                            }}
                        />
                    </div>

                    <div className="relative mx-auto grid min-h-[calc(100svh-3.5rem)] max-w-7xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
                        <div>
                            <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-200">
                                Company
                            </p>
                            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                                We design and build software that makes operations smarter.
                            </h1>
                            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                                System Castle partners with organizations that need practical automation,
                                dependable engineering, and digital products that can survive real-world enterprise complexity.
                            </p>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <Link
                                    href="/1.0#contact"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
                                >
                                    Start a Conversation
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                                <Link
                                    href="/1.0#services"
                                    className="inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                                >
                                    Explore Services
                                </Link>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/20 backdrop-blur">
                            <div className="grid grid-cols-2 gap-3">
                                {metrics.map((metric) => (
                                    <div key={metric.label} className="rounded-2xl bg-white/[0.08] p-4">
                                        <p className="text-3xl font-bold text-white">{metric.value}</p>
                                        <p className="mt-2 text-xs leading-5 text-slate-300">{metric.label}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-5">
                                <Sparkles className="h-6 w-6" />
                                <p className="mt-4 text-sm font-semibold">
                                    Built for teams that need modern products without losing operational discipline.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 sm:py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
                                    Who we are
                                </p>
                                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                                    A product-minded engineering partner for digital transformation.
                                </h2>
                                <p className="mt-5 text-base leading-7 text-slate-600">
                                    We work where software, automation, and operations meet. Our team helps companies
                                    replace manual effort, connect fragmented systems, and launch platforms that are
                                    easier to operate, measure, and improve.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                {principles.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={item.title} className="rounded-2xl bg-slate-50 p-5">
                                            <div className="mb-4 inline-flex rounded-xl bg-indigo-50 p-2 text-indigo-600">
                                                <Icon className="h-5 w-5" />
                                            </div>
                                            <h3 className="font-semibold text-slate-950">{item.title}</h3>
                                            <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-slate-50 py-16 sm:py-20">
                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
                        <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
                            <div className="flex items-center gap-3">
                                <Layers3 className="h-6 w-6 text-indigo-600" />
                                <h2 className="text-2xl font-bold text-slate-950">What we deliver</h2>
                            </div>
                            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                {capabilities.map((item) => (
                                    <div key={item} className="flex items-start gap-3 rounded-xl bg-slate-50 p-3">
                                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                                        <span className="text-sm font-medium text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-sm sm:p-8">
                            <div className="flex items-center gap-3">
                                <Globe2 className="h-6 w-6 text-indigo-300" />
                                <h2 className="text-2xl font-bold">Industries we understand</h2>
                            </div>
                            <p className="mt-4 text-sm leading-6 text-slate-300">
                                We bring repeatable methods to complex domains where process quality, security,
                                uptime, and user adoption matter.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {industries.map((item) => (
                                    <span key={item} className="rounded-full bg-white/10 px-3 py-1.5 text-sm text-slate-100">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 sm:py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
                                    How we work
                                </p>
                                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                                    A clear path from idea to operating system.
                                </h2>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                                <BarChart3 className="h-4 w-4 text-indigo-600" />
                                Measured progress, not vague activity.
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                            {process.map((item) => (
                                <div key={item.step} className="rounded-2xl border border-slate-200 bg-white p-5">
                                    <p className="text-sm font-bold text-indigo-600">{item.step}</p>
                                    <h3 className="mt-4 text-lg font-semibold text-slate-950">{item.title}</h3>
                                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <TestimonialsCarousel />

                <section className="bg-white py-16 sm:py-20">
                    <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
                        <Users className="mx-auto h-9 w-9 text-indigo-600" />
                        <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                            Bring us the process, the product, or the problem.
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
                            We will help you turn it into a practical roadmap, a reliable platform, and a measurable delivery plan.
                        </p>
                        <Link
                            href="/1.0#contact"
                            className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                        >
                            Contact System Castle
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </section>
            </main>
            <FooterV1 />
        </>
    );
}
