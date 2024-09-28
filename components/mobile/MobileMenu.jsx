"use client"

import { useState } from "react"
import styles from './mobileMenu.module.css'
import Link from 'next/link'

export const MobileMenu = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
    <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
    </div>
    {open && (
      <div className={styles.responsiveMenu}>
        <Link href="/">Home</Link>
        <Link href="/">blog</Link>
        <Link href="/">free Lessons</Link>
        <Link href="/">About</Link>
      </div>
    )}
    </>
  )
}
