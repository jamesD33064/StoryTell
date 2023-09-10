"use client";

import React, { Component, useState } from "react";

interface SentenceProps {
    storyContent: Array<
    string | { sentence: string; sentenceId: number; emotion: string }
  >;
}

export default function SentenceCarousel({ storyContent }: SentenceProps) {
  return (
    <>
      <div className="scroll-pl-6 snap-y overflow-y-auto text-slate-800 text-center w-full h-60">
        {storyContent.map((text, index) => (
          <div key={index} id={String(index)} className="snap-center h-fit p-2">
            {typeof text === "string" ? text : text.sentence}
          </div>
        ))}
      </div>
    </>
  );
}
