"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowLeft, BsArrowUpRight } from "react-icons/bs";
import { FaReact, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiDjango, SiTypescript, SiTailwindcss, SiFastapi } from "react-icons/si";

const process = [
    { step: "01", title: "Requirements & Planning", desc: "Understanding your goals, users, and technical constraints. Defining the scope and tech stack before writing a line of code." },
    { step: "02", title: "Architecture & Design", desc: "Designing the system architecture — database schema, API contracts, and component structure — before implementation." },
    { step: "03", title: "Development", desc: "Building frontend and backend iteratively, with clean code, type safety, and proper separation of concerns throughout." },
    { step: "04", title: "Testing & Deployment", desc: "End-to-end testing, performance optimisation, and deployment on cloud platforms with CI/CD pipelines." },
];

const capabilities = [
    { title: "Frontend Development", desc: "Responsive, accessible UIs with React and Next.js. Server components, SSR/SSG, and smooth animations with Framer Motion." },
    { title: "Backend & REST APIs", desc: "Scalable APIs with Django or FastAPI. JWT auth, role-based access, file uploads, and PostgreSQL/SQLite integration." },
    { title: "Full-Stack Delivery", desc: "End-to-end ownership — from database schema to deployed product. Vercel, Railway, or VPS deployment." },
    { title: "UI/UX Implementation", desc: "Pixel-perfect interfaces with Tailwind CSS. Dark modes, glassmorphism, micro-animations, and responsive layouts." },
    { title: "Performance & SEO", desc: "Core Web Vitals optimisation, image optimisation, code splitting, and structured metadata for search engines." },
    { title: "Auth & Security", desc: "Secure authentication with JWT, session management, CSRF protection, and environment-based secrets handling." },
];

const projects = [
    { title: "Varnotsava Event Platform", desc: "Full-stack event management app for college festivals with real-time updates.", stack: ["Next.js", "TypeScript", "Tailwind CSS"], link: "https://varnothsava-2k25-six.vercel.app/" },
    { title: "E-Learning Platform", desc: "Django-based LMS with course management, quizzes, and student authentication.", stack: ["Python", "Django", "Tailwind CSS"], link: "" },
    { title: "Voice to Visualization", desc: "Voice-driven data visualisation tool that queries SQL databases and renders charts.", stack: ["Python", "LangChain", "SQL"], link: "" },
];

const tech = [
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Python", icon: <FaPython /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" as const } }),
};

export default function WebDevelopment() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeIn" } }}
            className="min-h-[80vh] py-12 xl:py-16"
        >
            <div className="container mx-auto">
                <Link href="/services" className="inline-flex items-center gap-2 text-accent mb-12 hover:gap-3 transition-all duration-300 group">
                    <BsArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Services
                </Link>

                <div className="mb-16">
                    <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">Service — 01</span>
                    <h1 className="text-5xl xl:text-7xl font-extrabold mb-6 leading-none">Web<br /><span className="text-accent">Development</span></h1>
                    <p className="max-w-[640px] text-white/60 text-lg leading-relaxed">
                        Full-stack web applications built with modern frameworks, clean architecture, and production-ready code.
                        From single-page apps to complex platforms — designed to scale.
                    </p>
                </div>

                <div className="mb-20">
                    <h2 className="text-3xl font-bold mb-8">What I deliver</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {capabilities.map((item, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                className="bg-[#27272c] rounded-xl p-7 flex flex-col gap-3 border border-white/5 hover:border-accent/40 transition-all duration-300 group"
                            >
                                <h3 className="text-white font-semibold text-lg group-hover:text-accent transition-colors">{item.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mb-20">
                    <h2 className="text-3xl font-bold mb-8">My process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        {process.map((item, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                className="relative bg-[#232329] rounded-xl p-7 flex flex-col gap-4 overflow-hidden"
                            >
                                <span className="text-6xl font-extrabold text-white/5 absolute top-2 right-4 select-none">{item.step}</span>
                                <span className="text-accent font-bold text-sm">{item.step}</span>
                                <h3 className="text-white font-semibold text-base">{item.title}</h3>
                                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mb-20">
                    <h2 className="text-3xl font-bold mb-8">Featured projects</h2>
                    <div className="flex flex-col gap-4">
                        {projects.map((p, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 bg-[#27272c] rounded-xl p-6 border border-white/5 hover:border-accent/30 transition-all duration-300 group"
                            >
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-white font-semibold text-lg group-hover:text-accent transition-colors">{p.title}</h3>
                                    <p className="text-white/50 text-sm">{p.desc}</p>
                                    <div className="flex gap-2 flex-wrap mt-1">
                                        {p.stack.map((s, j) => <span key={j} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-md">{s}</span>)}
                                    </div>
                                </div>
                                {p.link && (
                                    <Link href={p.link} target="_blank" className="shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300">
                                        <BsArrowUpRight />
                                    </Link>
                                )}
                            </motion.div>
                        ))}
                    </div>
                    <Link href="/work" className="inline-flex items-center gap-2 text-accent mt-6 hover:gap-3 transition-all duration-300">
                        View all projects <BsArrowUpRight />
                    </Link>
                </div>

                <div>
                    <h2 className="text-3xl font-bold mb-8">Tech stack</h2>
                    <div className="flex flex-wrap gap-4">
                        {tech.map((t, i) => (
                            <div key={i} className="flex items-center gap-3 bg-[#232329] px-5 py-3 rounded-xl text-white/80 hover:text-accent hover:bg-[#27272c] transition-all duration-300 cursor-default">
                                <span className="text-accent text-xl">{t.icon}</span>
                                <span className="text-sm font-medium">{t.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
