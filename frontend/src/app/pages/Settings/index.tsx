import * as React from 'react'
import 'index.css'
import { Link, Outlet } from 'react-router-dom'

import BasePage from 'app/pages/BasePage'
import BaseMainPage from '../BaseMainPage'
import SvgRightArrow from '../../components/SVG/SvgRightArrow'

const settingsList = [
  { name: 'Your account', link: '' },
  { name: 'Security', link: '' },
  { name: 'Privacy', link: '' },
  { name: 'Themes and languages', link: 'themes-and-languages' },
  { name: 'Additional resources', link: '' },
]

export function Settings() {
  return (
    <BasePage
      helmet={{
        title: 'Settings',
        description: 'Twitter Clone Settings',
      }}
      langSwitch={{ page: 'feed' }}
    >
      <BaseMainPage>
        <div className={styles.main__columns}>
          <section className={styles.columns__navigation}>
            <div className={styles.navigation__title}>
              <h2 className={styles.title__text}>Settings</h2>
            </div>
            <nav className={styles.navigation__items}>
              {settingsList.map(settingsListProps => (
                <Link
                  key={settingsListProps.name}
                  to={settingsListProps.link}
                  className={styles.navigation__item}
                >
                  {settingsListProps.name}
                  <SvgRightArrow />
                </Link>
              ))}
            </nav>
          </section>
          <section className={styles.columns__details}>
            <div className={styles.navigation__title}>
              <h2 className={styles.title__text}>Details</h2>
            </div>
            <Outlet />
          </section>
        </div>
      </BaseMainPage>
    </BasePage>
  )
}

const styles = {
  main__columns: `
    flex 

    xs:max-sm:w-full
  `,
  columns__navigation: `
    flex
    flex-col
    w-[390px]
    border-r
    border-l
    border-tertiaryBg-light dark:border-tertiaryBg-dark
  `,
  columns__details: `
    flex
    flex-col
    w-[596px]
    border-r
    border-tertiaryBg-light dark:border-tertiaryBg-dark
  `,
  navigation__title: `
    flex
    w-full
    h-[53px]
    pl-4
    items-center
    bg-secondary
  `,
  title__text: `
    text-xl
    font-bold
    text-primary
  `,
  navigation__items: `
    flex
    flex-col
    w-full
  `,
  navigation__item: `
    flex
    h-12
    px-4
    items-center
    justify-between
    hover:bg-[rgba(15,20,25,0.1)] dark:hover:bg-[rgba(231,233,234,0.1)] 
    transition-colors 
    duration-200
    select-none
  `,
}
