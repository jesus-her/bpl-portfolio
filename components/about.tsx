"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import GradientText from "./gradient-text";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="leading-8  scroll-mt-4 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About</SectionHeading>

      <div className="flex flex-col text-left text-lg md:text-xl w-full my-8">
        <span>
          Hi, I’m Britney. My life revolves around two passions: technology and{" "}
          art. I’ll fall in love with user interface (UI) and user experience
          (UX) design thanks to this mix of interests. From a young age, video
          games, movies and drawing have been part of my life, inspiring me to
          create captivating digital experiences. I also love animals,
          especially dogs, cats, rabbits and butterflies. Currently, I live in
          Tlaxcala, Mexico. My portfolio reflects my passion for technology, art
          and UI/UX design. Thank you for visiting my personal space! 💜
        </span>
      </div>

      {/* <h3 className=" text-3xl lg:text-8xl uppercase text-center ">
        🔥 super badass 🔥jaaja ja aj
      </h3> */}
    </motion.section>
  );
}
