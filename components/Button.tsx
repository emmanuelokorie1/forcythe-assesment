import React from "react";
import { MdPlayArrow } from "react-icons/md";

interface ButtonProps {
  text: string;
  showPlayIcon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, showPlayIcon }) => {
  return (
    <div className="relative group w-fit cursor-pointer">
      <button className="bg-white group-hover:bg-secondary outline-none border-0 text-black group-hover:text-white flex items-center justify-center gap-1 py-[12px] px-5 rounded-[3rem] shadow-lg w-fit font-semibold relative z-[2] transition-all duration-300 ease-in-out">
        <div>{text}</div>
        {showPlayIcon && (
          <div className=" group-hover:text-white">
            <MdPlayArrow size={20} />
          </div>
        )}
      </button>
      <div className=" absolute z-[1] top-[5px] left-[-5px] rounded-[3rem] border border-dashed border-white group-hover:border-secondary transition-all duration-300 ease-in-out">
        <div className="flex items-center justify-center gap-2 py-[12px] px-5 opacity-0">
          <div>{text}</div>
          {showPlayIcon && (
            <div className=" group-hover:text-white">
              <MdPlayArrow size={20} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Button;
