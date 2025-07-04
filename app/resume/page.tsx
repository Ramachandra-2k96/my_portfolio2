"use client";
import { degrees } from "framer-motion";
import { icons } from "lucide-react";
import { title } from "process";
import {FaHtml5, FaCss3, FaJs, FaReact, FaPython} from "react-icons/fa";
import {SiTailwindcss, SiNextdotjs, SiTypescript, SiTensorflow, SiPytorch, SiFlask, SiFastapi} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import {motion} from "framer-motion";


const about = {
    title :"About Me",
    description: "I am a Full Stack Developer and Machine Learning Engineer with a passion for building innovative applications. I specialize in creating AI-powered solutions using modern web technologies like React, Next.js, and Python. My expertise includes web development, machine learning, and data science, allowing me to deliver end-to-end solutions that solve real-world problems. I am committed to continuous learning and staying updated with the latest advancements in technology. My goal is to leverage my skills to create impactful applications that enhance user experiences and drive business success.",
    info : [
        { fieldName : "Name", fieldValue : "Ramachandra Udupa" },
        { fieldName : "Email", fieldValue : "ramachandraudupa2004@gmail.com" },
        { fieldName : "Phone", fieldValue : "(+91) 9353867435" },
        { fieldName : "Experience", fieldValue : "2+ Years" },
        { fieldName : "Location", fieldValue : "Udupi, India" },
        { fieldName : "Freelance", fieldValue : "Available" },
        { fieldName : "Languages", fieldValue : "English, Hindi, Kannada" },
    ]
}

const experiences = {
    icon :"",
    title : "Experiences",
    description : "I have over 4 years of experience in full stack development and machine learning. I have worked on various projects that involve building web applications, developing machine learning models, and integrating AI capabilities into software solutions. My experience includes working with technologies such as React, Next.js, Python, TensorFlow, and PyTorch. I have a strong understanding of both front-end and back-end development.",
    items : [
        {
            company: "Tech Solutions Inc.",
            position: "Full Stack Developer",
            duration: "Jan 2022 - Present",
        },
        {
            company: "Tech Solutions Inc.",
            position: "Full Stack Developer",
            duration: "Jan 2022 - Present",
        },
        {
            company: "Tech Solutions Inc.",
            position: "Full Stack Developer",
            duration: "Jan 2022 - Present",
        },
        {
            company: "Tech Solutions Inc.",
            position: "Full Stack Developer",
            duration: "Jan 2022 - Present",
        }
    ]
}

const education = {
    icon :"",
    title : "Education",
    description : "I have a strong educational background in computer science and engineering. I hold a Bachelor's degree in Computer Science from XYZ University, where I gained a solid foundation in software development, algorithms, and data structures. My education has equipped me with the skills necessary to tackle complex problems and develop innovative solutions.",
    items : [
        {
            institution: "XYZ University",
            degree: "Bachelor's in Computer Science",
            duration: "2018 - 2022",
        },
        {
            institution: "XYZ University",
            degree: "Bachelor's in Computer Science",
            duration: "2018 - 2022",
        },
    ]
}

const skills = {
    title : "Skills",
    description : "I possess a diverse skill set that includes both technical and soft skills. My technical skills include proficiency in programming languages such as Python, JavaScript, and TypeScript, as well as expertise in frameworks like React, Next.js, and Flask. I am also skilled in machine learning.",
    skilllist : [
        { name: "HTML", icon: <FaHtml5/> },
        { name: "CSS", icon: <FaCss3/> },
        { name: "JavaScript", icon: <FaJs/> },
        { name: "React", icon: <FaReact/> },
        { name: "Python", icon: <FaPython/> },
        { name: "Tailwind CSS", icon: <SiTailwindcss/> },
        { name: "Next.js", icon: <SiNextdotjs/> },
        { name: "TypeScript", icon: <SiTypescript/> },
        { name: "TensorFlow", icon: <SiTensorflow/> },
        { name: "PyTorch", icon: <SiPytorch/> },
        { name: "Flask", icon: <SiFlask/> },
        { name: "FastAPI", icon: <SiFastapi/> }
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