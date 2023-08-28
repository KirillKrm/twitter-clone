import * as React from 'react'
import 'index.css'
import { ReactI18NextChild } from 'react-i18next'

type BaseModalProps = {
  children: ReactI18NextChild | Iterable<ReactI18NextChild>
}

export default function BaseModal({ children }: BaseModalProps) {
  return (
    <div role="dialog" className={styles.container__module}>
      {children}
    </div>
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
    bg-primary
    rounded-2xl
  `,
}
