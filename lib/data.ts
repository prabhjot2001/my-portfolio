import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ecommerce from "@/public/ecommerce.png";
import projectMangement1 from "@/public/projectManagement1.png";
import blogrush1 from "@/public/blogrush1.png";
import notebook1 from "@/public/notebook1.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Education",
  //   hash: "#education",
  // },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "EPic - Ecommerce platform",
    description:
      "I worked on this project for hands-on practice and to polish my skills and knowledge on Database Schema, frontend, and backend tech like prisma.",
    tags: ["Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: ecommerce,
  },
  {
    title: "TaskMinder - Project Mangement web app",
    description:
      "TaskMinder is a project management web app where you can manage your projects and teams. You can assign tasks to employee and keep track of your progress.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: projectMangement1,
  },
  {
    title: "BlogRush - Blogging Website",
    description:
      "A public web app for creating, sharing, and posting your thoughts through blog post.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: blogrush1,
  },
  // {
  //   title: "NoteBook - Notes taking Website",
  //   description:
  //     "Built an notebook application, so that you can takes notes any where and able to save info to cloud(pending)",
  //   tags: ["HTML", "CSS", "JavaScript"],
  //   imageUrl: notebook1,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
