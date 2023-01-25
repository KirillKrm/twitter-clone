import * as React from 'react'
import 'index.css'

export type Recommendation = {
  name: string
  nickname: string
  avatar: string
}

const recommendationlist: Recommendation[] = [
  {
    name: 'Kyrylo Karmazin',
    nickname: '@KirillKr231',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/375px-Flag_of_Ukraine.svg.png',
  },
  {
    name: 'Arestovych',
    nickname: '@arestovych',
    avatar:
      'https://pbs.twimg.com/profile_images/1437031408527151104/EsrDHnrJ_400x400.jpg',
  },
  {
    name: 'Дмитрий Гордон',
    nickname: '@dmitry_gordon',
    avatar:
      'https://pbs.twimg.com/profile_images/3714778768/0dd3df4ba1c8a979022cb50fdea8c5c5_400x400.jpeg',
  },
  {
    name: 'Gawr Gura 🔱',
    nickname: '@gawrgura',
    avatar:
      'https://pbs.twimg.com/profile_images/1539701674679291904/ZrBJqhoc_400x400.jpg',
  },
  {
    name: 'Mori Calliope💀holoEN',
    nickname: '@moricalliope',
    avatar:
      'https://pbs.twimg.com/profile_images/1588388558972166149/eM2PwPYu_400x400.jpg',
  },
]

export default function Recommendations() {
  return (
    <div className="flex flex-col bg-[#16181c] w-[450px] rounded-[15px]">
      <span
        className="flex text-white px-4 py-3 items-center
        font-bold text-2xl"
      >
        Who to follow
      </span>
      <RecommendationsList recommendations={recommendationlist} />
    </div>
  )
}

export type RecommendationsListProps = {
  recommendations: Recommendation[]
}

export const RecommendationsList = ({
  recommendations,
}: RecommendationsListProps) => {
  return (
    <>
      {recommendationlist.map(recommendation => {
        const { name, nickname, avatar } = recommendation

        return (
          <div className="flex flex-row items-left px-4 py-3 hover:bg-[rgb(255,255,255,0.03)] transition-colors duration-200">
            <img
              className="flex w-12 h-12 rounded-full mr-3"
              alt="avatar"
              src={avatar}
            />
            <div>
              <span className="flex text-white font-bold text-base">
                {name}
              </span>
              <span className="flex text-[#71767b] text-base">{nickname}</span>
            </div>
          </div>
        )
      })}
    </>
  )
}
