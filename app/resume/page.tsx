"use client";
import { degrees } from "framer-motion";
import { icons } from "lucide-react";
import { title } from "process";
import {FaHtml5, FaCss3, FaJs, FaReact, FaPython } from "react-icons/fa";
import {SiTailwindcss, SiNextdotjs, SiTypescript, SiLangchain, SiOllama, SiPytorch,SiGooglecloud, SiFlask, SiFastapi} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import {motion} from "framer-motion";

const about = {
    title: "About Me",
    description: "I'm a Full Stack Developer and Machine Learning Engineer. I work with tools like Django, Next.js, and Python to build web apps and integrate AI features. My work includes developing autonomous agents, browser automation, and data-driven systems. I focus on building reliable, maintainable software and learning new technologies to improve my work.",
    info: [
        { fieldName: "Name", fieldValue: "Ramachandra Udupa" },
        { fieldName: "Email", fieldValue: "ramachandraudupa2004@gmail.com" },
        { fieldName: "Phone", fieldValue: "(+91) 9353867435" },
        { fieldName: "Experience", fieldValue: "2+ Years" },
        { fieldName: "Location", fieldValue: "Udupi, India" },
        { fieldName: "Freelance", fieldValue: "Available" },
        { fieldName: "Languages", fieldValue: "English, Hindi, Kannada" }
    ]
}

const experiences = {
    icon: "",
    title: "Experiences",
    description: "I've worked on software development and AI projects through internships and independent work. This includes building LLM-based tools, automating workflows, and developing web systems using Python and JavaScript.",
    items: [
        {
            company: "Threat-Prism",
            position: "Intern",
            duration: "Aug 2022 - Nov-2022"
        },
        {
            company: "TCR Innovation",
            position: "Intern",
            duration: "Jan 2023 - Aug 2023"
        },
        {
            company: "SangamOne Connected Services Pvt. Ltd.",
            position: "Software Intern",
            duration: "Nov 2023 - Apr 2024"
        },
        {
            company: "IonIdea",
            position: "AI Engineering Intern",
            duration: "Feb 2025 - May 2025"
        }
    ]
}

const education = {
    icon: "",
    title: "Education",
    description: "I studied Artificial Intelligence and Data Science, with a focus on software engineering and machine learning.",
    items: [
        {
            institution: "Viveka Pre-University College Kota",
            degree: "Pre-University",
            duration: "2019 - 2021"
        },
        {
            institution: "Shri Madhwa Vadiraja Institute of Technology & Management",
            degree: "B.E",
            duration: "2021 - 2025"
        }
    ]
}

const skills = {
    title: "Skills",
    description: "I work with both front-end and back-end tools, machine learning libraries, and cloud services.",
    skilllist: [
        { name: "JavaScript", icon: <FaJs/> },
        { name: "React", icon: <FaReact/> },
        { name: "Python", icon: <FaPython/> },
        { name: "Tailwind CSS", icon: <SiTailwindcss/> },
        { name: "Next.js", icon: <SiNextdotjs/> },
        { name: "TypeScript", icon: <SiTypescript/> },
        { name: "PyTorch", icon: <SiPytorch/> },
        { name: "LangChain", icon: <SiLangchain/> },
        { name: "LLamaIndex", icon: <SiOllama/> },
        { name: "Django", icon: <SiFlask/> },
        { name: "Azure", icon: <SiFastapi/> },
        { name: "Google Cloud", icon: <SiGooglecloud/> }
    ]
}


const Resume = () => {
    return (
       <motion.div 
       initial={{ opacity: 0 }}
       animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
       className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh]">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left pb-8">
                                <h3 className="text-4xl font-bold">{experiences.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experiences.description}</p>
                            </div>
                            <ScrollArea className="h-[400px]"> 
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {experiences.items.map( (item, index) => {
                                        return (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-centre items-centre lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-centre lg:text-left">{item.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="texthttp://localhost:3000/resume-white/60">{item.company}</p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </ScrollArea>
                        </TabsContent>

                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left pb-8">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                            </div>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {education.items.map((item, index) => {
                                        return (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-centre items-centre lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-centre lg:text-left">{item.degree}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.institution}</p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </ScrollArea>
                        </TabsContent>

                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]"> 
                                    {skills.skilllist.map((skill, index) => {
                                        return (
                                           <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                       <div className="capitalize"> {skill.name}</div>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                           </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="about" className="w-full h-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((info, index) => (
                                        <li key={index} className="flex justify-center items-center xl:justify-start gap-4">
                                            <span className="text-white/60">{info.fieldName}</span>
                                            <span className="text-sm xl:text-xl">{info.fieldValue}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>

                    </div>
                </Tabs>
            </div>
       </motion.div>
    );
}
export default Resume;