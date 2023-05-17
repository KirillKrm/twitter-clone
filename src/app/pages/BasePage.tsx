import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { ReactI18NextChild } from 'react-i18next'

import LanguageSwitcher, {
  LanguageSwitcherProps,
} from 'app/components/LanguageSwitcher'
import ThemeSwitcher from 'app/components/ThemeSwitcher'

export type BasePageProps = {
  helmet: {
    title: string
    description: string
  }
  langSwitch: LanguageSwitcherProps
  children: ReactI18NextChild | Iterable<ReactI18NextChild>
}

export default function BasePage({
  helmet: { title, description },
  langSwitch,
  children,
}: BasePageProps) {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <div className={styles.container__language}>
        <LanguageSwitcher {...langSwitch} />
      </div>
      <div className={styles.container__themes}>
        <ThemeSwitcher />
      </div>
      {children}
    </div>
  )
}

const styles = {
  container: `
    grid
    h-full
    bg-[rgba(255,255,255,0.6)] dark:bg-[rgba(91,112,131,0.4)]
  `,
  container__language: `
    flex 
    flex-row
    fixed 
    mt-1 
    ml-1 
    gap-1
    z-10
  `,
  container__themes: `
    fixed
    right-0
    mt-1 
    mr-1 
    z-10
  `,
}
