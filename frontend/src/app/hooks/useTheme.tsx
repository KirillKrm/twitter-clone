export const useTheme = () => {
  const setLightTheme = () => {
    const setTheme = () => {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    }

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'dark') {
        setTheme()
      }
      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains('dark')) {
        setTheme()
      }
    }
  }

  const setkDarkTheme = () => {
    const setTheme = () => {
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    }

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        setTheme()
      }
      // if NOT set via local storage previously
    } else {
      if (!document.documentElement.classList.contains('dark')) {
        setTheme()
      }
    }
  }

  return { setLightTheme, setkDarkTheme }
}
