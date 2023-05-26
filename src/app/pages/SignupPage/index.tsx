import * as React from 'react'
import 'index.css'
import { Helmet } from 'react-helmet-async'
import LanguageSwitcher from 'app/components/LanguageSwitcher'
import ThemeSwitcher from 'app/components/ThemeSwitcher'
import SignupModalWindow1 from 'app/pages/SignupPage/components/SignupModalWindow1'
import SignupModalWindow2 from 'app/pages/SignupPage/components/SignupModalWindow2'
import SignupModalWindow3 from 'app/pages/SignupPage/components/SignupModalWindow3'

export function SignupPage() {
  const [step, setStep] = React.useState('first')

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Sign up Page</title>
        <meta name="description" content="Sign up Page" />
      </Helmet>
      <div className={styles.container__buttons}>
        <LanguageSwitcher page={'signup'} />
      </div>
      <div className={styles.container__themes}>
        <ThemeSwitcher />
      </div>
      {step === 'first' ? (
        <SignupModalWindow1 setModalStep={setStep} />
      ) : step === 'second' ? (
        <SignupModalWindow2 setModalStep={setStep} />
      ) : step === 'third' ? (
        <SignupModalWindow3 setModalStep={setStep} />
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
