"use client";
import React, { useEffect, useState } from "react";
import Wavbar from "@/components/WAVbar/wavbar";
import SentenceCarousel from "@/components/SentenceCarousel/page";

export default function Page({ params }: { params: { storyName: string } }) {
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
  return (
    <>
      <main className="flex h-screen flex-col align-middle justify-center overflow-hidden">
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
                  123
                </p>
              </div>
            </div>
            <div className="flex grow bg-white">
              <SentenceCarousel storyContent={storyContent}></SentenceCarousel>
            </div>
            <div className="flex bg-slate-50 rounded-b-lg">
              <p className="w-full p-2 flex justify-center align-middle">123</p>
            </div>
          </div>
        </div>

        <Wavbar></Wavbar>
      </main>
    </>
  );
}
