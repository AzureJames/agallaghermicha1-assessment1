import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header({title}) {
  return (
    <>
    <header>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className='logo'>
            <Link href='/' className={styles.logoText}>{title}</Link>
          </div>
           <div className={styles.mobile_menu} >
            <ul>
              <li className={styles.navitem}>
                <Link href='/'>Developer List</Link>
              </li>
              <li className={styles.navitem}>
                <Link href='/'>Create</Link>
              </li>
              <li className={styles.navitem}>
                <Link href='/'>Read</Link>
              </li>
              <li className={styles.navitem}>
                <Link href='/'>Update</Link>
              </li>
              <li className={styles.navitem}>
                <Link href='/'>Delete</Link>
              </li>
            </ul>
          </div>

          <div
            //onClick={handleClick}
            aria-label='Main Menu'
            //className={isActive ? 'hamburger is-active' : 'hamburger'}
          >
            <span className='roofline'></span>
            <span className='roofline2'></span>
            <span className='line'></span>
            <span className='line'></span>
            <span className='line'></span>
          </div>
        </div>
      </nav>
    </header>
    </>
  )
}
