import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Card.module.css'

export default function Card({title}) {
  return (
    <div class="card">
        <div class="card-top">
            <h2 class="h2two">C</h2>
        </div>
        <div class="service-card reverse">
            <Image src="" alt="hello" />
            <ul>
                <li>
                    <p><span>Solid Color - </span></p>
                </li>
	            <li>
                    <p><span>Solid Color - </span></p>
                </li>
            </ul>
        </div>
    </div>
    )};