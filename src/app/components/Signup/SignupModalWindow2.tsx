import * as React from 'react'
import 'index.css'
import { useTranslation } from 'react-i18next'
import InputField from 'app/components/InputField'
import SelectField from 'app/components/SelectField'

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

export default function SignupModalWindow2({ setModalStep }) {
  const { t } = useTranslation('signup')
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [error, setError] = React.useState(false)
  const refInputName = React.useRef<HTMLInputElement>(null)
  const refInputEmail = React.useRef<HTMLInputElement>(null)
  const emailExp = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i

  console.log('Name: ', name)
  console.log('Email: ', email)

  const validation = () => {
    if (!emailExp.test(email)) {
      console.log('Wrong email!')
    }
  }

  return (
    <form className={styles.container__module}>
      <div className={styles.module__top}>
        <div className={styles.top__back}>
          <div
            className={styles.back__button}
            aria-label="Back"
            role="button"
            onClick={() => setModalStep('first')}
          >
            <svg className={styles.button__svg} viewBox="0 0 24 24">
              <g className={styles.button__g}>
                <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
              </g>
            </svg>
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
        <InputField value={name} setValue={setName} placeholder={t('name')} />
        <InputField
          value={email}
          setValue={setEmail}
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
            <SelectField list={monthlist} placeholder={t('month')} />
          </div>
          <div className={styles.select__day}>
            <SelectField list={daylist} placeholder={t('day')} />
          </div>
          <div className={styles.select__year}>
            <SelectField list={yearlist} placeholder={t('year')} />
          </div>
        </div>
        <div
          className={styles.main__next + 'w-[440px] h-[52px]'}
          role="button"
          onClick={() => setModalStep('third')}
        >
          <span className={styles.next__text}>{t('next')}</span>
        </div>
      </div>
    </form>
  )
}

const styles = {
  container__module: `
    flex
    flex-col
    self-center
    justify-self-center
    w-[600px]
    h-[650px]
    bg-white dark:bg-black
    rounded-2xl
  `,
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
  button__svg: `
    w-5 
    h-5
  `,
  button__g: `
    text-[rgb(15,20,25)] dark:text-white
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
  `,
  next__text: `
    text-white dark:text-black
    font-bold
  `,
}