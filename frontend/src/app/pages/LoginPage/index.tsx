import * as React from 'react'

import BasePage from 'app/pages/BasePage'
import { LoginModal } from './components/LoginModal'

export function LoginPage() {
  return (
    <BasePage
      helmet={{
        title: 'Login Page',
        description: 'Twitter Clone Login Page',
      }}
      langSwitch={{ page: 'login' }}
    >
      <LoginModal isModal={false} />
    </BasePage>
  )
}
