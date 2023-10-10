"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./navigation.module.css"

type NavLink = {
  label: string
  p: string | null
  href: string
}
type Props = {
  navLinks: NavLink[]
  header: boolean
}

const Navigation = ({ navLinks, header }: Props) => {
  const pathname = usePathname()

  return (
    <>
      {navLinks.map((link) => {
        const isActive = header
          ? pathname.includes("destination") &&
            link.href.includes("destination")
            ? true
            : pathname === link.href
          : pathname === link.href

        return (
          <Link
            href={link.href}
            key={link.label}
            className={`${
              header ? styles.navLink : styles.navLinkDestination
            } ${isActive ? styles.navLinkActive : ""}`}
          >
            {link.p ? <span>{link.p}</span> : ""}
            {link.label}
          </Link>
        )
      })}
    </>
  )
}

export { Navigation }
