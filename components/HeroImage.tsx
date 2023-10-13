import { projectsData } from "@/lib/data";
import Filter1GrainTexture from "./filters/Filter1GrainTexture.tsx";
import Link from "next/link.js";
import Image from "next/image.js";
import Filter2DiagonalLines from "./filters/Filter2DiagonalLines";
import Filter3Colors from "./filters/Filter3Colors";

import Brit from "@/public/estudihambre.jpg";

export default function HeroImage() {
  return (
    <div className="   bg-[rgba(255,255,255,1)]   relative rounded-lg">
      {/* <img alt="ola" src={Brit} className=" c-lesPJm-ikzLvCr-css" /> */}
      {/* <Image
        src={Brit}
        alt="Project Image"
        priority // Prioriza la carga de la imagen
        className=" c-lesPJm-ikzLvCr-css"
      /> */}
      <Filter1GrainTexture />
      {/* <Filter2DiagonalLines /> */}
      {/* <Filter3Colors /> */}

      <div className="overflow-hidden relative   rounded-lg p-4 bg-[rgba(255,255,255,.2)]  ">
        <div className=" relative z-10 flex flex-col items-center gap-4 w-52 h-52 border border-red-600  ">
          <Image
            src={Brit}
            alt="Project Image"
            layout="responsive" // Permite que la imagen se ajuste al contenedor
            priority // Prioriza la carga de la imagen
          />

          <div className=" text-black ">
            <h3 className=" font-bold text-xl  ">Hello</h3>
            <p className=" opacity-90 text-left">iAM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
