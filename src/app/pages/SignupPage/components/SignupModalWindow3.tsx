import * as React from 'react'
import 'index.css'
import { RootState } from 'types'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Navigate } from 'react-router-dom'

import BaseModal from 'app/components/BaseModal'
import InputField from 'app/components/Input/InputField'
import SvgButtonBack from 'app/components/SVG/SvgButtonBack'

export default function SignupModalWindow3({ setModalStep }) {
  const signUpPage = useSelector((state: RootState) => state.signuppage)
  const [name, setName] = React.useState(signUpPage?.name || '')
  const [email, setEmail] = React.useState(signUpPage?.email || '')
  const bithdayString = `${signUpPage?.birthday.day} ${signUpPage?.birthday.month} ${signUpPage?.birthday.year}`
  const [birthday, setBirthday] = React.useState(bithdayString || '')
  // eslint-disable-next-line
  const [authenticated, setAuthenticated] = React.useState(null)
  const { t } = useTranslation('signup')

  return (
    <BaseModal>
      <div className={styles.module__top}>
        <div className={styles.top__back}>
          <div
            className={styles.back__button}
            aria-label="Back"
            role="button"
            onClick={() => setModalStep('second')}
          >
            <SvgButtonBack />
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
        <InputField
          value={name}
          setValue={setName}
          placeholder={t('name')}
          isConfirmed={true}
          onClick={setModalStep}
        />
        <InputField
          value={email}
          setValue={setEmail}
          placeholder={t('email')}
          isConfirmed={true}
        />
        <InputField
          value={birthday}
          setValue={setBirthday}
          placeholder={t('birthday')}
          isConfirmed={true}
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
          onClick={() => {
            if (!authenticated) {
              return <Navigate replace to="/home" />
            }
          }}
        >
          <span
            className={styles.next__text + 'text-[white] dark:text-[white]'}
          >
            {t('next')}
          </span>
        </div>
      </div>
    </BaseModal>
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
