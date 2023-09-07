"use client";

import Wavbar from "@/components/WAVbar/wavbar";

export default function Page({ params }: { params: { storyName: string } }) {
  return (
    <>
      <main className="flex min-h-screen flex-col justify-center overflow-hidden">
        <div className='relative h-screen flex justify-center items-center'>
          <div className="bg-white rounded-lg w-1/2 h-20 flex absolute top-20 left-8">
            <div className="px-4 py-2 overflow-hidden grid grid-cols-1 grid-rows-[auto,1fr]">
              <h1 className="text-2xl font-bold mb-4">{params.storyName}</h1>
            </div>
            {/* 左上 */}
          </div>
          <div className="bg-white rounded-lg w-5/6 h-3/5 mx-auto overflow-y-auto">
            {/* 中 */}
            <div className="p-8 mt-10 grid grid-cols-1 gap-y-10">
           {/*} {stories.map((story, index) => (
            
              key={index}
              id={story._id}
              storyName={story.storyName}
              showTag={true}
              link=""
            
          ))}*/}
              <p className="text-gray-600">This is the content of your homepage.</p>
              <p className="text-gray-600">This is the content of your homepage.</p>
              <p className="text-gray-600">This is the content of your homepage.</p>
              <p className="text-gray-600">This is the content of your homepage.</p>
              <p className="text-gray-600">This is the content of your homepage.</p>
              <p className="text-gray-600">This is the content of your homepage.</p>
              <p className="text-gray-600">This is the content of your homepage.</p>
              <p className="text-gray-600">This is the content of your homepage.</p>
              <p className="text-gray-600">This is the content of your homepage.</p>
              <p className="text-gray-600">This is the content of your homepage.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg w-5/6 h-12 mx-auto absolute bottom-28">
            <div className="px-4 pt-4 text-center">
              <h1 className="text-base font-bold mb-4">平靜+激動</h1>
            </div>
            {/* 下 */}
          </div>
          <div className="absolute top-20 right-8">
            <select className="border bg-white rounded-lg h-16 px-2 py-1 text-sm">
              <option value="option1">james.huang</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            {/* 右上 */}
          </div>
        </div>
        <div>
          <Wavbar></Wavbar>
        </div>
      </main>

    </>
  );
}
