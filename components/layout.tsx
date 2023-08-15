import styles from './layout.module.css'
import Navbar from './Navbar/navbar'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {/* <Navbar /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}

