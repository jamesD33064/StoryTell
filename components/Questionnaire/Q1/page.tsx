"use client";
import React, { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";

export default function Q1() {
  return (
    <>
      <Card className="rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto hover:shadow-xl transition-all duration-200">
        <CardContent className="p-4">
          <h2 className="text-2xl font-bold hover:text-gray-700 transition-all duration-200">
            你覺得下面這段語音像機器合成的嗎？
          </h2>
          <div>
            <audio
              src="./wav/problem/p1.wav"
              className="w-full p-2"
              controls
            ></audio>
          </div>
          <h3 className="text-gray-500 text-center hover:text-gray-600 transition-all duration-200">
            非常不相似 非常相似
          </h3>
          <p className="mt-2 text-gray-600 hover:text-gray-700 transition-all duration-200">
            {/* 敘述內容 */}
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
    </>
  );
}
// 你覺得此篇故事跟真人念故事比的話有多接近？
