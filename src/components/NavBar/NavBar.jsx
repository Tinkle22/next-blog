import React from 'react'
import styles from "./navbar.module.css"
import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggle } from '../theme/ThemeToggle'
import { MobileMenu } from '../mobile/MobileMenu'

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="/cmt-bulls.png" width={50} height={50} alt='Traders logo'/>
        <p>CMT</p>
      </div>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Resources</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className={styles.hamburger}>
        <MobileMenu/>
      </div>
      <div className={styles.search}></div>
      <div className={styles.theme}>
        <ThemeToggle/>
      </div>
    </div>
  )
}

export default NavBar