import * as React from 'react'
import { useTranslation } from 'react-i18next'
import Trend, { TrendProps } from 'app/pages/FeedPage/components/TrendsUnit'
import 'index.css'

const trendlist: TrendProps[] = [
  { name: 'Kyiv', twitsAmount: 5000 },
  { name: 'Odesa', twitsAmount: 4000 },
  { name: 'Lviv', twitsAmount: 3000 },
  { name: 'Kharkiv', twitsAmount: 2000 },
  { name: 'Zaporizhzhia', twitsAmount: 1000 },
  { name: 'Vinnytsia', twitsAmount: 500 },
]

export default function Trends() {
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <span className={styles.container__title}>{t('Trends')}</span>
      {trendlist.map(trend => (
        <Trend key={trend.name} {...trend} />
      ))}
    </div>
  )
}

const styles = {
  container: `
    flex 
    flex-col 
    bg-[#f7f9f9] dark:bg-[#16181c] 
    w-full 
    rounded-[15px]
  `,
  container__title: `
    flex 
    text-black dark:text-white 
    px-4 
    py-3 
    items-center
    font-bold 
    text-2xl
  `,
}
