import 'index.css'
import * as React from 'react'
import classnames from 'classnames'

import { useAuth } from 'app/hooks/useAuth'
import SvgAccount from './SVG/SvgAccount'
import SvgPopupTriangle from './SVG/SvgPopupTriangle'
import Avatar from 'app/components/Avatar'
import { UserContext } from '../contexts/UserContext'

export default function Account() {
  const { logout } = useAuth()
  const user = React.useContext(UserContext)
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
          <span className={'text-primary'}>Log out @{user.nickname}</span>
        </div>
        <SvgPopupTriangle />
      </div>
      <div className={styles.container} onClick={handleOnCLickAccount}>
        <div className={styles.container__avatar}>
          <Avatar src={user.avatar} />
        </div>
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
    max-xs:hidden
  `,
  container__avatar: `
    flex 
    shrink-0
    w-11
    h-11 
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
    text-primary
    text-ellipsis 
    text-[15px] 
    font-bold
  `,
  text__nickname: `
    text-secondary
    text-[15px]
  `,
  popup: `
    flex
    fixed
    bottom-24
    w-[300px]
    h-[68px]
    items-center
    bg-primary
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
    hover:bg-secondaryBg-light hover:dark:bg-secondaryBg-dark
  `,
}
