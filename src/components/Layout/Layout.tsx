import { cn } from "@/lib/utils"
import { Inter } from "next/font/google"
import { FC, ReactNode } from "react"

import Head from "next/head"

import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"

import styles from "./Layout.module.scss"

const inter = Inter({ subsets: ["latin"] })

interface LayoutProps {
  children: ReactNode
  className?: string
  [key: string]: any
}


const Layout: FC<LayoutProps> = ({ children, className, ...rest }) => {
  return (
    <div
      className={cn(
        "bg-white text-slate-900 antialiased light",
        inter.className,
        styles.layout
      )}
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
