"use client";

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";
import { title } from "process";  
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Developing full-stack web applications using React, Next.js, Django, and Node.js.",
    link: "/services/web-development",
  },
  {
    num: "02",
    title: "Machine Learning",
    description: "Building models for classification, prediction, and automation using Python, PyTorch, and LLM tools.",
    link: "/services/machine-learning",
  },
  {
    num: "03",
    title: "Mobile App Development",
    description: "Creating Android applications with Java and integrating backend services.",
    link: "/services/mobile-app-development",
  },
  {
    num: "04",
    title: "Agent-Based Systems",
    description: "Designing autonomous agents using LangChain, LangGraph, and local language models.",
    link: "/services/agent-based-systems",
  },
];

const ServicesPage = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 ">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0 }}
          animate={{ 
              opacity: 1, 
              transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }} 
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
          {services.map((service ,index ) => ( 
            <div key={index}
            className="flex-1 flex flex-col justify-center gap-6 group">

             <div className="w-full flex justify-between items-center">
              <div className="text-5xl font-extrabold text-outline">{service.num}</div>
              <Link href={service.link} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent service-arrow flex justify-center items-center">
                <BsArrowDownRight className="text-primary text-3xl" />
              </Link>
             </div>
             <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
             <p className="text-white/60">{service.description}</p>

             <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage;
