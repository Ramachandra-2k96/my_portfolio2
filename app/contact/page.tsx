"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

const info = [
    { icon: <FaPhoneAlt />, label: "Phone", value: "(+91) 9353867435" },
    { icon: <FaEnvelope />, label: "Email", value: "ramachandraudupa2004@gmail.com" },
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Udupi, India" }
];

const Contact = () => {
    const [topic, setTopic] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");

        const form = e.currentTarget;
        const data = new FormData(form);
        data.append("access_key", "YOUR_WEB3FORMS_KEY"); // ← Replace with your Web3Forms key
        data.append("subject", `Portfolio contact: ${data.get("topic") || "General"}`);
        data.append("from_name", `${data.get("firstname")} ${data.get("lastname")}`);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: data,
            });
            const json = await res.json();
            if (json.success) {
                setStatus("sent");
                form.reset();
                setTopic("");
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4, delay: 2.4, ease: "easeIn" } }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form
                            className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                            onSubmit={handleSubmit}
                        >
                            <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
                            <p className="text-white/60">Fill in the form and I&apos;ll get back to you as soon as possible.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input name="firstname" type="text" placeholder="First Name" required />
                                <Input name="lastname" type="text" placeholder="Last Name" required />
                                <Input name="email" type="email" placeholder="Email" required />
                                <Input name="phone" type="tel" placeholder="Phone" />
                            </div>

                            <Select value={topic} onValueChange={setTopic}>
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
                            {/* Hidden field so the topic value reaches the FormData */}
                            <input type="hidden" name="topic" value={topic} />

                            <Textarea className="h-[200px] mt-4" name="message" placeholder="Your message here..." required />

                            {status === "sent" && (
                                <p className="text-accent text-sm font-semibold">✅ Message sent! I&apos;ll be in touch soon.</p>
                            )}
                            {status === "error" && (
                                <p className="text-red-400 text-sm">❌ Something went wrong. Please try emailing me directly.</p>
                            )}

                            <div className="flex justify-center items-center">
                                <Button
                                    size={"md" as any}
                                    className="max-w-40"
                                    type="submit"
                                    disabled={status === "sending"}
                                >
                                    {status === "sending" ? "Sending..." : "Send Message"}
                                </Button>
                            </div>
                        </form>
                    </div>

                    <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <div key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm xl:text-xl text-white/60">{item.label}</p>
                                        <h3 className="text-xs xl:text-xl">{item.value}</h3>
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;