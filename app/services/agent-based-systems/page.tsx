"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowLeft, BsArrowUpRight } from "react-icons/bs";
import { FaPython } from "react-icons/fa";
import { SiLangchain, SiOllama } from "react-icons/si";

const process = [
    { step: "01", title: "Task & Tool Definition", desc: "Breaking the goal into subtasks. Defining what tools (search, code exec, APIs) each agent needs access to." },
    { step: "02", title: "Agent Graph Design", desc: "Mapping the workflow as a directed graph — which agents coordinate, what triggers handoffs, and how state flows." },
    { step: "03", title: "Build & Prompt Engineering", desc: "Implementing each agent node, writing precise system prompts, and testing tool-calling behaviour in isolation." },
    { step: "04", title: "Evaluation & Hardening", desc: "Running the full pipeline on real tasks, fixing failure modes, adding fallbacks, and logging for observability." },
];

const capabilities = [
    { title: "Autonomous Task Agents", desc: "Single agents that plan, use tools, and complete multi-step tasks without constant human input — for web, data, and code." },
    { title: "Multi-Agent Orchestration", desc: "Graph-based workflows (LangGraph) where specialised agents collaborate — each with its own scope, memory, and tools." },
    { title: "Browser Automation", desc: "Agents that navigate websites, fill forms, scrape data, and interact with web interfaces using Playwright." },
    { title: "RAG & Knowledge Agents", desc: "Retrieval-Augmented Generation pipelines. Agents that query vector stores and answer questions over private documents." },
    { title: "Local LLM Systems", desc: "Private, offline AI using Ollama. No API costs, no data leaving your machine — full control over the model." },
    { title: "Code & Data Agents", desc: "Agents that read, write, and execute code — for automated analysis, legacy code migration, and report generation." },
];

const projects = [
    { title: "Autonomous Browser Controller", desc: "Local LLM-driven agent that automates browser tasks and multi-step web workflows.", stack: ["Python", "LangChain", "Playwright"], link: "" },
    { title: "Job Scheduler Agent", desc: "Multi-agent workflow coordinating interviews for 1,000+ recruiters with calendar and email tool integration.", stack: ["Python", "LangGraph"], link: "" },
    { title: "Legacy System Resurrector", desc: "Graph-based multi-agent framework that analyses legacy codebases and orchestrates refactoring agents.", stack: ["Python", "LangGraph", "Neo4j"], link: "" },
];

const tech = [
    { name: "Python", icon: <FaPython /> },
    { name: "LangChain", icon: <SiLangchain /> },
    { name: "LangGraph", icon: <SiLangchain /> },
    { name: "Ollama", icon: <SiOllama /> },
    { name: "LlamaIndex", icon: <SiOllama /> },
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" as const } }),
};

export default function AgentBasedSystems() {
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeIn" } }} className="min-h-[80vh] py-12 xl:py-16">
            <div className="container mx-auto">
                <Link href="/services" className="inline-flex items-center gap-2 text-accent mb-12 hover:gap-3 transition-all duration-300 group">
                    <BsArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Services
                </Link>
                <div className="mb-16">
                    <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">Service — 04</span>
                    <h1 className="text-5xl xl:text-7xl font-extrabold mb-6 leading-none">Agent-Based<br /><span className="text-accent">Systems</span></h1>
                    <p className="max-w-[640px] text-white/60 text-lg leading-relaxed">
                        Autonomous agents and multi-agent workflows that plan, use tools, and coordinate to solve complex tasks. Built with LangChain, LangGraph, and local language models.
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
