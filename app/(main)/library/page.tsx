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
      .get("http://140.134.37.23:8000/api/story/getAllStoryInfo") // 使用代理路径
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
            storyImg="https://obs.line-scdn.net/0hMrBADxguEl1_ODknDattCkVuETJMVAFeGw5DXjxWTGkHCAANFAxYM1w9TjpQD1UDEQ5VPF89CWwCDF1bRA1Y/w644"
            showTag={false}
            link="/library/Cinderella"
          ></LibraryCard>
        </div>
        <div className="snap-center w-3/5 h-full shrink-0">
          <LibraryCard
            id="1"
            storyName="Little Red Riding Hood"
            storyImg="https://scontent-hkt1-1.xx.fbcdn.net/v/t39.30808-6/348266162_589549166654603_7895757738317238586_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=Nqsg4VblsZsAX_W8CPA&_nc_ht=scontent-hkt1-1.xx&oh=00_AfDP5wz3CXt_UTAAAhhBQMr1-Fm6rboT1G-imxzC4gR70w&oe=64FD8CB5"
            showTag={false}
            link="/library/LittleRedRidingHood"
          ></LibraryCard>
        </div>
      </div>
      <div>
        <div className="w-full flex flex-col align-middle justify-center gap-8 p-6">
          <LibraryCard
            id="demo-1"
            storyName="Little Red Riding Hood"
            storyImg="https://scontent-hkt1-1.xx.fbcdn.net/v/t39.30808-6/348266162_589549166654603_7895757738317238586_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=Nqsg4VblsZsAX_W8CPA&_nc_ht=scontent-hkt1-1.xx&oh=00_AfDP5wz3CXt_UTAAAhhBQMr1-Fm6rboT1G-imxzC4gR70w&oe=64FD8CB5"
            showTag={true}
            link="/library/LittleRedRidingHood"
          ></LibraryCard>
          <LibraryCard
            id="demo-2"
            storyName="cinderella"
            storyImg="https://obs.line-scdn.net/0hMrBADxguEl1_ODknDattCkVuETJMVAFeGw5DXjxWTGkHCAANFAxYM1w9TjpQD1UDEQ5VPF89CWwCDF1bRA1Y/w644"
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
