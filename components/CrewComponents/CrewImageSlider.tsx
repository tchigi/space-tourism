"use client"

import styles from "@/components/CrewComponents/crew-slider.module.css"
import Image from "next/image"
import React from "react"
import image1 from "@/assets/crew/image-douglas-hurley.png"
import image2 from "@/assets/crew/image-mark-shuttleworth.png"
import image3 from "@/assets/crew/image-victor-glover.png"
import image4 from "@/assets/crew/image-anousheh-ansari.png"

type Props = {
  currentSlide: number
}

const CrewImageSlider = ({ currentSlide }: Props) => {
  const crewImages = [image1, image2, image3, image4]
  const animationByMargin = (index: number) => {
    if (index === 0) {
      return index === currentSlide ? "0" : "-100%"
    }
    if (index === 1) {
      return index === currentSlide ? "100%" : "0"
    }
    if (index === 2) {
      return index === currentSlide ? "200%" : "0"
    }
    if (index === 3) {
      return index === currentSlide ? "300%" : "0"
    }
  }

  return (
    <figure className={styles.memberImageSlider}>
      {crewImages.map((item, index) => {
        return (
          <Image
            src={crewImages[index]}
            alt={"Member Image"}
            quality={100}
            sizes={"auto"}
            priority
            className={`${styles.memberImg} ${
              index === currentSlide ? styles.activeMemberImg : ""
            }`}
            style={{ marginRight: `${animationByMargin(index)}` }}
            key={item.src}
          />
        )
      })}
    </figure>
  )
}

export { CrewImageSlider }
