import 'index.css'
import { useTranslation } from 'react-i18next'

import Menu from 'app/components/Menu'
import Twits from 'app/pages/FeedPage/components/Twits'
import Search from 'app/components/Search'
import Trends from 'app/pages/FeedPage/components/Trends'
import Account from 'app/components/Account'
import BasePage from 'app/pages/BasePage'
import TwitCreate from 'app/components/TwitCreate'
import Recommendations from 'app/pages/FeedPage/components/Recommendations'

export function FeedPage() {
  const { t } = useTranslation('feed')

  return (
    <BasePage
      helmet={{ title: 'Feed page', description: 'Twitter Clone Feed Page' }}
      langSwitch={{ page: 'feed' }}
    >
      <div className={styles.container}>
        <main className={styles.container__main}>
          <header className={styles.main__header}>
            <div className={styles.header__menu}>
              <Menu />
              <Account />
            </div>
          </header>
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
        </main>
      </div>
    </BasePage>
  )
}

const styles = {
  container: `
  flex
  justify-center
  h-fit
  w-full
  bg-white dark:bg-black

  min-[680px]:justify-center
`,
  container__main: `
  flex
  flex-row
  justify-center

  min-[680px]:w-9/12
`,
  main__header: `
  flex
  flex-grow 
  sticky
  h-screen

  min-[500px]:top-0
  min-[500px]:justify-end

  max-[500px]:fixed
  max-[500px]:bottom-0
  max-[500px]:w-full
  max-[500px]:h-[56px]
  max-[500px]:justify-center
  max-[500px]:bg-primaryBg-light max-[500px]:dark:bg-primaryBg-dark
`,
  header__menu: `
  flex 
  flex-col 
  justify-between

  max-[500px]:flex-row
  max-[500px]:w-full
  max-[500px]:border-t
  max-[500px]:border-tertiaryBg-light max-[500px]:dark:border-tertiaryBg-dark
`,
  main__columns: `
  flex 
  flex-grow
  gap-6

  min-[500px]:max-[680px]:w-full
`,
  columns__middleColumn: `
  flex 
  flex-col 
  min-[500px]:border-r 
  min-[500px]:border-l 
  min-[500px]:border-tertiaryBg-light dark:border-tertiaryBg-dark

  min-[500px]:max-[680px]:w-full
  min-[680px]:w-[600px]
`,
  middleColumn__title: `
  flex 
  sticky 
  top-0 
  py-4 
  pl-4 
  z-10
  backdrop-blur-md 
  bg-[rgba(255,255,255,0.85)] dark:bg-[rgba(0,0,0,0.65)] 
  text-[20px] 
  font-bold 
  border-b 
  border-tertiaryBg-light dark:border-tertiaryBg-dark

  min-[500px]:max-[680px]:w-full
  min-[680px]:w-[598px]
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
