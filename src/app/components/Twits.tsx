import * as React from 'react'
import TwitsUnit from 'app/components/TwitsUnit'
import 'index.css'

export type Twit = {
  id: string
  avatar: string
  name: string
  nickname: string
  date: string
  text: string
  likes: number
  comments: number
  retwits: number
}

const twitslist: Twit[] = [
  {
    id: '1',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/375px-Flag_of_Ukraine.svg.png',
    name: 'Kyrylo Karmazin',
    nickname: '@KirillKr231',
    date: '23.01.23',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem enim, auctor eget ultricies in, luctus eget ex. Sed ac turpis imperdiet, congue tellus sit amet, vehicula est. Nulla sed lorem ut est tempor rutrum sit amet sit amet leo.',
    likes: 2000,
    comments: 1300,
    retwits: 2400,
  },
  {
    id: '2',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/375px-Flag_of_Ukraine.svg.png',
    name: 'Kyrylo Karmazin',
    nickname: '@KirillKr231',
    date: '23.01.23',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem enim, auctor eget ultricies in, luctus eget ex. Sed ac turpis imperdiet, congue tellus sit amet, vehicula est. Nulla sed lorem ut est tempor rutrum sit amet sit amet leo.',
    likes: 2000,
    comments: 1300,
    retwits: 2400,
  },
  {
    id: '3',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/375px-Flag_of_Ukraine.svg.png',
    name: 'Kyrylo Karmazin',
    nickname: '@KirillKr231',
    date: '23.01.23',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem enim, auctor eget ultricies in, luctus eget ex. Sed ac turpis imperdiet, congue tellus sit amet, vehicula est. Nulla sed lorem ut est tempor rutrum sit amet sit amet leo.',
    likes: 2000,
    comments: 1300,
    retwits: 2400,
  },
  {
    id: '4',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/375px-Flag_of_Ukraine.svg.png',
    name: 'Kyrylo Karmazin',
    nickname: '@KirillKr231',
    date: '23.01.23',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem enim, auctor eget ultricies in, luctus eget ex. Sed ac turpis imperdiet, congue tellus sit amet, vehicula est. Nulla sed lorem ut est tempor rutrum sit amet sit amet leo.',
    likes: 2000,
    comments: 1300,
    retwits: 2400,
  },
  {
    id: '5',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/375px-Flag_of_Ukraine.svg.png',
    name: 'Kyrylo Karmazin',
    nickname: '@KirillKr231',
    date: '23.01.23',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem enim, auctor eget ultricies in, luctus eget ex. Sed ac turpis imperdiet, congue tellus sit amet, vehicula est. Nulla sed lorem ut est tempor rutrum sit amet sit amet leo.',
    likes: 2000,
    comments: 1300,
    retwits: 2400,
  },
  {
    id: '6',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/375px-Flag_of_Ukraine.svg.png',
    name: 'Kyrylo Karmazin',
    nickname: '@KirillKr231',
    date: '23.01.23',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem enim, auctor eget ultricies in, luctus eget ex. Sed ac turpis imperdiet, congue tellus sit amet, vehicula est. Nulla sed lorem ut est tempor rutrum sit amet sit amet leo.',
    likes: 2000,
    comments: 1300,
    retwits: 2400,
  },
  {
    id: '7',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/375px-Flag_of_Ukraine.svg.png',
    name: 'Kyrylo Karmazin',
    nickname: '@KirillKr231',
    date: '23.01.23',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem enim, auctor eget ultricies in, luctus eget ex. Sed ac turpis imperdiet, congue tellus sit amet, vehicula est. Nulla sed lorem ut est tempor rutrum sit amet sit amet leo.',
    likes: 2000,
    comments: 1300,
    retwits: 2400,
  },
  {
    id: '8',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/375px-Flag_of_Ukraine.svg.png',
    name: 'Kyrylo Karmazin',
    nickname: '@KirillKr231',
    date: '23.01.23',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem enim, auctor eget ultricies in, luctus eget ex. Sed ac turpis imperdiet, congue tellus sit amet, vehicula est. Nulla sed lorem ut est tempor rutrum sit amet sit amet leo.',
    likes: 2000,
    comments: 1300,
    retwits: 2400,
  },
  {
    id: '9',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/375px-Flag_of_Ukraine.svg.png',
    name: 'Kyrylo Karmazin',
    nickname: '@KirillKr231',
    date: '23.01.23',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem enim, auctor eget ultricies in, luctus eget ex. Sed ac turpis imperdiet, congue tellus sit amet, vehicula est. Nulla sed lorem ut est tempor rutrum sit amet sit amet leo.',
    likes: 2000,
    comments: 1300,
    retwits: 2400,
  },
  {
    id: '10',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/375px-Flag_of_Ukraine.svg.png',
    name: 'Kyrylo Karmazin',
    nickname: '@KirillKr231',
    date: '23.01.23',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem enim, auctor eget ultricies in, luctus eget ex. Sed ac turpis imperdiet, congue tellus sit amet, vehicula est. Nulla sed lorem ut est tempor rutrum sit amet sit amet leo.',
    likes: 2000,
    comments: 1300,
    retwits: 2400,
  },
  {
    id: '11',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/375px-Flag_of_Ukraine.svg.png',
    name: 'Kyrylo Karmazin',
    nickname: '@KirillKr231',
    date: '23.01.23',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem enim, auctor eget ultricies in, luctus eget ex. Sed ac turpis imperdiet, congue tellus sit amet, vehicula est. Nulla sed lorem ut est tempor rutrum sit amet sit amet leo.',
    likes: 2000,
    comments: 1300,
    retwits: 2400,
  },
]

export default function Twits() {
  return <TwitsList twits={twitslist} />
}

export type TwitsListProps = {
  twits: Twit[]
}

export const TwitsList = ({ twits }: TwitsListProps) => {
  return (
    <>
      {twitslist.map(twit => {
        const {
          id,
          avatar,
          name,
          nickname,
          date,
          text,
          likes,
          comments,
          retwits,
        } = twit

        return (
          <TwitsUnit
            key={id}
            id={id}
            avatar={avatar}
            name={name}
            nickname={nickname}
            date={date}
            text={text}
            likes={likes}
            comments={comments}
            retwits={retwits}
          />
        )
      })}
    </>
  )
}
