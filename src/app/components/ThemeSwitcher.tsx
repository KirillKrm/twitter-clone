import * as React from 'react'
import 'index.css'

export default function ThemeSwitcher() {
  const handleClickTheme = theme => {
    let currentTheme = localStorage.getItem('theme')
    localStorage.setItem('theme', theme)
    if (currentTheme !== theme) window.location.reload()
  }

  return (
    <div className={styles.container}>
      <button
        className={styles.container__light}
        onClick={() => {
          handleClickTheme('light')
        }}
      >
        light
      </button>
      <button
        className={styles.container__dark}
        onClick={() => {
          handleClickTheme('dark')
        }}
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
    shadow-[0px_0px_0px_2px_black_inset]
  `,
  container__dark: `
    py-1
    px-2
    bg-black
    text-white
    rounded-lg
    shadow-[0px_0px_0px_2px_white_inset]
  `,
}
