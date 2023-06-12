import * as React from 'react'
import { useTranslation } from 'react-i18next'
import 'index.css'

import Recommendation, {
  RecommendationProps,
} from 'app/pages/FeedPage/components/Recommendation'

const recommendationlist: RecommendationProps[] = [
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
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <span className={styles.container__title}>{t('Recommendations')}</span>
      {recommendationlist.map(recommendationProps => (
        <Recommendation
          {...recommendationProps}
          key={recommendationProps.nickname}
        />
      ))}
    </div>
  )
}

const styles = {
  container: `
    flex 
    flex-col 
    bg-secondary
    w-full 
    rounded-[15px]
  `,
  container__title: `
    flex  
    px-4 
    py-3 
    items-center
    font-bold 
    text-2xl
  `,
}
