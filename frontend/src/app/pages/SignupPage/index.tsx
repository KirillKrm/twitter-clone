import * as React from 'react'
import 'index.css'

import BasePage from 'app/pages/BasePage'
import { SignupModal } from './components/SignupModal'

export function SignupPage() {
  return (
    <BasePage
      helmet={{
        title: 'Sign up Page',
        description: 'Twitter Clone Sign up Page',
      }}
      langSwitch={{ page: 'signup' }}
    >
      <SignupModal isModal={false} />
    </BasePage>
  )
}
