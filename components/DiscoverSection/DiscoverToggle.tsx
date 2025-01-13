"use client";
import React, { useState } from "react";

import starksIcon from "../../public/images/starks-logo.svg";
import stacaiIcon from "../../public/images/stacai-logo.svg";
import executiveIcon from "../../public/images/executive-pros-logo.svg";
import beaupreneurIcon from "../../public/images/beaupreneur-logo.svg";
import iwariaIcon from "../../public/images/iwaria-logo.svg";

import iwaria from "../../public/images/iwaria.svg";
import john from "../../public/images/john.svg";
import executive from "../../public/images/executive.svg";
import edwin from "../../public/images/edwin.svg";
import christina from "../../public/images/christina.svg";

import Image from "next/image";

function DiscoverToggle() {
  const data = [
    {
      headerImg: starksIcon,
      content: {
        header: "Starks Associate",
        desc: "Partnering with Forcythe was like finding a hidden gem. Their genuine interest in our success was palpable, and the continuous support post-launch has been a testament to their commitment. They’ve become more than a service provider; they’re a trusted ally.",
        role: "John, Management",
        imf: john,
      },
    },
    {
      headerImg: executiveIcon,
      content: {
        header: "ExecutivePros",
        desc: "The team understood the assignment and delivered very well. One of the things that stood them out was how they took our concepts and turned it into visually appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!",
        role: "Testimony, Co-founder",
        img: executive,
      },
    },
    {
      headerImg: stacaiIcon,
      content: {
        header: "Stac AI",
        desc: "Forcythe is seriously amazing when it comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team’s commitment to our vision was evident every step of the way.",
        role: "Edwin, Former CTO",
        img: edwin,
      },
    },
    {
      headerImg: iwariaIcon,
      content: {
        header: "Iwaria",
        desc: "The moment we engaged Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but also enriched our brand’s story, captivating our audience like never before.",
        role: "Iwaria, Founder",
        img: iwaria,
      },
    },
    {
      headerImg: beaupreneurIcon,
      content: {
        header: "Beaupreneur",
        desc: "I’m beyond impressed with the dedication Forcythe showed. They didn’t just deliver—they educated us, involving us in the creative process. The result? A website that truly feels like ours and speaks directly to our customers’ hearts.",
        role: "Christiana, Founder",
        img: christina,
      },
    },
  ];

  const [currentTab, setCurrentTab] = useState(2);

  return (
<section className="relative">
      {/* Tabs */}
      <div className="grid grid-cols-5 gap-4 border border-secondary2 rounded-[3rem] overflow-hidden">
        {data.map((e, i) => (
          <div
            key={i}
            className={`flex justify-center items-center cursor-pointer transition-all duration-300 ${
              currentTab === i ? "bg-secondary" : ""
            }`}
            onClick={() => setCurrentTab(i)} // Update the active tab
          >
            <div className="w-[100px] h-[80px] rounded-md overflow-hidden">
              <Image
                alt="project-image"
                loading="lazy"
                height={80}
                width={100}
                decoding="async"
                className="w-full h-full object-cover"
                src={e.headerImg}
              />
            </div>
          </div>
        ))}
      </div>


      {/* Tab Content */}
      {data.map((e, i) => (
        currentTab === i && ( // Show content only for the active tab
          <div
            key={i}
            className="bg-red-500 grid grid-cols-2 w-[500px] mt-4 mx-auto p-4 border border-green-500 rounded-md"
          >
            <div>
              <div>{e.content.header}</div>
              <div>{e.content.desc}</div>
              <div>{e.content.role}</div>
            </div>
            <div>
              <Image
                alt="project-image"
                loading="lazy"
                height={80}
                width={100}
                decoding="async"
                className="w-full h-full object-cover"
                src={e.content.img}
              />
            </div>
          </div>
        )
      ))}
    </section>

  );
}

export default DiscoverToggle;
