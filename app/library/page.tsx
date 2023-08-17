"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Library() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    axios
      .get("http://140.134.37.23:8000/story/getAllStoryInfo")
      .then((response) => {
        setStories(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error("Error fetching stories:", error);
      });
  }, []);

  return (
    <>
      <div className="w-full flex gap-8 snap-mandatory snap-x overflow-x-auto p-14">
        <div className="snap-center w-3/5 shrink-0">
          <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
        <div className="snap-center w-3/5 shrink-0">
          <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
        <div className="snap-center w-3/5 shrink-0">
          <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
        <div className="snap-center w-3/5 shrink-0">
          <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
        <div className="snap-center w-3/5 shrink-0">
          <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
        <div className="snap-center w-3/5 shrink-0">
          <img src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80" />
        </div>
      </div>
      <div>
        這裡要接http://140.134.37.23:8000/story/getAllStoryInfo 顯示所有故事目錄
        <div className="w-full flex gap-8 snap-mandatory snap-x overflow-x-auto p-14">
          {stories.map((story) => (
            <div key={story._id} className="snap-center w-3/5 shrink-0">
              <h1>{story.storyName}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
