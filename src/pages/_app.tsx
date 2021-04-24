import type { AppProps } from 'next/app'
import Head from 'next/head'

import '@/styles/global.scss'

import { PlayerContextProvider } from '@/contexts/player-context'

import Header from '@/components/Header'
import Player from '@/components/Player'

import styles from '@/styles/app.module.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Podcastr :: O melhor para você ouvir, sempre</title>
      </Head>

      <PlayerContextProvider>
        <div className={styles.wrapper}>
          <main>
            <Header />
            <Component {...pageProps} />
          </main>
          <Player />
        </div>
      </PlayerContextProvider>
    </>
  )
}
