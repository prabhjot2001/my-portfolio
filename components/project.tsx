"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { WavyBackground } from "./ui/wavy-background";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1.1]);

  return (
    // ---------------default------------
    // <motion.div
    //   ref={ref}
    //   style={{
    //     scale: scaleProgess,
    //     opacity: opacityProgess,
    //   }}
    //   className="group mb-3 sm:mb-8 last:mb-0"
    // >
    //   <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
    //     <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
    //       <h3 className="text-2xl font-semibold">{title}</h3>
    //       <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
    //         {description}
    //       </p>
    //       <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
    //         {tags.map((tag, index) => (
    //           <li
    //             className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
    //             key={index}
    //           >
    //             {tag}
    //           </li>
    //         ))}
    //       </ul>
    //     </div>

    //     <Image
    //       src={imageUrl}
    //       alt="Project I worked on"
    //       quality={95}
    //       className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
    //     transition
    //     group-hover:scale-[1.04]
    //     group-hover:-translate-x-3
    //     group-hover:translate-y-3
    //     group-hover:-rotate-2

    //     group-even:group-hover:translate-x-3
    //     group-even:group-hover:translate-y-3
    //     group-even:group-hover:rotate-2

    //     group-even:right-[initial] group-even:-left-40"
    //     />
    //   </section>
    // </motion.div>

    // ------------------BAsic  3d effect-------------------

    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
      }}
      className="group sm:mb-0 last:mb-0"
    >
      <CardContainer className="inter-var">
        <CardBody className="bg-white shadow-lg  relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.9] border-black/[0.1] w-auto sm:w-[35rem] h-auto rounded-xl p-5 border  ">
          <CardItem
            translateZ="50"
            className="text-2xl font-bold text-slate-900 dark:text-white"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-700 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {description}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={imageUrl}
              alt="Project I worked on"
              quality={95}
              // height="1000"
              // width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            />
          </CardItem>

          <div className="flex flex-col gap-2 justify-between items-center mt-10">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              View on github →
            </CardItem>

            <p className="text-sm font-medium text-gray-700 ">
              Technology used in this project
            </p>
            <div className="flex gap-1">
              {tags.map((tag, i) => (
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded bg-gray-700 dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  {tag}
                </CardItem>
              ))}
            </div>
          </div>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
}
