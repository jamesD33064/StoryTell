"use client";

import React, { Component, useState, useRef } from "react";

export default function LibraryCard() {
  return (
    <>
      <div className=" w-full h-full animate-pulse space-y-8 overflow-scroll">
        <div className="h-1/4 p-2"></div>
        <div className="h-fit p-2 space-y-3">
            <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-slate-700 rounded"></div>
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded"></div>
        </div>
        <div className="h-fit p-2 space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded"></div>
        </div>
        <div className="h-fit p-2 space-y-3">
            <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-slate-700 rounded"></div>
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded"></div>
        </div>
        <div className="h-fit p-2 space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded"></div>
        </div>
        <div className="h-fit p-2 space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-700 rounded"></div>
        </div>
      </div>
    </>
  );
}
