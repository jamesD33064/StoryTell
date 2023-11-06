"use client";

import React, { Component, useState, useRef } from "react";

interface SentenceProps {
  storyContent: Array<{
    sentence: string;
    sentenceId: number;
    emotion: string;
  }>;
  snapIndex: number;
}

export default function SentenceCarousel({
  storyContent,
  snapIndex,
}: SentenceProps) {
  const sentenceScrollbar = useRef<HTMLDivElement | null>(null);
  const sentenceSnapElements = useRef<Array<HTMLDivElement | null>>([]);

  const targetElement = sentenceSnapElements.current[snapIndex];
  if (targetElement && sentenceScrollbar.current) {
    sentenceScrollbar.current.scrollTo({
      top:
        targetElement.offsetTop -
        sentenceScrollbar.current.clientHeight / 2 -
        targetElement.clientHeight / 2,
      behavior: "smooth",
    });
  }

  return (
    <>
      <div
        ref={sentenceScrollbar}
        className="scroll-pl-6 snap-y snap-mandatory overflow-y-auto text-slate-800 text-start w-full h-full no-scrollbar"
      >
        <div className="h-full p-2"></div>
        {storyContent.map((text, index) => (
          <div
            key={index}
            id={`sentence-${index}`}
            ref={(el) => (sentenceSnapElements.current[index] = el)}
            className={`snap-center h-fit p-2 ${
              index === snapIndex ? "text-red-600" : ""
            }`}
          >
            {typeof text === "string"
              ? text
              : (text as { sentence: string }).sentence}
          </div>
        ))}
        <div className="h-full p-2"></div>
      </div>
    </>
  );
}
