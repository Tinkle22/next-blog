import Link from 'next/link';
import styles from './card.module.css'
import Image from 'next/image';

export const Card = () => {
  return (
    <>
      <Link href="/" className={styles.card}>
        <div className={styles.imageContainer}>
          {/* <Image src="/travel.png" alt="" fill className={styles.image}/> */}
        </div>
        <div className={styles.category}>
            <h5 className={styles.tag}>insights</h5>
        </div>
        <div className={styles.title}>
            <p>Making a working strategy </p>
        </div>
        <div className={styles.date}>
            <p>2122 22k3</p>
        </div>
      </Link>
    </>
  );
}
