import Wavbar from "@/components/WAVbar/wavbar"
import Navbar from "@/components/Navbar/navbar"

export default function Home() {
    return (
        <div className="bg-slate-400 flex justify-center items-center min-h-screen">
            <div className='relative h-screen flex justify-center items-center bg-slate-400'>
                <div className="bg-white rounded-lg w-48 h-20 absolute top-20 left-0">
                    <div className="px-4 py-2 overflow-hidden grid grid-cols-1 grid-rows-[auto,1fr]">
                        <h1 className="text-2xl font-bold mb-4">Cinderella455 5454jiji kojkfj</h1>
                    </div>
                    {/* 左上 */}
                </div>
                <div className="bg-white rounded-lg w-150 h-4/6 mx-auto overflow-y-auto">
                    {/* 中 */}
                    <div className="p-8 mt-10 grid grid-cols-1 gap-y-10">
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

                <div className="bg-white rounded-lg w-full h-12 mx-auto absolute bottom-20">
                    <div className="px-4 pt-4 text-center">
                        <h1 className="text-base font-bold mb-4">平靜+馬卡巴卡</h1>
                    </div>

                    {/* 左下 */}
                </div>
                <div className="absolute top-24 right-0">
                    <select className="border bg-white rounded-lg px-2 py-1 text-lg">
                        <option value="option1">james.huang</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                    {/* 右上 */}
                </div>
            </div>
        </div>
    )
}
