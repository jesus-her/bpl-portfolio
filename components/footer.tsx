"use client";
import { Link } from "@nextui-org/react";
import React from "react";

export default function Footer() {
  return (
    <footer className="mb-20 sm:mb-28 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 Britney Palma. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, Vercel hosting.
      </p>
      <p className="text-xs opacity-90 text-black dark:text-white mt-2">
        Created by{" "}
        <Link className="" href="https://jesushn.vercel.app/" target="blank">
          Jesus Hernandez.
        </Link>
      </p>
    </footer>
  );
}
