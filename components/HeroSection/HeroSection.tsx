import React from "react";
import background from "../../public/images/hero-background.svg";
import Image from "next/image";
import Card from "./Card";
import { Marquee } from "../Marquee";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[80vh] md:h-[50vh] lg:h-[90vh] mb-[3rem]">
      <div className="absolute top-0 left-0 w-full h-full z-[1]">
        <Image
          src={background}
          alt="Forcythe background"
          objectFit="contain"
          layout="fill"

          quality={100}
          decoding="async"
          className="w-[100%] h-[100%] object-contain"
        />
      </div>
      <div className="z-[2] relative contx">
        <Card />
      </div>

      <div>
        <Marquee />
      </div>
    </section>
  );
};

export default HeroSection;
