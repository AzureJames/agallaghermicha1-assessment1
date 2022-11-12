import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Link from 'next/link'
import Banner from '../components/Banner'
// https://agallaghermicha1-assessment1.vercel.app/
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Developers</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="Next.js Dev" />
      <main className={styles.main}>

        <Banner title="Next.js Developers" tagline="We&apos;re always ready to build!" />
      </main>

      <footer className={styles.footer}>
        <Link href="/">Home</Link>
        <p>Azure Gallagher Michalak - For educational purposes</p>
      </footer>
    </div>
  )
}
