"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { FaAndroid } from "react-icons/fa";

const highlights = [
    { title: "Android Development", desc: "Building native Android applications in Java with clean UI and reliable backend communication." },
    { title: "Backend Integration", desc: "Connecting mobile apps to REST APIs and managing authentication, storage, and real-time data." },
    { title: "UI & Navigation", desc: "Implementing intuitive screen flows, navigation patterns, and responsive layouts for Android." },
    { title: "Testing & Deployment", desc: "Writing unit tests and preparing apps for Play Store release with signing and optimization." },
];

const tech = [
    { name: "Java", icon: <FaAndroid /> },
    { name: "Android SDK", icon: <FaAndroid /> },
];

export default function MobileAppDevelopment() {
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
                <h1 className="text-5xl font-bold mb-4">Mobile App Development</h1>
                <p className="max-w-[700px] text-white/60 mb-12 text-lg">
                    I create Android applications with Java and integrate them with backend services.
                    My focus is on clean UI, reliable data handling, and smooth user experience.
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
