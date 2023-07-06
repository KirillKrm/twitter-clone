import { useTranslation } from 'react-i18next'
import 'index.css'

export type MenuUnitProps = {
  name: string
  svgPath: string
  link: string
  isActive: boolean
  setActive: Function
}

export default function MenuUnit({
  link,
  isActive,
  svgPath: image,
  name,
}: MenuUnitProps) {
  const { t } = useTranslation()

  return (
    <a
      href={link}
      className={
        styles.container__button +
        `${isActive ? 'font-bold' : 'cursor-default'}`
      }
    >
      <svg viewBox="0 0 24 24" className={styles.button__svg}>
        <g className={styles.svg__g}>
          <path d={image}></path>
        </g>
      </svg>
      <span className={styles.button__name}>{t(name)}</span>
    </a>
  )
}

const styles = {
  container__button: `
    flex 
    items-center 
    min-[1280px]:min-w-[200px]
    p-3 
    my-1 
    rounded-full 
    hover:bg-[rgba(15,20,25,0.1)] dark:hover:bg-[rgba(231,233,234,0.1)] 
    transition-colors 
    duration-200
    select-none
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
