"use client";
import React, {useState} from "react";
import { motion } from "framer-motion";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { title } from "process";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    { num :"01" , category :"frontend", title: "Portfolio", description: "A personal portfolio website to showcase my work and skills.", stack :[{name : "Html 5"},{name : "Css 3"},{name : "JavaScript"}], image: "/screenshot-wide.jpg", live:"", github: "https://github.com/yourusername/portfolio" },
    { num :"02" , category :"frontend", title: "E-commerce Website", description: "A fully functional e-commerce website built with Next.js and Tailwind CSS.", stack :[{name : "Next.js"},{name : "Tailwind CSS"}], image: "/screenshot-wide.jpg", live:"", github: "https://github.com/yourusername/ecommerce" },
    { num :"03" , category :"backend", title: "API Development", description: "RESTful API development using Node.js and Express.", stack: [{name : "Html 5"},{name : "Css 3"},{name : "Node.js"}], image: "/screenshot-wide.jpg", live:"", github: "https://github.com/yourusername/api" },
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
                        <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} Project</h2>
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