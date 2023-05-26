import * as React from 'react'
import 'index.css'
import { RootState } from 'types'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import BaseModal from 'app/components/BaseModal'
import InputField from 'app/components/Input/InputField'
import SvgButtonBack from 'app/components/SVG/SvgButtonBack'
import { useRegistration } from 'app/hooks/useAuth'
// import { SignupPageState } from '../slice/types'

export default function SignupModalWindow3({ setModalStep }) {
  const { t } = useTranslation('signup')
  const { register, user, loading, error } = useRegistration()
  const navigate = useNavigate()

  const signUpPage = useSelector((state: RootState) => state.signuppage)
  const password = signUpPage?.password || ''
  const birthdayList = signUpPage?.birthday || { month: '', day: '', year: '' }
  const [name, setName] = React.useState(signUpPage?.username || '')
  const [nickname, setNickname] = React.useState(signUpPage?.nickname || '')
  const [email, setEmail] = React.useState(signUpPage?.email || '')
  const bithdayString = `${signUpPage?.birthday.day} ${signUpPage?.birthday.month} ${signUpPage?.birthday.year}`
  const [birthday, setBirthday] = React.useState(bithdayString || '')

  // const [singUpPageState, setSignUpPageState] = React.useState(signUpPage)
  // const updateSignUpPageState = <K, V>(key: keyof SignupPageState, value: unknown) => {
  //   setSignUpPageState({
  //     ...setSignUpPageState,
  //     [key]: value,
  //   })
  // }

  // updateSignUpPageState('')

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

  if (user) {
    localStorage.setItem('user', user)
    navigate('/login')
  }

  return (
    <BaseModal>
      <div className={styles.module__top}>
        <div className={styles.top__back}>
          <div
            className={styles.back__button}
            aria-label="Back"
            role="button"
            onClick={() => setModalStep('second')}
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
              onClick={setModalStep}
            />
          </div>
          <div className="flex w-full">
            <InputField
              value={nickname}
              setValue={setNickname}
              placeholder={'Nickname'}
              isConfirmed={true}
              isError={!!error}
              onClick={setModalStep}
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
        <div
          className={
            styles.main__next +
            'w-[440px] h-[52px] my-[24px] bg-[#1D9BF0] dark:bg-[#1D9BF0]' +
            (loading ? 'bg-[#8a8a8a]' : '')
          }
          role="button"
          onClick={e => (!loading ? registerHandler() : e.preventDefault())}
        >
          <span
            className={styles.next__text + 'text-[white] dark:text-[white]'}
          >
            {t('next')}
          </span>
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
    text-[rgb(15,20,25)] dark:text-[rgb(231,233,234)]
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
    text-[rgb(15,20,25)] dark:text-[rgb(231,233,234)]
  `,
  main__registrationhint: `
    mt-[16px]
    text-[rgb(113,118,123)]
    text-[14px]
    leading-[16px]
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
}
