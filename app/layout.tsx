import Navbar from '@/components/Navbar/navbar'
import "./globals.css";

export const metadata = {
  title: 'STORY TELL',
  description: 'OUR BIYE PROJECT!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  )
}
