"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

import Link from "next/link";
import Filter3Colors from "./filters/Filter3Colors";
import Filter2DiagonalLines from "./filters/Filter2DiagonalLines";
import { Button } from "@nextui-org/react";
import { BsSend } from "react-icons/bs";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 text-center scroll-mt-4 relative  overflow-x-hidden leading-8 "
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      {/* <SectionHeading>{"Contact"}</SectionHeading> */}

      <div className="sm:text-6xl text-4xl  my-16 relative  font-bold gap-4 flex flex-col ">
        <p>Let's</p>
        <p>Design</p>
        <p>Something</p>
      </div>
      <div className=" flex flex-col lg:flex-row gap-8  items-center justify-center px-8 ">
        <Button
          endContent={<BsSend />}
          as={Link}
          href="mailto:britneypalma16@gmail.com"
          target="blank"
          variant="shadow"
          color="secondary"
        >
          britneypalma16@gmail.com
        </Button>
      </div>
    </motion.section>
  );
}
