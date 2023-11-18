"use client";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Wavbar from "@/components/WAVbar/wavbar";
import SentenceCarousel from "@/components/SentenceCarousel/page";
import SpeakerDropdown from "@/components/SpeakerDropdown/page";
import { SpeakerConstant } from "@/Constants/SpeakerConstant";
import SentenceCarouselLoaded from "@/components/SentenceCarousel/Loaded/page";

export default function Page({ params }: { params: { storyName: string } }) {
  const [loaded, setLoaded] = useState(false);
  //--------------------- 取得故事資訊, init故事參數
  const [storyLength, setStoryLength] = useState<number>(0);
  const [storyName, setStoryName] = useState("");
  const [storyLang, setStoryLang] = useState("J");
  const [storyContent, setStoryContent] = useState<
    Array<{
      sentence: string;
      sentenceId: number;
      emotion: string;
    }>
  >([]);
  const [speaker, setSpeaker] = useState("預設女聲");
  const [speakerList, setSpeakerList] = useState<string[]>([]);

  // 狀態用於監聽播放狀態
  const [isPlaying, setIsPlaying] = useState(false);
  // 狀態用於音訊進度
  const [audioProgress, setaudioProgress] = useState<number>(0);
  // 狀態用於音訊來源
  const [audioSrc, setaudioSrc] = useState("");

  const url =
    "https://storytell-backend.fcuvoice.com/api/story/getStoryDetail/" +
    params.storyName;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setLoaded(true);
        const storyData = response.data;
        setStoryName(storyData.storyName);
        setStoryLang(storyData.storyLang);

        if (storyData.storyLang === "J") {
          setSpeakerList([
            "預設女聲",
            "輝夜姬白銀",
            "子安武人",
            "約爾夫人",
            "高橋羽依",
          ]);
        } else {
          setSpeakerList(["預設女聲", "沈睡小五郎", "廣志", "麗子"]);
        }

        const storyContent = storyData.storyContent;
        setStoryContent(storyContent);
        setStoryLength(storyContent.length);

        // FORDEMO
        setaudioSrc(
          `https://storytell-backend.fcuvoice.com/api/story/audio/LittleRedRidingHood/${
            storyData.storyLang
          }/${SpeakerConstant["預設女聲"]}/454/${audioProgress + 1}` // init的音訊
        );
      })
      .catch((error) => {
        console.error("Error fetching story details:", error);
      });
  }, []);

  //--------------------- 播放進度

  // 播放/暫停切換的 callback 函數
  function handlePlayPauseToggle() {
    setIsPlaying(!isPlaying);
  }
  // 處理音訊播放完成的 callback 函數
  // FORDEMO
  function handleAudioEnded() {
    setaudioSrc(
        `https://storytell-backend.fcuvoice.com/wav/LittleRedRidingHood/${storyLang}/${SpeakerConstant[speaker]}/454/${
        audioProgress + 2
      }.wav`
    );
    setaudioProgress(audioProgress + 1);
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

  // 處理更換語者的 callback 函數
  function handleSpeaker(speakerName: string) {
    setSpeaker(speakerName);
  }

  //--------------------- 顯示頁面
  return (
    <>
      <main className="fixed w-screen flex h-screen flex-col align-middle justify-center overflow-hidden">
        <div className="flex grow flex-col items-center justify-center m-4">
          <div className="flex flex-col h-full w-full">
            <div className="flex h-fit">
              <div className="bg-white rounded-t-lg w-2/3 p-2">
                <h1 className="text-lg font-bold truncate">{storyName}</h1>
              </div>
              <div className="ml-2 mb-2 w-1/3">
                <div className="w-full flex justify-center align-middle">
                  <SpeakerDropdown
                    speakerList={speakerList}
                    onSpeakerChange={handleSpeaker}
                  ></SpeakerDropdown>
                </div>
              </div>
            </div>
            <div className="flex grow bg-white h-0">
              {!loaded ? (
                <SentenceCarouselLoaded />
              ) : (
                <SentenceCarousel
                  storyContent={storyContent}
                  snapIndex={audioProgress}
                ></SentenceCarousel>
              )}
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
