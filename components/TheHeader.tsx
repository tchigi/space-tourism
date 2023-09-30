import styles from "./header.module.css"
import { Logo } from "@/components/HeaderComponents/Logo"
import { Navigation } from "@/components/HeaderComponents/Navigation"
const TheHeader = () => {
  const navLinks = [
    { label: "HOME", p: "00", href: "/" },
    { label: "DESTINATION", p: "01", href: "/destination/moon" },
    { label: "CREW", p: "02", href: "/crew" },
    { label: "TECHNOLOGY", p: "03", href: "/technology" },
  ]

  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.nav}>
        <Navigation navLinks={navLinks} header={true}/>
      </nav>
    </header>
  )
}

export { TheHeader }
