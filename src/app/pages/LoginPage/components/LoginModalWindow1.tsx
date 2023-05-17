import * as React from 'react'
import 'index.css'
import { useTranslation } from 'react-i18next'

import BaseModal from 'app/components/BaseModal'
import GoogleAuth from 'app/components/GoogleAuth'
import InputField from 'app/components/Input/InputField'

export default function LoginModalWindow1({ setModalStep }) {
  const { t } = useTranslation('login')

  const [login, setLogin] = React.useState('')

  return (
    <BaseModal>
      <div className={styles.module__top}>
        <div className={styles.top__close}>
          <div
            className={styles.close__button}
            aria-label="Close"
            role="button"
          >
            <svg className={styles.button__svg} viewBox="0 0 24 24">
              <g className={styles.button__g}>
                <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
              </g>
            </svg>
          </div>
        </div>
        <div className={styles.top__logo}>
          <svg
            className={styles.logo__svg}
            viewBox="0 0 24 24"
            aria-label="Twitter"
            role="img"
          >
            <g className={styles.logo__g}>
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
            </g>
          </svg>
        </div>
        <div className={styles.top__space} />
      </div>
      <div className={styles.module__main}>
        <div className={styles.main__title} aria-level={1} role="heading">
          <h1 className={styles.title__h1}>{t('loginTitle1')}</h1>
        </div>
        <GoogleAuth />
        <div className={styles.main__separator}>
          <div className={styles.separator__line}></div>
          <div className={styles.separator__text}>{t('separator')}</div>
          <div className={styles.separator__line}></div>
        </div>
        <InputField
          value={login}
          setValue={setLogin}
          placeholder={t('input')}
        />
        <div
          className={styles.main__next}
          role="button"
          onClick={() => setModalStep('second')}
        >
          <span className={styles.next__text}>{t('next')}</span>
        </div>
        <div className={styles.main__forgot} role="button">
          <span className={styles.forgot__text}>{t('forgot')}</span>
        </div>
        <div className={styles.main__hint}>
          <span className={styles.hint__left}>{t('hint')}</span>
          <a href="/signup">
            <span className={styles.hint__right} role="button">
              {t('signup')}
            </span>
          </a>
        </div>
      </div>
    </BaseModal>
  )
}

const styles = {
  module__top: `
    flex
    flex-row
    h-[53px]
    px-[16px]
  `,
  top__close: `
    flex
    basis-1/2
    items-center
  `,
  close__button: `
    p-2
    ml-[-8px]
    rounded-full
    hover:bg-[rgba(15,20,25,0.1)] dark:hover:bg-[rgba(239,243,244,0.1)]
  `,
  button__svg: `
    w-5 
    h-5
  `,
  button__g: `
    text-[rgb(15,20,25)] dark:text-white
  `,
  top__logo: `
    flex
    items-center
  `,
  logo__svg: `
    w-8 
    h-8
  `,
  logo__g: `
   text-[rgb(29,155,240)] dark:text-white
  `,
  top__space: `
    flex
    basis-1/2
  `,
  module__main: `
    flex
    flex-col
    mx-auto
    px-[32px]
    pb-[48px]
  `,
  main__title: `
    w-[300px]
    my-[20px]
  `,
  title__h1: `
    leading-[36px]
    text-[31px]
    font-bold
    text-[rgb(15,20,25)] dark:text-[rgb(231,233,234)]
  `,
  main__separator: `
    flex
  `,
  separator__line: `
    self-center
    w-full
    h-[1px]
    mx-[4px]
    bg-[rgba(15,20,25,0.1)] dark:bg-[rgb(51,54,57)]
  `,
  separator__text: `
    mx-[4px]
    text-[17px]
    text-[rgb(15,20,25)] dark:text-[rgb(231,233,234)]
    leading-[20px]
  `,
  main__next: `
    flex
    flex-row
    items-center
    justify-center
    w-[300px]
    h-[40px]
    my-[12px]
    bg-black dark:bg-white
    rounded-full
  `,
  next__text: `
    text-white dark:text-black
    font-bold
  `,
  main__forgot: `
    flex
    flex-row
    items-center
    justify-center
    w-[300px]
    h-[40px]
    my-[12px]
    bg-white dark:bg-black
    rounded-full
    border
    border-[rgb(83,100,113)]
    dark:hover:bg-[rgba(239,243,244,0.1)]
  `,
  forgot__text: `
    text-dark dark:text-white
    font-bold
  `,
  main__hint: `
    mt-[40px]
    text-[15px]
    leading-[20px]
  `,
  hint__left: `
    text-[rgb(113,118,123)]
  `,
  hint__right: `
    text-[rgb(29,155,240)]
    hover:underline
  `,
}
