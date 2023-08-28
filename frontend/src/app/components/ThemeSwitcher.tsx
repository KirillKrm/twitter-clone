import * as React from 'react'
import 'index.css'
import { cubicBezier, motion } from 'framer-motion'
import classnames from 'classnames'

import SvgMoon from './SVG/SvgMoon'
import SvgSun from './SVG/SvgSun'
import { useTheme } from '../hooks/useTheme'

export default function ThemeSwitcher() {
  const { setLightTheme, setkDarkTheme } = useTheme()
  const [isOn, setIsOn] = React.useState(
    localStorage.getItem('color-theme') === 'dark' ||
      document.documentElement.classList.contains('dark'),
  )

  const switcherStyle = classnames(styles.container, { 'justify-end': isOn })

  const handleOnClickLight = () => {
    setIsOn(false)
    setLightTheme()
  }

  const handleOnClickDark = () => {
    setIsOn(true)
    setkDarkTheme()
  }

  return (
    <div
      className={switcherStyle}
      onClick={isOn ? handleOnClickLight : handleOnClickDark}
    >
      <motion.div
        layout
        transition={{
          ease: cubicBezier(0.33, 1, 0.68, 1),
          duration: 0.5,
        }}
        className={styles.container__handle}
      >
        <motion.div className={styles.handle__svg + 'hidden dark:block'}>
          <SvgMoon />
        </motion.div>
        <motion.div className={styles.handle__svg + 'block dark:hidden'}>
          <SvgSun />
        </motion.div>
      </motion.div>
    </div>
  )
}

const styles = {
  container: `
    flex
    w-[80px]
    h-[40px]
    p-1.5
    justify-start
    items-center
    bg-tertiary
    rounded-full
    cursor-pointer
  `,
  container__handle: `
    flex
    w-[30px]
    h-[30px]
    bg-[#000] dark:bg-[#fff]
    rounded-full
    justify-center
    items-center
    transition-colors
    duration-[500ms]
  `,
  handle__svg: `
    justify-center
    items-center
    w-4/5
    h-4/5
  `,
}
