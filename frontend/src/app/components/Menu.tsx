import * as React from 'react'
import 'index.css'
import { useState, useEffect } from 'react'

import MenuUnit, { MenuUnitProps } from './MenuUnit'
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
import { UserContext } from 'app/contexts/UserContext'

export default function Menu() {
  const user = React.useContext(UserContext)
  const [width, setWidth] = useState(window.innerWidth)

  const menuList: MenuUnitProps[] = [
    {
      name: 'Home',
      svgPath: HomeIcon,
      link: '/home',
    },
    {
      name: 'Search',
      svgPath: SearchIcon,
      link: '/search',
      notAvailable: true,
    },
    {
      name: 'Explore',
      svgPath: ExploreIcon,
      link: '/explore',
      notAvailable: true,
    },
    {
      name: 'Notifications',
      svgPath: NotificationsIcon,
      link: '/notifications',
      notAvailable: true,
    },
    {
      name: 'Messages',
      svgPath: MessagesIcon,
      link: '/messages',
      notAvailable: true,
    },
    {
      name: 'Bookmarks',
      svgPath: BookmarksIcon,
      link: '/bookmarks',
      notAvailable: true,
    },
    {
      name: 'Lists',
      svgPath: ListsIcon,
      link: '/lists',
      notAvailable: true,
    },
    {
      name: 'Profile',
      svgPath: ProfileIcon,
      link: `/${user?.nickname}`,
    },
    {
      name: 'More',
      svgPath: MoreIcon,
      link: '/settings',
    },
  ]
  const menuListDesktop: MenuUnitProps[] = menuList.filter(
    menuBtn => menuBtn.name !== 'Search',
  )
  const menuListMobile: MenuUnitProps[] = menuList.filter(menuBtn =>
    ['Home', 'Search', 'Notifications', 'Messages'].includes(menuBtn.name),
  )
  const menuListNotAuthorized: MenuUnitProps[] = menuList.filter(menuBtn =>
    ['Explore', 'More'].includes(menuBtn.name),
  )

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
      {width > 500 && (
        <a href="/home" className={styles.container__logo}>
          <SvgLogo />
        </a>
      )}
      {menu.map(menuUnitProps => (
        <MenuUnit
          {...menuUnitProps}
          key={menuUnitProps.name}
          // isAvailable={currentPath === menuUnitProps.link}
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
    max-xs:bg-white
    max-xs:dark:bg-black
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
