import * as React from 'react'
import 'index.css'
import { useState, useEffect } from 'react'

import MenuUnit, { MenuUnitProps } from './MenuUnit'
import { useAuth } from 'app/hooks/useAuth'
import SvgLogo from './SVG/SvgLogo'
import {
  HomeIcon,
  ExploreIcon,
  NotificationsIcon,
  MessagesIcon,
  BookmarksIcon,
  ListsIcon,
  ProfileIcon,
  MoreIcon,
  SearchIcon,
} from 'app/components/SVG/SvgIcons'

export type MenuButton = Omit<MenuUnitProps, 'isActive' | 'setActive'>

const menuList: MenuButton[] = [
  {
    name: 'Home',
    svgPath: HomeIcon,
    link: '/home',
  },
  {
    name: 'Search',
    svgPath: SearchIcon,
    link: '/#',
  },
  {
    name: 'Explore',
    svgPath: ExploreIcon,
    link: '/#',
  },
  {
    name: 'Notifications',
    svgPath: NotificationsIcon,
    link: '/#',
  },
  {
    name: 'Messages',
    svgPath: MessagesIcon,
    link: '/#',
  },
  {
    name: 'Bookmarks',
    svgPath: BookmarksIcon,
    link: '/#',
  },
  {
    name: 'Lists',
    svgPath: ListsIcon,
    link: '/#',
  },
  {
    name: 'Profile',
    svgPath: ProfileIcon,
    link: '/#',
  },
  {
    name: 'More',
    svgPath: MoreIcon,
    link: '/#',
  },
]

const menuListDesktop: MenuButton[] = menuList.filter(
  menuBtn => menuBtn.name !== 'Search',
)

const menuListMobile: MenuButton[] = menuList.filter(menuBtn =>
  ['Home', 'Search', 'Notifications', 'Messages'].includes(menuBtn.name),
)
const menuListNotAuthorized: MenuButton[] = menuList.filter(menuBtn =>
  ['Explore', 'More'].includes(menuBtn.name),
)

export default function Menu() {
  const { user } = useAuth()
  const [activeButton, setActiveButton] = useState('')
  const [width, setWidth] = useState(window.innerWidth)
  const menu =
    width > 500
      ? user
        ? menuListDesktop
        : menuListNotAuthorized
      : menuListMobile

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
  }, [])

  return (
    <nav className={styles.container}>
      {width > 500 ? (
        <a href="/#" className={styles.container__logo}>
          <SvgLogo />
        </a>
      ) : null}
      {menu.map(menuUnitProps => (
        <MenuUnit
          {...menuUnitProps}
          key={menuUnitProps.name}
          isActive={activeButton === menuUnitProps.name}
          setActive={setActiveButton}
        />
      ))}
    </nav>
  )
}

const styles = {
  container: `
    flex 
    flex-col

    xs:max-xl:items-center

    max-xs:flex-row
    max-xs:w-full
    max-xs:justify-around
  `,
  container__logo: `
    flex 
    items-center 
    w-max 
    p-3 
    my-1 
    rounded-full 
    hover:bg-[rgba(15,20,25,0.1)] dark:hover:bg-[rgba(231,233,234,0.1)] 
    transition-colors 
    duration-200
  `,
  logo__svg: `
    w-8 
    h-8
  `,
  svg__g: `
    fill-logo-light dark:fill-logo-dark
  `,
}
