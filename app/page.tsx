import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
   <section className="h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pd-24">
        <div className="text-center xl:text-left">
          <span className="text-xl">Software developer</span>
          <h1 className="h1 mb-6">Hello I'm <br /><span className="text-accent">Ramachandra Udupa</span></h1>
          <p className="max-w-[500px] mb-9 text-white/80">
          I excel at building responsive and accessible web applications.
            I am proficient in modern web technologies and frameworks.
          </p>
          <div>
            <Button variant={"outline"} size={"lg"} className="uppercase flex items-center gap-2">
              <span>Download Resume</span>
              <FiDownload className="text-xl"/>
            </Button>
          </div>
        </div>

        <div>
          <Image
            src="/path/to/photo.jpg"
            alt="Ramachandra Udupa"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
   </section>
  );
};