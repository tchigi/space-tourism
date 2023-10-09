"use client"
import styles from "@/components/CrewComponents/crew-slider.module.css"
import React from "react"

type Props = {
  currentSlide: number
}
const CrewMemberInfoSlider = ({ currentSlide }: Props) => {
  const crewInfo = [
    {
      id: 0,
      role: "COMMANDER",
      name: "DOUGLAS HURLEY",
      p: "Douglas Gerald Hurley is an engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2. Spent more than 10 years in space",
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
      p: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64. ",
    },
    {
      id: 3,
      role: "FLIGHT ENGINEER",
      name: "ANOUSHEH ANSARI",
      p: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    },
  ]

  return (
    <div className={styles.memberInfoSlider}>
      {crewInfo.map((member, memberIndex) => {
        return (
          <article
            className={`${styles.memberInfoSlide} ${
              memberIndex === currentSlide ? styles.activeMemberInfoSlide : ""
            }`}
            key={member.id}
          >
            <h4>{crewInfo[memberIndex].role}</h4>
            <h3>{crewInfo[memberIndex].name}</h3>
            <p>{crewInfo[memberIndex].p}</p>
          </article>
        )
      })}
    </div>
  )
}

export { CrewMemberInfoSlider }
