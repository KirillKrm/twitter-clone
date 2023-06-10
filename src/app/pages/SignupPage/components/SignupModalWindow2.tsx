import * as React from 'react'
import 'index.css'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { RootState } from 'types'

import BaseModal from 'app/components/BaseModal'
import InputEmail from 'app/components/Input/InputEmail'
import InputName from 'app/components/Input/InputName'
import InputField from 'app/components/Input/InputField'
import SelectField from 'app/components/SelectField'
import SvgButtonBack from 'app/components/SVG/SvgButtonBack'
import { signUpPageActions } from 'app/pages/SignupPage/slice/index'

export type Month = {
  name: string
}

export type Day = {
  name: number
}
export type Year = {
  name: number
}

const monthList: Month[] = Array.from({ length: 12 }, (_, i) => ({
  name: new Date(2000, i, 1).toLocaleString('en-US', { month: 'long' }),
}))

const dayList: Day[] = Array.from({ length: 31 }, (_, i) => ({ name: i + 1 }))

const currentYear = new Date().getFullYear()
const yearList: Year[] = Array.from({ length: currentYear - 1899 }, (_, i) => ({
  name: currentYear - i,
}))

// REFACTOR types
export type SignupModalWindow2Props = {
  goToNextStep: any
  goToPrevStep: any
}

export default function SignupModalWindow2({
  goToNextStep,
  goToPrevStep,
}: SignupModalWindow2Props) {
  const { t } = useTranslation('signup')
  const signUpPage = useSelector((state: RootState) => state.signuppage)
  const [name, setName] = React.useState(signUpPage?.username || 'Uber')
  const [nickname, setNickname] = React.useState(
    signUpPage?.nickname || 'Uber228',
  )
  const [password, setPassword] = React.useState(
    signUpPage?.password || '123456789',
  )
  const [email, setEmail] = React.useState(
    signUpPage?.email || 'qwerty@qqq.com',
  )
  const [month, setMonth] = React.useState(signUpPage?.birthday.month)
  const [day, setDay] = React.useState(signUpPage?.birthday.day)
  const [year, setYear] = React.useState(signUpPage?.birthday.year)

  const [nameValid, setNameValid] = React.useState(false)
  const [nicknameValid, setNicknameValid] = React.useState(false)
  const [passwordValid, setPasswordValid] = React.useState(false)
  const [emailValid, setEmailValid] = React.useState(false)
  const [monthValid, setMonthValid] = React.useState(false)
  const [dayValid, setDayValid] = React.useState(false)
  const [yearValid, setYearValid] = React.useState(false)
  const formValid =
    nameValid &&
    emailValid &&
    monthValid &&
    dayValid &&
    yearValid &&
    nicknameValid &&
    passwordValid

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(signUpPageActions.changeName(name))
    dispatch(signUpPageActions.changeNickname(nickname))
    dispatch(signUpPageActions.changeEmail(email))
    dispatch(signUpPageActions.changePassword(password))
    dispatch(signUpPageActions.changeBirthday({ month, day, year }))
  }, [name, nickname, email, password, month, day, year, dispatch])

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
          <h2>{t('step1')}</h2>
        </div>
      </div>
      <div className={styles.module__main + 'w-[440px] mx-[80px] px-0'}>
        <div className={styles.main__title} aria-level={1} role="heading">
          <h1 className={styles.title__h1}>{t('create')}</h1>
        </div>
        <div className="flex flex-row">
          <div className="flex w-full mr-4">
            <InputName
              value={name}
              setValue={setName}
              setValid={setNameValid}
              placeholder={t('name')}
              maxLength={50}
            />
          </div>
          <div className="flex w-full">
            <InputName
              value={nickname}
              setValue={setNickname}
              setValid={setNicknameValid}
              placeholder={'Nickname'}
              maxLength={50}
            />
          </div>
        </div>
        <InputEmail
          value={email}
          setValue={setEmail}
          setValid={setEmailValid}
          placeholder={t('email')}
        />
        <InputField
          value={password}
          setValue={setPassword}
          setValid={setPasswordValid}
          placeholder={'Password'}
          isPassword={true}
        />
        <div className={styles.main__birthday}>
          <span>{t('birthday')}</span>
        </div>
        <div className={styles.main__birthdayhint}>
          <span>{t('birthdayHint')}</span>
        </div>
        <div className={styles.main__select}>
          <div className={styles.select__month}>
            <SelectField
              list={monthList}
              placeholder={t('month')}
              setValid={setMonthValid}
              value={month}
              setValue={setMonth}
            />
          </div>
          <div className={styles.select__date}>
            <SelectField
              list={dayList}
              placeholder={t('day')}
              setValid={setDayValid}
              value={day}
              setValue={setDay}
            />
          </div>
          <div className={styles.select__date}>
            <SelectField
              list={yearList}
              placeholder={t('year')}
              setValid={setYearValid}
              value={year}
              setValue={setYear}
            />
          </div>
        </div>
        <button
          className={styles.main__next + 'w-[440px] h-[52px]'}
          onClick={() => {
            goToNextStep()
          }}
          disabled={!formValid}
        >
          <span className={styles.next__text}>{t('next')}</span>
        </button>
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
  main__birthday: `
    mt-[20px]
    mb-[8px]
    text-[15px]
    font-bold
    leading-[20px]
  `,
  main__birthdayhint: `
    mb-[4px]
    text-secondaryText-light dark:text-secondaryText-dark
    text-[14px]
    leading-[16px]
  `,
  main__select: `
    flex
    flex-row
    my-[16px]
    gap-3
  `,
  select__month: `
    flex
    grow-[2]
  `,
  select__date: `
    flex
    flex-grow
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
    disabled:opacity-50
  `,
  next__text: `
    text-white dark:text-black
    font-bold
  `,
}
