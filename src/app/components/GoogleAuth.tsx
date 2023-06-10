import * as React from 'react'
import 'index.css'
import { useTranslation } from 'react-i18next'

import SvgGoogle from './SVG/SvgGoogle'

export default function GoogleAuth() {
  const { t } = useTranslation('login')

  return (
    <div className={styles.main__google} role="button">
      <SvgGoogle />
      <span className={styles.google__text}>{t('google')}</span>
    </div>
  )
}

const styles = {
  main__google: `
    flex
    flex-row
    items-center
    justify-center
    w-[300px]
    h-[40px]
    my-[12px]
    bg-white
    rounded-full
    border
    border-primaryBorder-light dark:border-primaryBorder-dark

    pointer-events-none
  `,
  google__text: `
    text-black
  `,
}
