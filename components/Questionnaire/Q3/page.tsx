"use client";
import React, { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Q3() {
  return (
    <>
      <Card className="rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto hover:shadow-xl transition-all duration-200">
        <CardContent className="p-4">
          <h2 className="text-2xl font-bold hover:text-gray-700 transition-all duration-200">
            {/* 你覺得變更語者過後的故事語音與目標語者的相似程度有多高?<br /><br /><br /> */}
            下面這段語音像哪個角色？
          </h2>
          <div>
            <audio
              src="./wav/LittleRedRidingHood/output_000.wav"
              className="w-full p-2"
              controls
            ></audio>
          </div>
          {/* <div>
            <audio
              src="./wav/LittleRedRidingHood/output_000.wav"
              className="w-full p-2"
              controls
            ></audio>
          </div> */}
          {/* <p className="mt-2 text-gray-600 hover:text-gray-700 transition-all duration-200">
            敘述內容
          </p> */}
          <div>
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">青雉（海賊王）</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">白銀會長（輝夜姬想讓人告白）</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="py-4 text-center">
            哭臉紅色 - 笑臉綠色
            <Slider defaultValue={[33]} max={100} step={1} />
          </div>
          <div className="flex mt-4 space-x-2">
            {/* <Button
              className="w-full hover:bg-gray-700 hover:text-white transition-all duration-200"
              size="sm"
            >
              Follow
            </Button> */}
            <Button
              className="w-full hover:border-gray-700 hover:text-gray-700 transition-all duration-200"
              size="sm"
              variant="outline"
            >
              下一題
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
