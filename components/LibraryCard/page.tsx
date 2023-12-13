"use client";

import React, { Component, useState } from "react";
import Link from "next/link";

interface LibraryCardProps {
  id: string;
  storyName: string;
  storyImg: string;
  storyLang: string;
  isUpload: boolean;
  link: string;
}

export default function LibraryCard(props: LibraryCardProps) {
  return (
    <>
      {!props.isUpload ? (
        <Link href={props.link}>
          <div id={props.id} className="rounded-lg overflow-hidden shadow-lg">
            <div className="w-full h-auto aspect-square overflow-hidden">
              <img
                src={props.storyImg}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="px-6 pb-2">
              <div className="tracking-wider font-bold text-lg pt-2">{props.storyName}</div>
              <div className="tracking-wider text-sm pb-2">
                {props.storyLang == "C" ? "中文版" : "日文版"}
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <Link href={props.link}>
          <div id={props.id} className="rounded-lg overflow-hidden shadow-lg py-2">
            {/* <div className="w-full h-auto aspect-square overflow-hidden">
              <img
                src={props.storyImg}
                alt=""
                className="object-cover w-full h-full"
              />
            </div> */}
            <div className="px-6">
              <div className="tracking-wider font-bold text-lg pt-2">{props.storyName}</div>
              <div className="tracking-wider text-sm pb-2">
                {props.storyLang == "C" ? "中文版" : "日文版"}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
