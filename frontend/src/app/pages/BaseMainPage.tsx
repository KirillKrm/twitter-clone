import * as React from 'react'
import { ReactI18NextChild } from 'react-i18next'
import { motion } from 'framer-motion'
import classnames from 'classnames'

import Menu from 'app/components/Menu'
import Account from 'app/components/Account'
import { UserContext } from '../contexts/UserContext'
import { LoginModal } from './LoginPage/components/LoginModal'
import { SignupModal } from './SignupPage/components/SignupModal'

export type BaseMainPageProps = {
  children: ReactI18NextChild | Iterable<ReactI18NextChild>
}

const MenuEntranceButton = ({
  classNameButton,
  classNameText,
  onClick,
  buttonText,
}) => (
  <div className={styles.menu__entrance}>
    <button className={classNameButton} onClick={onClick}>
      <span className={classNameText}>{buttonText}</span>
    </button>
  </div>
)

const ModalWrapper = ({ isOpen, children }) => {
  return (
    isOpen && (
      <motion.div
        className={styles.modal}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    )
  )
}

export default function BaseMainPage({ children }: BaseMainPageProps) {
  const user = React.useContext(UserContext)
  const [isLoginOpen, setIsLoginOpen] = React.useState(false)
  const [isSignupOpen, setIsSignupOpen] = React.useState(false)
  const [currentHref] = React.useState(window.location.href)

  const handleLoginButtonClick = () => {
    setIsLoginOpen(true)
    window.history.replaceState(null, '', '/login')
  }

  const handleSignupButtonClick = () => {
    setIsSignupOpen(true)
    window.history.replaceState(null, '', '/signup')
  }

  const loginStyle = classnames(
    styles.entrance__button,
    'bg-primaryBg-dark dark:bg-primaryBg-light hover:bg-[#d7dbdc] hover:dark:bg-[#d7dbdc]',
  )

  const signupStyle = classnames(
    styles.entrance__button,
    'bg-blue hover:bg-[#1a8cd8]',
  )

  const loginTextStyle = classnames(
    styles.button__text,
    'text-primaryText-dark dark:text-primaryText-light',
  )

  const signupTextStyle = classnames(
    styles.button__text,
    'text-primaryText-dark',
  )

  return (
    <>
      <div className={styles.container}>
        <main className={styles.container__main}>
          <header className={styles.main__header}>
            <div className={styles.header__menu}>
              <div>
                <Menu />
                {!user && (
                  <div>
                    <MenuEntranceButton
                      classNameButton={loginStyle}
                      classNameText={loginTextStyle}
                      onClick={handleLoginButtonClick}
                      buttonText="Log in"
                    />
                    <MenuEntranceButton
                      classNameButton={signupStyle}
                      classNameText={signupTextStyle}
                      onClick={handleSignupButtonClick}
                      buttonText="Sign up"
                    />
                  </div>
                )}
              </div>
              <Account />
            </div>
          </header>
        </main>
        {children}
      </div>
      <ModalWrapper isOpen={isLoginOpen}>
        <LoginModal
          isModal
          onClose={() => {
            setIsLoginOpen(false)
            window.history.replaceState(null, '', currentHref)
          }}
        />
      </ModalWrapper>
      <ModalWrapper isOpen={isSignupOpen}>
        <SignupModal
          isModal
          onClose={() => {
            setIsSignupOpen(false)
            window.history.replaceState(null, '', currentHref)
          }}
        />
      </ModalWrapper>
    </>
  )
}

const styles = {
  container: `
    flex
    justify-center
    h-fit
    w-full
  `,
  container__main: `
    flex
    flex-row
    justify-center
  `,
  main__header: `
    flex
    flex-grow 
    sticky
    h-screen
  
    xs:top-0
    xs:justify-end
  
    max-xs:fixed
    max-xs:bottom-0
    max-xs:left-0
    max-xs:w-full
    max-xs:h-[56px]
    max-xs:justify-center
    max-xs:bg-primary
  `,
  header__menu: `
    flex 
    flex-col 
    justify-between
  
    max-xs:flex-row
    max-xs:w-full
    max-xs:border-t
    max-xs:border-tertiaryBg-light max-xs:dark:border-tertiaryBg-dark
  `,
  menu__entrance: `
    flex
    w-11/12
    my-4
  `,
  entrance__button: `
    flex
    justify-center
    items-center
    w-full
    h-12
    px-8
    rounded-full
    transition-colors
    duration-200
    select-none
  `,
  button__text: `
    text-lg
    font-bold
  `,
  modal: `
    flex
    fixed
    w-full
    h-full
    z-10
    overflow-x-hidden
  `,
}
