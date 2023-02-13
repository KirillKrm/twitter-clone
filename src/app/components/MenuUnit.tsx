import * as React from 'react'
import { useTranslation } from 'react-i18next'
import 'index.css'

type MenuProps = {
  name: string
  image: string
  link: string
  active: string
  setActive: Function
}

export default function MenuUnit(props: MenuProps) {
  const { t } = useTranslation()

  return (
    <a
      key={props.name}
      href={props.link}
      className={
        styles.container__button +
        `${props.active === props.name ? 'font-bold' : ''}`
      }
      onClick={() => props.setActive(props.name)}
    >
      <svg viewBox="0 0 24 24" className={styles.button__svg}>
        <g className={styles.svg__g}>
          <path d={props.image}></path>
        </g>
      </svg>
      <span className={styles.button__name}>{t(props.name)}</span>
    </a>
  )
}

const styles = {
  container__button: `
    flex 
    items-center 
    w-max 
    p-3 
    my-1 
    rounded-full 
    hover:bg-[rgb(15,20,25,0.1)] dark:hover:bg-[rgb(231,233,234,0.1)] 
    transition-colors 
    duration-200
  `,
  button__svg: `
    w-6 
    h-6 
    mr-3
  `,
  svg__g: `
    text-black dark:text-white
  `,
  button__name: `
    text-black dark:text-white 
    text-base 
    text-[20px]
  `,
}
