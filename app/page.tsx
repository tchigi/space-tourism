import styles from "./page.module.css"
import Link from "next/link"

export default function Home() {
  return (
    <main className={styles.homeWrapper}>
      <section className={styles.homeContent}>
        <article className={styles.homeTextContainer}>
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </article>
        <figure className={styles.system}>
          <Link href={"/destination/moon"} className={styles.homeButton}>
            <label className={styles.homeButtonLabel}>EXPLORE</label>
          </Link>
          <div className={styles.orbit}>
            <div className={styles.planet} />
          </div>
        </figure>
      </section>
    </main>
  )
}
