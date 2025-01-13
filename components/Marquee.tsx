"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

import marqueeImg1 from "../public/images/marquee-img-1.svg";
import marqueeImg2 from "../public/images/marquee-img-2.svg";
import marqueeImg3 from "../public/images/marquee-img-3.svg";
import marqueeImg4 from "../public/images/marquee-img-4.svg";
import marqueeImg5 from "../public/images/marquee-img-5.svg";
import marqueeImg6 from "../public/images/marquee-img-6.svg";
import AnimatedText from "./AnimatedText";

export function Marquee() {
  const images = [
    marqueeImg1,
    marqueeImg2,
    marqueeImg3,
    marqueeImg4,
    marqueeImg5,
    marqueeImg6,
    marqueeImg1,
    marqueeImg2,
    marqueeImg3,
    marqueeImg4,
    marqueeImg5,
    marqueeImg6,
  ];

  return (
    <div className=" antialiased z-99 bg-primary mt-[5rem]">
      <div className="text-white text-center text-[3.5rem] sm:text-[4rem] lg:text-[2.6rem] leading-[1] mb-4">
        <AnimatedText
          text="Success in Motion - Our clients' journey"
          highlightedWords="Motion"
        />
      </div>
      <div>
        <InfiniteMovingCards
          items={images}
          direction="left"
          speed="slow"
          pauseOnHover={false}
        />
      </div>
      <div>
        <InfiniteMovingCards
          items={images}
          direction="right"
          speed="slow"
          pauseOnHover={false}
        />
      </div>
    </div>
  );
}
