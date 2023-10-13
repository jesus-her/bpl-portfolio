"use client";
import React from "react";

import Filter1GrainTexture from "./filters/Filter1GrainTexture.tsx";
import Image from "next/image.js";
import { Button, useDisclosure } from "@nextui-org/react";

import Link from "next/link.js";
import { HiLockClosed } from "react-icons/hi";
import Filter2DiagonalLines from "./filters/Filter2DiagonalLines";

export default function Project({ ...project }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="relative rounded-xl break-inside overflow-hidden my-[16px] mt-0 border">
      <Image
        src={project.img}
        alt="Project Image"
        priority
        width={500}
        height={900}
        className="c-lesPJm-ikzLvCr-css"
      />
      {/* <Filter1GrainTexture /> */}
      <Filter2DiagonalLines />

      <div className="flex flex-col gap-2 z-10 overflow-hidden relative rounded-lg p-4 ">
        <h3 className="font-bold text-4xl">{project.title}</h3>
        <Image
          src={project.img}
          alt="Project Image"
          width={800}
          height={600}
          layout="responsive"
          priority
          className="rounded-2xl mb-6"
        />

        {/* <p className="text-left text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p> */}

        <Button
          variant="shadow"
          color="secondary"
          radius="full"
          startContent={<HiLockClosed />}
          as={Link}
          href={"#contact"}
          onClick={onOpen}
          className="font-semibold  px-6 py-3 mt-6 uppercase"
        >
          Contact for details
        </Button>
      </div>
    </div>
  );
}
