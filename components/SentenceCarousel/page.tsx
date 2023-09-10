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
      <div className="scroll-pl-6 snap-y overflow-y-auto text-slate-800 text-center w-full h-full">
        {storyContent.map((text, index) => (
          <div key={index} id={String(index)} className="snap-center h-fit p-2">
            {typeof text === "string" ? text : text.sentence}
          </div>
        ))}

        {/* FORDEMO */}
        <p className="snap-center h-fit p-2">
          Once upon a time there was a cute little girl
        </p>
        <p className="snap-center h-fit p-2">
          Anyone who saw the child loved him, but especially the grandmother,
          who seemed to love him so much that there was nothing he wouldn't give
          to the child.
        </p>
        <p className="snap-center h-fit p-2">
          Once my grandmother gave me a red velvet hood
        </p>
        <p className="snap-center h-fit p-2">So the three were happy</p>
        <p className="snap-center h-fit p-2">
          The hunter skinned the wolf and took it home
        </p>
        <p className="snap-center h-fit p-2">
          Grandmother ate the cake that Little Red Riding Hood brought and drank
          the wine, but Little Red Riding Hood from now on, when Mother says she
          shouldn't, she won't leave the road and run into the woods alone.
        </p>
        <p className="snap-center h-fit p-2">I thought</p>
        <p className="snap-center h-fit p-2">
          There was also a story like this
        </p>
        <p className="snap-center h-fit p-2">
          Once, when Little Red Riding Hood was bringing cake to the old woman,
          another wolf spoke to her and invited her to get off the road.
        </p>
        <p className="snap-center h-fit p-2">
          But Little Red Riding Hood was wary, went straight ahead, and told the
          old woman, I met a wolf, who said good morning to me, but his eyes
          were so bad, if I hadn't been in the way they were walking I said you
          must have eaten
        </p>
        <p className="snap-center h-fit p-2">
          Well then, said the old woman
        </p>
        <p className="snap-center h-fit p-2">
          Let's close the door so the wolf doesn't come in.
        </p>
        <p className="snap-center h-fit p-2">
          Shortly afterwards the wolf knocked on the door and said,
          'Grandmother, open the door, Little Red Riding Hood, I'm bringing you
          a cake.
        </p>
        <p className="snap-center h-fit p-2">
          But they didn't say a word and didn't open the door.
        </p>
      </div>
    </>
  );
}
