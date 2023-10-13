"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { Chip, Image } from "@nextui-org/react";
// import Skill from "./skill";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section id="skills" ref={ref} className="mb-16  scroll-mt-4 relative">
      <SectionHeading>My skills</SectionHeading>

      <ul className="flex flex-wrap   justify-center my-8  gap-16   ">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className=" flex flex-col items-center justify-center"
          >
            {/* <Skill /> */}
            <div className="w-24 h-24 flex items-center justify-center    relative rounded-2xl break-inside">
              <Image
                isBlurred
                src={skill.img}
                alt="Project Image"
                removeWrapper
                className=" skills-blur "
              />

              <div className=" relative flex justify-center items-center  rounded-lg  ">
                <Image
                  isBlurred
                  src={skill.img}
                  alt="Project Image"
                  width={skill.title === "Figma" ? 32 : 55}
                />
              </div>
            </div>
            {/* Label skill */}
            <Chip color={skill.color} variant="flat" className=" mt-2 ">
              {skill.title}
            </Chip>
          </div>
        ))}
      </ul>
    </section>
  );
}
