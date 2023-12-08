"use client";

import Image from "next/image";
import { EnterIcon } from "@radix-ui/react-icons";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Home() {
  return (
    <>
      <main className="fixed w-screen flex h-screen flex-col justify-center overflow-hidden">
        {/* 最外層snap */}
        <div className="snap-mandatory snap-y overflow-y-auto h-screen px-4">
          {/* snap page1 */}
          <div className="snap-center h-screen">
            <div className="flex flex-col h-screen py-20 px-10 place-items-center">
              <div className="flex flex-col">
                <h1 className="py-5 text-center text-4xl font-serif leading-relaxed">
                  歡迎使用
                  <br />
                  Story Teller
                </h1>
                <p className="font-serif place-content-center py-5">
                  這裡是我們的畢業專題
                  <br />
                  情緒分析使用text2Emotion套件計算
                  <br />
                  情緒語音合成使用Emotional VITS
                  <br />
                  語者轉換是基於RVC實現
                  <br />
                  前端使用NEXTJS 13架設於Vervel
                  <br />
                  後端使用LARAVEL及flask建立
                  <br />
                </p>
              </div>

              <Link href="/library">
                <Button variant="outline">
                  Explore
                  <EnterIcon className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <div className="flex py-12">
                <div className="animate-bounce py-8 flex justify-center items-center">
                  <svg
                    className="w-6 h-6 text-violet-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* snap page2 */}
          <div className="snap-center h-screen pt-24">
            <div className="flex flex-col justify-center items-center">
              {/* <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">$250.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table> */}
            </div>
          </div>

          {/* snap page3 */}
          <div className="snap-center h-screen flex flex-col justify-center align-middle">
            <div className="w-full">
              <AspectRatio ratio={1 / 1}>
                <Image
                  src="/QRcode.png"
                  alt="Image"
                  className="rounded-md object-cover"
                  fill
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
