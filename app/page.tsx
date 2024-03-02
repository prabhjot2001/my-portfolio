import React from "react";
import { Intro } from "@/components/Intro";
import SectionDivider from "@/components/Section-divider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

const page = () => {
  return (
    <main className="flex flex-col items-center">
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-black bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          <Intro />
        </div>
      </div>
      <SectionDivider />
      <About />
      <Projects/>
      <Skills/>
      <Experience/>
     <Contact/>
    </main>
  );
};

export default page;
