import Link from 'next/link'
import styles from './blogButton.module.css'

export const BlogButton = () => {
  return (
    <div className={styles.container}>
        <Link className={styles.button} href="/blog">View all posts</Link>
    </div>
  )
}
