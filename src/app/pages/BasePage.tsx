import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { ReactI18NextChild } from 'react-i18next'

import LanguageSwitcher, {
  LanguageSwitcherProps,
} from 'app/components/LanguageSwitcher'
import ThemeSwitcher from 'app/components/ThemeSwitcher'
import ErrorBoundary from 'app/components/ErrorBoundary'

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
      <ErrorBoundary>
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
      </ErrorBoundary>
    </div>
  )
}

const styles = {
  container: `
    flex
    h-full
    w-full

    bg-primaryBg-light dark:bg-primaryBg-dark
    text-primaryText-light dark:text-primaryText-dark
  `,
  container__language: `
    flex 
    flex-col
    fixed 
    left-0
    mt-1 
    ml-1 
    gap-1
    z-50
  `,
  container__themes: `
    fixed
    right-0
    mt-1 
    mr-1 
    z-50
  `,
}
