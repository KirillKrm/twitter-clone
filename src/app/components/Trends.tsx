import * as React from 'react'
import { useTranslation } from 'react-i18next'
import TrendsUnit from 'app/components/TrendsUnit'
import 'index.css'

export type Trend = {
  name: string
  twitsAmount: number
}

const trendlist: Trend[] = [
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
      <TrendsList trends={trendlist} />
    </div>
  )
}

export type TrendsListProps = {
  trends: Trend[]
}

export const TrendsList = ({ trends }: TrendsListProps) => {
  return (
    <>
      {trendlist.map(trend => {
        const { name, twitsAmount } = trend

        return <TrendsUnit name={name} twitsAmount={twitsAmount} />
      })}
    </>
  )
}

const styles = {
  container: `
    flex 
    flex-col 
    bg-[#16181c] 
    w-full 
    rounded-[15px]
  `,
  container__title: `
    flex 
    text-white 
    px-4 
    py-3 
    items-center
    font-bold 
    text-2xl
  `,
}
