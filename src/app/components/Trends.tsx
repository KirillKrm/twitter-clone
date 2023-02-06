import * as React from 'react'
import { useTranslation } from 'react-i18next'
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
    <div className="flex flex-col bg-[#16181c] w-full rounded-[15px]">
      <span
        className="flex text-white px-4 py-3 items-center
        font-bold text-2xl"
      >
        {t('Trends')}
      </span>
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

        return (
          <div
            key={name}
            className="flex flex-col items-left px-4 py-3 hover:bg-[rgb(255,255,255,0.03)] transition-colors duration-200"
          >
            <div className="flex text-white font-bold text-lg">{name}</div>
            <span className="flex text-[#71767b] text-base">
              Twits: {twitsAmount}
            </span>
          </div>
        )
      })}
    </>
  )
}
