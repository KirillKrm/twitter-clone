import 'index.css'

import { useAuth } from 'app/hooks/useAuth'

import SvgAccount from './SVG/SvgAccount'

export default function Account() {
  const { user } = useAuth()

  const avatar =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/375px-Flag_of_Ukraine.svg.png'

  if (!user) {
    return <></>
  }

  return (
    <div className={styles.container}>
      <img className={styles.container__image} alt="avatar" src={avatar} />
      <div className={styles.container__rightblock}>
        <div className={styles.rightblock__text}>
          <span className={styles.text__name}>{user.username}</span>
          <span className={styles.text__nickname}>{'@' + user.nickname}</span>
        </div>
        <SvgAccount />
      </div>
    </div>
  )
}

const styles = {
  container: `
    flex 
    items-center 
    w-max 
    p-3 
    mb-3
    rounded-full 
    hover:bg-[rgba(15,20,25,0.1)] dark:hover:bg-[rgba(231,233,234,0.1)] 
    transition-colors 
    duration-200
    select-none
    max-[500px]:hidden
  `,
  container__image: `
    flex 
    w-10 
    h-10 
    rounded-full 
    mr-3
    max-xl:mr-0
  `,
  container__rightblock: `
    flex
    flex-row
    items-center
    max-xl:hidden
  `,
  rightblock__text: `
    flex 
    flex-col 
    mr-3 
    text-black dark:text-white
  `,
  text__name: `
    whitespace-nowrap 
    overflow-hidden 
    text-ellipsis 
    text-[15px] 
    font-bold
  `,
  text__nickname: `
    text-[#536471] dark:text-[#71767b] 
    text-[15px]
  `,
}
