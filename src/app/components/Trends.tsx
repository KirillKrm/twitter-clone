import * as React from 'react'
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
  return (
    <div className="flex flex-col bg-[#222222] w-[450px] rounded-[15px]">
      <div
        className="flex text-white px-4 py-3 items-center
        font-bold text-2xl"
      >
        Trends for you
      </div>
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
          <div className="flex flex-col items-left px-4 py-3">
            <div className="flex text-white font-bold text-lg">{name}</div>
            <div className="flex text-[#898989] text-base">
              Twits: {twitsAmount}
            </div>
          </div>
        )
      })}
    </>
  )
}
