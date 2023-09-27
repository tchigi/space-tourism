"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./navigation.module.css"

const Navigation = () => {
  const pathname = usePathname()
  const navLinks = [
    { label: "HOME", p: "00", href: "/" },
    { label: "DESTINATION", p: "01", href: "/destination" },
    { label: "CREW", p: "02", href: "/crew" },
    { label: "TECHNOLOGY", p: "03", href: "/technology" },
  ]

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href

        return (
          <Link
            href={link.href}
            key={link.label}
            className={`${styles.navLink} ${
              isActive ? styles.navLinkActive : ""
            }`}
          >
            <p>{link.p}</p>
            {link.label}
          </Link>
        )
      })}
    </>
  )
}

export { Navigation }
