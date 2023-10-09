"use client"
import styles from "@/components/TechComponents/tech-slider.module.css"

type Props = {
  currentSlide: number
  techSliderInfo: TechInfo[]
}
type TechInfo = {
  name: string
  p: string
  imageClass: string
}

const TechImageSlider = ({ currentSlide, techSliderInfo }: Props) => {
  const animationByMargin = (index) => {
    if (index === 0) {
      return index === currentSlide ? "0" : "100%"
    }
    if (index === 1) {
      return index === currentSlide ? "-100%" : "0"
    }
    if (index === 2) {
      return index === currentSlide ? "-199%" : "100%"
    }
  }

  return (
    <figure className={styles.techImageSlider}>
      {techSliderInfo.map((item, index) => {
        return (
          <div
            className={`${styles.techImageSlide} ${
              styles[techSliderInfo[index].imageClass]
            } ${index === currentSlide ? styles.activeTechImg : ""}`}
            style={{ translate: `${animationByMargin(index)}` }}
            key={item.name}
          ></div>
        )
      })}
    </figure>
  )
}

export { TechImageSlider }
