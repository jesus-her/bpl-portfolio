"use client";

import { Image } from "@nextui-org/react";

export default function Skill() {
  return (
    <div className="w-32 h-32 flex items-center justify-center   relative rounded-2xl break-inside">
      <Image
        isBlurred
        src={"https://i.imgur.com/9MpJzRU.png"}
        alt="Project Image"
        removeWrapper
        className=" c-lesPJm-ikzLvCr-css"
      />

      <div className=" relative flex justify-center items-center  rounded-lg  ">
        <Image
          isBlurred
          src={"https://i.imgur.com/9MpJzRU.png"}
          alt="Project Image"
        />
      </div>
    </div>
  );
}
