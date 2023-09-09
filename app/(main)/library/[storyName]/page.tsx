"use client";
import React, { useEffect, useState } from 'react';
import Wavbar from "@/components/WAVbar/wavbar";

export default function Page({ params }: { params: { storyName: string } }) {
  const [storyContent, setStoryContent] = useState<Array<string | { sentence: string; sentenceId: number; emotion: string; }>>([]);

  useEffect(() => {
    const getAllStoryInfo = 'http://140.134.37.23:8000/api/story/getAllStoryInfo';

    fetch(getAllStoryInfo)
      .then(response => response.json())
      .then((data: { _id: string }[]) => {
        const storyIds = data.map(story => story._id);
        fetchStoryDetails(storyIds);
      })
      .catch(error => {
        console.error('發生錯誤：', error);
      });
  }, []);

  function fetchStoryDetails(storyIds: string[]) {
    const storyDetailBaseUrl = 'http://140.134.37.23:8000/api/story/getStoryDetail/';

    storyIds.forEach(storyId => {
      const storyDetailUrl = storyDetailBaseUrl + storyId;

      fetch(storyDetailUrl)
        .then(response => response.json())
        .then((storyData: { storyContent: string[] }) => {
          const storyContent = storyData.storyContent;

          setStoryContent(prevStoryContent => [...prevStoryContent, ...storyContent]);
        })
        .catch(error => {
          console.error('發生錯誤：', error);
        });
    });
  }
  return (
    <>

      <main className="flex min-h-screen flex-col justify-center overflow-hidden">
        <div className='relative h-screen flex justify-center items-center'>
          <div className="bg-white rounded-lg w-1/2 h-20 flex absolute top-20 left-8">
            <div className="px-4 py-2 overflow-hidden grid grid-cols-1 grid-rows-[auto,1fr]">
              <h1 className="text-2xl font-bold mb-4">{params.storyName}</h1>
            </div>
            {/* 左上 */}
          </div>
          <div className="bg-white rounded-lg w-5/6 h-3/5 mx-auto overflow-y-auto">
            {/* 中 */}
            <div className="p-8 mt-10 grid grid-cols-1 gap-y-10">
              {storyContent.slice(0, 7).map((sentence, index) => (
                <div key={index} className="text-gray-600">
                  <p>{typeof sentence === 'string' ? sentence : sentence.sentence}</p>
                </div>
              ))}
            </div>


          </div>

          <div className="bg-white rounded-lg w-5/6 h-12 mx-auto absolute bottom-28">
            <div className="px-4 pt-4 text-center">
              <h1 className="text-base font-bold mb-4">平靜+激動</h1>
            </div>
            {/* 下 */}
          </div>
          <div className="absolute top-20 right-8">
            <select className="border bg-white rounded-lg h-16 px-2 py-1 text-sm">
              <option value="option1">james.huang</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            {/* 右上 */}
          </div>
        </div>
        <div>
          <Wavbar></Wavbar>
        </div>
      </main>

    </>
  );
}
