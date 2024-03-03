"use client";
import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

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
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div className="">
      <CardContainer className="inter-var ">
        <CardBody className="bg-white sm:w-full shadow-lg relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.9] border-black/[0.1]  sm:max-w-[35rem] h-auto rounded-xl p-5 border">
          <CardItem
            translateZ="50"
            className="text-2xl text-center font-bold  text-slate-900 dark:text-white"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-700 text-sm max-w-sm  mt-2 dark:text-neutral-300"
          >
            {description}
          </CardItem>
          <CardItem translateZ="100" className=" mt-4">
            <Image
              src={imageUrl}
              alt="Project I worked on"
              quality={95}
              className="h-60  object-cover rounded-xl group-hover/card:shadow-xl"
            />
          </CardItem>

          <div className="flex flex-col gap-2 justify-between  items-center mt-10">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal  dark:text-white"
            >
              View on github →
            </CardItem>

            <p className="text-sm  font-medium text-gray-700">
              Technology used in this project
            </p>
            <div className="flex flex-wrap gap-1">
              {tags.map((tag, i) => (
                <CardItem
                  key={i}
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
    </div>
  );
}
