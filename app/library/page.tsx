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
    <>
      <div className="w-full flex gap-8 snap-mandatory snap-x overflow-x-auto p-14">
        <div className="snap-center w-3/5 shrink-0">
          <LibraryCard
            id="1"
            storyName="Cinderella"
            storyImg="http://140.134.37.23:8000/img/Cinderella.jpg"
            showTag={false}
            link=""
          ></LibraryCard>
        </div>
        <div className="snap-center w-3/5 shrink-0">
          <LibraryCard
            id="1"
            storyName="Little Red Riding Hood"
            storyImg="http://140.134.37.23:8000/img/LittleRedRidingHood.png"
            showTag={false}
            link=""
          ></LibraryCard>
        </div>
      </div>
      <div>
        <div className="w-full flex flex-col gap-8 snap-mandatory snap-x overflow-x-auto p-14">
          <LibraryCard
            id="demo-1"
            storyName="Little Red Riding Hood"
            storyImg="http://140.134.37.23:8000/img/LittleRedRidingHood.png"
            showTag={true}
            link=""
          ></LibraryCard>
          <LibraryCard
            id="demo-2"
            storyName="conderella"
            storyImg="http://140.134.37.23:8000/img/Cinderella.jpg"
            showTag={true}
            link=""
          ></LibraryCard>
          {stories.map((story) => (
            <LibraryCard
              id={story._id}
              storyName={story.storyName}
              storyImg="http://140.134.37.23:8000/img/LittleRedRidingHood.png"
              showTag={true}
              link=""
            ></LibraryCard>
          ))}
        </div>
      </div>
    </>
  );
}
