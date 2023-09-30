import styles from "./page.module.css"
import React from "react"

export default function DestinationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className={styles.destinationWrapper}>
      <div className={styles.destinationContent}>
        <div className={styles.destinationTitle}>
          <strong>01</strong>
          <h5>PICK YOUR DESTINATION</h5>
        </div>
        {children}
      </div>
    </main>
  )
}
