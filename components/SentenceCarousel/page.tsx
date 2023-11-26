"use client";

import React, { Component, useState, useRef } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Emotion2EmojiConstant,
  JEmoji2ValueConstant,
  CEmoji2ValueConstant,
  Emoji2ChineseConstant,
} from "@/Constants/EmotionEmojiConstant";
import { Separator } from "@/components/ui/separator";

interface SentenceProps {
  storyContent: Array<{
    sentence: string;
    sentenceId: number;
    emotion: string;
  }>;
  snapIndex: number;
  storyLang: string;
  isEmoMode: boolean;
  onSentenceEmotion: (emotion: string, sentenceId: number) => void;
}

export default function SentenceCarousel({
  storyContent,
  snapIndex,
  storyLang,
  isEmoMode,
  onSentenceEmotion,
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
            className={`snap-center flex flex-col align-middle ${
              index === snapIndex ? "text-red-600" : ""
            }`}
          >
            <span className="flex">
              {isEmoMode ? (
                <span className="p-2">
                  <Select onValueChange={(e) => onSentenceEmotion(e, index)}>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={
                          Emotion2EmojiConstant[
                            typeof text === "string"
                              ? text
                              : (text as { emotion: string }).emotion
                          ]
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.keys(
                        storyLang == "J"
                          ? JEmoji2ValueConstant
                          : CEmoji2ValueConstant
                      ).map((emoji, E2Eindex) => (
                        <SelectItem
                          key={E2Eindex}
                          value={
                            (storyLang == "J"
                              ? JEmoji2ValueConstant
                              : CEmoji2ValueConstant)[emoji]
                          }
                        >
                          {emoji}
                          {/* {emoji + Emoji2ChineseConstant[emoji]} */}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </span>
              ) : (
                ""
              )}
              <div className="h-fit p-2">
                {typeof text === "string"
                  ? text
                  : (text as { sentence: string }).sentence}
              </div>
            </span>
            <Separator className="my-2" />
          </div>
        ))}
        <div className="h-full p-2"></div>
      </div>
    </>
  );
}
