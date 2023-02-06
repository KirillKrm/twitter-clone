import * as React from 'react'
import 'index.css'

type Twit = {
  id: string
  avatar: string
  name: string
  nickname: string
  date: string
  text: string
  likes: number
  comments: number
  retwits: number
}

export default function TwitsUnit(props: Twit) {
  return (
    <div key={props.id} className={styles.container}>
      <img
        className={styles.container__image}
        alt="avatar"
        src={props.avatar}
      />
      <div className={styles.container__twitBox}>
        <div className={styles.twitBox__title}>
          <a href="/#">
            <span className={styles.title__name}>{props.name}</span>
          </a>
          <div className={styles.title__nickname}>{props.nickname}</div>
          <div className={styles.title__date}>{props.date}</div>
        </div>
        <div className={styles.twitBox__article}>{props.text}</div>
        <div className={styles.twitBox__buttons}>
          <div className={styles.buttons__like}>
            <svg viewBox="0 0 24 24" className={styles.like__svg}>
              <g>
                <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
              </g>
            </svg>
            <span className={styles.like__text}>{props.likes}</span>
          </div>
          <div className={styles.buttons__comment}>
            <svg viewBox="0 0 24 24" className={styles.comment__svg}>
              <g>
                <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
              </g>
            </svg>
            <span className={styles.comment__text}>{props.comments}</span>
          </div>
          <div className={styles.buttons__retwit}>
            <svg viewBox="0 0 24 24" className={styles.retwit__svg}>
              <g>
                <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
              </g>
            </svg>
            <span className={styles.retwit__text}>{props.retwits}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: `
    flex 
    w-full 
    p-3 
    hover:bg-[rgba(255,255,255,0.03)] 
    border-b 
    border-[#2f3336]
  `,
  container__image: `
    flex 
    w-10 
    h-10 
    rounded-full 
    mr-3
  `,
  container__twitBox: `
    flex 
    flex-col
  `,
  twitBox__title: `
   flex 
   flex-row
  `,
  title__name: `
    font-bold 
    text-white
  `,
  title__nickname: `
    ml-1 
    text-[#71767b]
  `,
  title__date: `
    ml-1 
    text-[#71767b]
  `,
  twitBox__article: `
    text-white
  `,
  twitBox__buttons: `
    flex 
    flex-row
  `,
  buttons__like: `
    flex 
    flex-row 
    items-center 
    mr-12 
    text-[#71767b] 
    hover:text-[rgb(249,24,128)]
  `,
  like__svg: `
    w-9 
    h-9 
    p-2 
    rounded-full 
    hover:fill-[rgb(249,24,128)] 
    hover:bg-[rgb(249,24,128,0.1)]
  `,
  like__text: `
    pl-1 
    text-sm
  `,
  buttons__comment: `
    flex 
    flex-row 
    items-center 
    mr-12 
    text-[#71767b] 
    hover:text-[rgb(29,155,240)]
  `,
  comment__svg: `
    w-9 
    h-9 
    p-2 
    rounded-full 
    hover:fill-[rgb(29,155,240)] 
    hover:bg-[rgb(29,155,240,0.1)]
  `,
  comment__text: `
    pl-1 
    text-sm
  `,
  buttons__retwit: `
    flex 
    flex-row 
    items-center 
    text-[#71767b] 
    hover:text-[rgb(0,186,124)]
  `,
  retwit__svg: `
    w-9 
    h-9 
    p-2 
    rounded-full 
    hover:fill-[rgb(0,186,124)] 
    hover:bg-[rgb(0,186,124,0.1)]
  `,
  retwit__text: `
    pl-1 
    text-sm
  `,
}
