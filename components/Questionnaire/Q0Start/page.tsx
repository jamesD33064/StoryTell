"use client";
import React, { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import Link from "next/link";

interface props {
  handleStartQuestion: () => void;
}

export default function Q0Start({ handleStartQuestion }: props) {
  return (
    <>
      <Card className="rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto hover:shadow-xl transition-all duration-200">
        <CardContent className="p-4">
          <h2 className="text-2xl font-bold hover:text-gray-700 transition-all duration-200">
            問卷調查
          </h2>
          <h3 className="text-gray-500 hover:text-gray-600 transition-all duration-200">
            可以幫我們的話！我們會很感謝你喔！
          </h3>
          <p className="mt-2 text-gray-600 hover:text-gray-700 transition-all duration-200">
            情緒分析＆
            <br />
            情緒語音＆
            <br />
            更換說話的人效果調查
          </p>
          <div className="flex mt-4 space-x-2">
            <Button
              className="w-full hover:border-gray-700 hover:text-gray-700 transition-all duration-200"
              size="sm"
              variant="outline"
              onClick={handleStartQuestion}
            >
              開始調查！
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
