import styles from "./page.module.css"
import React from "react"
import { CrewSlider } from "@/components/CrewComponents/CrewSlider"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Crew | Space Tourism",
  description: "Crew | Space Tourism by Tchigi",
}

export default function Crew() {
  return (
    <main className={styles.crewWrapper}>
      <CrewSlider />
    </main>
  )
}
