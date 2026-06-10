"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowLeft, BsArrowUpRight } from "react-icons/bs";
import { FaPython } from "react-icons/fa";
import { SiPytorch, SiLangchain, SiOllama, SiScikitlearn } from "react-icons/si";

const process = [
    { step: "01", title: "Data & Problem Definition", desc: "Understanding the problem domain, exploring the dataset, and deciding between supervised, unsupervised, or RL approaches." },
    { step: "02", title: "Experimentation", desc: "Running baseline experiments, comparing architectures, tuning hyperparameters, and tracking metrics with proper tooling." },
    { step: "03", title: "Training & Evaluation", desc: "Training on GPU, evaluating on held-out test sets, and diagnosing overfitting, underfitting, and class imbalance." },
    { step: "04", title: "Deployment & Integration", desc: "Exporting models, building inference APIs with FastAPI, and integrating into web applications or pipelines." },
];

const capabilities = [
    { title: "Computer Vision", desc: "CNN-based classification, object detection, and segmentation. Trained models for plant disease detection, phishing site analysis, and aerial imaging.", icon: "👁️" },
    { title: "NLP & LLMs", desc: "Fine-tuning language models, building RAG pipelines with LangChain and LlamaIndex, and chaining LLM calls for structured reasoning.", icon: "🧠" },
    { title: "Autonomous Agents", desc: "Multi-step agent workflows using LangGraph. Agents with tool use, memory, and planning capabilities for complex real-world tasks.", icon: "🤖" },
    { title: "Reinforcement Learning", desc: "Q-learning agents for sequential decision-making. Applied to autonomous drone navigation and game-playing agents.", icon: "🎮" },
    { title: "Data Pipelines", desc: "End-to-end pipelines from raw ingestion through preprocessing, feature engineering, model training, and serving.", icon: "🔁" },
    { title: "Model Serving", desc: "Wrapping trained models in FastAPI or Django endpoints, with input validation, versioning, and response formatting.", icon: "📡" },
];

const projects = [
    { title: "Plant Disease Detection", desc: "CNN-based leaf disease classifier trained on 38 plant classes with high accuracy.", stack: ["PyTorch", "Django", "Python"], link: "" },
    { title: "Autonomous Drone Navigation", desc: "Q-learning agent trained to navigate a drone and trigger aerial photography at optimal waypoints.", stack: ["Python", "Q-Learning", "OpenCV"], link: "" },
    { title: "FAQ Retrieval System", desc: "Local LLM + FAISS vector store for document-based question answering.", stack: ["LangChain", "FAISS", "Python"], link: "https://github.com/Ramachandra-2k96/Complete_automation" },
];

const tech = [
    { name: "Python", icon: <FaPython /> },
    { name: "PyTorch", icon: <SiPytorch /> },
    { name: "LangChain", icon: <SiLangchain /> },
    { name: "LlamaIndex", icon: <SiOllama /> },
    { name: "Scikit-learn", icon: <SiScikitlearn /> },
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" } }),
};

export default function MachineLearning() {
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
                    <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">Service — 02</span>
                    <h1 className="text-5xl xl:text-7xl font-extrabold mb-6 leading-none">Machine<br /><span className="text-accent">Learning</span></h1>
                    <p className="max-w-[640px] text-white/60 text-lg leading-relaxed">
                        From raw data to deployed models — I design, train, and integrate machine learning systems.
                        Specialised in deep learning, LLM-based agents, and reinforcement learning.
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
                                <span className="text-3xl">{item.icon}</span>
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
