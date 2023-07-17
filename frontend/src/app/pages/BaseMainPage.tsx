import * as React from 'react'
import { ReactI18NextChild } from 'react-i18next'

import Menu from 'app/components/Menu'
import Account from 'app/components/Account'

export type BaseMainPageProps = {
  children: ReactI18NextChild | Iterable<ReactI18NextChild>
}

export default function BaseMainPage({ children }: BaseMainPageProps) {
  return (
    <div className={styles.container}>
      <main className={styles.container__main}>
        <header className={styles.main__header}>
          <div className={styles.header__menu}>
            <Menu />
            <Account />
          </div>
        </header>
      </main>
      {children}
    </div>
  )
}

const styles = {
  container: `
    flex
    justify-center
    h-fit
    w-full
  `,
  container__main: `
    flex
    flex-row
    justify-center
  `,
  main__header: `
    flex
    flex-grow 
    sticky
    h-screen
  
    xs:top-0
    xs:justify-end
  
    max-xs:fixed
    max-xs:bottom-0
    max-xs:left-0
    max-xs:w-full
    max-xs:h-[56px]
    max-xs:justify-center
    max-xs:bg-primary
  `,
  header__menu: `
    flex 
    flex-col 
    justify-between
  
    max-xs:flex-row
    max-xs:w-full
    max-xs:border-t
    max-xs:border-tertiaryBg-light max-xs:dark:border-tertiaryBg-dark
  `,
}
