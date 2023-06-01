import 'index.css'
import Image from 'app/components/Image'

export type RecommendationProps = {
  name: string
  nickname: string
  avatar: string
}

export default function RecommendationsUnit({
  name,
  nickname,
  avatar,
}: RecommendationProps) {
  return (
    <div key={nickname} className={styles.container}>
      <Image img={avatar} />
      <div className={styles.container__text}>
        <span className={styles.text__name}>{name}</span>
        <span className={styles.text__nickname}>{nickname}</span>
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
    hover:bg-[rgba(0,0,0,0.03)] dark:hover:bg-[rgba(255,255,255,0.03)] 
    transition-colors 
    duration-200
  `,
  container__image: `
    flex 
    w-12 
    h-12 
    rounded-full 
    mr-3
    select-none
  `,
  container__text: `
    flex 
    flex-col
  `,
  text__name: `
    flex 
    text-black dark:text-white 
    font-bold 
    text-base
  `,
  text__nickname: `
    flex 
    text-[#536471] dark:text-[#71767b] 
    text-base
  `,
}
