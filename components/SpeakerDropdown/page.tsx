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
  speakerList: Array< string >;
}

export default function SpeakerDropdown({ speakerList }: SpeakerProps) {
  return (
    <>
      <Select onValueChange={(e) => console.log(e)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Speaker" />
        </SelectTrigger>
        <SelectContent>
          {speakerList.map((speaker, index) => (
            <SelectItem key={index} value={speaker}>{speaker}</SelectItem>
            ))}
        </SelectContent>
      </Select>
    </>
  );
}
