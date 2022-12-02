import styles from '../styles/Banner.module.css'
import Image from 'next/image'
import MyPcSvg from './MyPcSvg'
import MyArtSvg from './MyArtSvg'

// https://agallaghermicha1-assessment1.vercel.app/
export default function DevBanner({title, tagline, imgPath, svgColor}) {
  return (
    <>
        <div className={styles.devbanner}>
            <h1 className={styles.title}>{title}</h1>
            {imgPath == "pc" ? 
              <MyPcSvg height={160} width={160} fillColor={svgColor} />
            : <MyArtSvg height={160} width={160} fillColor={svgColor} /> }
            
            <p className={styles.description}>{tagline}</p>
        </div>
    </>
  )
}
