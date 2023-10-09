import styles from "@/app/destination/[id]/page.module.css"
import { Navigation } from "@/components/HeaderComponents/Navigation"
import React from "react"
import Image from "next/image"
import moonImage from "@/assets/destination/image-moon.webp"
import marsImage from "@/assets/destination/image-mars.webp"
import europaImage from "@/assets/destination/image-europa.webp"
import titanImage from "@/assets/destination/image-titan.webp"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Destination | Space Tourism",
  description: "Destination | Space Tourism by Tchigi",
}

type Props = {
  params: {
    id: string
  }
}

export default function Planet({ params: { id } }: Props) {
  const planetNavLinks = [
    { label: "MOON", p: null, href: "/destination/moon" },
    { label: "MARS", p: null, href: "/destination/mars" },
    { label: "EUROPA", p: null, href: "/destination/europa" },
    { label: "TITAN", p: null, href: "/destination/titan" },
  ]
  const planetImages = {
    moon: moonImage,
    mars: marsImage,
    europa: europaImage,
    titan: titanImage,
  }
  const planetInfo = {
    moon: {
      title: "MOON",
      text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 KM",
      travelTime: "3 DAYS",
    },
    mars: {
      title: "MARS",
      text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 MIL. KM",
      travelTime: "9 MONTHS",
    },
    europa: {
      title: "EUROPA",
      text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 MIL. KM",
      travelTime: "3 YEARS",
    },
    titan: {
      title: "TITAN",
      text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 BIL. KM",
      travelTime: "7 YEARS",
    },
  }

  return (
    <section className={styles.planetWrapper}>
      <figure className={styles.image}>
        <Image
          alt={id}
          src={planetImages[id]}
          placeholder="blur"
          quality={100}
          fill
          sizes=" (max-width: 425px) 170px,(max-width: 1024px) 300px, 445px"
          style={{
            objectFit: 'cover',
          }}
          className={styles.img}
          priority
        />
      </figure>
      <article className={styles.planetInfo}>
        <div className={styles.destinationNavigation}>
          <Navigation navLinks={planetNavLinks} header={false} />
        </div>
        <h2>{planetInfo[id].title}</h2>
        <p>{planetInfo[id].text}</p>
        <div className={styles.travelInfo}>
          <div>
            <span className={styles.subheading2}>AVG. DISTANCE</span>
            <span className={styles.subheading1}>
              {planetInfo[id].distance}
            </span>
          </div>
          <div>
            <span className={styles.subheading2}>EST. TRAVEL TIME</span>
            <span className={styles.subheading1}>
              {planetInfo[id].travelTime}
            </span>
          </div>
        </div>
      </article>
    </section>
  )
}
