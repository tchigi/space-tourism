"use client"

import styles from "./burger-menu.module.css"
import { Navigation } from "@/components/HeaderComponents/Navigation"
import React, { useEffect, useRef, useState } from "react"

const BurgerMenu = () => {
  const [isActive, setIsActive] = useState(false)
  const burgerRef = useRef(null)
  const navLinks = [
    { label: "HOME", p: "00", href: "/" },
    { label: "DESTINATION", p: "01", href: "/destination/moon" },
    { label: "CREW", p: "02", href: "/crew" },
    { label: "TECHNOLOGY", p: "03", href: "/technology" },
  ]
  const onClickHandler = () => {
    setIsActive((prevState) => !prevState)
  }

  useEffect(() => {
    const close = (ev: HTMLElementEventMap["click"]) => {
      if (ev.target !== burgerRef.current) {
        setIsActive(false)
      }
    }

    document.body.addEventListener("click", close)

    return () => document.body.removeEventListener("click", close)
  }, [])

  return (
    <aside
      ref={burgerRef}
      className={`${styles.burgerMenu} ${isActive ? styles.burgerClose : ""}`}
      onClick={() => onClickHandler()}
    >
      <span className={styles.burgerMenuSpan}></span>
      <div
        className={`${styles.burgerMenuBg} ${
          isActive ? styles.burgerBgActive : ""
        }`}
      >
        <Navigation navLinks={navLinks} header={true} />
      </div>
    </aside>
  )
}

export { BurgerMenu }
