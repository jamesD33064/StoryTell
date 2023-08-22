"use client";

import React, { Component, useState } from "react";
import Link from "next/link";

interface LibraryCardProps {
  id: string;
  storyName: string;
  storyImg: string;
  showTag: boolean;
  link: string;
}

export default function LibraryCard(props: LibraryCardProps) {
  return (
    <>
      <Link href={props.link}>
        <div id={props.id} className="rounded-lg overflow-hidden shadow-lg">
          <div className="w-full h-auto aspect-square overflow-hidden">
            <img
              src={props.storyImg}
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <div className="px-6">
            <div className="font-bold py-2">{props.storyName}</div>
          </div>
          {props.showTag && (
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #小紅帽
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #大野狼
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #紅色帽T
              </span>
            </div>
          )}
        </div>
      </Link>
    </>
  );
}
