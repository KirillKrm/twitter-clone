import * as React from 'react'
import 'index.css'

type Trend = {
  name: string
  twitsAmount: number
}

export default function TrendsUnit(props: Trend) {
  return (
    <div key={props.name} className={styles.container}>
      <div className={styles.container__name}>{props.name}</div>
      <span className={styles.container__twits}>
        Twits: {props.twitsAmount}
      </span>
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
    hover:bg-[rgb(255,255,255,0.03)] 
    transition-colors duration-200
  `,
  container__name: `
    flex 
    text-white 
    font-bold 
    text-lg
  `,
  container__twits: `
    flex 
    text-[#71767b] 
    text-base
  `,
}
