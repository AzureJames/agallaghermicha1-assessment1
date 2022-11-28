import styles from '../styles/Banner.module.css'
import Image from 'next/image'

// https://agallaghermicha1-assessment1.vercel.app/
export default function DevBanner({title, tagline, img, alt}) {
  return (
    <>
        <div className={styles.devbanner}>
            <h1 className={styles.title}>{title}</h1>
            <Image src={"/../public/"+img} alt={alt} width='150' height='150' style={{borderRadius: '20%'}}></Image>
            <p className={styles.description}>{tagline}</p>
        </div>
    </>
  )
}
