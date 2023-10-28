"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import Q0Start from "@/components/Questionnaire/Q0Start/page";
import Q1 from "@/components/Questionnaire/Q1/page";
import Q2 from "@/components/Questionnaire/Q2/page";
import QEnd from "@/components/Questionnaire/QEnd/page";

export default function Questionnaire() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = [Q0Start, Q1, Q2, QEnd];

  const CurrentQuestion = questions[currentQuestionIndex];

  const handleLasttQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  return (
    <main className="fixed flex flex-col w-screen h-full justify-between place-items-center text-center overflow-hidden py-20 px-10">
      <h1 className="">問卷調查</h1>
      <div className="h-3/4 w-screen">
        <CurrentQuestion />
      </div>
      <div className="w-screen flex justify-around">
        <Button variant="outline" onClick={handleLasttQuestion}>
          上一题
        </Button>
        <Button variant="outline" onClick={handleNextQuestion}>
          下一题
        </Button>
      </div>
    </main>
  );
}
