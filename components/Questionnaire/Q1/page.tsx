"use client";
import React, { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import useLocalStorage from "@/CustomHook/localstorage";

export default function Q1() {
  const [localQuestionAnswer, setLocalQuestionAnswer] = useLocalStorage(
    "QuestionAnswer",
    "{}"
  );

  function writeValue2Answer(value: number[]) {
    var localQuestionAnswer: string = '{"answer": {"Q1": null}}';

    var answer = JSON.parse(localQuestionAnswer);
    answer.answer["Q1"] = value;
    setLocalQuestionAnswer(JSON.stringify(answer));
  }

  return (
    <>
      <Card className="rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto hover:shadow-xl transition-all duration-200">
        <CardContent className="p-4">
          <h2 className="text-2xl font-bold hover:text-gray-700 transition-all duration-200">
            你覺得下面這段語音像機器合成的嗎？
          </h2>
          <div className="py-4">
            <audio
              src="https://storytell-backend.fcuvoice.com/wav/problem/p1/1.wav"
              className="w-full p-2"
              controls
            ></audio>
          </div>
          <div className="flex justify-between">
            <h3 className="text-gray-500 text-center hover:text-gray-600 transition-all duration-200">
              非常不相似
            </h3>
            <h3 className="text-gray-500 text-center hover:text-gray-600 transition-all duration-200">
              非常相似
            </h3>
          </div>
          <p className="mt-2 text-gray-600 hover:text-gray-700 transition-all duration-200"></p>
          <Slider
            defaultValue={[33]}
            max={100}
            step={1}
            onValueChange={writeValue2Answer}
          />
        </CardContent>
      </Card>
    </>
  );
}
// 你覺得此篇故事跟真人念故事比的話有多接近？
