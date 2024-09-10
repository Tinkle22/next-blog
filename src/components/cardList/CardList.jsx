"use client"

import React from 'react'
import styles from './cardList.module.css'
import Link from 'next/link'
import { Card } from '../card/Card'
import { blog_data } from '../../../Assets/assets'

export const CardList = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Latest Post</h4>
      <div className={styles.cards}>
       {blog_data.map((item, index) =>{
          return  <Card key={index} image={item.image} title={item.title} category={item.category} author={item.author} id={item.id} />
       })}
      </div>
    </div>
  )
}
 