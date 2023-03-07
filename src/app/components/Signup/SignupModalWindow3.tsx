import * as React from 'react'
import 'index.css'
import { useTranslation } from 'react-i18next'
import InputField from 'app/components/InputField'

export default function SignupModalWindow3({ setModalStep }) {
  const [name, setName] = React.useState('')
  const [birthday, setBirthday] = React.useState('')
  const [email, setEmail] = React.useState('')
  const { t } = useTranslation('signup')

  console.log('Name: ', name)
  console.log('Date of Birth: ', birthday)
  console.log('Email: ', email)

  return (
    <div className={styles.container__module}>
      <div className={styles.module__top}>
        <div className={styles.top__back}>
          <div
            className={styles.back__button}
            aria-label="Back"
            role="button"
            onClick={() => setModalStep('second')}
          >
            <svg className={styles.button__svg} viewBox="0 0 24 24">
              <g className={styles.button__g}>
                <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
              </g>
            </svg>
          </div>
        </div>
        <div className={styles.top__text}>
          <h2>{t('step2')}</h2>
        </div>
      </div>
      <div
        className={styles.module__main + 'w-[440px] h-full mx-[80px] px-0 pb-0'}
      >
        <div className={styles.main__title} aria-level={1} role="heading">
          <h1 className={styles.title__h1}>{t('create')}</h1>
        </div>
        <InputField value={name} setValue={setName} placeholder={t('name')} />
        <InputField
          value={email}
          setValue={setEmail}
          placeholder={t('email')}
        />
        <InputField
          value={birthday}
          setValue={setBirthday}
          placeholder={t('birthday')}
        />
        <div className={styles.main__registrationhint}>
          <span>{t('registrationHint2')}</span>
        </div>
        <div
          className={
            styles.main__next +
            'w-[440px] h-[52px] my-[24px] bg-[rgb(29,155,240)] dark:bg-[rgb(29,155,240)]'
          }
          role="button"
        >
          <span
            className={styles.next__text + 'text-[white] dark:text-[white]'}
          >
            {t('next')}
          </span>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container__module: `
    flex
    flex-col
    self-center
    justify-self-center
    w-[600px]
    h-[650px]
    bg-white dark:bg-black
    rounded-2xl
  `,
  module__top: `
    flex
    flex-row
    h-[53px]
    px-[16px]
  `,
  top__back: `
    flex
    w-[56px]
    items-center
  `,
  back__button: `
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
  top__text: `
    flex
    items-center
    text-[20px]
    text-[rgb(15,20,25)] dark:text-[rgb(231,233,234)]
    font-bold
    leading-[24px]
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
  main__registrationhint: `
    mt-[16px]
    text-[rgb(113,118,123)]
    text-[14px]
    leading-[16px]
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
}
