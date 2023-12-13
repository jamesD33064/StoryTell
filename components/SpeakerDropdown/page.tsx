"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SpeakerProps {
  speakerList: Array<string>;
  isUpload: boolean;
  onSpeakerChange: (speakerIdx: string) => void; // 切換語者的 callback 函數
}

export default function SpeakerDropdown({
  speakerList,
  isUpload,
  onSpeakerChange,
}: SpeakerProps) {
  return (
    <>
      <Select onValueChange={(e) => onSpeakerChange(e)} disabled={isUpload}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="預設女聲" />
        </SelectTrigger>
        <SelectContent>
          {speakerList.map((speaker, index) => (
            <SelectItem key={index} value={speaker}>
              {speaker}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
}
