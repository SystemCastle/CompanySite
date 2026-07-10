"use client";

import { useState } from "react";
import { submitContactForm } from "../services/contactService";

export default function ContactSectionV1() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError("");

        try {
            await submitContactForm(formData);
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: "", email: "", phone: "", message: "" });
            setTimeout(() => setIsSubmitted(false), 3000);
        } catch (error) {
            setIsSubmitting(false);
            setSubmitError(error instanceof Error ? error.message : "Unable to send your message right now.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const locations = [
        {
            title: "SYSTEM CASTLE SOLUTIONS LLC",
            address: "DeskCo, 3rd floor, 101 East AKM Fazl-ul-Haq Rd, Block I G 7/2 Blue Area, Islamabad",
            phone: "+1-925-214-9198 , 051-8899526",
            email: "info@systemcastle.com",
            flag: "🇦🇪"
        },
    ];

    return (
        <section className="py-14 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left - Form */}
                    <div className="order-2 lg:order-1 bg-white rounded-2xl p-8">
                        <h2 className="mb-8 text-3xl sm:text-4xl font-bold text-slate-900">
                            CONTACT US
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    ENTER NAME
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white text-slate-900 placeholder:text-slate-400 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                                    placeholder="John Smith"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    ENTER EMAIL ADDRESS
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white text-slate-900 placeholder:text-slate-400 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                                    placeholder="john@company.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    ENTER PHONE NUMBER
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-white text-slate-900 placeholder:text-slate-400 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none"
                                    placeholder="+1 234 567 890"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">
                                    WRITE YOUR MESSAGE HERE...
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 bg-white text-slate-900 placeholder:text-slate-400 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all outline-none resize-none"
                                    placeholder="Tell us about your project"
                                />
                            </div>

                            {submitError && (
                                <p className="text-sm font-medium text-red-600">
                                    {submitError}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-slate-900 text-white py-3.5 rounded-lg font-medium hover:bg-slate-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto" />
                                ) : isSubmitted ? (
                                    "✓ Sent Successfully!"
                                ) : (
                                    "SEND"
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Right - Map & Locations */}
                    <div className="order-1 lg:order-2 space-y-6 lg:mt-16">
                        {/* Map */}
                        <div className="bg-slate-100 rounded-2xl overflow-hidden h-[300px] sm:h-[300px] lg:h-[350px] relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6637.965118736111!2d73.05723859999999!3d33.7094002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf29e7da8c85%3A0x3930b45b7bc1b78c!2sDeskCo%20%7C%20Coworking%20Space!5e0!3m2!1sen!2s!4v1783407069686!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0"
                            />
                        </div>

                        {/* Location Cards */}
                        <div className="bg-white rounded-2xl p-8">
                            <div className="space-y-6">
                                {locations.map((location, index) => {
                                    return (
                                        <div key={index} className="pb-6 border-b border-slate-200 last:border-b-0 last:pb-0">
                                            <h4 className="text-sm font-semibold text-slate-900 mb-2">
                                                {location.title}
                                            </h4>
                                            <p className="text-sm text-slate-600 whitespace-pre-line">
                                                {location.address}
                                            </p>
                                            {location.phone && (
                                                <p className="text-sm text-slate-600 mt-1 flex items-center gap-2">
                                                    <span>📞</span>
                                                    {location.phone}
                                                </p>
                                            )}
                                            <p className="text-sm text-slate-600 flex items-center gap-2">
                                                <span>📧</span>
                                                {location.email}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
