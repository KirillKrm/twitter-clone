import * as React from 'react'
import 'index.css'
import { useState, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import Search from 'app/components/Search'
import Trends from 'app/components/Trends'
import Recommendations from 'app/components/Recommendations'
import Menu from 'app/components/Menu'
import Account from 'app/components/Account'
import Twits from 'app/components/Twits'
import TwitCreate from 'app/components/TwitCreate'

export function HomePage() {
  const [scroll, setScroll] = useState(true)
  const refTrendsRecommends = useRef(null)

  window.addEventListener('scroll', e => {
    // setScroll(scroll + e.deltaY)
    if ((e as any).deltaY >= 0) {
      // Scrolling Down with mouse
      setScroll(true)
    } else {
      // Scrolling Up with mouse
      setScroll(false)
    }
  })

  // window.scroll(e => {
  //   var $el = $('.fixedElement')
  //   var isPositionFixed = $el.css('position') == 'fixed'
  //   if ($(this).scrollTop() > 200 && !isPositionFixed) {
  //     $el.css({ position: 'fixed', top: '0px' })
  //   }
  //   if ($(this).scrollTop() < 200 && isPositionFixed) {
  //     $el.css({ position: 'static', top: '0px' })
  //   }
  // })

  const { t, i18n } = useTranslation('feed')
  const changeLanguage = language => {
    i18n.changeLanguage(language)
  }

  return (
    <div className={styles.container}>
      <div className={styles.container__buttons}>
        <button
          className={styles.buttons__locales}
          type="button"
          onClick={() => changeLanguage('en')}
        >
          EN
        </button>
        <button
          className={styles.buttons__locales}
          type="button"
          onClick={() => changeLanguage('ua')}
        >
          UA
        </button>
      </div>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Twitter Clone homepage" />
      </Helmet>
      <header className={styles.container__header}>
        <div className={styles.header__menu}>
          <Menu />
          <Account />
        </div>
      </header>
      <main className={styles.container__main}>
        <div className={styles.main__columns}>
          <div className={styles.columns__middleColumn}>
            <h2 className={styles.middleColumn__title}>{t('Home')}</h2>
            <TwitCreate />
            <Twits />
          </div>
          <div className={styles.columns__sidebar}>
            <div className={styles.sidebar__search}>
              <Search />
            </div>
            <div
              ref={refTrendsRecommends}
              // className={`flex flex-col`}
              // // className={`flex flex-col m-[${scroll}px]`}
              // style={{ top: scroll }}
              // ${ scroll ? '' : 'top-0' }
              className={styles.sidebar__box + `${scroll ? 'top-0' : 'top-0'}`}
            >
              <div className={styles.box__trends}>
                <Trends />
              </div>
              <div className={styles.box__recommendations}>
                <Recommendations />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

const styles = {
  container: `
    flex  
    bg-black
  `,
  container__buttons: `
    flex 
    flex-row 
    fixed 
    mt-1 
    ml-1 
    gap-1
  `,
  buttons__locales: `
    py-1 
    px-2 
    bg-gray-700 
    text-white 
    rounded-lg
  `,
  container__header: `
    flex 
    flex-grow 
    h-full 
    justify-end 
    w-[594px]
  `,
  header__menu: `
    flex 
    fixed 
    flex-col 
    w-[275px] 
    h-full 
    justify-between
  `,
  container__main: `
    flex 
    flex-grow 
    h-full 
    w-[1309px] 
    items-start
  `,
  main__columns: `
    flex 
    w-[990px] 
    h-full 
    justify-between
  `,
  columns__middleColumn: `
    flex 
    flex-col 
    w-[598px] 
    h-full 
    border-r 
    border-l 
    border-[rgb(47,51,54)]
  `,
  middleColumn__title: `
    flex 
    sticky 
    top-0 
    w-[596px] 
    py-4 
    pl-4 
    backdrop-blur-md 
    bg-[rgba(0,0,0,0.65)] 
    text-white 
    text-[20px] 
    font-bold 
    border-b 
    border-[rgb(47,51,54)]
  `,
  columns__sidebar: `
    flex 
    flex-col 
    w-[350px]
  `,
  sidebar__search: `
    flex 
    sticky 
    z-10 
    top-0 
    py-1 
    bg-black
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
