import Link from 'next/link';
import { blog_data } from '../../../Assets/assets';
import styles from './card.module.css'
import Image from 'next/image';

export const Card = ({title, image, category, author, id}) => {
  return (
    <>
      <Link href={`/blog/${id}`} className={styles.card}>
        <div className={styles.imageContainer}>
          <Image src={image} alt="" width={400} height={400} className={styles.image}/>
        </div>
        <div className={styles.category}>
            <h5 className={styles.tag}>{category}</h5>
        </div>
        <div className={styles.title}>
            <p>{title}</p>
        </div>
        <div className={styles.date}>
            <p>{author}</p>
        </div>
      </Link>
    </>
  );
}
