import * as React from 'react'
import 'index.css'

import ThemeSwitcher from '../../../components/ThemeSwitcher'
import LanguageSwitcher from '../../../components/LanguageSwitcher'

export function ThemesLanguages() {
  return (
    <div className={styles.container}>
      <div className={styles.theme}>
        <h3 className={styles.title}>Theme</h3>
        <ThemeSwitcher />
      </div>
      <h3 className={styles.title}>Display language</h3>
      <LanguageSwitcher page={'feed'} />
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
  theme: `
    flex
    justify-between
    items-center
  `,
  title: `
    flex
    font-bold
    text-xl
    text-primary
  `,
}
