import * as React from 'react'
import 'index.css'
import { useTranslation } from 'react-i18next'

type Props = {
  page: string
}

export default function LanguageSwitcher(props: Props) {
  const { i18n } = useTranslation(props.page)

  const changeLanguage = language => {
    i18n.changeLanguage(language)
  }

  return (
    <>
      <button
        className={styles.buttons__locales}
        type="button"
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <button
        className={styles.buttons__locales}
        type="button"
        onClick={() => changeLanguage('ua')}
      >
        UA
      </button>
    </>
  )
}

const styles = {
  buttons__locales: `
    w-max
    py-1 
    px-2 
    bg-gray-700 
    text-white 
    rounded-lg
  `,
}
