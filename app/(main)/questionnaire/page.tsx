"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import Q0Start from "@/components/Questionnaire/Q0Start/page";
import Q1 from "@/components/Questionnaire/Q1/page";
import Q2 from "@/components/Questionnaire/Q2/page";
import QEnd from "@/components/Questionnaire/QEnd/page";
import Q3 from "@/components/Questionnaire/Q3/page";
import { Progress } from "@radix-ui/react-progress";

export default function Questionnaire() {
  const [currentQuestionIndex, _] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const questions = [Q1, Q2, Q3, QEnd];

  const handleStartQuestion = () => {
    setShowQuestion(true);
  };
  const handleNextQuestion = () => {
    setShowQuestion(true);
  };

  return (
    <div className="flex w-screen flex-grow items-center justify-center p-4">
      {!showQuestion ? (
        <Q0Start handleStartQuestion={handleStartQuestion}></Q0Start>
      ) : (
        <div className="w-screen h-full flex items-center gap-4 snap-mandatory snap-x overflow-x-auto z-50">
          {questions.map((QuestionComponent, index) => (
            <div
              key={index}
              className={`snap-center w-full shrink-0`}
            >
              <QuestionComponent />
            </div>
          ))}
          {/* <Progress value={33} /> */}
        </div>
      )}
    </div>
  );
}
