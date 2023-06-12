import * as React from 'react'
import 'index.css'

export default function BaseModal({ children }) {
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
