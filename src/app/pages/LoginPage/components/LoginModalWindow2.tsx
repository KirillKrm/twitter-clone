import * as React from 'react'
import 'index.css'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RootState } from 'types'
import { useNavigate } from 'react-router-dom'

import BaseModal from 'app/components/BaseModal'
import SvgButtonBack from 'app/components/SVG/SvgButtonBack'
import SvgLogo from 'app/components/SVG/SvgLogo'
import InputField from 'app/components/Input/InputField'
import { useAuth } from 'app/hooks/useAuth'

export type LoginModalWindow2Props = {
  goToPrevStep: any
}

export default function SignupBaseModal({
  goToPrevStep,
}: LoginModalWindow2Props) {
  const { t } = useTranslation('login')
  const navigate = useNavigate()

  const loginPage = useSelector((state: RootState) => state.loginpage)
  const [loginString, setLoginString] = React.useState(
    loginPage?.login || localStorage.getItem('current_user_username') || '',
  )
  const [password, setPassword] = React.useState('')
  const [loginValid, setLoginValid] = React.useState(false)
  const [passwordValid, setPasswordValid] = React.useState(false)
  const formValid = loginValid && passwordValid

  const { login, user, loading, error } = useAuth()

  const loginHandler = () => {
    console.log('Try to login')
    login({
      username: loginString,
      password,
    })
    if (user) {
      navigate('/home')
    }
  }

  return (
    <BaseModal>
      <div className={styles.module__top}>
        <div className={styles.top__back}>
          <div
            className={styles.back__button}
            aria-label="Back"
            role="button"
            onClick={() => {
              goToPrevStep()
              localStorage.removeItem('current_user_username')
            }}
          >
            <SvgButtonBack />
          </div>
        </div>
        <div className={styles.top__logo}>
          <SvgLogo />
        </div>
        <div className={styles.top__space} />
      </div>
      <div className={styles.module__main}>
        <div className={styles.main__top}>
          <div className={styles.main__title} aria-level={1} role="heading">
            <h1 className={styles.title__h1}>{t('loginTitle2')}</h1>
          </div>
          <InputField
            disabled={true}
            value={loginString}
            setValue={setLoginString}
            setValid={setLoginValid}
            placeholder={t('input')}
          />
          <InputField
            value={password}
            setValue={setPassword}
            isPassword
            setValid={setPasswordValid}
            placeholder={t('password')}
            isError={!!error}
          />
          <a href="/signup" className={styles.hint__password}>
            <span role="button">{t('forgot')}</span>
          </a>
        </div>
        <div className={styles.main__bottom}>
          <button
            className={styles.main__next + (loading ? 'opacity-50' : '')}
            disabled={!formValid}
            onClick={e => (!loading ? loginHandler() : e.preventDefault())}
          >
            <span className={styles.next__text}>{t('login')}</span>
          </button>
          <div className={styles.main__hint}>
            <span className={styles.hint__left}>{t('hint')}</span>
            <a href="/signup">
              <span className={styles.hint__right} role="button">
                {t('signup')}
              </span>
            </a>
          </div>
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
  top__back: `
    flex
    basis-1/2
    items-center
  `,
  back__button: `
    p-2
    ml-[-8px]
    rounded-full
    hover:bg-[rgba(15,20,25,0.1)] dark:hover:bg-[rgba(239,243,244,0.1)]
  `,
  top__logo: `
    flex
    items-center
  `,
  top__space: `
    flex
    basis-1/2
  `,
  module__main: `
    flex
    flex-col
    w-[440px]
    h-full
    mx-auto
    justify-between
  `,
  main__title: `
    w-[300px]
    my-[20px]
  `,
  title__h1: `
    leading-[36px]
    text-[31px]
    font-bold
  `,
  main__next: `
    flex
    flex-row
    items-center
    justify-center
    w-full
    h-[52px]
    bg-primaryBg-dark dark:bg-primaryBg-light
    rounded-full
    mb-6
    disabled:opacity-50
  `,
  next__text: `
    text-primaryText-dark dark:text-primaryText-light
    font-bold
  `,
  main__hint: `
    text-[15px]
    leading-[20px]
    mb-6
  `,
  hint__left: `
    text-secondaryText-light dark:text-secondaryText-dark
  `,
  hint__right: `
    text-logo-light
    hover:underline
  `,
  hint__password: `
    w-max
    ml-2
    leading-[16px]
    text-[13px]
    text-logo-light
    hover:underline
  `,
  main__top: `
    flex
    flex-col
    w-full
  `,
  main__bottom: `
    w-full
  `,
}
