import * as React from 'react'
import 'index.css'

export default function ThemeSwitcher() {
  const handleClickLight = () => {
    const setThemeLight = () => {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    }

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'dark') {
        setThemeLight()
      }
      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains('dark')) {
        setThemeLight()
      }
    }
  }

  const handleClickDark = () => {
    const setThemeDark = () => {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    }

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        setThemeDark()
      }
      // if NOT set via local storage previously
    } else {
      if (!document.documentElement.classList.contains('dark')) {
        setThemeDark()
      }
    }
  }

  return (
    <div className={styles.container}>
      <button
        className={styles.container__light}
        onClick={() => handleClickLight()}
      >
        light
      </button>
      <button
        className={styles.container__dark}
        onClick={() => handleClickDark()}
      >
        dark
      </button>
    </div>
  )
}

const styles = {
  container: `
    flex
    flex-col
    gap-1
  `,
  container__light: `
    py-1
    px-2
    bg-white
    text-black
    rounded-lg
    border-2
    border-black
  `,
  container__dark: `
    py-1
    px-2
    bg-black
    text-white
    rounded-lg
    border-2
    border-white
  `,
}
