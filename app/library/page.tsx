"use client";

import React from "react";
// import useSWR from "swr";
// import axios from "axios";

// interface story {
//   _id: string;
//   storyName: string;
// }

// const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function Library() {
  // const { data, error, isLoading } = useSWR(
  //   "http://140.134.37.23:8000/story/getStoryDetail/64ce58ed2f6ef1ad74002243",
  //   fetcher
  // );

  // if (error) return <div>Failed to load</div>
  // if (!data) return <div>Loading...</div>
  // if (isLoading) return <div>Loading...</div>

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
        這裡要接http://140.134.37.23:8000/story/getAllStoryInfo顯示所有故事目錄
        {/* {data && <>{data['storyName']}</>}
      {data.map((todo: story) => (
        <div key={todo.id}>
          <p>
            {todo._id} : {todo.storyName}
          </p>
        </div>
      ))} */}
      </div>
    </>
  );
}
