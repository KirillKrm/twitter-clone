import * as React from 'react'
import 'index.css'
import { RootState } from 'types'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import classnames from 'classnames'

import BaseModal from 'app/components/BaseModal'
import InputField from 'app/components/Input/InputField'
import SvgButtonBack from 'app/components/SVG/SvgButtonBack'
import { useRegistration } from 'app/hooks/useAuth'
import { feedPageActions } from 'app/pages/FeedPage/slice/index'

// REFACTOR types
export type SignupModalWindow3Props = {
  goToPrevStep: any
}

export default function SignupModalWindow3({
  goToPrevStep,
}: SignupModalWindow3Props) {
  const { t } = useTranslation('signup')
  const { register, user, loading, error } = useRegistration()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const signUpPage = useSelector((state: RootState) => state.signuppage)
  const password = signUpPage?.password || ''
  const birthdayList = signUpPage?.birthday || { month: '', day: '', year: '' }
  const [name, setName] = React.useState(signUpPage?.username || '')
  const [nickname, setNickname] = React.useState(signUpPage?.nickname || '')
  const [email, setEmail] = React.useState(signUpPage?.email || '')
  const bithdayString = `${signUpPage?.birthday.day} ${signUpPage?.birthday.month} ${signUpPage?.birthday.year}`
  const [birthday, setBirthday] = React.useState(bithdayString || '')

  const nextButton = classnames(styles.main__next, {
    'opacity-50': loading,
  })

  const handleOnClick = (e: { preventDefault: () => any }) => {
    !loading ? registerHandler() : e.preventDefault()
  }

  const registerHandler = () => {
    console.log('Try to register')
    register({
      username: name,
      nickname,
      email,
      password,
      birthday: birthdayList,
    })
  }

  React.useEffect(() => {
    if (user) {
      localStorage.setItem('current_user_username', user.username)
      dispatch(feedPageActions.changeUsername(user.username))
      dispatch(feedPageActions.changeNickname(user.nickname))
      navigate('/login')
    }
  }, [dispatch, navigate, user])

  return (
    <BaseModal>
      <div className={styles.module__top}>
        <div className={styles.top__back}>
          <div
            className={styles.back__button}
            aria-label="Back"
            role="button"
            onClick={() => goToPrevStep()}
          >
            <SvgButtonBack />
          </div>
        </div>
        <div className={styles.top__text}>
          <h2>{t('step2')}</h2>
        </div>
      </div>
      <div
        className={styles.module__main + 'w-[440px] h-full mx-[80px] px-0 pb-0'}
      >
        <div className={styles.main__title} aria-level={1} role="heading">
          <h1 className={styles.title__h1}>{t('create')}</h1>
        </div>
        <div className="flex flex-row">
          <div className="flex w-full mr-4">
            <InputField
              value={name}
              setValue={setName}
              placeholder={t('name')}
              isConfirmed={true}
              isError={!!error}
              onClick={goToPrevStep}
            />
          </div>
          <div className="flex w-full">
            <InputField
              value={nickname}
              setValue={setNickname}
              placeholder={'Nickname'}
              isConfirmed={true}
              isError={!!error}
              onClick={goToPrevStep}
            />
          </div>
        </div>
        <InputField
          value={email}
          setValue={setEmail}
          placeholder={t('email')}
          isConfirmed={true}
          isError={!!error}
        />
        <InputField
          value={birthday}
          setValue={setBirthday}
          placeholder={t('birthday')}
          isConfirmed={true}
        />
        {!!error ? (
          <h3 className="mt-2 ml-2 font-bold text-rose-500">{error}</h3>
        ) : null}
        <div className={styles.main__registrationhint}>
          <span>{t('registrationHint2')}</span>
        </div>
        <div className={nextButton} role="button" onClick={handleOnClick}>
          <span className={styles.next__text}>{t('next')}</span>
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
  top__back: `
    flex
    w-[56px]
    items-center
  `,
  back__button: `
    p-2
    ml-[-8px]
    rounded-full
    hover:bg-[rgba(15,20,25,0.1)] dark:hover:bg-[rgba(239,243,244,0.1)]
  `,
  top__text: `
    flex
    items-center
    text-[20px]
    font-bold
    leading-[24px]
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
  main__registrationhint: `
    mt-[16px]
    text-secondary
    text-[14px]
    leading-[16px]
  `,
  main__next: `
    flex
    flex-row
    items-center
    justify-center
    w-[440px]
    h-[52px]
    my-[24px]
    bg-blue dark:bg-blue
    rounded-full
  `,
  next__text: `
    text-white dark:text-white
    font-bold
  `,
}
