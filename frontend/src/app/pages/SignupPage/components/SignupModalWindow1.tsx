import * as React from 'react'
import 'index.css'
import { useTranslation } from 'react-i18next'

import BaseModal from 'app/components/BaseModal'
import GoogleAuth from 'app/components/GoogleAuth'
import SvgLogo from 'app/components/SVG/SvgLogo'
import SvgButtonClose from 'app/components/SVG/SvgButtonClose'

export type SignupModalWindow1Props = {
  goToNextStep: () => void
}

export default function SignupModalWindow1({
  goToNextStep,
}: SignupModalWindow1Props) {
  const { t } = useTranslation('signup')

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') goToNextStep()
    e.preventDefault()
  }

  return (
    <BaseModal>
      <div className={styles.module__top}>
        <div className={styles.top__close}>
          <div
            className={styles.close__button}
            aria-label="Close"
            role="button"
          >
            <SvgButtonClose />
          </div>
        </div>
        <div className={styles.top__logo}>
          <SvgLogo />
        </div>
        <div className={styles.top__space} />
      </div>
      <div className={styles.module__main}>
        <div className={styles.main__title} aria-level={1} role="heading">
          <h1 className={styles.title__h1}>{t('join')}</h1>
        </div>
        <GoogleAuth />
        <div className={styles.main__separator}>
          <div className={styles.separator__line}></div>
          <div className={styles.separator__text}>{t('separator')}</div>
          <div className={styles.separator__line}></div>
        </div>
        <div
          className={styles.main__next}
          role="button"
          tabIndex={0}
          onClick={() => goToNextStep()}
          onKeyDown={handleKeyDown}
        >
          <span className={styles.next__text}>{t('signup')}</span>
        </div>
        <div className={styles.main__registrationHint1}>
          {t('registrationHint1')}
        </div>
        <div className={styles.main__hint}>
          <span className={styles.hint__left}>{t('hint')}</span>
          <a href="/login">
            <span className={styles.hint__right} role="button">
              {t('signin')}
            </span>
          </a>
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
  top__close: `
    flex
    basis-1/2
    items-center
  `,
  close__button: `
    p-2
    ml-[-8px]
    rounded-full
    hover:bg-[rgba(15,20,25,0.1)] dark:hover:bg-[rgba(239,243,244,0.1)]
  `,
  top__logo: `
    flex
    items-center
  `,
  top__space: `
    flex
    basis-1/2
  `,
  module__main: `
    flex
    flex-col
    mx-auto
    px-[32px]
    pt-[112px]
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
  main__separator: `
    flex
  `,
  separator__line: `
    self-center
    w-full
    h-[1px]
    mx-[4px]
    bg-primaryBorder-light dark:bg-primaryBorder-dark
  `,
  separator__text: `
    mx-[4px]
    text-[17px]
    leading-[20px]
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
    select-none
    hover:bg-[#151515] dark:hover:bg-[#eaeaea]
    transition-colors 
    duration-200
  `,
  next__text: `
    text-white dark:text-black
    font-bold
  `,
  main__registrationHint1: `
    w-[300px]
    text-secondary
    leading-[16px]
    text-[13px]
  `,
  main__hint: `
    w-[300px]
    mt-[40px]
    text-[15px]
    leading-[20px]
  `,
  hint__left: `
    text-secondary
  `,
  hint__right: `
    text-blue
    hover:underline
  `,
}
