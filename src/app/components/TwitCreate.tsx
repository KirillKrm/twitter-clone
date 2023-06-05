import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import classnames from 'classnames'
import 'index.css'

import { useAuth } from 'app/hooks/useAuth'
import { postTwit } from 'app/api/twits'
import Avatar from 'app/components/Avatar'

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
  const { user } = useAuth()
  const [value, setValue] = useState('')
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useAutosizeTextArea(textAreaRef.current, value)

  const isInputEmpty = value.length === 0
  const buttonStyle = classnames(styles.inputBox__button, {
    'pointer-events-none opacity-50': isInputEmpty,
  })

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value

    setValue(val)
  }

  const handleOnClick = async () => {
    const res = await postTwit({ content: value })
    if (res) {
      if (textAreaRef.current) textAreaRef.current.value = ''
    }
  }

  if (!user) {
    return <></>
  }

  return (
    <div className={styles.container}>
      <Avatar />
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
        <div className={buttonStyle} onClick={handleOnClick}>
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
    shadow-[0px_0px_0px_1px_#eff3f4] dark:shadow-[0px_0px_0px_1px_#2f3336]
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
    placeholder-[#536471] dark:placeholder-[#71767b]
    resize-none
    select-none
  `,
  inputBox__button: `
    flex 
    self-end
    select-none
    h-[36px] 
    bg-[#1d9bf0] 
    hover:bg-[#1a8cd8] 
    rounded-full 
    transition-colors 
    duration-200
  `,
  button__text: `
    flex 
    items-center 
    px-4 
    text-base 
    text-white 
  `,
}
