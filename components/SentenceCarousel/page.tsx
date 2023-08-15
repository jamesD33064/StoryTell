"use client"

import React, { Component, useState } from 'react';

interface SentenceProps{
    src:string;
}

export default function SentenceCarousel() {
    // function generat(src:string){

    // }

    return (
        <>
            {/* <div className="scroll-ml-6 snap-start ...">
                    <img src="/next.svg" className="rounded-box" />
                </div> */}
            <div className="scroll-pl-6 snap-y overflow-y-auto h-64 text-slate-800">
                <div className='snap-start h-10'>
                    <h1>tsetsetsetsetsetestse</h1>
                </div>
                <div className='snap-start h-10'>
                    <h1>tsetsetsetsetsetestse</h1>
                </div>
                <div className='snap-start h-10'>
                    <h1>tsetsetsetsetsetestse</h1>
                </div>
                <div className='snap-start h-10'>
                    <h1>tsetsetsetsetsetestse</h1>
                </div>
                <div className='snap-start h-10'>
                    <h1>tsetsetsetsetsetestse</h1>
                </div>
                <div className='snap-start h-10'>
                    <h1>tsetsetsetsetsetestse</h1>
                </div>
                <div className='snap-start h-10'>
                    <h1>tsetsetsetsetsetestse</h1>
                </div>
                <div className='snap-start h-10'>
                    <h1>tsetsetsetsetsetestse</h1>
                </div>
                <div className='snap-start h-10'>
                    <h1>tsetsetsetsetsetestse</h1>
                </div>
                <div className='snap-start h-10'>
                    <h1>tsetsetsetsetsetestse</h1>
                </div>
            </div>
        </>
    );
}