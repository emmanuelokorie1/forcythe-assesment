"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// import Button from "./Button";
import Logo from "../../public/images/forcythe-logo.svg";
import MenuIcon from "../../public/images/menu.svg";
import Button from "../Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkTabs = [
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Studio", link: "/studio" },
    { name: "Foundation", link: "/foundation" },
  ];

  const linkTabsMobile = [
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Studio", link: "/studio" },
    { name: "Foundation", link: "/foundation" },
    { name: "Careers", link: "/careers" },
    { name: "Blog", link: "/blog" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[3000] contx ${
        scrolled ? "backdrop-blur-md" : ""
      }`}
    >
      <div className="py-7 container flex justify-between gap-5 lg:gap-10 items-center ">
        <div className="flex items-center gap-10 lg:gap-20">
          <Link href="/">
            <Image
              alt="Forcythe logo"
              width="150"
              height="10"
              decoding="async"
              className="w-28 sm:w-32 lg:w-auto"
              src={Logo}
            />
          </Link>
          <div className="hidden md:flex items-center gap-4 text-base text-white">
            {linkTabs?.map((e, i) => {
              return (
                <Link href={e?.link} key={i}>
                  <span>{e?.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="hidden md:block">
          <Button text="Book a Call" />
        </div>
        <div
          className="menuBtn bg-white bg-opacity-10 rounded-md p-3 md:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          <Image
            alt="menu"
            loading="lazy"
            width="18"
            height="18"
            decoding="async"
            src={MenuIcon}
          />
        </div>
      </div>
      {menuOpen && (
        <div className="flex border-0 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone z-[999999999] bg-primaryBackground w-60 rounded-[2rem] fixed md:hidden right-5 top-28">
          <div className="text-white z-10 bg-transparent rounded-[inherit] w-full">
            <div
              className="w-full p-5 py-8 rounded-[2rem]"
              style={{
                background:
                  "linear-gradient(0deg, rgba(7, 22, 38, 0) 32%, rgb(7, 22, 38) 85%)",
              }}
            >
              <ul className="flex flex-col">
                {linkTabsMobile?.map((e, i) => {
                  return (
                    <li className="w-full py-2.5" key={i}>
                      <Link href={e?.link}>
                        <span className="w-full text-base py-3">{e?.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div
            className="flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
            style={{
              filter: "blur(2px)",
              position: "absolute",
              width: "100%",
              height: "100%",
              background:
                "radial-gradient(16.8647% 42.5027% at 92.3747% 42.6296%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)",
            }}
          ></div>
          <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[inherit]"></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
