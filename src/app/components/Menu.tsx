import * as React from 'react'
import 'index.css'
import { useState, useEffect } from 'react'

import MenuUnit, { MenuUnitProps } from './MenuUnit'
import { useAuth } from 'app/hooks/useAuth'
import SvgTwitter from './SVG/SvgTwitter'
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

export type MenuButton = Omit<MenuUnitProps, 'active' | 'setActive'>

const menuList: MenuButton[] = [
  {
    name: 'Home',
    image: HomeIcon,
    link: '/home',
  },
  {
    name: 'Search',
    image: SearchIcon,
    link: '/#',
  },
  {
    name: 'Explore',
    image: ExploreIcon,
    link: '/#',
  },
  {
    name: 'Notifications',
    image: NotificationsIcon,
    link: '/#',
  },
  {
    name: 'Messages',
    image: MessagesIcon,
    link: '/#',
  },
  {
    name: 'Bookmarks',
    image: BookmarksIcon,
    link: '/#',
  },
  {
    name: 'Lists',
    image: ListsIcon,
    link: '/#',
  },
  {
    name: 'Profile',
    image: ProfileIcon,
    link: '/#',
  },
  {
    name: 'More',
    image: MoreIcon,
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
          <SvgTwitter />
        </a>
      ) : null}
      {menu.map(menuButton => {
        const { name, image, link } = menuButton

        return (
          <MenuUnit
            key={name}
            name={name}
            image={image}
            link={link}
            active={activeButton === name}
            setActive={setActiveButton}
          />
        )
      })}
    </nav>
  )
}

const styles = {
  container: `
    flex 
    flex-col

    min-[500px]:max-xl:items-center

    max-[500px]:flex-row
    max-[500px]:w-full
    max-[500px]:justify-around
  `,
  container__logo: `
    flex 
    items-center 
    w-max 
    p-3 
    my-1 
    rounded-full 
    hover:bg-[rgb(15,20,25,0.1)] dark:hover:bg-[rgb(29,155,240,0.1)] 
    transition-colors 
    duration-200
  `,
  logo__svg: `
    w-8 
    h-8
  `,
  svg__g: `
    text-[rgb(29,155,240)] dark:text-white
  `,
}
