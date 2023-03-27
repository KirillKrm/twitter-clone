import * as React from 'react'
import 'index.css'
import SvgAccount from './SVG/SvgAccount'

export default function Account() {
  const mockData = {
    name: 'Kyrylo Karmazin',
    username: 'KirillKr231',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/375px-Flag_of_Ukraine.svg.png',
  }

  return (
    <div className={styles.container}>
      <img
        className={styles.container__image}
        alt="avatar"
        src={mockData.avatar}
      />
      <div className={styles.container__text}>
        <span className={styles.text__name}>{mockData.name}</span>
        <span className={styles.text__nickname}>{'@' + mockData.username}</span>
      </div>
      <SvgAccount />
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
    hover:bg-[rgb(15,20,25,0.1)] dark:hover:bg-[rgb(231,233,234,0.1)] 
    transition-colors 
    duration-200
  `,
  container__image: `
    flex 
    w-10 
    h-10 
    rounded-full 
    mr-3
  `,
  container__text: `
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
    text-[rgb(83,100,113)] dark:text-[#71767b] 
    text-[15px]
  `,
}
