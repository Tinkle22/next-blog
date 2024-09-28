import Image from 'next/image';
import styles from './blog.module.css';
import { AdBox } from '../../../../components/adBox/AdBox';
import { notFound } from 'next/navigation';

async function getBlogPost(id) {
  try {
    const res = await fetch(`/api/blog/${id}`, { 
      next: { revalidate: 60 },
      cache: 'no-store' // Ensures fresh data on each request
    });

    if (!res.ok) {
      if (res.status === 404) {
        return null; // Handle 404 separately
      }
      throw new Error('Failed to fetch blog post');
    }

    return res.json();
  } catch (error) {
    console.error("Error loading blog post:", error);
    throw error;
  }
}

export default async function Page({ params }) {
  const data = await getBlogPost(params.id);

  if (!data) {
    notFound(); // This will trigger the 404 page
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{data.title}</h1>
        <div className={styles.subHeader}>
          <div className={styles.author}>
            {data.authorImg && (
              <Image 
                src={data.authorImg}
                width={25}
                height={25}
                alt={`Author ${data.author}`}
                className={styles.image}
              />
            )}
            <p>{data.author}</p>
          </div>
          <p>{new Date(data.date).toLocaleDateString()}</p>
        </div>
      </div>

      <div className={styles.content}>
        {data.image && (
          <div className={styles.imageContainer}>
            <Image
              src={data.image}
              fill
              alt={data.title}
              className={styles.contentImages}
            />
          </div>
        )}
        <AdBox/>
        <div className={styles.firstSegment}>
          {data.firstSegment}
        </div>
        {data.image && (
          <div className={styles.imageContainer}>
            <Image 
              src={data.image}
              fill
              alt={`Additional image for ${data.title}`}
              className={styles.contentImages}
            />
          </div>
        )}
        <AdBox/>
        <div className={styles.secondSegment}>
          {data.secondSegment}
        </div>                
      </div>
    </div>
  );
}