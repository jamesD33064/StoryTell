"use client";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Wavbar from "@/components/WAVbar/wavbar";
import SentenceCarousel from "@/components/SentenceCarousel/page";
import SpeakerDropdown from "@/components/SpeakerDropdown/page";
import { SpeakerConstant } from "@/Constants/SpeakerConstant";
import SentenceCarouselLoaded from "@/components/SentenceCarousel/Loaded/page";
import useLocalStorage from "@/CustomHook/localstorage";

export default function Page({ params }: { params: { storyName: string } }) {
  const [loaded, setLoaded] = useState(false);
  //--------------------- 取得故事資訊, init故事參數
  const [storyLength, setStoryLength] = useState<number>(0);
  const [storyName, setStoryName] = useState("");
  const [storyLang, setStoryLang] = useState("J");

  const [localStoryContent, setLocalStoryContent] = useLocalStorage(
    params.storyName,
    ""
  );
  const [storyContent, setStoryContent] = useState([
    {
      sentence: "",
      sentenceId: 0,
      emotion: "",
    },
  ]);
  const [sentenceEmotion, setSentenceEmotion] = useState("");
  const [speaker, setSpeaker] = useState("預設女聲");
  const [speakerList, setSpeakerList] = useState<string[]>([]);

  // 狀態用於監聽播放狀態
  const [isPlaying, setIsPlaying] = useState(false);
  // 狀態用於音訊進度
  const [audioProgress, setaudioProgress] = useState<number>(0);
  // 狀態用於音訊來源
  const [audioSrc, setAudioSrc] = useState("");

  const buildAudioSrc = (L: string, S: string, E: string, P: number) => {
    return `https://storytell-backend.fcuvoice.com/wav/LittleRedRidingHood/${L}/${S}/${E}/${P}.wav`;
  };

  const url =
    "https://storytell-backend.fcuvoice.com/api/story/getStoryDetail/" +
    params.storyName;

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
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

      const storyContent =
        localStoryContent == ""
          ? storyData.storyContent
          : JSON.parse(localStoryContent);
      setStoryContent(storyContent);

      const sentenceEmotion = storyContent[0].emotion;
      setSentenceEmotion(storyContent[1].emotion);
      setStoryLength(storyContent.length);

      // init的音訊
      setAudioSrc(
        buildAudioSrc(
          storyData.storyLang,
          SpeakerConstant["預設女聲"],
          sentenceEmotion,
          1
        )
      );
    } catch (error) {
      console.error("Error fetching story details:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //--------------------- 播放進度

  // 播放/暫停切換的 callback 函數
  function handlePlayPauseToggle() {
    setIsPlaying(!isPlaying);
  }
  // 處理音訊播放完成的 callback 函數
  function handleAudioEnded() {
    const p = audioProgress + 2;

    setAudioSrc(
      buildAudioSrc(storyLang, SpeakerConstant[speaker], sentenceEmotion, p)
    );

    if (storyContent[p + 1] && storyContent[p + 1].emotion)
      setSentenceEmotion(storyContent[p + 1].emotion);
    setaudioProgress(audioProgress + 1);
  }

  //--------------------- 情緒列表控制

  // 處理更換情緒的 callback 函數
  function handleSentenceEmotion(emotion: string, sentenceId: number) {
    setSentenceEmotion(emotion);

    const newContent = storyContent.map((item) =>
      item.sentenceId === sentenceId ? { ...item, emotion: emotion } : item
    );
    setStoryContent(newContent);
    setLocalStoryContent(JSON.stringify(newContent));

    setAudioSrc(
      buildAudioSrc(
        storyLang,
        SpeakerConstant[speaker],
        newContent[audioProgress].emotion,
        audioProgress+1
      )
    );
  }

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
                  onSentenceEmotion={handleSentenceEmotion}
                ></SentenceCarousel>
              )}
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
