import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import 'index.css'
import classnames from 'classnames'

export type MenuUnitProps = {
  name: string
  svgPath: string
  link: string
  notAvailable?: boolean
}

export default function MenuUnit({
  name,
  svgPath: image,
  link,
  notAvailable,
}: MenuUnitProps) {
  const { t } = useTranslation()

  const buttonStyle = classnames(styles.container__button, {
    [styles.button__not_available]: notAvailable,
  })

  const button = (
    <>
      <svg viewBox="0 0 24 24" className={styles.button__svg}>
        <g className={styles.svg__g}>
          <path d={image}></path>
        </g>
      </svg>
      <span className={styles.button__name}>{t(name)}</span>
    </>
  )

  return notAvailable ? (
    <div className={buttonStyle}>{button}</div>
  ) : (
    <NavLink
      to={link}
      reloadDocument
      className={({ isActive }) =>
        classnames(buttonStyle, { 'font-bold': isActive })
      }
    >
      {button}
    </NavLink>
  )
}

const styles = {
  container__button: `
    flex 
    items-center 
    min-[1280px]:min-w-[222px]
    p-3 
    my-1 
    rounded-full 
    hover:bg-[rgba(15,20,25,0.1)] dark:hover:bg-[rgba(231,233,234,0.1)] 
    transition-colors 
    duration-200
    select-none
  `,
  button__not_available: `
    hover:blur-[2px] dark:hover:blur-[2px]
    cursor-not-allowed
  `,
  button__svg: `
    w-6 
    h-6 
  `,
  svg__g: `
    text-black dark:text-white
  `,
  button__name: `
    text-black dark:text-white 
    text-base 
    text-[20px]
    mx-4
    max-xl:hidden
  `,
}
