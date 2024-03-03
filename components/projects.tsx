"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";


const Projects = () => {
  return (
      <div id="projects" className="scroll-mt-28 mb-28 ">
        <SectionHeading>My projects</SectionHeading>
        <div className="">
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              
              <Project {...project} />
              
            </React.Fragment>
          ))}
        </div>
      </div>
    
  );
};

export default Projects;
