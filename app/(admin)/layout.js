import Sidebar from '../../components/admin/sidebar/Sidebar'
import '../globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CM traders',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return ( 
        <main>
          <div className='container'>
            <div className='admin-wrapper'>
              <Sidebar/>
              <div className='content'>
                {children}
              </div>
            </div>
          </div>
        </main>
  )
}