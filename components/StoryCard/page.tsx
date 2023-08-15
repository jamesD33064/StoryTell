"use client"

import React, { Component, useState } from 'react';
// Component
import Wavbar from '../WAVbar/wavbar';
import SentenceCarousel from '../SentenceCarousel/page';

export default function StoryCard() {
    return (
        <>
            <div className='p-5'>
                <div className="bg-slate-50 text-slate-400 dark:bg-slate-400 dark:text-slate-200 rounded-xl items-center">
                    <div className="grid sm:grid-cols-1 sm:grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4 p-5">
                        <div className="w-full text-center">
                            {/* <img src="/next.svg" alt="" className="" loading="lazy" /> */}
                            {/* <h1>here will put the sample story</h1> */}
                            <SentenceCarousel></SentenceCarousel>
                        </div>

                        <div className="w-full">
                            <div className="flex flex-wrap">
                                <h1 className="flex-auto text-lg font-semibold text-slate-900">
                                    little Red Riding Hood
                                </h1>
                            </div>
                            <Wavbar></Wavbar>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}