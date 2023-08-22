"use client";

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

// Component
import { Component } from "react";
import Navbar from "@/components/Navbar/navbar";
import Wavbar from "@/components/WAVbar/wavbar";
import StoryCard from "@/components/StoryCard/page";

export default function Home() {
  return (
    <>
      <Head>
        <title>Story Tell</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="relative flex min-h-screen flex-col justify-center overflow-hidden">
        {/* 最外層snap */} 
        <div
          className="snap-mandatory snap-y overflow-y-auto h-screen"
          >
          {/* snap page1 */}
          <div className='snap-start h-full'>
            <div className="grid h-screen py-20 px-10 place-items-center">

              <div className="">
                <h1 className="grid py-5 text-center text-4xl font-serif leading-relaxed">
                  歡迎使用
                  <br />
                  Story Tell
                </h1>
                <p className="grid font-serif place-content-center py-5">
                  這裡是我們的畢業專題
                  <br />
                  TTS是基於sovits達成
                  <br />
                  情緒風格的轉換是基於vits達成
                  <br />
                  前端使用NEXTJS 13、tailwindcss
                  <br />
                  後端預計使用LARAVEL
                  <br />
                </p>
              </div>
              
              <button className="rounded-full px-5 py-1 bg-white hover:bg-slate-100 text-sm border-solid border border-slate-300">
                <Link href="/library">Explore</Link>
              </button>
              
              <div className="animate-bounce grid place-content-center py-5">
                <svg
                  className="w-6 h-6 text-violet-500"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* snap page2 */}
          <div className='snap-start h-full pt-24'>
            <div className='grid h-full'>
              <h1 className='grid place-content-center text-2xl font-serif'>Quick Start</h1>
              <div className='grid'>
                {/* <StoryCard></StoryCard> */}
              </div>
            </div>
          </div>

          {/* snap page3 */}
          <div className='snap-start h-full pt-20'>
            <div className='grid h-full'>
              <h1 className='grid place-content-center text-2xl font-serif pt-5'>Simple Turtorial</h1>
              <div className='grid'>
                {/* <StoryCard></StoryCard> */}
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
