import * as React from 'react'
import 'index.css'
import SvgLike from './SVG/SvgLike'
import SvgComment from './SVG/SvgComment'
import SvgRetwit from './SVG/SvgRetwit'

type TwitProps = {
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

export default function TwitsUnit(props: TwitProps) {
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
            <SvgLike />
            <span className={styles.like__text}>{props.likes}</span>
          </div>
          <div className={styles.buttons__comment}>
            <SvgComment />
            <span className={styles.comment__text}>{props.comments}</span>
          </div>
          <div className={styles.buttons__retwit}>
            <SvgRetwit />
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
    hover:bg-[rgba(0,0,0,0.03)] dark:hover:bg-[rgba(255,255,255,0.03)] 
    duration-200
    border-b 
    border-[rgb(239,243,244)] dark:border-[#2f3336]
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
    text-black dark:text-white
  `,
  title__nickname: `
    ml-1 
    text-[rgb(83,100,113)] dark:text-[#71767b] 
  `,
  title__date: `
    ml-1 
    text-[rgb(83,100,113)] dark:text-[#71767b] 
  `,
  twitBox__article: `
    text-black dark:text-white
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
    text-[rgb(83,100,113)] dark:text-[#71767b]
    hover:text-[rgb(249,24,128)]
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
    text-[rgb(83,100,113)] dark:text-[#71767b]
    hover:text-[rgb(29,155,240)]
  `,
  comment__text: `
    pl-1 
    text-sm
  `,
  buttons__retwit: `
    flex 
    flex-row 
    items-center 
    text-[rgb(83,100,113)] dark:text-[#71767b]
    hover:text-[rgb(0,186,124)]
  `,
  retwit__text: `
    pl-1 
    text-sm
  `,
}
