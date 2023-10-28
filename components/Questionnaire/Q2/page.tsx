"use client";
import React, { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider"

export default function Q2() {
  return (
    <>
      <Slider defaultValue={[33]} max={100} step={1} />
    </>
  );
}
