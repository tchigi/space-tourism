import styles from "./page.module.css"
import React from "react"
import {CrewSlider} from "@/components/CrewComponents/CrewSlider"

export default function Crew() {
  return (
    <main className={styles.crewWrapper}>
      <CrewSlider />
    </main>
  )
}
