"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import axios from "axios";
import Wavbar from "@/components/WAVbar/wavbar";
import SentenceCarousel from "@/components/SentenceCarousel/page";
import SpeakerDropdown from "@/components/SpeakerDropdown/page";
import {
  SpeakerConstant,
  JSpeakerConstant,
  CSpeakerConstant,
} from "@/Constants/SpeakerConstant";
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
  // 狀態用於情緒狀態
  const [isEmoMode, setIsEmoMode] = useState(true);
  // 狀態用於音訊進度
  const [audioProgress, setaudioProgress] = useState<number>(0);
  // 狀態用於音訊來源
  const [audioSrc, setAudioSrc] = useState("");

  const buildAudioSrc = (
    L: string,
    S: string,
    E: string,
    P: number,
    isEmoMode: boolean
  ) => {
    if (storyLength + 1 < P) {
      setaudioProgress(storyLength + 1);
      P = storyLength + 1;
    } else if (P < 1) {
      setaudioProgress(0);
      P = 1;
    }

    E = isEmoMode ? E : L == "J" ? "434" : "6234";

    return `https://storytell-backend.fcuvoice.com/wav/${params.storyName}/${S}/${E}/${P}.wav`;
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
        setSpeakerList(JSpeakerConstant);
      } else {
        setSpeakerList(CSpeakerConstant);
      }

      // 如果曾經有過更改故事設定
      const storyContent =
        localStoryContent == ""
          ? storyData.storyContent
          : JSON.parse(localStoryContent);
      setStoryContent(storyContent);

      const sentenceEmotion = storyContent[0].emotion;
      storyContent.length > 1
        ? setSentenceEmotion(storyContent[1].emotion)
        : setSentenceEmotion(sentenceEmotion);
      setStoryLength(storyContent.length);

      // init的音訊
      setAudioSrc(
        buildAudioSrc(
          storyData.storyLang,
          SpeakerConstant["預設女聲"],
          sentenceEmotion,
          1,
          true
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

  // 播放/暫停切換的 callback 函數
  function handleAudioProgressIncress() {
    var p = audioProgress + 1;
    p = p > storyLength - 1 ? storyLength - 1 : p;
    setAudioSrc(
      buildAudioSrc(
        storyLang,
        SpeakerConstant[speaker],
        storyContent[p].emotion,
        storyContent[p].sentenceId + 1,
        isEmoMode
      )
    );
    setaudioProgress(p);
  }
  function handleAudioProgressDecress() {
    var p = audioProgress - 1;
    p = p < 0 ? 0 : p;
    setAudioSrc(
      buildAudioSrc(
        storyLang,
        SpeakerConstant[speaker],
        storyContent[p].emotion,
        storyContent[p].sentenceId + 1,
        isEmoMode
      )
    );
    setaudioProgress(p);
  }

  // 處理音訊播放完成的 callback 函數
  function handleAudioEnded() {
    var p = audioProgress + 1;
    p = p >= storyLength ? storyLength - 1 : p;

    setAudioSrc(
      buildAudioSrc(
        storyLang,
        SpeakerConstant[speaker],
        storyContent[p] ? storyContent[p].emotion : "",
        storyContent[p] ? storyContent[p].sentenceId + 1 : storyLength,
        isEmoMode
      )
    );

    setaudioProgress(p);
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
        audioProgress + 1,
        true
      )
    );
  }

  // 切換情緒模式的 callback 函數
  function handleEmotionToggle() {
    setAudioSrc(
      buildAudioSrc(
        storyLang,
        SpeakerConstant[speaker],
        sentenceEmotion,
        audioProgress + 1,
        !isEmoMode
      )
    );
    setIsEmoMode(!isEmoMode);
  }

  //--------------------- 語者列表控制

  // 處理更換語者的 callback 函數
  function handleSpeaker(speakerName: string) {
    setSpeaker(speakerName);

    setAudioSrc(
      buildAudioSrc(
        storyLang,
        SpeakerConstant[speakerName],
        sentenceEmotion,
        audioProgress + 1,
        true
      )
    );
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
                  storyLang={storyLang}
                  isEmoMode={isEmoMode}
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
          onAudioProgressIncress={handleAudioProgressIncress}
          onAudioProgressDecress={handleAudioProgressDecress}
          onPlayPauseToggle={handlePlayPauseToggle}
          onEmotionToggle={handleEmotionToggle}
          onAudioEnded={handleAudioEnded}
        ></Wavbar>
      </main>
    </>
  );
}
