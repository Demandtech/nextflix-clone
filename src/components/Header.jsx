import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Utils.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles['header-wrapper']}>
        <div className={styles.logo}>
          <img
            src={'assets/svgs/logo.svg'}
            style={{ width: '100%', height: '100%' }}
            alt={'logo'}
          />
        </div>
        <Link href={'/login'} className={'btn'}>
          Sign In
        </Link>
      </div>
    </header>
  )
}

export default Header