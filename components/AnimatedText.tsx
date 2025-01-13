import React from "react";

interface animatedTextProps {
  text: string;
  highlightedWords?: string;
  highlightedWords2?: string;
}

const AnimatedText: React.FC<animatedTextProps> = ({
  text,
  highlightedWords,
  highlightedWords2,
}) => {
  return (
    <div className="animated-text inline-block overflow-hidden">
      {text.split(" ").map((word, wordIndex) => (
        <span
          key={wordIndex}
          className={`whitespace-nowrap inline-flex ${
            word === highlightedWords
              ? "text-secondary2"
              : word === highlightedWords2
              ? "text-secondary2"
              : ""
          }`}
        >
          {word.split("").map((char, charIndex) => (
            <span
              key={charIndex}
              className="inline-block opacity-0 animate-fade-in-up"
              style={{
                animationDelay: `${(wordIndex * 10 + charIndex) * 0.1}s`,
              }}
            >
              {char}
            </span>
          ))}
          <span
            className="inline-block opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${(wordIndex + 1) * 0.1}s` }}
          >
            &nbsp;
          </span>
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
