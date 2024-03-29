import Link from 'next/link'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import styles from './styles.module.scss'

export default function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  })

  return (
    <header className={styles.container}>
      <Link href="/">
        <img src="/logo.svg" alt="Podcastr" />
      </Link>

      <p>O melhor para você ouvir, sempre</p>

      <span>{currentDate}</span>
    </header>
  )
}
