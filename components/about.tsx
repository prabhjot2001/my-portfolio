"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { MaskContainer } from "./ui/svg-mask-effect";
// import { useSectionInView } from "@/lib/hooks";

export default function About() {
    // const { ref } = useSectionInView("About");

  return (
    <div id="about" className=" scroll-mt-24">
      {/* <motion.section
        //   ref={ref}
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
      >
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
          After graduating with a degree in{" "}
          <span className="font-medium">Accounting</span>, I decided to pursue
          my passion for programming. I enrolled in a coding bootcamp and
          learned{" "}
          <span className="font-medium">full-stack web development</span>.{" "}
          <span className="italic">My favorite part of programming</span> is the
          problem-solving aspect. I <span className="underline">love</span> the
          feeling of finally figuring out a solution to a problem. My core stack
          is{" "}
          <span className="font-medium">
            React, Next.js, Node.js, and MongoDB
          </span>
          . I am also familiar with TypeScript and Prisma. I am always looking
          to learn new technologies. I am currently looking for a{" "}
          <span className="font-medium">full-time position</span> as a software
          developer.
        </p>

        <p>
          <span className="italic">When I'm not coding</span>, I enjoy playing
          video games, watching movies, and playing with my dog. I also enjoy{" "}
          <span className="font-medium">learning new things</span>. I am
          currently learning about{" "}
          <span className="font-medium">history and philosophy</span>. I'm also
          learning how to play the guitar.
        </p>
      </motion.section> */}

      {/* --------------------custom about section---------------- */}
      <SectionHeading >About me</SectionHeading>
      <div  className="h-[40rem] w-full flex items-center justify-center  overflow-hidden px-4 sm:px-0">
        <MaskContainer
          revealText={
            <p className="max-w-6xl mx-auto text-slate-800 text-center  text-xl font-medium px-3">
              Passionate about Web and App development with expertise in core
              programming concepts. I currently reside in <span className="underline">Jabalpur</span>. I pursued my
              education at <span className="font-sans">Gyan Ganga Institute of Technology and Sciences</span>,
              where I obtained a degree in B.Tech in Computer Science. During my
              academic journey, I delved deep into various aspects of computer
              science, honing my skills in web and app development along with a
              strong foundation in <span className="font-semibold"> DSA, OS, DBMS, and Networking</span>. Currently, I
              am actively engaged in developing a Ecommerce platform, where
              I am leveraging my expertise to develop innovative solutions and
              contribute to impactful projects in the realm of web and app
              development.
            </p>
          }
          className="h-[35rem] border rounded-xl"
        >
          "Success is no accident. It is{" "}
          <span className="text-red-500">
            hard work, perseverance, learning, studying, sacrifice, 
          </span> and most of all,
          <span className="text-red-500"> love</span> of what you are doing or
          learning to do"
        </MaskContainer>
      </div>
    </div>
  );
}
