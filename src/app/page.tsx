'use-client'

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/page.module.scss'
import { Demos } from '@/components/Demos'
import { AboutMe } from '@/components/AboutMe'
import { ContactMe } from '@/components/ContactMe'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Harry Talks - +44 7506 005026
        </p>
        <div>
          The voice over specialist
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/stock-mic2-removebg.png"
          alt="Next.js Logo"
          width={180}
          height={200}
          priority
        />
      </div>
      <Demos />
      <AboutMe />
      <ContactMe />
    </main>
  )
}
