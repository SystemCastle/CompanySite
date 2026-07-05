import Link from "next/link";
import NavbarV3 from "../components/NavbarV3";
import FooterV1 from "../components/FooterV1";

export default function CompanyPage() {
    return (
        <>
            <NavbarV3 />
            <main className="min-h-screen bg-white pt-24">
                <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
                        Company
                    </p>
                    <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
                        Building trusted digital transformation partnerships.
                    </h1>
                    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                        System Castle helps organizations modernize operations through intelligent automation,
                        software engineering, and long-term product thinking across telecom, fintech, energy,
                        and BFSI markets.
                    </p>
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[
                            ["17", "countries served"],
                            ["1000+", "processes worked on"],
                            ["5", "core service horizontals"],
                        ].map(([value, label]) => (
                            <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                                <p className="text-3xl font-bold text-slate-900">{value}</p>
                                <p className="mt-1 text-sm text-slate-500">{label}</p>
                            </div>
                        ))}
                    </div>
                    <Link
                        href="/1.0#contact"
                        className="mt-10 inline-flex rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800"
                    >
                        Contact Us
                    </Link>
                </section>
            </main>
            <FooterV1 />
        </>
    );
}
