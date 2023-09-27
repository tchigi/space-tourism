import styles from "./header.module.css"
import { Logo } from "@/components/HeaderComponents/Logo"
import { Navigation } from "@/components/HeaderComponents/Navigation"
const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.nav}>
        <Navigation />
      </nav>
    </header>
  )
}

export { Header }
