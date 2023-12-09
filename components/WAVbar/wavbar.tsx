"use client";

import React, { useEffect, useState, useRef } from "react";
import { Progress } from "@/components/ui/progress";
import { Toggle } from "@/components/ui/toggle";
import { EnterIcon, VideoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface WavBarProps {
  nowProgress: number;
  totalProgress: number;
  audioSrc: string;
  onAudioProgressIncress: () => void;
  onAudioProgressDecress: () => void;
  onPlayPauseToggle: () => void; // 增加播放/暫停切換的 callback 函數
  onEmotionToggle: () => void; // 情緒模式切換的 callback 函數
  onAudioEnded: () => void; // 增加音訊播放完成的 callback 函數
}

export default function Wavbar({
  nowProgress,
  totalProgress,
  audioSrc,
  onAudioProgressIncress,
  onAudioProgressDecress,
  onPlayPauseToggle,
  onEmotionToggle,
  onAudioEnded,
}: WavBarProps) {
  const [playState, set_playState] = useState(false);
  const audioElement = useRef<HTMLAudioElement | null>(null);

  // 監聽 playState 的變化，並根據其值播放或停止音訊
  useEffect(() => {
    if (audioElement.current) {
      if (playState) {
        audioElement.current.play();
      } else {
        audioElement.current.pause();
      }
    }
  }, [playState, audioElement]);

  // 監聽 audioSrc 的變化，當 audioSrc 變化時重新設置音訊來源
  useEffect(() => {
    if (audioElement.current) {
      // 停止當前音訊播放
      audioElement.current.pause();

      // TODO 不確定會不會有重複設置監聽器的問題
      // 使用 useEffect 監聽音訊播放完了沒
      audioElement.current.addEventListener("ended", onAudioEnded);

      // 設置新的音訊來源
      audioElement.current.src = audioSrc;

      // 檢查是否要播放
      if (playState) {
        audioElement.current.play();
      }
    }
  }, [audioSrc, playState]);

  // 點擊暫停按鈕時切換 playState 狀態
  function togglePlayPause() {
    set_playState(!playState);
    onPlayPauseToggle();
  }

  return (
    <>
      <audio ref={audioElement} className="invisible">
        <source src={audioSrc} type="audio/mpeg" />
      </audio>

      <nav className="bottom-0 sticky flex w-full items-center h-20 justify-center p-8 bg-white border-t border-gray-200 md:grid-cols-3 dark:bg-gray-700 dark:border-gray-600">
        <div className="flex items-center w-full">
          <div className="w-full">
            <div className="flex items-center justify-between align-middle mx-auto mb-1">
              <Toggle onClick={onEmotionToggle}>
                <VideoIcon className="h-4 w-4" />
              </Toggle>
              <div className="flex items-center justify-center">
                <button
                  data-tooltip-target="tooltip-previous"
                  type="button"
                  className="p-2.5 group rounded-full hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 dark:hover:bg-gray-600"
                  onClick={onAudioProgressDecress}
                >
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 12 16"
                  >
                    <path d="M10.819.4a1.974 1.974 0 0 0-2.147.33l-6.5 5.773A2.014 2.014 0 0 0 2 6.7V1a1 1 0 0 0-2 0v14a1 1 0 1 0 2 0V9.3c.055.068.114.133.177.194l6.5 5.773a1.982 1.982 0 0 0 2.147.33A1.977 1.977 0 0 0 12 13.773V2.227A1.977 1.977 0 0 0 10.819.4Z" />
                  </svg>
                  <span className="sr-only">Previous video</span>
                </button>
                <div
                  id="tooltip-previous"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  Previous video
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button
                  onClick={togglePlayPause}
                  data-tooltip-target="tooltip-pause"
                  type="button"
                  className="inline-flex items-center justify-center p-2.5 mx-2 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
                >
                  {playState ? (
                    <svg
                      className="w-3 h-3 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 10 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M0 .8C0 .358.32 0 .714 0h1.429c.394 0 .714.358.714.8v14.4c0 .442-.32.8-.714.8H.714a.678.678 0 0 1-.505-.234A.851.851 0 0 1 0 15.2V.8Zm7.143 0c0-.442.32-.8.714-.8h1.429c.19 0 .37.084.505.234.134.15.209.354.209.566v14.4c0 .442-.32.8-.714.8H7.857c-.394 0-.714-.358-.714-.8V.8Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-3 h-3 text-white"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
                        fill="white"
                      ></path>
                    </svg>
                  )}
                  <span className="sr-only">Pause video</span>
                </button>
                <div
                  id="tooltip-pause"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  Pause video
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button
                  data-tooltip-target="tooltip-next"
                  type="button"
                  className="p-2.5 group rounded-full hover:bg-gray-100 mr-1 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 dark:hover:bg-gray-600"
                  onClick={onAudioProgressIncress}
                >
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 12 16"
                  >
                    <path d="M11 0a1 1 0 0 0-1 1v5.7a2.028 2.028 0 0 0-.177-.194L3.33.732A2 2 0 0 0 0 2.227v11.546A1.977 1.977 0 0 0 1.181 15.6a1.982 1.982 0 0 0 2.147-.33l6.5-5.773A1.88 1.88 0 0 0 10 9.3V15a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1Z" />
                  </svg>
                  <span className="sr-only">Next video</span>
                </button>
                <div
                  id="tooltip-next"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  Next video
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
              <Toggle>
                <Link href="/library">
                  <EnterIcon className="ml-2 h-4 w-4" />
                </Link>
              </Toggle>
            </div>
            <div className="flex items-center justify-between space-x-2">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {(playState ? nowProgress + 1 : nowProgress)}
              </span>
              <Progress
                value={
                  ((playState ? nowProgress + 1 : nowProgress) /
                    totalProgress) *
                  100
                }
              />
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {totalProgress - (playState ? nowProgress + 1 : nowProgress)}
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
