"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { FaReact, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiDjango, SiTypescript, SiTailwindcss } from "react-icons/si";

const highlights = [
    { title: "Frontend Development", desc: "Building responsive, performant UIs with React and Next.js using modern component patterns." },
    { title: "Backend & APIs", desc: "Designing REST APIs with Django and FastAPI, with database integration and authentication." },
    { title: "Full-Stack Applications", desc: "End-to-end delivery — from architecture and design through to deployment on cloud platforms." },
    { title: "UI/UX Implementation", desc: "Translating designs into pixel-perfect interfaces with Tailwind CSS and Framer Motion animations." },
];

const tech = [
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
];

export default function WebDevelopment() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.2, ease: "easeIn" } }}
            className="min-h-[80vh] py-12 xl:py-20"
        >
            <div className="container mx-auto">
                <Link href="/services" className="flex items-center gap-2 text-accent mb-10 hover:underline w-fit">
                    <BsArrowLeft /> Back to Services
                </Link>
                <h1 className="text-5xl font-bold mb-4">Web Development</h1>
                <p className="max-w-[700px] text-white/60 mb-12 text-lg">
                    I build full-stack web applications — from fast, accessible frontends to robust backends and APIs.
                    Projects range from simple landing pages to complex data-driven platforms.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {highlights.map((item, i) => (
                        <div key={i} className="bg-[#27272c] rounded-xl p-8 flex flex-col gap-3">
                            <span className="text-accent font-semibold text-lg">{item.title}</span>
                            <p className="text-white/60">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <h2 className="text-3xl font-bold mb-6">Technologies</h2>
                <div className="flex flex-wrap gap-6">
                    {tech.map((t, i) => (
                        <div key={i} className="flex items-center gap-3 bg-[#232329] px-5 py-3 rounded-xl text-white/80 text-2xl">
                            <span className="text-accent">{t.icon}</span>
                            <span className="text-base">{t.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}
