"use client";
import React, {useState} from "react";
import { motion, number } from "framer-motion";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { title } from "process";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        number: "00",
        category: "fullstack",
        title: "Varnotsava Website",
        description: "A fullstack web application for managing college events, featuring user authentication, event management, and a responsive design.",
        stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "TypeScript" }],
        image: "/work/varnothsava.png",
        live: "https://varnothsava-2k25-six.vercel.app/",
        github: "https://github.com/Ramachandra-2k96/vARNOTHSAVA-2K25",
    },

  {
    num: "01",
    category: "fullstack",
    title: "College App",
    description: "A Java-based Android application to manage student records, course enrollments, and academic data.",
    stack: [{ name: "Java" }, { name: "Android" }],
    image: "/work/CollegeApp.png",
    live: "https://www.figma.com/community/file/1394214805869456145/college-app",
    github: "https://github.com/Ramachandra-2096/SMVITM"
  },
  {
    num: "02",
    category: "agentic",
    title: "Autonomous Browser Controller",
    description: "A local LLM-driven browser agent to automate workflows and tasks.",
    stack: [{ name: "Python" }, { name: "LangChain" }, { name: "Playwright" }],
    image: "/work/BrowserAgent.png",
    live: "",
    github: ""
  },
  {
    num: "03",
    category: "fullstack",
    title: "Voice to Visualization",
    description: "A Python tool that takes voice queries and generates visualizations from relational databases.",
    stack: [{ name: "Python" }, { name: "LangChain" }, { name: "SQL" }],
    image: "/work/VoiceToVisualization.png",
    live: "",
    github: ""
  },
  {
    num: "04",
    category: "agentic",
    title: "Agentic Chess Game",
    description: "An AI agent that plays chess using a step-by-step planning workflow with no pretraining.",
    stack: [{ name: "Python" }, { name: "LLM" }, { name: "Agent Workflow" }],
    image: "/work/ChessAgent.png",
    live: "",
    github: ""
  },
  {
    num: "05",
    category: "fullstack",
    title: "Job Scheduler Agent",
    description: "An agent workflow to coordinate interviews for 1,000+ recruiters with calendar and email integration.",
    stack: [{ name: "Python" }, { name: "LangGraph" }],
    image: "/work/JobScheduler.png",
    live: "",
    github: ""
  },
  {
    num: "06",
    category: "cybersecurity",
    title: "Server Hijacking Simulator",
    description: "A lab environment to simulate and study unauthorized server access via misconfigured SSH.",
    stack: [{ name: "Linux" }, { name: "SSH" }, { name: "Python" }],
    image: "/work/ServerHijack.png",
    live: "",
    github: ""
  },
  {
    num: "07",
    category: "cybersecurity",
    title: "Password Cracking with John the Ripper",
    description: "Analyzed password strength and simulated cracking using dictionary and brute-force attacks.",
    stack: [{ name: "John the Ripper" }, { name: "Hashcat" }],
    image: "/work/PasswordCracking.png",
    live: "",
    github: ""
  },
  {
    num: "08",
    category: "rag",
    title: "FAQ Retrieval System",
    description: "A local LLM-based system using LangChain for document-based question answering.",
    stack: [{ name: "LangChain" }, { name: "Python" }, { name: "FAISS" }],
    image: "/work/FAQRetrieval.png",
    live: "https://github.com/Ramachandra-2k96/Complete_automation",
    github: "https://github.com/Ramachandra-2k96/Complete_automation"
  },
  {
    num: "09",
    category: "rag",
    title: "Research Paper Q&A Tool",
    description: "Query and summarize uploaded research papers using RAG pipelines.",
    stack: [{ name: "LangChain" }, { name: "LLamaIndex" }, { name: "Pinecone" }],
    image: "/work/ResearchQA.png",
    live: "",
    github: ""
  },
  {
    num: "10",
    category: "ml",
    title: "Plant Disease Detection",
    description: "Used CNNs to classify leaf diseases in plants from images with high accuracy.",
    stack: [{ name: "Python" }, { name: "Pytorch" }, { name: "Django" }],
    image: "/work/plant.png",
    live: "",
    github: ""
  },
  {
    num: "11",
    category: "ml",
    title: "Phishing Website Detection",
    description: "Classified websites as real or phishing using feature extraction and supervised learning.",
    stack: [{ name: "Python" }, { name: "TensorFlow" }],
    image: "/work/Phishing.png",
    live: "",
    github: ""
  },
    {
        num: "12",
        category: "Web Development",
        title: "E-learning Platform",
        description: "A Django-based platform for online courses with user authentication, course management, and quizzes.",
        stack: [{ name: "Python" }, { name: "Django" }, { name: "Tailwind CSS" }],
        image: "/work/e-learning.png",
        live: "https://github.com/Ramachandra-2096/TCR_Project_e-learning_website",
        github: "https://github.com/Ramachandra-2096/TCR_Project_e-learning_website"
    }
];

const Work = () => {
    const [ project , setProject ] = useState(projects[0]);
    const handleSlideChange = (swiper: any) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };

    return (
        <motion.div
        initial = {{opacity: 0}}
        animate = {{opacity: 1, transition: { duration: 0.4 , delay: 2.4 , ease: "easeIn" } }}
        className="min-h-screen flex flex-col justify-center py-12 xl:p-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px]">
                             <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.title}</h2>
                        <p className="text-white/60">{project.description}</p>
                        <ul>
                            {project.stack.map((item, index) => (
                                <li key={index} className="text-accent text-xl">{item.name}{index !==project.stack.length - 1 && ", "}</li>
                            ))}
                        </ul>
                        <div className="border border-white/20"></div>

                        <div className="flex items-center gap-4">
                            <Link href={project.live} target="_blank" rel="noopener noreferrer">
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent " />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                            <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>View on GitHub</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                        </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper 
                        spaceBetween={30}
                        slidesPerView={1}
                        className="xl:h-[520px] mb-12"
                        onSlideChange={handleSlideChange}>
                            {projects.map((item, index) => (
                                <SwiperSlide key={index} className="w-full ">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                    <div className="relative w-full h-full">
                                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                                    </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" iconsStyles="text-white" />
                        </Swiper>
                    </div>
                </div>
            </div>
            
        </motion.div>
    );
}
export default Work;