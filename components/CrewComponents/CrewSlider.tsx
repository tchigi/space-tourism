"use client"
import styles from "./crew-slider.module.css"
import React, { useState } from "react"
import Image from "next/image"
import image1 from "@/assets/crew/image-douglas-hurley.png"
import image2 from "@/assets/crew/image-mark-shuttleworth.png"
import image3 from "@/assets/crew/image-victor-glover.png"
import image4 from "@/assets/crew/image-anousheh-ansari.png"

const CrewSlider = () => {
  const crewInfo = [
    {
      id: 0,
      role: "COMMANDER",
      name: "DOUGLAS HURLEY",
      p: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      id: 1,
      role: "MISSION SPECIALIST",
      name: "MARK SHUTTLEWORTH",
      p: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      id: 2,
      role: "PILOT",
      name: "VICTOR GLOVER",
      p: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    },
    {
      id: 3,
      role: "FLIGHT ENGINEER",
      name: "ANOUSHEH ANSARI",
      p: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    },
  ]
  const crewImages = {
    0: image1,
    1: image2,
    2: image3,
    3: image4,
  }
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className={styles.crewContent}>
      <div className={styles.memberInfoWrapper}>
        <div className={styles.crewTitle}>
          <strong>02</strong>
          <h5>MEET YOUR CREW</h5>
        </div>
        <div className={styles.memberInfo}>
          <h4>{crewInfo[currentSlide].role}</h4>
          <h3>{crewInfo[currentSlide].name}</h3>
          <p>{crewInfo[currentSlide].p}</p>
        </div>
        <div className={styles.crewSlider}>
          {crewInfo.map((member, memberIndex) => {
            return (
              <button
                className={`${styles.crewSliderDot} ${
                  memberIndex === currentSlide ? styles.activeCrewSliderDot : ""
                }`}
                onClick={() => goToSlide(memberIndex)}
                key={member.id}
              ></button>
            )
          })}
        </div>
      </div>
      <figure className={styles.memberImage}>
        <Image src={crewImages[currentSlide]} alt={"Member Image"} priority className={styles.memberImg} />
      </figure>
    </section>
  )
}

export { CrewSlider }
