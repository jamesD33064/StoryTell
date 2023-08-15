"use client"

import Head from 'next/head'
import { Inter } from 'next/font/google'
import Wavbar from '@/components/WAVbar/wavbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Story Tell</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>

                <div className='flex justify-center'>
                    <div className='w-full py-16 self-center'>
                        <h1>here will put the sample story</h1>
                        <Wavbar></Wavbar>
                    </div>
                </div>
            </main>
        </>
    )
}

// import Layout from '../components/layout'

// Home.getLayout = function getLayout(page: React.ReactElement) {
//   return (
//     <Layout>
//       {page}
//     </Layout>
//   )
// }