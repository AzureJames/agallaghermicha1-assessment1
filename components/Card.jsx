import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Card.module.css'

export default function Card({key, title, body, city, state, country, pic, phone}) {
  return (
    <div className={styles.card} key={key}>
        <div className={styles.cardtop}>
            <h2 className={styles.h2two}>{title}</h2>
        </div>
        <div className={styles.servicecard}>
            <Image src={pic} alt="hello" width={128} height={128}/>
            <ul>
	            <li>
                    <p><span>{body}</span></p>
                    <p><span>{city}, {state}</span></p>
                    <p><span>{country}</span></p>
                    <p><span>{phone}</span></p>
                </li>
            </ul>
        </div>
    </div>
    )};