import * as React from 'react'
import 'index.css'

import SignupModalWindow1 from 'app/pages/SignupPage/components/SignupModalWindow1'
import SignupModalWindow2 from 'app/pages/SignupPage/components/SignupModalWindow2'
import SignupModalWindow3 from 'app/pages/SignupPage/components/SignupModalWindow3'
import BasePage from 'app/pages/BasePage'

export function SignupPage() {
  const [step, setStep] = React.useState('first')

  return (
    <BasePage
      helmet={{
        title: 'Sign up Page',
        description: 'Twitter Clone Sign up Page',
      }}
      langSwitch={{ page: 'signup' }}
    >
      <div className={styles.container}>
        {step === 'first' ? (
          <SignupModalWindow1 goToNextStep={() => setStep('second')} />
        ) : step === 'second' ? (
          <SignupModalWindow2
            goToPrevStep={() => setStep('first')}
            goToNextStep={() => setStep('third')}
          />
        ) : step === 'third' ? (
          <SignupModalWindow3 goToPrevStep={() => setStep('second')} />
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
