"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

import marqueeImg1 from "../public/images/marquee-img-1.svg";
import marqueeImg2 from "../public/images/marquee-img-2.svg";
import marqueeImg3 from "../public/images/marquee-img-3.svg";
import marqueeImg4 from "../public/images/marquee-img-4.svg";
import marqueeImg5 from "../public/images/marquee-img-5.svg";
import marqueeImg6 from "../public/images/marquee-img-6.svg";

export function Marquee() {
  const images = [
    marqueeImg1,
    marqueeImg2,
    marqueeImg3,
    marqueeImg4,
    marqueeImg5,
    marqueeImg6,
  ];

  return (
    <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={images}
        direction="left"
        speed="normal"
        pauseOnHover={false}
      />
    </div>
  );
}
