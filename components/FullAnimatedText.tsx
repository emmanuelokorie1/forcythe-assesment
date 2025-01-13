import React from "react";

interface FullAnimatedTextProps {
  text: string;
}

const FullAnimatedText: React.FC<FullAnimatedTextProps> = ({ text }) => {
  return (
    <div className="animated-text inline-block text-white overflow-hidden">
      {text.split(" ").map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-block opacity-0 animate-fade-in-up whitespace-nowrap mx-1"
          style={{ animationDelay: `${wordIndex * 0.3}s` }} // Adjust delay between words
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default FullAnimatedText;
