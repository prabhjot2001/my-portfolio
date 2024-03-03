"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import img from '../public/prabh_formal.webp'
// import { TextGenerateEffect } from "./ui/text-generate-effect";

export const Intro = () => {
  //   const words = `Hello, I'm Prabhjot singh. I'm a
  //   student & a full-stack developer. I've
  //   built lot's of projects you can
  //   explore more below. I enjoy building
  //  sites & apps. I work with latest
  //   technologies like
  //  MERN stack, Laravel etc.`;

  // -----------------------------------my custom styles-----------------------------
  const TextStyle = "font-bold flex gap-2 text-7xl items-center";
  const TextStyle1 = "font-bold flex gap-2 text-6xl items-center text-cyan-500";
  const spanStyle =
    "text-indigo-600 rotate-10 border-solid border-4 border-indigo-500 p-1";

  return (
    // <WavyBackground className="p-10">
      <section className="scroll-mt-24" id="home">
        <div className="flex items-center justify-center flex-col">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.4,
              }}
            >
              <Image
                className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl mt-20 sm:mt-0 "
                src={img}
                width={192}
                height={192}
                quality={95}
                priority={true}
                alt=""
              />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                duration: 0.4,
              }}
              className="text-2xl absolute right-0  bottom-0"
            >
              👋
            </motion.span>
          </div>
          {/* ---------------------- */}
          <div className="mt-10 flex flex-col items-center">
            <div
              className="flex flex-col gap-2 items-center text-gray-900 p-1 "
              style={{
                backgroundImage: "url('/bg1.png')",
                backgroundSize: "cover",
              }}
            >
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className={TextStyle}
              >
                Hey! I am
              </motion.div>

              <div className={TextStyle}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    // transform: "rotate(-5deg)",
                    opacity: 1,
                    scale: [1, 1, 2, 2, 1, 1],
                    rotate: [0, 0, -270, 270, 0, 0],
                  }}
                  transition={{ delay: 1 }}
                  style={{ transform: "rotate(-5deg)" }}
                  className={`${spanStyle} transition duration-300 ease-in-out transform hover:animate-bounce cursor-pointer`}
                >
                  Prabhjot
                </motion.div>
              </div>

              <motion.div
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className={TextStyle1}
              >
                A <span className="">fullstack</span>
              </motion.div>

              <motion.div
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className={TextStyle}
              >
                developer
              </motion.div>
            </div>
          </div>
        </div>
        {/* -----------------summary text---------------------- */}
        {/* <TextGenerateEffect words={words} /> */}
        <motion.p
          className="mb-10 mt-10 px-4 text-lg text-gray-600 font-thin !leading-[1.5] sm:px-16 sm:text-3xl text-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold ">Hello, I am Prabhjot singh.</span> I am a{" "}
          <span className="font-bold">student & a full-stack developer</span>{" "}
          I have built lots of <span className="font-bold">projects</span> you
          can explore more below. I enjoy building{" "}
          <span className="italic">sites & apps</span>. I work with latest
          technologies like{" "}
          <span className="underline">MERN stack, Laravel etc </span>.
        </motion.p>
        {/* //-----------------links and buttons--------------- */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition border-2 border-gray-800"
            onClick={() => {
              // setActiveSection("Contact");
              // setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 border-2 border-gray-600"
            href="/CV.pdf"
            download
          >
            Download Resume{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>

          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 "
            href="https://linkedin.com"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </motion.div>
      </section>
    // </WavyBackground>
  );
};
