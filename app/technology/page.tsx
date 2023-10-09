import styles from "./page.module.css"
import React from "react"
import { TechSlider } from "@/components/TechComponents/TechSlider"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Technology | Space Tourism",
  description: "Technology | Space Tourism by Tchigi",
}

export default function Technology() {
  return (
    <main className={styles.technologyWrapper}>
      <section className={styles.technologyContent}>
        <div className={styles.technologyTitle}>
          <strong>03</strong>
          <h5>SPACE LAUNCH 101</h5>
        </div>
        <TechSlider />
      </section>
    </main>
  )
}
