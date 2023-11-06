"use client";
import React, { useEffect, useRef, useState } from "react";
import Wavbar from "@/components/WAVbar/wavbar";
import SentenceCarousel from "@/components/SentenceCarousel/page";
import SpeakerDropdown from "@/components/SpeakerDropdown/page";

export default function Page({ params }: { params: { storyName: string } }) {
  //--------------------- 播放進度
  // 狀態用於監聽播放狀態
  const [isPlaying, setIsPlaying] = useState(false);
  // 狀態用於音訊進度
  const [audioProgress, setaudioProgress] = useState<number>(0);
  // 狀態用於音訊來源
  const [audioSrc, setaudioSrc] = useState(
    // FORDEMO
    `https://storytell-backend.fcuvoice.com/api/story/audio/LittleRedRidingHood/J/Default/434/${audioProgress + 1}` // init的音訊
    // `https://storytell-backend.fcuvoice.com/wav/LittleRedRidingHood/J/Default/434/${audioProgress + 1}.wav` // init的音訊
  );

  // 播放/暫停切換的 callback 函數
  function handlePlayPauseToggle() {
    setIsPlaying(!isPlaying);
  }
  // 處理音訊播放完成的 callback 函數
    // FORDEMO
  function handleAudioEnded() {
    // setaudioSrc(`/wav/LittleRedRidingHood/output_00${audioProgress + 1}.wav`);
    setaudioSrc(`https://storytell-backend.fcuvoice.com/wav/LittleRedRidingHood/J/Default/434/${audioProgress + 2}.wav`);
    setaudioProgress(audioProgress + 1);
  }

  //--------------------- 顯示字幕
  const [storyLength, setStoryLength] = useState<number>(0);
  const [storyContent, setStoryContent] = useState<
    Array<{
      sentence: string;
      sentenceId: number;
      emotion: string;
    }>
  >([]);

  useEffect(() => {
    const getAllStoryInfo =
      "https://storytell-backend.fcuvoice.com/api/story/getAllStoryInfo";

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
      "https://storytell-backend.fcuvoice.com/api/story/getStoryDetail/";

    storyIds.forEach((storyId) => {
      const storyDetailUrl = storyDetailBaseUrl + storyId;

      fetch(storyDetailUrl)
        .then((response) => response.json())
        .then((storyData: { storyContent:     Array<{
          sentence: string;
          sentenceId: number;
          emotion: string;
        }> }) => {
          const storyContent = storyData.storyContent;
          setStoryContent(storyContent);
          setStoryLength(storyContent.length);
        //   setStoryContent((prevStoryContent) => [
        //     ...prevStoryContent,
        //     ...storyContent,
        //   ]);
        // })
        // .catch((error) => {
        //   console.error("發生錯誤：", error);
        });
    });
  }

  //--------------------- 情緒列表控制
  const emoScrollbar = useRef<HTMLDivElement | null>(null);

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

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (emoScrollbar.current) {
  //     }
  //   };

  //   if (emoScrollbar.current) {
  //     emoScrollbar.current.addEventListener("scroll", handleScroll);
  //   }

  //   return () => {
  //     if (emoScrollbar.current) {
  //       emoScrollbar.current.removeEventListener("scroll", handleScroll);
  //     }
  //   };
  // }, []);

  //--------------------- 語者列表控制
  const speakerList = ["卜學亮", "葉展綸", "高橋李依", "小野大輔", "子安武人"];

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
              <div className="ml-2 mb-2 w-1/3">
                <div className="w-full flex justify-center align-middle">
                  <SpeakerDropdown speakerList={speakerList}></SpeakerDropdown>
                </div>
              </div>
            </div>
            <div className="flex grow bg-white h-0">
              <SentenceCarousel
                storyContent={storyContent}
                snapIndex={audioProgress}
              ></SentenceCarousel>
            </div>
            <div>
              <div
                ref={emoScrollbar}
                className="flex bg-slate-50 rounded-b-lg w-full gap-8 p-2 snap-mandatory snap-x overflow-x-auto no-scrollbar"
              >
                <div className="w-full h-full p-2 shrink-0"></div>
                {emoList.map((emo, index) => (
                  <div
                    key={index}
                    className="snap-center w-fit h-full p-2 shrink-0 scroll-snap-item"
                  >
                    <p className="w-full flex justify-center align-middle">
                      {emo}
                    </p>
                  </div>
                ))}
                <div className="w-full h-full p-2 shrink-0"></div>
              </div>
            </div>
          </div>
        </div>

        <Wavbar
          nowProgress={audioProgress}
          totalProgress={storyLength}
          audioSrc={audioSrc}
          onPlayPauseToggle={handlePlayPauseToggle}
          onAudioEnded={handleAudioEnded}
        ></Wavbar>
      </main>
    </>
  );
}
