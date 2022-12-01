import styles from '../styles/Banner.module.css'
import Image from 'next/image'
import MyPcSvg from './MyPcSvg'

// https://agallaghermicha1-assessment1.vercel.app/
export default function DevBanner({title, tagline, imgPath}) {
  return (
    <>
        <div className={styles.devbanner}>
            <h1 className={styles.title}>{title}</h1>
            <MyPcSvg src={imgPath} height={160} width={160} fillColor={'whitesmoke'} />
            <p className={styles.description}>{tagline}</p>
        </div>
    </>
  )
}
