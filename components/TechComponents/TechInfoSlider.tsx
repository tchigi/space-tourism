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

const TechInfoSlider = ({ currentSlide, techSliderInfo }: Props) => {
  return (
    <div className={styles.techSliderInfoWrapper}>
      {techSliderInfo.map((item, index) => {
        return (
          <div
            className={`${styles.techInfoSlide} ${
              index === currentSlide ? styles.activeTechInfo : ""
            }`}
            key={item.name}
          >
            <span className={styles.subheading3}>THE TERMINOLOGY…</span>
            <h3>{techSliderInfo[index].name}</h3>
            <p>{techSliderInfo[index].p}</p>
          </div>
        )
      })}
    </div>
  )
}

export { TechInfoSlider }
