"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import LibraryCard from "@/components/LibraryCard/page";

interface StoryInfo {
  _id: string;
  storyName: string;
}

export default function Library() {
  const [stories, setStories] = useState<StoryInfo[]>([]);
  useEffect(() => {
    axios
      .get("http://140.134.37.23:8000/story/getAllStoryInfo") // 使用代理路径
      .then((response) => {
        setStories(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching stories:", error);
      });
  }, []);

  return (
    <main className="relative">
      <div className="w-full h-1/5 flex gap-8 snap-mandatory snap-x overflow-x-auto p-14">
        <div className="snap-center w-3/5 h-full shrink-0">
          <LibraryCard
            id="1"
            storyName="Cinderella"
            storyImg="http://140.134.37.23:8000/img/Cinderella.jpg"
            showTag={false}
            link="/library/Cinderella"
          ></LibraryCard>
        </div>
        <div className="snap-center w-3/5 h-full shrink-0">
          <LibraryCard
            id="1"
            storyName="Little Red Riding Hood"
            storyImg="http://140.134.37.23:8000/img/LittleRedRidingHood.png"
            showTag={false}
            link="/library/LittleRedRidingHood"
          ></LibraryCard>
        </div>
      </div>
      <div>
        <div className="w-full flex flex-col align-middle justify-center gap-8 p-14">
          <LibraryCard
            id="demo-1"
            storyName="Little Red Riding Hood"
            storyImg="http://140.134.37.23:8000/img/LittleRedRidingHood.png"
            showTag={true}
            link="/library/LittleRedRidingHood"
          ></LibraryCard>
          <LibraryCard
            id="demo-2"
            storyName="conderella"
            storyImg="http://140.134.37.23:8000/img/Cinderella.jpg"
            showTag={true}
            link="/library/Cinderella"
          ></LibraryCard>
          {stories.map((story, index) => (
            <LibraryCard
              key={index}
              id={story._id}
              storyName={story.storyName}
              storyImg="http://140.134.37.23:8000/img/LittleRedRidingHood.png"
              showTag={true}
              link=""
            ></LibraryCard>
          ))}
        </div>
      </div>
    </main>
  );
}
