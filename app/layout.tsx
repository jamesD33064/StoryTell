import Image from "next/image";
import bg from "@/public/bg.jpg";
import Head from "next/head";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "STORY TELLER",
  description: "OUR BIYE PROJECT!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>Story Teller</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <html lang="en">
        <body
          style={{ background: `url('/bg.jpg') center/cover no-repeat fixed` }}
        >
          {children}
          <Toaster />
        </body>
      </html>
    </>
  );
}
