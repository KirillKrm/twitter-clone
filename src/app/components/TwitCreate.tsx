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
    <div className={styles.container}>
      <img
        className={styles.container__image}
        alt="avatar"
        src={mockData.avatar}
      />
      <div className={styles.container__inputBox}>
        <textarea
          className={styles.inputBox__textArea}
          name="twitCreate"
          placeholder={t('TweetHolder')}
          maxLength={280}
          rows={1}
          onChange={handleChange}
          ref={textAreaRef}
          value={value}
        ></textarea>
        <div className={styles.inputBox__button}>
          <span className={styles.button__text}>{t('Tweet')}</span>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: `
    flex 
    w-full 
    p-3 
    shadow-[0px_0px_0px_1px_#2f3336]
  `,
  container__image: `
    flex 
    w-10 
    h-10 
    rounded-full mr-3
  `,
  container__inputBox: `
    flex 
    flex-col 
    w-full
  `,
  inputBox__textArea: `
    flex 
    py-2 
    bg-white dark:bg-black 
    text-black dark:text-white 
    outline-none 
    text-lg 
    placeholder-[rgb(83,100,113)] dark:placeholder-[#71767b]
    resize-none
  `,
  inputBox__button: `
    flex 
    self-end
  `,
  button__text: `
    flex 
    items-center 
    px-4 
    text-base 
    min-h-[36px] 
    text-white 
    rounded-full 
    bg-[#1d9bf0] 
    hover:bg-[rgb(26,140,216)] 
    transition-colors 
    duration-200
  `,
}
