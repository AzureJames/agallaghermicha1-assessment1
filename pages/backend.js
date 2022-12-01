import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Link from 'next/link'
import DevBanner from '../components/DevBanner'
import Card from '../components/Card'
import { useState } from 'react'
// https://agallaghermicha1-assessment1.vercel.app/

  // This function gets called at build time on server-side.
  // It won't be called on client-side, so you can even do
  // direct database queries.
  export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    let res; 
    let devs = []; 

    for(let i=0; i<6; i++){
    res = await fetch('https://randomuser.me/api/') 
    devs[i] = await res.json()
    }

    return {
      props: {
        devs,
      },
    }
  }
  


const Cardstyle = { display: 'flex', flexWrap: 'wrap', marginInline: 'auto' }


export default function Backend(devs) {




  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js Developers</title>
        <meta name="keywords" content="Next JS Developers Hire" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.PNG" />
      </Head>
      <Header title="Next.js Dev" />
      <main className={styles.main}>
        <DevBanner title='Front End Developers' 
            tagline='If you need a beautiful design or nice responsive layout, you will find it here!' 
            alt='frontend dev'/>
             <div className={styles.flex1200}>         
            { 
            devs.devs.map((dev) => {
                return <>
                {/* <div style={Cardstyle}> */}
                <Card 
                key={dev.indexOf}
                active={useState()}
                title={dev.results[0].name.first}
                body="Frontend Developer"
                city={dev.results[0].location.city}
                state={dev.results[0].location.state}
                country={dev.results[0].location.country} 
                pic={dev.results[0].picture.large}
                phone={dev.results[0].phone}
                
                >
                </Card>
                {/* </div> */}
                </>
            })  
            }
            </div>    
      </main>

      <footer className={styles.footer}>
        <Link href="/">Home</Link>
        <p>Azure Gallagher Michalak - For educational purposes</p>
      </footer>
    </div>
  )
}



