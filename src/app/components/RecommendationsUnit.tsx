import * as React from 'react'
import 'index.css'

type Recommendation = {
  name: string
  nickname: string
  avatar: string
}

export default function RecommendationsUnit(props: Recommendation) {
  return (
    <div key={props.nickname} className={styles.container}>
      <img
        className={styles.container__image}
        alt="avatar"
        src={props.avatar}
      />
      <div className={styles.container__text}>
        <span className={styles.text__name}>{props.name}</span>
        <span className={styles.text__nickname}>{props.nickname}</span>
      </div>
    </div>
  )
}

const styles = {
  container: `
    flex 
    flex-row 
    items-left 
    px-4 
    py-3 
    hover:bg-[rgb(255,255,255,0.03)] 
    transition-colors 
    duration-200
  `,
  container__image: `
    flex 
    w-12 
    h-12 
    rounded-full 
    mr-3
  `,
  container__text: `
    flex 
    flex-col
  `,
  text__name: `
    flex 
    text-white 
    font-bold 
    text-base
  `,
  text__nickname: `
    flex 
    text-[#71767b] 
    text-base
  `,
}
