import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

export const Featured = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}> 
        <div className={styles.image}>
            <Image src="/travel.png" 
              alt=''
              className={styles.images}
              fill
            />
            
        </div>
        <div className={styles.card}>
          <div className={styles.badge}>
            <p className={styles.badgeTitle}> Emerging staff</p>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente ex maxime impedit.</p>
          <p> date </p>
        </div>
      </div>
    </div>
  )
}
