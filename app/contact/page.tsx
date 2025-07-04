"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt }  from "react-icons/fa";
import { use } from "react";

const info = [
    { icon: <FaPhoneAlt />, label: "Phone", value: "+919483924280" },
    { icon: <FaEnvelope />, label: "Email", value: "ramachandraudupa2004@gmail.com" },
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Udupi, India" }
];
const Contact = () => {
    return (
        <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.4, delay: 2.4, ease: "easeIn" } }}
        className="py-6">
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-[30px]">
                <div className="xl:h-[54%] order-2 xl:order-none">
                    <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" action="">
                        <h3 className="text-4xl text-accent">Let's work together</h3>
                        <p className="text-white/60-foreground">Contact me for collaborations or inquiries.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input type="firstname" placeholder="First Name"></Input>
                            <Input type="lastname" placeholder="Last Name"></Input>
                            <Input type="email" placeholder="Email"></Input>
                            <Input type="phone" placeholder="Phone"></Input>
                        </div>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a topic" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Select a topic</SelectLabel>
                                    <SelectItem value="collaboration">Collaboration</SelectItem>
                                    <SelectItem value="inquiry">Inquiry</SelectItem>
                                    <SelectItem value="feedback">Feedback</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Textarea className="h-[200px] mt-4" placeholder="Your message here..."/>
                        <div className="flex justify-center items-center">
                            <Button size={"md"} className="max-w-40">Send Message</Button>
                        </div>
                    </form>
                </div>
                <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0">
                <ul className="flex flex-col gap-10">
                     {info.map((item, index) => (
                        <div key={index} className="flex items-center gap-6">
                            <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center ">
                                <div className="text-[28px]">{item.icon}</div>
                            </div>
                            <div className="flex-1">
                                <p className="text-white/60">{item.label}</p>
                                <h3 className="text-xl">{item.value}</h3>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
            </div>
        </div>
        </motion.section>
    );
}
export default Contact;