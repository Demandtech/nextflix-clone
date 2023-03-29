import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
//import '@/styles/globals.css'
import Link from 'next/link'
import GuessLayout from '@/components/GuessLayout'
import Header from '@/components/Header'

export default function Home() {
  return (
    <GuessLayout>
      <div className={styles.hero}>
        <Header />
        <div className={styles.heroContent}>
          <h1>Unlimited movies, TV shows, and more.</h1>
          <p>Watch anywhere. Cancel anytime.</p>

          <form action='' className={styles.form}>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className={styles['form-control']}>
              <div className={styles['input-control']}>
                <div className={styles['input-label']}>
                  <label htmlFor='email'>Email Address</label>
                </div>
                <input id='email' type='text' name='email' />
                <div className='input-layer'></div>
              </div>
              <div className={styles['btn-wrapper']}>
                <button className='btn'>Get Started &gt;</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </GuessLayout>
  )
}
