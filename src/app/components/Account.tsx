import * as React from 'react'
import 'index.css'

export default function Account() {
  const mockData = {
    name: 'Kyrylo Karmazin',
    username: 'KirillKr231',
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/375px-Flag_of_Ukraine.svg.png',
  }

  return (
    <div className="flex items-center w-max p-3 rounded-full hover:bg-[rgb(231,233,234,0.1)] transition-colors duration-200">
      <img
        className="flex w-10 h-10 rounded-full mr-3"
        alt="avatar"
        src={mockData.avatar}
      />
      <div className="flex flex-col mr-3 text-white">
        <span className="whitespace-nowrap overflow-hidden text-ellipsis text-[15px] font-bold">
          {mockData.name}
        </span>
        <span className="text-[#71767b] text-[15px]">
          {'@' + mockData.username}
        </span>
      </div>
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
        <g color="white">
          <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
        </g>
      </svg>
    </div>
  )
}
