"use client";
import React, { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { Slider } from "@radix-ui/react-slider";

export default function Q1() {
  return (
    <>
    <div className="h-full">
      <Card className="rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto hover:shadow-xl transition-all duration-200">
        <CardContent className="p-4">
          <h2 className="text-2xl font-bold hover:text-gray-700 transition-all duration-200">
            你覺得此篇故事跟真人念故事比的話有多接近？
          </h2>
          <h3 className="text-gray-500 text-center hover:text-gray-600 transition-all duration-200">
            相當不接近 相當接近
          </h3>
          <p className="mt-2 text-gray-600 hover:text-gray-700 transition-all duration-200">
            敘述內容
          </p>
          <Slider defaultValue={[33]} max={100} step={1} />
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
    </div>
      {/* <RadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Option One</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Option Two</Label>
        </div>
      </RadioGroup> */}
    </>
  );
}
