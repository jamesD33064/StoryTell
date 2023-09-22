"use client";

import React, { Component, useState, useRef } from "react";

interface SentenceProps {
  storyContent: Array<
    string | { sentence: string; sentenceId: number; emotion: string }
  >;
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

  const storyContentArray = [
    "Once upon a time there was a cute little girl",
    "Anyone who saw the child loved him, but especially the grandmother, who seemed to love him so much that there was nothing he wouldn't give to the child.",
    "Once my grandmother gave me a red velvet hood",
    "So the three were happy",
    "The hunter skinned the wolf and took it home",
    "Grandmother ate the cake that Little Red Riding Hood brought and drank the wine, but Little Red Riding Hood from now on, when Mother says she shouldn't, she won't leave the road and run into the woods alone.",
    "I thought",
    "There was also a story like this",
    "Once, when Little Red Riding Hood was bringing cake to the old woman, another wolf spoke to her and invited her to get off the road.",
    "But Little Red Riding Hood was wary, went straight ahead, and told the old woman, I met a wolf, who said good morning to me, but his eyes were so bad, if I hadn't been in the way they were walking I said you must have eaten",
    "Well then, said the old woman",
    "Let's close the door so the wolf doesn't come in.",
    "Shortly afterwards the wolf knocked on the door and said, 'Grandmother, open the door, Little Red Riding Hood, I'm bringing you a cake.",
    "The hunter skinned the wolf and took it home",
    "Grandmother ate the cake that Little Red Riding Hood brought and drank the wine, but Little Red Riding Hood from now on, when Mother says she shouldn't, she won't leave the road and run into the woods alone.",
    "I thought",
    "There was also a story like this",
    "Once, when Little Red Riding Hood was bringing cake to the old woman, another wolf spoke to her and invited her to get off the road.",
    "But Little Red Riding Hood was wary, went straight ahead, and told the old woman, I met a wolf, who said good morning to me, but his eyes were so bad, if I hadn't been in the way they were walking I said you must have eaten",
    "Well then, said the old woman",
    "Let's close the door so the wolf doesn't come in.",
    "Shortly afterwards the wolf knocked on the door and said, 'Grandmother, open the door, Little Red Riding Hood, I'm bringing you a cake.",
    "But they didn't say a word and didn't open the door.",
  ];
  return (
    <>
      <div
        ref={sentenceScrollbar}
        id="123123123"
        className="scroll-pl-6 snap-y snap-mandatory overflow-y-auto text-slate-800 text-center w-full h-full no-scrollbar"
      >
        {/* FORDEMO */}
        <div className="h-full p-2"></div>
        {storyContentArray.map((text, index) => (
          <div
            key={index}
            id={`sentence-${index}`}
            ref={(el) => (sentenceSnapElements.current[index] = el)}
            className={`snap-center h-fit p-2 ${
              index == snapIndex ? "text-red-600" : ""
            }`}
          >
            {text}
          </div>
        ))}
        <div className="h-full p-2"></div>
      </div>
    </>
  );
}
