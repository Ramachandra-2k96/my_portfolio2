"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowLeft, BsArrowUpRight } from "react-icons/bs";
import { FaAndroid } from "react-icons/fa";
import { SiFlutter, SiDart, SiReact } from "react-icons/si";

const process = [
    { step: "01", title: "UI/UX Planning", desc: "Designing screen flows, navigation patterns, and component hierarchy before writing code." },
    { step: "02", title: "App Architecture", desc: "Choosing the right state management approach and structuring the codebase for maintainability and testability." },
    { step: "03", title: "Development & API Integration", desc: "Building screens, connecting to REST APIs, handling auth tokens, and managing local storage." },
    { step: "04", title: "Testing & Release", desc: "Testing on real devices and emulators, fixing edge cases, and preparing signed builds for distribution." },
];

const capabilities = [
    { title: "Flutter (Cross-Platform)", desc: "Building performant apps for Android and iOS from a single codebase using Flutter and Dart." },
    { title: "React Native", desc: "Cross-platform apps using JavaScript and React Native — sharing code between web and mobile." },
    { title: "Android (Java)", desc: "Native Android development with Java, Android SDK, Activity lifecycle, and Material Design components." },
    { title: "Backend Integration", desc: "Connecting mobile apps to REST APIs, handling JWT authentication, and managing remote and local data sync." },
    { title: "State Management", desc: "Managing app state with Provider, Riverpod (Flutter) or Redux, Zustand (React Native)." },
    { title: "Local Storage & Offline", desc: "Implementing offline-first patterns with SQLite, Hive, or AsyncStorage for reliable user experience." },
];

const projects = [
    { title: "College Management App", desc: "Android app for managing student records, course enrollments, and academic data.", stack: ["Java", "Android SDK"], link: "https://github.com/Ramachandra-2096/SMVITM" },
];

const tech = [
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "Dart", icon: <SiDart /> },
    { name: "React Native", icon: <SiReact /> },
    { name: "Java", icon: <FaAndroid /> },
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" as const } }),
};

export default function MobileAppDevelopment() {
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeIn" } }} className="min-h-[80vh] py-12 xl:py-16">
            <div className="container mx-auto">
                <Link href="/services" className="inline-flex items-center gap-2 text-accent mb-12 hover:gap-3 transition-all duration-300 group">
                    <BsArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Services
                </Link>
                <div className="mb-16">
                    <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">Service — 03</span>
                    <h1 className="text-5xl xl:text-7xl font-extrabold mb-6 leading-none">Mobile App<br /><span className="text-accent">Development</span></h1>
                    <p className="max-w-[640px] text-white/60 text-lg leading-relaxed">
                        Cross-platform and native mobile applications with Flutter, React Native, and Java. Clean UI, reliable data handling, and smooth user experience across Android and iOS.
                    </p>
                </div>
                <div className="mb-20">
                    <h2 className="text-3xl font-bold mb-8">What I deliver</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {capabilities.map((item, i) => (
                            <motion.div key={i} custom={i} variants={cardVariants} initial="hidden" animate="visible" className="bg-[#27272c] rounded-xl p-7 flex flex-col gap-3 border border-white/5 hover:border-accent/40 transition-all duration-300 group">
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
                            <motion.div key={i} custom={i} variants={cardVariants} initial="hidden" animate="visible" className="relative bg-[#232329] rounded-xl p-7 flex flex-col gap-4 overflow-hidden">
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
                            <motion.div key={i} custom={i} variants={cardVariants} initial="hidden" animate="visible" className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 bg-[#27272c] rounded-xl p-6 border border-white/5 hover:border-accent/30 transition-all duration-300 group">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-white font-semibold text-lg group-hover:text-accent transition-colors">{p.title}</h3>
                                    <p className="text-white/50 text-sm">{p.desc}</p>
                                    <div className="flex gap-2 flex-wrap mt-1">
                                        {p.stack.map((s, j) => <span key={j} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-md">{s}</span>)}
                                    </div>
                                </div>
                                {p.link && (<Link href={p.link} target="_blank" className="shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-all duration-300"><BsArrowUpRight /></Link>)}
                            </motion.div>
                        ))}
                    </div>
                    <Link href="/work" className="inline-flex items-center gap-2 text-accent mt-6 hover:gap-3 transition-all duration-300">View all projects <BsArrowUpRight /></Link>
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
