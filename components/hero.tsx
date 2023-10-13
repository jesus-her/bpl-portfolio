"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import Brit from "@/public/brithero.png";
import Image from "next/image";
import { Button } from "@nextui-org/react";

export default function Hero() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="text-center w-full  scroll-mt-[4rem] relative"
    >
      <div className="flex items-center justify-center min-w-full overflow-hidden">
        <div className="relative py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <span className="font-bold text-4xl md:text-5xl uppercase">
              Britney Palma
            </span>
          </motion.div>
        </div>
      </div>

      <motion.h1
        className=" px-4 text-2xl font-light !leading-[1.5] sm:text-4xl  flex flex-col justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className=" text-sm  text-center mb-4">
          CREATIVE MIND THAT DESIGNS AMAZING BRANDS AND DIGITAL PRODUCTS.
        </p>
        <div className="  w-fit flex self-center flex-col object-contain relative">
          <Image
            src={Brit}
            alt="Project Image"
            width={400}
            height={400}
            className=" border aspect-square object-cover rounded-lg overflow-hidden"
          />
          <div className=" text-left py-3  text-2xl">
            <span className="font-bold ">Hello! </span>
            My name is Britney
            <br />
            <span className=" font-bold">I'm a UI/UX designer</span>
          </div>
          {/* <Button
            variant="shadow"
            className="font-bold  absolute -top-0 -left-0  text-7xl md:text-9xl text-black  dark:text-transparent dark:bg-clip-text
            bg-gradient-to-t from-[#8026C6] via-[#3a0ca3] to-[#F20587]"
          >
            *
          </Button> */}
        </div>
        <span
          className="font-bold  text-right md:text-center text-7xl md:text-9xl text-transparent bg-clip-text bg-gradient-to-t
             from-[#8026C6] via-[#3a0ca3] to-[#F20587]"
        >
          *
        </span>
      </motion.h1>

      <motion.div
        className="flex  items-center justify-center gap-6"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Button
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          endContent={<BsArrowRight />}
          href="#contact"
          as={Link}
          variant="shadow"
          color="secondary"
        >
          Contact me here
        </Button>
        <Button
          startContent={<HiDownload />}
          href="/cv_jesus_hernandez.pdf"
          variant="bordered"
          color="secondary"
        >
          <a href="/bpl_cv.pdf" download>
            Download CV{" "}
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
