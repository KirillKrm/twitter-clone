import 'index.css'

import SvgLike from 'app/components/SVG/SvgLike'
import SvgComment from 'app/components/SVG/SvgComment'
import SvgRetwit from 'app/components/SVG/SvgRetwit'
import { Twit } from 'types/Twit'
import Image from 'app/components/Image'

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

  function elapsedDate(time: any) {
    const date = new Date((time || '').replace(/-/g, '/').replace(/[TZ]/g, ' '))
    const sec_diff = (new Date().getTime() - date.getTime()) / 1000
    const day_diff = Math.floor(sec_diff / 86400)

    if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31) return

    return (
      (day_diff === 0 &&
        ((sec_diff < 60 && 'just now') ||
          (sec_diff < 120 && '1 minute ago') ||
          (sec_diff < 3600 && Math.floor(sec_diff / 60) + ' minutes ago') ||
          (sec_diff < 7200 && '1 hour ago') ||
          (sec_diff < 86400 && Math.floor(sec_diff / 3600) + ' hours ago'))) ||
      (day_diff === 1 && 'Yesterday') ||
      (day_diff < 7 && day_diff + ' days ago') ||
      (day_diff === 7 && 'week ago') ||
      (day_diff < 31 && Math.ceil(day_diff / 7) + ' weeks ago') ||
      (day_diff === 31 && 'mounth ago') ||
      (day_diff < 365 && Math.ceil(day_diff / 31) + ' months ago') ||
      (day_diff === 365 && 'year ago') ||
      (day_diff > 730 && Math.ceil(day_diff / 365) + ' years ago')
    )
  }

  return (
    <div key={id} className={styles.container}>
      <Image img={avatar} />
      <div className={styles.container__twitBox}>
        <div className={styles.twitBox__title}>
          <a href="/#">
            <span className={styles.title__name}>{author.username}</span>
          </a>
          <div className={styles.title__nickname + 'ml-1'}>
            {'@' + author.nickname}
          </div>
          <div className={styles.title__separator + 'px-1'}>·</div>
          <div>{elapsedDate(createdAt)}</div>
        </div>
        <div className={styles.twitBox__article}>{content}</div>
        <div className={styles.twitBox__buttons}>
          <div className={styles.buttons__box + 'hover:text-[#f91880]'}>
            <SvgLike />
            <span className={styles.box__text}>{likes}</span>
          </div>
          <div className={styles.buttons__box + 'hover:text-[#1d9bf0]'}>
            <SvgComment />
            <span className={styles.box__text}>{comments}</span>
          </div>
          <div className={styles.buttons__box + 'hover:text-[#00ba7c]'}>
            <SvgRetwit />
            <span className={styles.box__text}>{retwits}</span>
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
    border-[#eff3f4] dark:border-[#2f3336]
  `,
  container__twitBox: `
    flex 
    flex-col
    w-full
  `,
  twitBox__title: `
    flex 
    flex-row
    text-[#536471] dark:text-[#71767b] 
  `,
  title__name: `
    font-bold 
    text-black dark:text-white
  `,
  title__nickname: `
    ml-1 
  `,
  title__separator: `
    px-1
  `,
  twitBox__article: `
    text-black dark:text-white
  `,
  twitBox__buttons: `
    flex 
    flex-row
    max-w-[425px]
    justify-between
    select-none
  `,
  buttons__box: `
    flex 
    flex-row 
    items-center 
    text-[#536471] dark:text-[#71767b]
    hover:text-[#f91880]
  `,
  box__text: `
    pl-1 
    text-sm
  `,
}
