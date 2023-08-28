import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { ReactI18NextChild } from 'react-i18next'

import { LanguageSwitcherProps } from 'app/components/LanguageSwitcher'
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
  children,
}: BasePageProps) {
  return (
    <div className={styles.container}>
      <ErrorBoundary>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
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
  `,
}
