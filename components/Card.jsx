import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Card.module.css'

export default function Card({title, body}) {
  return (
    <div className={styles.card}>
        <div className={styles.cardtop}>
            <h2 className={styles.h2two}>{title}</h2>
        </div>
        <div className={styles.servicecard}>
            <Image src="http://placekitten.com/100/100" alt="hello" width={100} height={100}/>
            <ul>
	            <li>
                    <p><span>{body}</span></p>
                </li>
            </ul>
        </div>
    </div>
    )};