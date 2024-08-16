"use client";

import React, { useContext } from 'react'
import styles from './themeToggle.module.css'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'


export const ThemeToggle = () => {

  return (
    <div className={styles.container}>
      <Image src='/moon.png' alt="" width={15} height={15}/>
      <div className={styles.ball}></div>
      <Image src="/sun.png" alt='' width={15} height={15}/>
    </div>
  )
}
