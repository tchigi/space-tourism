import type { Metadata } from "next"
import { Bellefair, Barlow_Condensed } from "next/font/google"
import { Header } from "@/components/Header"
import styles from "./layout.module.css"
import "./global.css"

const bellefair = Bellefair({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-bellefair",
})
const barlow = Barlow_Condensed({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-barlow",
})

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "Space Tourism by Tchigi",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${styles.body} ${bellefair.variable} ${barlow.variable}`}
      >
        <div className={styles.wrapper}>
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
