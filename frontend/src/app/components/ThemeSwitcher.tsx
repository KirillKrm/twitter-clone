import * as React from 'react'
import 'index.css'
import { motion } from 'framer-motion'
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
        transition={{ type: 'spring', stiffness: 800, damping: 60 }}
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
    p-1
    justify-start
    bg-tertiary
    rounded-full
    cursor-pointer
  `,
  container__handle: `
    flex
    w-[32px]
    h-[32px]
    bg-[#000] dark:bg-[#fff]
    rounded-full
    justify-center
    items-center
    transition-colors
    duration-[400ms]
  `,
  handle__svg: `
    justify-center
    items-center
    w-4/5
    h-4/5
  `,
}
