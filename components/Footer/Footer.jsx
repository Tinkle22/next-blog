import React from 'react'
import styles from "./footer.module.css"
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className="wrapper">
        <div className={styles.contentContainer}>
          <div className={styles.about}>
            <h4>About</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sapiente a ipsum dolorum, dignissimos quisquam perspiciatis doloribus! Enim modi libero quidem, mollitia dolor error tenetur?</p>
            <div className={styles.contactInfo}>
              <p><span>Email</span>: mutalemattlesa@gmail.com</p>
              <p><span>Phone</span>: 0770967132</p>
            </div>
          </div>
          <div className={styles.links}>
            <div className={styles.quickLinks}>
              <h4>Quick links</h4>
              <div className={styles.linkContent}>
              <Link href="/">Home</Link>
              <Link href="/">Resources</Link>
              <Link href="/">About</Link>
              <Link href="/">Contact</Link>
              </div>
            </div>
            <div className={styles.categories}>
              <h4>Categories</h4>
              <div className={styles.linkContent}>
              <Link href="/">Insight</Link>
              <Link href="/">News</Link>
              <Link href="/">Articles</Link>
              <Link href="/">Tips</Link>
              </div>
            </div>
          </div>
          <div className={styles.newsLetter}>
            <div className={styles.contentBox1}>
              <h4>Weekly Newsletter</h4>
              <p>get Blog articles and offers via email</p>
            </div>
            <div className={styles.contentBox}>
              <input type="text" className={styles.input}/>
              <Link href="/" className={styles.submit}>Submit</Link>
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.copyrights}></div>
      </div>
    </div>
  )
}

export default Footer