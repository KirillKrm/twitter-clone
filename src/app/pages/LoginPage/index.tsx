import * as React from 'react'

import LoginModalWindow1 from './components/LoginModalWindow1'
import LoginModalWindow2 from './components/LoginModalWindow2'
import BasePage from 'app/pages/BasePage'

export function LoginPage() {
  const [step, setStep] = React.useState('first')

  return (
    <BasePage
      helmet={{
        title: 'Login Page',
        description: 'Twitter Clone Login Page',
      }}
      langSwitch={{ page: 'login' }}
    >
      <div className={styles.container}>
        {step === 'first' ? (
          <LoginModalWindow1 setModalStep={setStep} />
        ) : step === 'second' ? (
          <LoginModalWindow2 setModalStep={setStep} />
        ) : null}
      </div>
    </BasePage>
  )
}

const styles = {
  container: `
    flex
    justify-center
    w-full
    bg-[rgba(255,255,255,0.6)] dark:bg-[rgba(91,112,131,0.4)]
  `,
}
