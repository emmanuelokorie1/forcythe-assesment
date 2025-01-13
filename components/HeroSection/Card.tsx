import React from "react";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import AnimatedText from "../AnimatedText";
import FullAnimatedText from "../FullAnimatedText";
import Button from "../Button";

function Card() {
  return (
    <div className="w-full bg-white bg-opacity-10 p-5 md:p-8 lg:p-10 rounded-[2rem] sm:rounded-[3rem]">
      <div className="text-white text-[3.5rem] sm:text-[4rem] lg:text-[5rem] font-normal leading-[1] mb-4 w-[85%]">
        <AnimatedText
          text="We build products that shape a better future"
          highlightedWords="products"
        />
      </div>

      <div className="w-[70%]">
        <TextGenerateEffect
          className="text-textGray text-base md:text-lg mb-8 leading-7"
          words="We're the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invokes sector-wide transformation."
        />
      </div>

      <div className="pb-5">
        <Button showPlayIcon={true} text="Book a Call" />
      </div>
    </div>
  );
}

export default Card;
