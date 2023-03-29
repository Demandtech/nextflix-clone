import styles from '@/styles/Utils.module.css'
import Head from 'next/head'
import Header from './Header'

export const siteTitle =
  'Netflix Nigeria - Watch TV Shows Online, Watch Movies Online'

const GuessLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
        <link
          rel='shortcut icon'
          href='https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico'
        ></link>
        <link
          rel='apple-touch-icon'
          href='https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.png'
        ></link>
        <meta
          name='apple-touch-icon'
          content='https://assets.nflxext.com/en_us/layout/ecweb/netflix-app-icon_152.jpg'
        ></meta>
        <meta
          content='Watch Netflix movies &amp; TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.'
          name='description'
        ></meta>
        <meta
          content='watch movies, movies online, watch TV, TV online, TV shows online, watch TV shows, stream movies, stream tv, instant streaming, watch online, movies, watch movies Nigeria, watch TV online, no download, full length movies'
          name='keywords'
        ></meta>
      </Head>
      <div className={styles.heroBg}>
        <img height='100%' src='/assets/images/home-bg.jpeg' alt='hero-bg' />
        <div className={styles.heroBgLayer}>
          <div className={styles.layoutWrapper}>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default GuessLayout
