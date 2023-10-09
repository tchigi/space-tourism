import type { Metadata } from "next"
import { Bellefair, Barlow_Condensed, Barlow } from "next/font/google"
import { TheHeader } from "@/components/TheHeader"
import styles from "./layout.module.css"
import "./global.css"

const bellefair = Bellefair({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-bellefair",
})
const barlowCondensed = Barlow_Condensed({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-barlowCondensed",
})
const barlow = Barlow({
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
        className={`${bellefair.variable} ${barlow.variable} ${barlowCondensed.variable}`}
      >
        <div className={styles.wrapper}>
          <TheHeader />
          {children}
        </div>
      </body>
    </html>
  )
}
