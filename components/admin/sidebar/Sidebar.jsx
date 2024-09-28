import Link from 'next/link'
import styles from './sidebar.module.css'
import Image from 'next/image'
import { assets } from '../../../Assets/assets'

const Sidebar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={assets.logo} height={80} width={80} alt='logo'/>
        </div>
        <div className={styles.links}>
            <Link href="/admin">Dashboard</Link>
            <Link href="/write">Write</Link>
            <Link href="./">Edit</Link>
            <Link href="./">Emails</Link>
        </div>
    </div>
  )
}

export default Sidebar