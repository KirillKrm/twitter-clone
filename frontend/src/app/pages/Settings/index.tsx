import * as React from 'react'
import 'index.css'
import { NavLink, Outlet } from 'react-router-dom'
import classnames from 'classnames'
import { useTranslation } from 'react-i18next'

import BasePage from 'app/pages/BasePage'
import BaseMainPage from '../BaseMainPage'
import SvgRightArrow from '../../components/SVG/SvgRightArrow'

const settingsList = [
  { name: 'account', link: 'account', notAvailable: true },
  { name: 'security', link: 'security', notAvailable: true },
  { name: 'privacy', link: 'privacy', notAvailable: true },
  { name: 'themesLanguages', link: 'themes-and-languages' },
  {
    name: 'additionalResources',
    link: 'additional-resources',
    notAvailable: true,
  },
]

export function Settings() {
  const { t } = useTranslation('settings')

  return (
    <BasePage
      helmet={{
        title: 'Settings',
        description: 'Twitter Clone Settings',
      }}
      langSwitch={{ page: 'settings' }}
    >
      <BaseMainPage>
        <div className={styles.main__columns}>
          <section className={styles.columns__navigation}>
            <div className={styles.navigation__title}>
              <h2 className={styles.title__text}>{t('settings')}</h2>
            </div>
            <nav className={styles.navigation__items}>
              {settingsList.map(settingsListProps => {
                const navItemStyle = classnames(styles.navigation__item, {
                  [styles.item__not_available]: settingsListProps.notAvailable,
                })

                return settingsListProps.notAvailable ? (
                  <div key={settingsListProps.name} className={navItemStyle}>
                    <h3 className="text-primary">
                      {t(settingsListProps.name)}
                    </h3>
                  </div>
                ) : (
                  <NavLink
                    key={settingsListProps.name}
                    to={settingsListProps.link}
                    className={({ isActive }) =>
                      classnames(navItemStyle, {
                        [styles.item__active]: isActive,
                      })
                    }
                  >
                    <h3 className="text-primary">
                      {t(settingsListProps.name)}
                    </h3>
                    <SvgRightArrow />
                  </NavLink>
                )
              })}
            </nav>
          </section>
          <section className={styles.columns__details}>
            <div className={styles.navigation__title}>
              <h2 className={styles.title__text}>{t('details')}</h2>
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
  item__not_available: `
    hover:blur-[2px] dark:hover:blur-[2px]
    cursor-not-allowed
  `,
  item__active: `
    bg-[rgba(15,20,25,0.1)] dark:bg-[rgba(231,233,234,0.1)]
    shadow-[-2px_0px_0px_0px_deepskyblue_inset]
  `,
}
