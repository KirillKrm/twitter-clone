import 'index.css'
import * as React from 'react'
import classnames from 'classnames'

import { useAuth } from 'app/hooks/useAuth'
import SvgAccount from './SVG/SvgAccount'
import SvgPopupTriangle from './SVG/SvgPopupTriangle'
import Avatar from 'app/components/Avatar'

export default function Account() {
  const { user, logout } = useAuth()
  const [popup, setPopup] = React.useState(false)
  const popupStyle = classnames(styles.popup, { hidden: !popup })

  const handleOnCLickAccount = () => {
    setPopup(!popup)
  }

  if (!user) {
    return <></>
  }

  return (
    <>
      <div className={popupStyle}>
        <div className={styles.popup__logout} onClick={logout}>
          Log out @{user.nickname}
        </div>
        <SvgPopupTriangle />
      </div>
      <div className={styles.container} onClick={handleOnCLickAccount}>
        <Avatar src={user.avatar} />
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
    ml-3
    items-center
    max-xl:hidden
  `,
  rightblock__text: `
    flex 
    flex-col 
    mr-3 
  `,
  text__name: `
    whitespace-nowrap 
    overflow-hidden 
    text-ellipsis 
    text-[15px] 
    font-bold
  `,
  text__nickname: `
    text-secondaryText-light dark:text-secondaryText-dark 
    text-[15px]
  `,
  popup: `
    flex
    fixed
    bottom-24
    w-[300px]
    h-[68px]
    items-center
    bg-primaryBg-light dark:bg-primaryBg-dark
    rounded-[16px]
    shadow-[0px_0px_15px_rgba(101,119,134,0.2),0px_0px_3px_1px_rgba(101,119,134,0.15)]
    dark:shadow-[0px_0px_15px_rgba(255,255,255,0.2),0px_0px_3px_1px_rgba(255,255,255,0.15)]
  `,
  popup__logout: `
    flex
    w-full
    py-3
    px-4
    items-center
    hover:bg-secondaryBg-light dark:hover:bg-secondaryBg-dark
  `,
}
