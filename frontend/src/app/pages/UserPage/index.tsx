import * as React from 'react'
import 'index.css'
import classnames from 'classnames'
import { LayoutGroup, motion } from 'framer-motion'
import {
  NavLink,
  Route,
  Routes,
  useNavigate,
  useParams,
  Navigate,
} from 'react-router-dom'

import BasePage from 'app/pages/BasePage'
import BaseMainPage from '../BaseMainPage'
import Search from 'app/components/Search'
import Trends from '../FeedPage/components/Trends'
import Recommendations from '../FeedPage/components/Recommendations'

import SvgButtonBack from 'app/components/SVG/SvgButtonBack'
import Avatar from 'app/components/Avatar'
import { UserContext } from 'app/contexts/UserContext'
import { Posts } from './components/Posts'
import { getUser } from 'app/api/user'

const menu = [
  {
    name: 'Posts',
    link: 'posts',
  },
  {
    name: 'Replies',
    link: 'replies',
    notAvailable: false,
  },
  {
    name: 'Highlights',
    link: 'highlights',
    notAvailable: false,
  },
  {
    name: 'Media',
    link: 'media',
    notAvailable: false,
  },
  {
    name: 'Likes',
    link: 'likes',
    notAvailable: false,
  },
]

export function UserPage() {
  const profilePersonal = React.useContext(UserContext)
  const { nickname } = useParams()
  const [user, setUser] = React.useState<any>()
  const navigate = useNavigate()

  React.useEffect(() => {
    const fetchUser = async () => {
      const data = await getUser(nickname!)
      setUser(data[0])
    }
    fetchUser()
  }, [nickname])

  if (!nickname || !user) {
    return <></>
  } else {
    const year = new Date(user.createdAt).getFullYear()
    const month = new Date(user.createdAt).getMonth() + 1
    const day = new Date(user.createdAt).getDate()

    return (
      <BasePage
        helmet={{
          title: 'Profile',
          description: 'Twitter Clone Profile',
        }}
        langSwitch={{ page: 'profile' }}
      >
        <BaseMainPage>
          <div className={styles.main__columns}>
            <div className={styles.columns__middleColumn}>
              <h2 className={styles.middleColumn__title}>
                <button
                  onClick={() => navigate('/')}
                  className={styles.title__button}
                >
                  <SvgButtonBack />
                </button>
                <div className="flex flex-col">
                  <span className={styles.text__user}>{user.username}</span>
                  <span className={styles.text__posts}>
                    <s>0 posts</s>
                  </span>
                </div>
              </h2>
              <div className={styles.middleColumn__top}>
                <div className={styles.top__background}></div>
                <div className={styles.top__details}>
                  <div className={styles.details__avatar}>
                    <div className={styles.avatar__image}>
                      <Avatar />
                    </div>
                    {user.nickname === profilePersonal?.nickname && (
                      <button className={styles.avatar__setup}>
                        <span>Set up profile</span>
                      </button>
                    )}
                  </div>
                  <div className={styles.details__name}>
                    <span className="font-bold leading-6 text-[20px]">
                      {user.username}
                    </span>
                    <span className="leading-[20px] text-[15px] text-secondary">
                      @{user.nickname}
                    </span>
                  </div>
                  <div className={styles.details__text}>
                    <span>
                      <s>Location</s>
                    </span>
                    <span>
                      <s>Date of Birth</s>
                    </span>
                    <span>Registation date {[day, month, year].join('/')}</span>
                  </div>
                </div>
                <LayoutGroup>
                  <nav className={styles.top__menu}>
                    {menu.map(menuItem => {
                      const menuItemStyle = classnames(styles.menu__item, {
                        [styles.item__not_available]: menuItem.notAvailable,
                      })

                      return (
                        <NavLink
                          key={menuItem.name}
                          to={menuItem.link}
                          className={menuItemStyle}
                          children={({ isActive }) => {
                            return (
                              <div className="flex relative h-full">
                                <span className={styles.item__text}>
                                  {menuItem.name}
                                </span>
                                {isActive && (
                                  <motion.div
                                    className={styles.menu__underline}
                                    layoutId="underline"
                                  />
                                )}
                              </div>
                            )
                          }}
                        />
                      )
                    })}
                  </nav>
                </LayoutGroup>
                <Routes>
                  <Route index element={<Navigate to="posts" />} />
                  <Route path="posts" element={<Posts userId={user.id} />} />
                  <Route path="replies" element={<></>} />
                  <Route path="highlights" element={<></>} />
                  <Route path="media" element={<></>} />
                  <Route path="likes" element={<></>} />
                </Routes>
              </div>
            </div>
            <div className={styles.columns__sidebar}>
              <div className={styles.sidebar__search}>
                <Search />
              </div>
              <div className={styles.sidebar__box}>
                <div className={styles.box__trends}>
                  <Trends />
                </div>
                <div className={styles.box__recommendations}>
                  <Recommendations />
                </div>
              </div>
            </div>
          </div>
        </BaseMainPage>
      </BasePage>
    )
  }
}

