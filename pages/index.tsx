import type { NextPage } from 'next'
import Head from 'next/head'
import Header from 'components/header/Header'
import styles from 'styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className={styles.main}>
        Works.
      </main>
    </div>
  )
}

export default Home
