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
    border-[rgba(15,20,25,0.1)] dark:border-[rgb(51,54,57)]
  `,
  google__logo: `
    w-[18px]
    h-[18px]
    mr-[8px]
  `,
  google__text: `
    text-black
  `,
}
