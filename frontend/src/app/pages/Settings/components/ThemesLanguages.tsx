import * as React from 'react'
import 'index.css'
import { useTranslation } from 'react-i18next'

import ThemeSwitcher from '../../../components/ThemeSwitcher'
import LanguageSwitcher from '../../../components/LanguageSwitcher'

export function ThemesLanguages() {
  const { t } = useTranslation('settings')

  return (
    <div className={styles.container}>
      <div className={styles.container__theme}>
        <h3 className={styles.theme__title}>{t('theme')}</h3>
        <ThemeSwitcher />
      </div>
      <div className={styles.container__language}>
        <h3 className={styles.language__title}>{t('language')}</h3>
        <LanguageSwitcher page={'settings'} />
      </div>
    </div>
  )
}

const styles = {
  container: `
    flex
    flex-col
    px-4
    py-3
    gap-3
  `,
  container__theme: `
    flex
    justify-between
    items-center
  `,
  container__language: `
    flex
    justify-between
  `,
  theme__title: `
    flex
    font-bold
    text-xl
    text-primary
  `,
  language__title: `
    flex
    min-w-fit
    font-bold
    text-xl
    text-primary
  `,
}
