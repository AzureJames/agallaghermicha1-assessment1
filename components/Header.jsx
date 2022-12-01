import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header({title}) {
  return (
    <>
    <header>
      <nav className={styles.nav} aria-label="Main menu">
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href='/' className={styles.logoText}>{title}</Link>
          </div>
           <div className={styles.mobile_menu} >
            <ul>
              <li className={styles.navitem}>
                <Link href='/'>Home</Link>
              </li>
              <li className={styles.navitem}>
                <Link href='/frontend'>Frontend</Link>
              </li>
              <li className={styles.navitem}>
                <Link href='/uiux'>UI/UX</Link>
              </li>
              <li className={styles.navitem}>
                <Link href='/fullstack'>Full stack</Link>
              </li>
              <li className={styles.navitem}>
                <Link href='/backend'>Backend</Link>
              </li>
              <li className={styles.navitem}>
                <Link href='/login'>Login</Link>
              </li>
              <li className={styles.navitem}>
                <Link href='https://github.com/AzureJames/agallaghermicha1-assessment1'>Github</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    </>
  )
}
