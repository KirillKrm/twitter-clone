import * as React from 'react'
import { Helmet } from 'react-helmet-async'

import LanguageSwitcher from 'app/components/LanguageSwitcher'
import ThemeSwitcher from 'app/components/ThemeSwitcher'
import LoginModalWindow1 from './components/LoginModalWindow1'
import LoginModalWindow2 from './components/LoginModalWindow2'

export function LoginPage() {
  const [step, setStep] = React.useState('first')

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Login Page</title>
        <meta name="description" content="Login Page" />
      </Helmet>
      <div className={styles.container__buttons}>
        <LanguageSwitcher page={'login'} />
      </div>
      <div className={styles.container__themes}>
        <ThemeSwitcher />
      </div>
      {step === 'first' ? (
        <LoginModalWindow1 setModalStep={setStep} />
      ) : step === 'second' ? (
        <LoginModalWindow2 setModalStep={setStep} />
      ) : null}
    </div>
  )
}

const styles = {
  container: `
    grid
    h-full
    bg-[rgba(255,255,255,0.6)] dark:bg-[rgba(91,112,131,0.4)]
  `,
  container__buttons: `
    flex 
    flex-row
    fixed 
    mt-1 
    ml-1 
    gap-1
    z-10
  `,
  container__themes: `
    fixed
    right-0
    mt-1 
    mr-1 
    z-10
  `,
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
