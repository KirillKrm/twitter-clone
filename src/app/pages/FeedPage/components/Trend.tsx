import * as React from 'react'
import 'index.css'

export type TrendProps = {
  name: string
  twitsAmount: number
}

export default function Trend({ name, twitsAmount }: TrendProps) {
  return (
    <div key={name} className={styles.container}>
      <div className={styles.container__name}>{name}</div>
      <span className={styles.container__twits}>Twits: {twitsAmount}</span>
    </div>
  )
}

const styles = {
  container: `
    flex 
    flex-col 
    items-left 
    px-4 
    py-3 
    hover:bg-[rgba(0,0,0,0.03)] dark:hover:bg-[rgba(255,255,255,0.03)] 
    transition-colors duration-200
  `,
  container__name: `
    flex  
    font-bold 
    text-lg
  `,
  container__twits: `
    flex 
    text-secondary
    text-base
  `,
}
