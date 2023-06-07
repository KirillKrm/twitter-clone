import 'index.css'
import * as React from 'react'
import classnames from 'classnames'
import { useNavigate } from 'react-router-dom'

import { useAuth } from 'app/hooks/useAuth'
import SvgAccount from './SVG/SvgAccount'

export default function Account() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [popup, setPopup] = React.useState(false)
  const popupStyle = classnames(styles.popup, { hidden: !popup })

  const avatar =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/375px-Flag_of_Ukraine.svg.png'

  const handleOnCLickAccount = () => {
    setPopup(!popup)
  }
  const handleOnCLickLogout = () => {
    localStorage.removeItem('jwtAccessToken')
    localStorage.removeItem('jwtRefreshToken')
    navigate('/login')
  }

  if (!user) {
    return <></>
  }

  return (
    <>
      <div className={popupStyle}>
        <div className={styles.popup__logout} onClick={handleOnCLickLogout}>
          Log out @{user.nickname}
        </div>
        <svg className={styles.popup__triangle} viewBox="0 0 24 24">
          <g>
            <path d="M22 17H2L12 6l10 11z" />
          </g>
        </svg>
      </div>
      <div className={styles.container} onClick={handleOnCLickAccount}>
        <img className={styles.container__image} alt="avatar" src={avatar} />
        <div className={styles.container__rightblock}>
          <div className={styles.rightblock__text}>
            <span className={styles.text__name}>{user.username}</span>
            <span className={styles.text__nickname}>{'@' + user.nickname}</span>
          </div>
          <SvgAccount />
        </div>
      </div>
    </>
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
    cursor-pointer
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
  popup: `
    flex
    fixed
    bottom-24
    w-[300px]
    h-[68px]
    items-center
    bg-black
    rounded-[16px]
    shadow-[0px_0px_15px_rgba(255,255,255,0.2),0px_0px_3px_1px_rgba(255,255,255,0.15)]
  `,
  popup__logout: `
    flex
    w-full
    py-3
    px-4
    items-center
    text-white
    hover:bg-[#16181C]
  `,
  popup__triangle: `
    flex
    absolute
    left-20
    bottom-[-15px]
    w-6
    drop-shadow-[1px_-1px_1px_#333639]
    rotate-180
  `,
}
