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
}
