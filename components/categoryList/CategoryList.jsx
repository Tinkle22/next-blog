import Link from 'next/link'
import styles from './categoryList.module.css'
import Image from 'next/image'

export const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Categories</h3>
      <div className={styles.categories}>
          <Link href="/blog?cat=style"  className={`${styles.category} ${styles.news}`}>
            <Image 
              src="/style.png" 
              alt="" width={32} 
              height={32}
              className={styles.image}
              />
            news
          </Link>

          <Link href="/blog?cat=style"  className={`${styles.category} ${styles.insights}`}>
            <Image 
              src="/style.png" 
              alt="" width={32} 
              height={32}
              className={styles.image}
              />
              insights
          </Link>

          <Link href="/blog?cat=style"  className={`${styles.category} ${styles.articles}`}>
            <Image 
              src="/style.png" 
              alt="" width={32} 
              height={32}
              className={styles.image}
              />
            articles
          </Link>

          <Link href="/blog?cat=style"  className={`${styles.category} ${styles.tips}`}>
            <Image 
              src="/style.png" 
              alt="" width={32} 
              height={32}
              className={styles.image}
              />
              tips
          </Link>
      </div>
    </div>
  )
}
