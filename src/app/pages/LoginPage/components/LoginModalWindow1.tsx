import * as React from 'react'
import 'index.css'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

import BaseModal from 'app/components/BaseModal'
import GoogleAuth from 'app/components/GoogleAuth'
import InputField from 'app/components/Input/InputField'
import { loginPageActions } from 'app/pages/LoginPage/slice/index'
import SvgLogo from 'app/components/SVG/SvgLogo'
import SvgButtonClose from 'app/components/SVG/SvgButtonClose'

export type LoginModalWindow1Props = {
  goToNextStep: any
}

export default function LoginModalWindow1({
  goToNextStep,
}: LoginModalWindow1Props) {
  const { t } = useTranslation('login')
  const [login, setLogin] = React.useState(
    localStorage.getItem('current_user_username') || '',
  )
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(loginPageActions.changeLogin(login))
    if (localStorage.getItem('current_user_username')) {
      goToNextStep()
    }
  }, [login, dispatch, goToNextStep])

  return (
    <BaseModal>
      <div className={styles.module__top}>
        <div className={styles.top__close}>
          <div
            className={styles.close__button}
            aria-label="Close"
            role="button"
          >
            <SvgButtonClose />
          </div>
        </div>
        <div className={styles.top__logo}>
          <SvgLogo />
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
          onClick={() => goToNextStep()}
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
  `,
  main__separator: `
    flex
  `,
  separator__line: `
    self-center
    w-full
    h-[1px]
    mx-[4px]
    bg-primaryBorder-light dark:bg-primaryBorder-dark
  `,
  separator__text: `
    mx-[4px]
    text-[17px]
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
    bg-primaryBg-dark dark:bg-primaryBg-light
    rounded-full
  `,
  next__text: `
    text-primaryText-dark dark:text-primaryText-light
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
    border-secondaryText-light dark:border-secondaryText-dark
    dark:hover:bg-[rgba(239,243,244,0.1)]
  `,
  forgot__text: `
    font-bold
  `,
  main__hint: `
    mt-[40px]
    text-[15px]
    leading-[20px]
  `,
  hint__left: `
    text-secondaryText-light dark:text-secondaryText-dark
  `,
  hint__right: `
    text-logo-light
    hover:underline
  `,
}
