import LatestPosts from '../../../components/latestPost/LatestPost';
import styles from './dashboard.module.css'

const getBlogs = async() =>{
  try {
    const res = await fetch('http://localhost:3000/api/blog/count', { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch blog count');
    const data = await res.json();
    return data.count;
    
  } catch (error) {
    console.log("error loading topics")
  }
}


const getEmails = async() =>{
  try {
    const res = await fetch('http://localhost:3000/api/email/count',{
      cache: 'no-store'
    });
    if (!res.ok) throw new Error('Failed to fetch email count');
    const data = await res.json();
    return data.emailCount;
  } catch (error) {
    console.log('error loading topics')
  }
}

const Dashboard = async () => {
  const count = await getBlogs();
  const emailCount = await getEmails();

  return (
    <div className={styles.container}>
      <div className={styles.userProfileContainer}>
        <h2>Dashboard</h2>
      </div>
      <div className={styles.box}>
        <div className={styles.boxContainerOne}>
            <div className={styles.boxCard}>
              <div className={styles.card}>
                <p>Posts</p>
                <h3>{count}</h3>
              </div>
              <div className={styles.card}>
                <p>emails</p>
                <h3>{emailCount}</h3>
              </div>
              <div className={styles.card}>
                
              </div>
            </div>
        </div>
        <div className={styles.boxContainerTwo}>
            <div className={styles.boxCardLeft}>
              
            </div>
            <div className={styles.boxCardRight}>
              <div className={styles.latestPostHeader}>
                <p>Latest Post</p>
              </div>
              <div className={styles.posts}>
                <LatestPosts/>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard