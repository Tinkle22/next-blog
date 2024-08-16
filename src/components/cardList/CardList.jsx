import React from 'react'
import styles from './cardList.module.css'
import Link from 'next/link'
import { Card } from '../card/Card'

export const CardList = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Latest Post</h4>
      <div className={styles.cards}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}
