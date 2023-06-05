import 'index.css'

import SvgLike from 'app/components/SVG/SvgLike'
import SvgComment from 'app/components/SVG/SvgComment'
import SvgRetwit from 'app/components/SVG/SvgRetwit'
import { Twit as TwitTypes } from 'types/Twit'
import Avatar from 'app/components/Avatar'

export type TwitProps = {
  data: TwitTypes
}

export default function Twit({
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
}: TwitProps) {
  const elapsedDate = (time: any) => {
    const date = new Date((time || '').replace(/-/g, '/').replace(/[TZ]/g, ' '))
    const secDiff = (new Date().getTime() - date.getTime()) / 1000
    const dayDiff = Math.floor(secDiff / 86400)

    if (isNaN(dayDiff) || dayDiff < 0) return

    if (dayDiff === 0) {
      if (secDiff < 60) return 'just now'
      if (secDiff < 120) return '1 minute ago'
      if (secDiff < 3600) return Math.floor(secDiff / 60) + ' minutes ago'
      if (secDiff < 7200) return '1 hour ago'
      if (secDiff < 86400) return Math.floor(secDiff / 3600) + ' hours ago'
    } else if (dayDiff === 1) {
      return 'Yesterday'
    } else if (dayDiff < 7) {
      return dayDiff + ' days ago'
    } else if (dayDiff === 7) {
      return 'week ago'
    } else if (dayDiff < 31) {
      return Math.ceil(dayDiff / 7) + ' weeks ago'
    } else if (dayDiff === 31) {
      return 'mounth ago'
    } else if (dayDiff < 365) {
      return Math.ceil(dayDiff / 31) + ' months ago'
    } else if (dayDiff === 365) {
      return 'year ago'
    } else if (dayDiff < 730) {
      return Math.ceil(dayDiff / 365) + ' years ago'
    }
  }

  return (
    <div key={id} className={styles.container}>
      <Avatar />
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