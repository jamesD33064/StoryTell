"use client";
import React, { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import useLocalStorage from "@/CustomHook/localstorage";

export default function Q2() {
  const [localQuestionAnswer, setLocalQuestionAnswer] = useLocalStorage(
    "QuestionAnswer",
    '{"answer": {"Q1": null}}'
  );

  function writeValue2Answer(value: number[]) {
    var answer;
    try {
      answer = JSON.parse(localQuestionAnswer);
    } catch {
      var QuestionString: string = '{"answer": {"Q2": null}}';
      answer = JSON.parse(QuestionString);
    }

    answer.answer["Q2"] = answer.answer["Q2"] || null;
    answer.answer["Q2"] = value;

    setLocalQuestionAnswer(JSON.stringify(answer));
  }

  return (
    <>
      <Card className="rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto hover:shadow-xl transition-all duration-200">
        <CardContent className="p-4">
          <h2 className="text-2xl font-bold hover:text-gray-700 transition-all duration-200">
            你覺得第二段語音有比第一段語音更有情緒起伏嗎？
          </h2>
          <div className="py-4">
            <audio
              src="https://storytell-backend.fcuvoice.com/wav/problem/p2/1.wav"
              className="w-full p-2"
              controls
            ></audio>
          </div>
          <div className="py-4">
            <audio
              src="https://storytell-backend.fcuvoice.com/wav/problem/p2/2.wav"
              className="w-full p-2"
              controls
            ></audio>
          </div>
          <div className="flex justify-between">
            <h3 className="text-gray-500 text-center hover:text-gray-600 transition-all duration-200">
              不認同
            </h3>
            <h3 className="text-gray-500 text-center hover:text-gray-600 transition-all duration-200">
              認同
            </h3>
          </div>
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
