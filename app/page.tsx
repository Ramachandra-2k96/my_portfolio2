import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import {Button} from "@/components/ui/button";
import Socials from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  return (
   <section className="h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pd-24">
       <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-2xl">Software Developer & Machine Learning Engineer</span>
          <h1 className="h1 mb-6">Hello I'm <br /><span className="text-accent">Ramachandra Udupa</span></h1>
          <p className="max-w-[500px] mb-9 text-white/80">
            I work across software development and machine learning, and have built a wide range of practical projects in both areas.
            I'm especially interested in exploring the intersection of AI and embedded systems, including Edge AI applications.
            I enjoy solving real-world problems by combining efficient code with intelligent models.
          </p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <a href="/Resume-Ramachandra_udupa.pdf" download>
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download Resume</span>
                <FiDownload className="text-xl" />
              </Button>
            </a>
            <div className="mb-8 xl:mb-0">
              <Socials containerStyles={"flex gap-6"} iconStyles={"w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"}/>
            </div>
          </div>
        </div>

        <div className="order-1 xl:order-none mb-8 xl:mb-0 ">
         <Photo/>
        </div>
      </div>
    </div>
    <Stats/>
   </section>
  );
};