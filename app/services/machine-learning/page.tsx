"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { FaPython } from "react-icons/fa";
import { SiPytorch, SiLangchain, SiOllama } from "react-icons/si";

const highlights = [
    { title: "Classification & Regression", desc: "Building supervised learning models for structured data using scikit-learn and PyTorch." },
    { title: "Deep Learning", desc: "Designing and training CNNs, transformers, and custom architectures for vision and NLP tasks." },
    { title: "LLM Integration", desc: "Integrating large language models into applications using LangChain, LlamaIndex, and Ollama." },
    { title: "Data Pipelines", desc: "Building end-to-end pipelines from raw data ingestion to model serving and monitoring." },
];

const tech = [
    { name: "Python", icon: <FaPython /> },
    { name: "PyTorch", icon: <SiPytorch /> },
    { name: "LangChain", icon: <SiLangchain /> },
    { name: "LlamaIndex", icon: <SiOllama /> },
];

export default function MachineLearning() {
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
                <h1 className="text-5xl font-bold mb-4">Machine Learning</h1>
                <p className="max-w-[700px] text-white/60 mb-12 text-lg">
                    I design and train ML models for classification, regression, computer vision, and NLP.
                    I also integrate LLMs and build AI-powered features into production applications.
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
