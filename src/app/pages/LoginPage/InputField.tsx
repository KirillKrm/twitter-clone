import * as React from 'react'
import { useTranslation } from 'react-i18next'

export default function InputField() {
  const { t } = useTranslation('login')

  return (
    <>
      <div className={styles.container}>
        <input
          className={styles.container__input}
          type="text"
          name="text"
          id="login"
          autoComplete="off"
          required
        />
        <label className={styles.container__label} htmlFor="login">
          {t('input')}
        </label>
      </div>
    </>
  )
}

const styles = {
  container: `
    relative
    h-[56px]
    my-3
  `,
  container__input: `
    absolute
    box-border
    bottom-0
    w-full
    h-full
    px-2
    pt-5
    text-[17px]
    text-black dark:text-white
    leading-[24px]
    bg-white dark:bg-black
    rounded-[4px]
    border
    border-[rgba(15,20,25,0.1)] dark:border-[rgb(51,54,57)]
    outline-none
    focus:border-[rgb(29,155,240)] dark:focus:border-[rgb(29,155,240)]

    peer
  `,
  container__label: `
    absolute
    w-[284px]
    text-[17px]
    text-[rgb(83,100,113)] dark:text-[rgb(113,118,123)]
    top-[16px]
    left-[8px]
    pointer-events-none
    whitespace-nowrap
    text-ellipsis
    overflow-hidden

    transition-all
    ease-in-out
    duration-[0.15s]

    peer-focus-within:top-[5px]
    peer-focus-within:text-[12px]
    peer-focus-within:text-[rgb(29,155,240)]
    peer-valid:top-[5px]
    peer-valid:text-[12px]
    peer-valid:text-[rgb(113,118,123)]
  `,
}
