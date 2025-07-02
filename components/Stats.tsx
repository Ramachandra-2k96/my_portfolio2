"use client";

import { Divide } from "lucide-react";
import CountUp from "react-countup";
const stats = [
    { value: 2, label: "Years of Experience" },       
    { value: 40, label: "Projects Completed" },
    { value: 13, label: "Technologies Mastered" },
    { value: 700, label: "Code commits" },
];
const Stats = () => {
    return (
       <footer className="py-12 xl:py-24 bg-gradient-to-b from-primary to-secondary relative">
         <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none ">
                {stats.map((stat, index) => {
                    return <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-center">
                        <CountUp end = {stat.value} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold" />
                        <p className={`${stat.label.length <15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80 `}>{stat.label}</p>
                    </div>
                })}
            </div>
        </div>
       </footer>
    );
}

export default Stats;