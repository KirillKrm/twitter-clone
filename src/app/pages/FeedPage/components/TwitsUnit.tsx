import * as React from 'react'
import 'index.css'

import SvgLike from 'app/components/SVG/SvgLike'
import SvgComment from 'app/components/SVG/SvgComment'
import SvgRetwit from 'app/components/SVG/SvgRetwit'
import { Twit } from 'types/Twit'

export type TwitUnitProps = {
  data: Twit
}

const defaultAvatarUrl =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PCw0QEQ8PChINDQ0IDQ0NCA8ICggOGBEWFhURExUYHSggGBo0GxMVITEhJSkrLjouFx8zODMtNygtLisBCgoKDQ0NDg0NDisZFRkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAGQAZAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwQFAgEGB//EADAQAAIBAgMHAwMDBQAAAAAAAAABAgMRBBIxBSEiMkFhcVFSYkKBghMj0XKRkqHB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD9xAOKlRRi23ZLVgdNlHEbShHdH9x9uX+5QxuNlUulwx9Pd5KgFqptCpLrk7JZSvKbercvLzHIKgn9iWniakdJyXa+aJEANGjtWS5kpd1ws0qGIjNXi0/VdYnzh1Cbi003FrRoD6cFHA45T4ZcMv8AUy8RQAAeNmFtDF/qSsuWL3fLuX9q18tPKtZ8P49TFAAAqABbpYCb1tDs+YCoC9LZz6ST8oq1qEocyt6NcsgIwAB6nZp71biTRu7PxX6kN/NHhl37mCTYOvkqKXTll4A+jB4mCKwdp1M1aXx4EVTqpK8pP1bkclQAAGls/D2Sm9ZcvxRcPIqyXZZT0ihzOCkmnvT1R0AMbEUsk2tbaP3IiL21I74P1TiUSoAADe2dPNRjf6f239gZOHrOMbd7giq7WoJcXDLVmvk7ERUAABtYapmpxfbK/JIY+FxLpt9U9UalLEQlo14fDIipAeOSXVLyypiccldR4n7vpiBBtGpeol7Vl+5UDYKgAAPVG4NTZuHzUr+smAI9sUbSU/VZX5M4+jxNFTg4vro/az56pFxk09zTs0ByATYbDOb9qWsgISWOHm9Ivy1lNSjh4w0X5PmJSKyHg6ntb/KJFODjqnHyjcDXh9mBgg0sRgU7uPC/b9MjOlFptO6tqmVHh7GN2kt93lSPDQ2ThryzvRcvdgauHp5YRj6KwJARQo7Qwf6izR5krf1ovAD5uhQcp5d8bc3xNiEUkktyWiLEqSbvo3q0tSKUWv5A5AAAAACrjsPmjdc0V/kvaWiSFL13dgMbBYR1JdVFc0v+I3oQUUktySskIxSVkrW6I6AAAAAAAAA4dNePBFNWAA56kkKaYAEqikegAAAAAAH/2Q=='

export default function TwitsUnit({
  data: {
    id,
    author,
    content,
    likes = 0,
    comments = 0,
    retwits = 0,
    createdAt,
    updatedAt,
  },
}: TwitUnitProps) {
  const avatar = author.avatar ?? defaultAvatarUrl

  return (
    <div key={id} className={styles.container}>
      <img className={styles.container__image} alt="avatar" src={avatar} />
      <div className={styles.container__twitBox}>
        <div className={styles.twitBox__title}>
          <a href="/#">
            <span className={styles.title__name}>{author.username}</span>
          </a>
          <div className={styles.title__nickname}>{author.nickname}</div>
          <div className={styles.title__date}>{createdAt.toString()}</div>
        </div>
        <div className={styles.twitBox__article}>{content}</div>
        <div className={styles.twitBox__buttons}>
          <div className={styles.buttons__like}>
            <SvgLike />
            <span className={styles.like__text}>{likes}</span>
          </div>
          <div className={styles.buttons__comment}>
            <SvgComment />
            <span className={styles.comment__text}>{comments}</span>
          </div>
          <div className={styles.buttons__retwit}>
            <SvgRetwit />
            <span className={styles.retwit__text}>{retwits}</span>
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
