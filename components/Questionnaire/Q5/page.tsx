"use client";
import React, { useState, useEffect } from "react";
import { CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AllChangeSpeakerConstant } from "@/Constants/SpeakerConstant";
import useLocalStorage from "@/CustomHook/localstorage";

export default function Q5() {
  const [localQuestionAnswer, setLocalQuestionAnswer] = useLocalStorage(
    "QuestionAnswer",
    ""
  );

  function writeValue2Answer(valueQ5: string) {
    var answer;
    try {
      answer = JSON.parse(localQuestionAnswer);
    } catch {
      var QuestionString: string = '{"answer": {"Q5": null}}';
      answer = JSON.parse(QuestionString);
    }

    answer.answer["Q5"] = answer.answer["Q5"] || null;
    answer.answer["Q5"] = valueQ5;

    setLocalQuestionAnswer(JSON.stringify(answer));
  }

  return (
    <>
      <Card className="rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto hover:shadow-xl transition-all duration-200">
        <CardContent className="p-4">
          <h2 className="text-2xl font-bold hover:text-gray-700 transition-all duration-200">
            {/* 你覺得變更語者過後的故事語音與目標語者的相似程度有多高?<br /><br /><br /> */}
            下面這段語音像哪個角色？
          </h2>
          <div className="py-4">
            <audio
              src="https://storytell-backend.fcuvoice.com/wav/problem/p5/1.wav"
              className="w-full p-2"
              controls
            ></audio>
          </div>
          <div>
            <RadioGroup defaultValue="none" onValueChange={writeValue2Answer}>
              {AllChangeSpeakerConstant.map((speaker, index) => (
                <div className="flex items-center space-x-2" key={index}>
                  <RadioGroupItem value={speaker} id={index.toString()} />
                  <Label htmlFor={index.toString()}>{speaker}</Label>
                </div>
              ))}
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="unknow-option" id="unknow-option" />
                <Label htmlFor="unknow-option">都不認識</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
