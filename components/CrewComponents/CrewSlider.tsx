"use client"
import styles from "./crew-slider.module.css"
import React, { useState } from "react"
import { CrewImageSlider } from "@/components/CrewComponents/CrewImageSlider"
import { CrewMemberInfoSlider } from "@/components/CrewComponents/CrewMemberInfoSlider"

const CrewSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className={styles.crewContent}>
      <div className={styles.crewTitle}>
        <strong>02</strong>
        <h5>MEET YOUR CREW</h5>
      </div>
      <div className={styles.crewInfoWrapper}>
        <div className={styles.memberInfoWrapper}>
          <CrewMemberInfoSlider currentSlide={currentSlide} />
          <div className={styles.crewSlider}>
            {Array(4)
              .fill("")
              .map((member, memberIndex) => {
                return (
                  <button
                    className={`${styles.crewSliderDot} ${
                      memberIndex === currentSlide
                        ? styles.activeCrewSliderDot
                        : ""
                    }`}
                    onClick={() => goToSlide(memberIndex)}
                    key={memberIndex}
                  ></button>
                )
              })}
          </div>
        </div>
        <CrewImageSlider currentSlide={currentSlide} />
      </div>
    </section>
  )
}

export { CrewSlider }
