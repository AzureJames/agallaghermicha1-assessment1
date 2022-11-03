import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Header({title, tagline}) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <span>{tagline}</span>
      <Image src={"/kitten.jpg"} alt="placeholder kitten" width="100" height="100"/>
    </div>
  )
}
