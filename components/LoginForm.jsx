import Image from 'next/image'
import styles from '../styles/LoginForm.module.css'

export default function LoginForm({title, body}) {
  return (
    <div className={styles.loginCard}>
        <div className={styles.Card}>
            <div className={styles.cardtop}>
                <h2 className={styles.h2two}>Login</h2>
            </div>
            <div>
                <Image src="http://placekitten.com/100/100" alt="hello" width={100} height={100}/>
                <p>{body}</p>  
                <form action="" method="post">
                    <div className={styles.group}>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" />
                    </div>
                    <div className={styles.group}>
                        <label htmlFor="Password">Password</label>
                        <input type="text" name="Password" id="Password" />
                    </div>
                    <div style={{textAlign:'center'}}>
                        <input type="submit" className={styles.submit} value="submit" name="submit" />
                    </div>
                </form>
            </div>
        </div>
    </div>
    )};