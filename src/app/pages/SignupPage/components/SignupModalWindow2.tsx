import * as React from 'react'
import 'index.css'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { RootState } from 'types'

import BaseModal from 'app/components/BaseModal'
import InputEmail from 'app/components/Input/InputEmail'
import InputName from 'app/components/Input/InputName'
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

const monthlist: Month[] = [
  { name: 'January' },
  { name: 'February' },
  { name: 'March' },
  { name: 'April' },
  { name: 'May' },
  { name: 'June' },
  { name: 'July' },
  { name: 'August' },
  { name: 'September' },
  { name: 'October' },
  { name: 'November' },
  { name: 'December' },
]

const daylist: Day[] = []
for (let i = 1; i <= 31; i++) {
  let obj = {
    name: i,
  }
  daylist.push(obj)
}

const yearlist: Year[] = []
for (let i = new Date().getFullYear(); i >= 1900; i--) {
  let obj = {
    name: i,
  }
  yearlist.push(obj)
}

const setData = (stepName: string, res: { [key: string]: any }): void => {
  // axios.post({
  //   path: `${apiUrl}/register`,
  //   body: res
  // })
}

export default function SignupModalWindow2({ setModalStep }) {
  const { t } = useTranslation('signup')
  const signUpPage = useSelector((state: RootState) => state.signuppage)
  const [name, setName] = React.useState(signUpPage?.name || '')
  const [email, setEmail] = React.useState(signUpPage?.email || '')
  const [month, setMonth] = React.useState(signUpPage?.birthday.month)
  const [day, setDay] = React.useState(signUpPage?.birthday.day)
  const [year, setYear] = React.useState(signUpPage?.birthday.year)
  const [nameValid, setNameValid] = React.useState(false)
  const [emailValid, setEmailValid] = React.useState(false)
  const [monthValid, setMonthValid] = React.useState(false)
  const [dayValid, setDayValid] = React.useState(false)
  const [yearValid, setYearValid] = React.useState(false)
  const formValid =
    nameValid && emailValid && monthValid && dayValid && yearValid
  // TODO
  const res = {
    name: 'string',
    email: 'email',
    birth: {
      day: 6,
      month: 'april',
      year: '2001',
    },
  }

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(signUpPageActions.changeName(name))
    dispatch(signUpPageActions.changeEmail(email))
    dispatch(signUpPageActions.changeBirthday({ month, day, year }))
  }, [name, email, month, day, year, dispatch])

  return (
    <BaseModal>
      <div className={styles.module__top}>
        <div className={styles.top__back}>
          <div
            className={styles.back__button}
            aria-label="Back"
            role="button"
            onClick={() => setModalStep('first')}
          >
            <SvgButtonBack />
          </div>
        </div>
        <div className={styles.top__text}>
          <h2>{t('step1')}</h2>
        </div>
      </div>
      <form className={styles.module__main + 'w-[440px] mx-[80px] px-0'}>
        <div className={styles.main__title} aria-level={1} role="heading">
          <h1 className={styles.title__h1}>{t('create')}</h1>
        </div>
        <InputName
          value={name}
          setValue={setName}
          setValid={setNameValid}
          placeholder={t('name')}
          maxLength={50}
        />
        <InputEmail
          value={email}
          setValue={setEmail}
          setValid={setEmailValid}
          placeholder={t('email')}
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
              list={monthlist}
              placeholder={t('month')}
              setValid={setMonthValid}
              value={month}
              setValue={setMonth}
            />
          </div>
          <div className={styles.select__day}>
            <SelectField
              list={daylist}
              placeholder={t('day')}
              setValid={setDayValid}
              value={day}
              setValue={setDay}
            />
          </div>
          <div className={styles.select__year}>
            <SelectField
              list={yearlist}
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
            setData('second', res)
            setModalStep('third')
          }}
          disabled={!formValid}
        >
          <span className={styles.next__text}>{t('next')}</span>
        </button>
      </form>
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
  main__birthday: `
    mt-[20px]
    mb-[8px]
    text-[rgb(15,20,25)] dark:text-[rgb(231,233,234)]
    text-[15px]
    font-bold
    leading-[20px]
  `,
  main__birthdayhint: `
    mb-[4px]
    text-[rgb(113,118,123)]
    text-[14px]
    leading-[16px]
  `,
  main__select: `
    flex
    flex-row
    my-[16px]
  `,
  select__month: `
    flex
    grow-[2]
    mr-[12px]
  `,
  select__day: `
    flex
    flex-grow
    mr-[12px]
  `,
  select__year: `
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