import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import 'index.css'

const useAutosizeTextArea = (
  textAreaRef: HTMLTextAreaElement | null,
  value: string,
) => {
  useEffect(() => {
    if (textAreaRef) {
      textAreaRef.style.height = '0px'
      const scrollHeight = textAreaRef.scrollHeight
      textAreaRef.style.height = scrollHeight + 'px'
    }
  }, [textAreaRef, value])
}

export default function TwitCreate() {
  const { t } = useTranslation()

  const [value, setValue] = useState('')
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useAutosizeTextArea(textAreaRef.current, value)

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value

    setValue(val)
  }

  const mockData = {
    avatar:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/375px-Flag_of_Ukraine.svg.png',
  }

  return (
    <div className="flex w-full p-3 shadow-[0px_0px_0px_1px_#2f3336]">
      <img
        className="flex w-10 h-10 rounded-full mr-3"
        alt="avatar"
        src={mockData.avatar}
      />
      <div className="flex flex-col w-full">
        <textarea
          className="flex py-2 bg-black text-white outline-none text-lg placeholder-[#71767b] resize-none"
          name="twitCreate"
          placeholder={t('TweetHolder')}
          maxLength={280}
          rows={1}
          onChange={handleChange}
          ref={textAreaRef}
          value={value}
        ></textarea>
        <div className="flex self-end">
          <span className="flex items-center px-4 text-base min-h-[36px] text-white rounded-full bg-[#1d9bf0] hover:bg-[rgb(26,140,216)] transition-colors duration-200">
            {t('Tweet')}
          </span>
        </div>
      </div>
    </div>
  )
}
