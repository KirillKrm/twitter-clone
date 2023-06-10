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
          <LoginModalWindow1 goToNextStep={() => setStep('second')} />
        ) : step === 'second' ? (
          <LoginModalWindow2 goToPrevStep={() => setStep('first')} />
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
    bg-[rgba(0,0,0,0.4)] dark:bg-[rgba(91,112,131,0.4)]
  `,
}
