"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsImgs } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section
      ref={ref}
      id="projects"
      className="mb-0  text-center leading-8  scroll-mt-4 "
    >
      <SectionHeading>Projects</SectionHeading>

      <div className="     overflow-x-hidden  relative mt-8 mb-20 flex ">
        <div className=" my-8  masonry md:masonry-md lg:masonry-lg  ">
          {projectsImgs.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
