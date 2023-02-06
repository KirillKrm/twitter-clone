import * as React from 'react'
import 'index.css'
import { useState, useRef, useEffect } from 'react'
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

  const { t, i18n } = useTranslation()
  const changeLanguage = language => {
    i18n.changeLanguage(language)
  }

  return (
    <div className="flex h-full flex-1 bg-black">
      <div className="flex flex-row fixed mt-1 ml-1 gap-1">
        <button
          className="py-1 px-2 bg-gray-700 text-white rounded-lg"
          type="button"
          onClick={() => changeLanguage('en')}
        >
          EN
        </button>
        <button
          className="py-1 px-2 bg-gray-700 text-white rounded-lg"
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
      <header className="flex flex-grow justify-end w-[594px]">
        <div className="flex fixed flex-col w-[275px] h-full justify-between">
          <Menu></Menu>
          <Account></Account>
        </div>
      </header>
      <main className="flex flex-grow w-[1309px] items-start">
        <div className="flex w-[990px] h-full justify-between">
          <div className="flex flex-col w-[598px] h-full border-r border-l border-[rgb(47,51,54)]">
            <h2 className="flex sticky top-0 w-[596px] py-4 pl-4 backdrop-blur-md bg-[rgba(0,0,0,0.65)] text-white text-[20px] font-bold border-b border-[rgb(47,51,54)]">
              {t('Home')}
            </h2>
            <TwitCreate></TwitCreate>
            <Twits></Twits>
          </div>
          <div className="flex flex-col h-full w-[350px]">
            <div className="flex sticky z-10 top-0 py-1 bg-black">
              <Search></Search>
            </div>
            <div
              ref={refTrendsRecommends}
              // className={`flex flex-col`}
              // // className={`flex flex-col m-[${scroll}px]`}
              // style={{ top: scroll }}
              // ${ scroll ? '' : 'top-0' }
              className={`flex flex-col sticky mt-3 top-0 ${
                scroll ? 'fixed top-0' : 'static top-0'
              }`}
            >
              <div className="flex mb-4">
                <Trends></Trends>
              </div>
              <div className="flex">
                <Recommendations></Recommendations>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
