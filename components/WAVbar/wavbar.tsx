"use client"

import React, { useState } from 'react';
// import styles from './wavbar.module.css'

export default function Wavbar() {
    const [audioplayer_state, set_audioplayer_state] = React.useState(false);

    function play() {
        set_audioplayer_state(!audioplayer_state);
        var audio = document.querySelector("#audio") as HTMLAudioElement;
        audio.play();
    }
    function pause() {
        set_audioplayer_state(!audioplayer_state);
        var audio = document.querySelector("#audio") as HTMLAudioElement;
        audio.pause();
    }

    function seekbaronchange(value: number) {
        var audio = document.querySelector("#audio") as HTMLAudioElement;
        audio.currentTime = value;
    }

    function timeupdate() {
        var seekbar = document.querySelector("#seekbar") as HTMLInputElement;
        var audio = document.querySelector("#audio") as HTMLAudioElement;

        seekbar.value = String(audio.currentTime);

        if (seekbar.min != "0") {
            seekbar.min = "0";
            seekbar.max = String(audio.duration);
        }
        if (String(audio.currentTime) == seekbar.max) {
            seekbar.value = "0";
            pause()
        }
    }

    const [rangeValue, setRangeValue] = useState<number>(0);

    return (
        <>
            {/* <div className={styles.wrap}>
                <button id='audiocontrol_btn' onClick={audioplayer_state ? pause : play}>{audioplayer_state ? "PAUSE" : "PLAY"}</button>
                <input id="seekbar" type="range" step="0.001" value={rangeValue} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" onChange={(e) => {
                    setRangeValue(Number(e.target.value));
                    seekbaronchange(rangeValue);
                }} />
            </div>
            <audio id='audio' onTimeUpdate={timeupdate}>
                <source src='/sample_story.wav' type='audio/wav' />
            </audio> */}

            <audio id='audio' onTimeUpdate={timeupdate}>
                <source src='/sample_story.wav' type='audio/wav' />
            </audio>

            <div className="bg-white border-slate-100 dark:bg-slate-800 dark:border-slate-500 border-b rounded-t-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
                <div className="space-y-2">
                    <div className="">
                        <input id="seekbar" type="range" step="0.001" value={rangeValue} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" onChange={(e) => {
                            setRangeValue(Number(e.target.value));
                            seekbaronchange(rangeValue);
                        }} />
                    </div>
                    <div className="flex justify-between text-sm leading-6 font-medium tabular-nums">
                        <div className="text-cyan-500 dark:text-slate-100">24:16</div>
                        <div className="text-slate-500 dark:text-slate-400">75:50</div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-50 text-slate-500 dark:bg-slate-600 dark:text-slate-200 rounded-b-xl flex items-center">
                <div className="flex-auto flex items-center justify-evenly">
                    {/* <button type="button" aria-label="Add to favorites">
                        <svg width="24" height="24">
                            <path d="M7 6.931C7 5.865 7.853 5 8.905 5h6.19C16.147 5 17 5.865 17 6.931V19l-5-4-5 4V6.931Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button> */}
                    <button type="button" className="hidden sm:block lg:hidden xl:block" aria-label="Previous">
                        <svg width="24" height="24" fill="none">
                            <path d="m10 12 8-6v12l-8-6Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button type="button" aria-label="Rewind 10 seconds">
                        <svg width="24" height="24" fill="none">
                            <path d="M6.492 16.95c2.861 2.733 7.5 2.733 10.362 0 2.861-2.734 2.861-7.166 0-9.9-2.862-2.733-7.501-2.733-10.362 0A7.096 7.096 0 0 0 5.5 8.226" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 5v3.111c0 .491.398.889.889.889H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                {/* <button type="button" className="bg-white text-slate-900 dark:bg-slate-100 dark:text-slate-700 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center" aria-label="Pause">
                    <svg width="30" height="32" fill="currentColor">
                        <rect x="6" y="4" width="4" height="24" rx="2" />
                        <rect x="20" y="4" width="4" height="24" rx="2" />
                    </svg>
                </button> */}

                <button id='audiocontrol_btn' onClick={audioplayer_state ? pause : play} className="bg-white text-slate-900 dark:bg-slate-100 dark:text-slate-700 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center">
                    {audioplayer_state ? "PAUSE" : "PLAY"}
                </button>

                <div className="flex-auto flex items-center justify-evenly">
                    <button type="button" aria-label="Skip 10 seconds">
                        <svg width="24" height="24" fill="none">
                            <path d="M17.509 16.95c-2.862 2.733-7.501 2.733-10.363 0-2.861-2.734-2.861-7.166 0-9.9 2.862-2.733 7.501-2.733 10.363 0 .38.365.711.759.991 1.176" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19 5v3.111c0 .491-.398.889-.889.889H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button type="button" className="hidden sm:block lg:hidden xl:block" aria-label="Next">
                        <svg width="24" height="24" fill="none">
                            <path d="M14 12 6 6v12l8-6Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M18 6v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    {/* <button type="button" className="rounded-lg text-xs leading-6 font-semibold px-2 ring-2 ring-inset ring-slate-500 text-slate-500 dark:text-slate-100 dark:ring-0 dark:bg-slate-500">
                        1x
                    </button> */}
                </div>
            </div>
        </>
    );
}
