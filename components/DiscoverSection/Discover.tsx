import React from "react";
import AnimatedText from "../AnimatedText";
import DiscoverToggle from "./DiscoverToggle";
import App1, { MenuItem } from "../ui/MenuItem";

function Discover() {
  return (
    <section>
      <div className="flex justify-center items-center">
        <div className="text-white text-center w-[60%] text-[3.5rem] sm:text-[4rem] lg:text-[2.6rem] leading-[1] mb-4 pt-[5rem]">
          <AnimatedText
            text="Discover the transformative stories of startups that scaled new heights with us"
            highlightedWords="transformative"
            highlightedWords2="stories"
          />
        </div>
      </div>

      <div className="pb-[200px]">
       <App1 />
      </div>
    </section>
  );
}

export default Discover;
