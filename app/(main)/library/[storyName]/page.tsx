"use client";

import Wavbar from "@/components/WAVbar/wavbar";

export default function Page({ params }: { params: { storyName: string } }) {
  return (
    <>
      <main className="flex">
        <div>My Post: {params.storyName}</div>
        <div>
          <Wavbar></Wavbar>
        </div>
      </main>
    </>
  );
}
