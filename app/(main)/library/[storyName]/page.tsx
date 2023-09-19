"use client";
import React, { useEffect, useRef, useState } from "react";
import Wavbar from "@/components/WAVbar/wavbar";
import SentenceCarousel from "@/components/SentenceCarousel/page";

export default function Page({ params }: { params: { storyName: string } }) {
  //--------------------- 顯示字幕
  const [storyContent, setStoryContent] = useState<
    Array<string | { sentence: string; sentenceId: number; emotion: string }>
  >([]);

  useEffect(() => {
    const getAllStoryInfo =
      "http://140.134.37.23:8000/api/story/getAllStoryInfo";

    fetch(getAllStoryInfo)
      .then((response) => response.json())
      .then((data: { _id: string }[]) => {
        const storyIds = data.map((story) => story._id);
        fetchStoryDetails(storyIds);
      })
      .catch((error) => {
        console.error("發生錯誤：", error);
      });
  }, []);

  function fetchStoryDetails(storyIds: string[]) {
    const storyDetailBaseUrl =
      "http://140.134.37.23:8000/api/story/getStoryDetail/";

    storyIds.forEach((storyId) => {
      const storyDetailUrl = storyDetailBaseUrl + storyId;

      fetch(storyDetailUrl)
        .then((response) => response.json())
        .then((storyData: { storyContent: string[] }) => {
          const storyContent = storyData.storyContent;

          setStoryContent((prevStoryContent) => [
            ...prevStoryContent,
            ...storyContent,
          ]);
        })
        .catch((error) => {
          console.error("發生錯誤：", error);
        });
    });
  }

  //--------------------- 情緒列表控制
  const emoList = [
    "平靜",
    "期待",
    "期待及愉悅",
    "有點激動",
    "小聲",
    "失望疑惑",
    "害怕",
    "快哭了",
  ];

  //--------------------- 播放進度 
  // 狀態用於監聽播放狀態
  const [isPlaying, setIsPlaying] = useState(false);
  // 狀態用於音訊進度
  const [audioProgress, setaudioProgress] = useState<number>(0);
  // 狀態用於音訊來源
  const [audioSrc, setaudioSrc] = useState("/wav/LittleRedRidingHood/output_004.wav");

  // 播放/暫停切換的 callback 函數
  function handlePlayPauseToggle() {
    setIsPlaying(!isPlaying);
  }
  // 處理音訊播放完成的 callback 函數
  function handleAudioEnded() {
    setaudioSrc(`/wav/LittleRedRidingHood/output_00${audioProgress+1}.wav`);
    setaudioProgress(audioProgress+1);
  }

  return (
    <>
      <main className="fixed w-screen flex h-screen flex-col align-middle justify-center overflow-hidden">
        <div className="flex grow flex-col items-center justify-center m-4">
          <div className="flex flex-col h-full w-full">
            <div className="flex h-fit">
              <div className="bg-white rounded-t-lg w-2/3 p-2">
                <h1 className="text-lg font-bold truncate">
                  {params.storyName}
                </h1>
              </div>
              <div className="ml-2 mb-2 w-1/3 bg-slate-50 rounded-lg">
                <p className="w-full p-2 flex justify-center align-middle">
                  {/* FORDEMO */}
                  speaker-
                  {isPlaying ? "playing" : "pause"}
                </p>
              </div>
            </div>
            <div className="flex grow bg-white h-0">
              <SentenceCarousel storyContent={storyContent}></SentenceCarousel>
            </div>
            <div className="flex bg-slate-50 rounded-b-lg w-full gap-8 p-2 snap-mandatory snap-x overflow-x-auto no-scrollbar">
              <div className="w-full h-full p-2 shrink-0"></div>
              {emoList.map((emo, index) => (
                <div className="snap-center w-fit h-full p-2 shrink-0">
                  <p className="w-full flex justify-center align-middle">
                    {emo}
                  </p>
                </div>
              ))}
              <div className="w-full h-full p-2 shrink-0"></div>
            </div>
          </div>
        </div>

        {/* FORDEMO */}
        <Wavbar
          nowProgress={audioProgress}
          totalProgress={10}
          audioSrc={audioSrc}
          onPlayPauseToggle={handlePlayPauseToggle}
          onAudioEnded={handleAudioEnded}
        ></Wavbar>
      </main>
    </>
  );
}
