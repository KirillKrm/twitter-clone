import * as React from 'react'
import { useTranslation } from 'react-i18next'
import 'index.css'

export default function Search() {
  const { t } = useTranslation()

  return (
    <div tabIndex={0} className={styles.container}>
      <input
        className={styles.input}
        type="search"
        name="search"
        placeholder={t('Search')}
        autoComplete="off"
      />
    </div>
  )
}

const styles = {
  container: `
    flex
    bg-tertiaryBg-light dark:bg-tertiaryBg-dark
    w-full
    px-4
    py-2
    rounded-full
    select-none
    focus-within:shadow-[0px_0px_0px_1px_deepskyblue_inset]
  `,
  input: `
    self-center
    bg-tertiaryBg-light dark:bg-tertiaryBg-dark
    outline-none
    w-[420px]
    text-lg
    placeholder-secondaryText-light dark:placeholder-secondaryText-dark
  `,
}
