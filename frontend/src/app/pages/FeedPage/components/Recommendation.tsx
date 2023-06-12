import 'index.css'
import Avatar from 'app/components/Avatar'

export type RecommendationProps = {
  name: string
  nickname: string
  avatar: string
}

export default function Recommendation({
  name,
  nickname,
  avatar,
}: RecommendationProps) {
  return (
    <div key={nickname} className={styles.container}>
      <Avatar src={avatar} />
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
    ml-3
  `,
  text__name: `
    flex 
    font-bold 
    text-base
  `,
  text__nickname: `
    flex 
    text-secondary
    text-base
  `,
}
