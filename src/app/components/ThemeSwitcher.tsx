import * as React from 'react'
import 'index.css'

export default function ThemeSwitcher() {
  const handleClickLight = () => {
    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'dark') {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('color-theme', 'light')
      }
      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('color-theme', 'light')
      }
    }
  }

  const handleClickDark = () => {
    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark')
        localStorage.setItem('color-theme', 'dark')
      }
      // if NOT set via local storage previously
    } else {
      if (!document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('color-theme', 'dark')
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
    flex-row
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
