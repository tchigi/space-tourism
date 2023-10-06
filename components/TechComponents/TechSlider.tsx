"use client"
import styles from "./tech-slider.module.css"
import { useState } from "react"

const TechSlider = () => {
  const techSliderInfo = [
    {
      name: "LAUNCH VEHICLE",
      p: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      imageClass: "launchVehicleImg",
    },
    {
      name: "SPACEPORT",
      p: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      imageClass: "spaceportImg",
    },
    {
      name: "SPACE CAPSULE",
      p: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      imageClass: "spaceCapsuleImg",
    },
  ]
  const [currentSlide, setCurrentSlide] = useState(0)
  const onCLickHandler = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className={styles.techSliderWrapper}>
      <div className={styles.techSliderDotsWrapper}>
        {techSliderInfo.map((item, index) => {
          return (
            <button
              className={`${styles.techSliderDot} ${
                currentSlide === index ? styles.techSliderDotActive : ""
              }`}
              onClick={() => onCLickHandler(index)}
              key={item.name}
            >
              <label>
                <h4>{index + 1}</h4>
              </label>
            </button>
          )
        })}
      </div>
      <div className={styles.techSliderInfoWrapper}>
        <span className={styles.subheading3}>THE TERMINOLOGY…</span>
        <h3>{techSliderInfo[currentSlide].name}</h3>
        <p>{techSliderInfo[currentSlide].p}</p>
      </div>
      <figure
        className={`${styles.techSliderImage} ${
          styles[techSliderInfo[currentSlide].imageClass]
        }`}
      ></figure>
    </div>
  )
}

export { TechSlider }