const styles = {
  main__columns: `
    flex 
    gap-6

    xs:max-sm:w-full
  `,
  columns__middleColumn: `
    flex 
    flex-col 
    xs:border-r 
    xs:border-l 
    xs:border-tertiaryBg-light dark:border-tertiaryBg-dark
    xs:max-[680px]:w-full
    min-[680px]:w-[600px]
  `,
  middleColumn__title: `
    flex 
    sticky 
    top-0 
    h-16
    pl-2
    items-center
    z-10
    backdrop-blur-md 
    bg-[rgba(255,255,255,0.85)] dark:bg-[rgba(0,0,0,0.65)] 
    border-b 
    border-tertiaryBg-light dark:border-tertiaryBg-dark

    xs:max-[680px]:w-full
    min-[680px]:w-[598px]
  `,
  title__button: `
    flex
    w-9
    h-9
    mr-5
    items-center
    justify-center
    rounded-full
    hover:bg-[rgba(239,243,244,0.1)]
    duration-200
  `,
  text__user: `
    text-[20px] 
    font-bold 
  `,
  text__posts: `
    text-[14px]
    text-secondary
  `,
  middleColumn__top: `
    flex
    flex-col
  `,
  top__background: `
    flex
    w-full
    h-[200px]
    bg-[rgb(51,54,57)]
  `,
  top__details: `
    flex
    flex-col
    w-full
    px-4
    pt-3
  `,
  details__avatar: `
    flex
    justify-between
  `,
  avatar__image: `
    flex
    w-1/4
    h-auto
    -mt-[15%]
    mb-3
  `,
  avatar__setup: `
    flex
    h-9
    px-4
    justify-center
    items-center
    bg-primary
    hover:bg-[rgba(239,243,244,0.1)]
    border
    border-[#536471]
    rounded-full
    duration-200

    font-bold
    text-[15px]
    select-none

    hover:blur-[2px] dark:hover:blur-[2px]
    cursor-not-allowed
  `,
  details__name: `
    flex
    flex-col
    mt-1
    mb-3
  `,
  details__text: `
    flex
    mb-3
    leading-[18px]
    text-[15px]
    text-secondary
    gap-3
    break-words
  `,
  top__menu: `
    flex
    flex-row
    w-full
    h-12
    border-b
    border-tertiaryBg-light dark:border-tertiaryBg-dark
  `,
  menu__item: `
    flex
    flex-col
    flex-grow
    justify-center
    items-center
    hover:bg-[rgba(239,243,244,0.1)]
  `,
  item__text: `
    flex
    items-center
  `,
  menu__underline: `
    inline-flex
    absolute
    bottom-0
    w-full
    h-1
    bg-blue
    rounded-full
  `,
  item__not_available: `
    hover:blur-[2px] dark:hover:blur-[2px]
    cursor-not-allowed
  `,
  columns__sidebar: `
    flex 
    flex-col 

    max-[1000px]:hidden
    min-[1000px]:block
    min-[1000px]:max-[1025px]:w-[290px]
    min-[1025px]:max-[1075px]:w-[320px]
    min-[1075px]:w-[350px]
  `,
  sidebar__search: `
    flex 
    sticky 
    z-10
    top-0 
    py-1 
    bg-white dark:bg-black
  `,
  sidebar__box: `
    flex 
    flex-col 
    sticky 
    mt-3 
    top-0
  `,
  box__trends: `
    flex 
    mb-4
  `,
  box__recommendations: `
    flex
  `,
}
