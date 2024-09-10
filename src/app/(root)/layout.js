
import '../globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CM traders',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
        <main className="container">
          <div className='wrapper'>
            <NavBar/>
              {children}
          </div>

        </main>
  )
}
