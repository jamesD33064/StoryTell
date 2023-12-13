"use client";
import React, { useState, createContext } from "react";
import axios from "axios";
import Q0Start from "@/components/Questionnaire/Q0Start/page";
import Q1 from "@/components/Questionnaire/Q1/page";
import Q2 from "@/components/Questionnaire/Q2/page";
import Q3 from "@/components/Questionnaire/Q3/page";
import Q4 from "@/components/Questionnaire/Q4/page";
import Q5 from "@/components/Questionnaire/Q5/page";
// import QEnd from "@/components/Questionnaire/QEnd/page";
import QProgress from "./QProgressContext";
import { useValue } from "@/CustomHook/valueHook";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import useLocalStorage from "@/CustomHook/localstorage";
import { useToast } from "@/components/ui/use-toast";
import CommonLoaded from "@/components/CommonLoaded/page";

export default function Questionnaire() {
  const [loaded, setLoaded] = useState(false);
  const { value, setValue } = useValue();
  const { toast } = useToast();
  const questions = [Q0Start, Q1, Q2, Q3, Q4, Q5];
  const [localQuestionAnswer, setLocalQuestionAnswer] = useLocalStorage(
    "QuestionAnswer",
    ""
  );

  const CurrentQuestion = questions[value];

  async function postAnswer() {
    const data = window.localStorage.getItem("QuestionAnswer")??"{}";
    setLoaded(true);
    try {
      const response = await axios.post(
        "https://storytell-backend.fcuvoice.com/api/uploadSurvery",
        // localQuestionAnswer,
        JSON.parse(data),
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );

      setLoaded(false);
      if (response.status === 200) {
        toast({
          title: "感謝填寫問卷！",
          description: "",
        });
        setLocalQuestionAnswer("");
      } else {
        toast({
          title: "填寫問卷失敗ＱＱ",
          description: "",
        });
        setLocalQuestionAnswer("");
      }
    } catch (error) {
      toast({
        title: "好像出問題了，麻煩再跟我們講一下🥺",
        description: "",
      });
      setLocalQuestionAnswer("");
    }
  }

  return (
    <>
      <QProgress.Provider value={value}>
        <div className="flex flex-col w-screen flex-grow items-center justify-center p-4">
          {loaded ? <CommonLoaded /> : ""}
          {<CurrentQuestion />}

          {value != questions.length - 1 ? (
            <Button
              className="fixed bottom-24 hover:border-gray-700 hover:text-gray-700 transition-all duration-200"
              size="lg"
              onClick={() => setValue((value + 1) % questions.length)}
            >
              {value == 0 ? "開始調查！" : "下一題"}
            </Button>
          ) : (
            <Button
              className="fixed bottom-24 hover:border-gray-700 hover:text-gray-700 transition-all duration-200"
              size="lg"
              onClick={postAnswer}
            >
              提交
            </Button>
          )}

          {value != 0 ? (
            <Progress value={(value / 5) * 100} className="fixed bottom-20" />
          ) : (
            ""
          )}
        </div>
      </QProgress.Provider>
    </>
  );
}
