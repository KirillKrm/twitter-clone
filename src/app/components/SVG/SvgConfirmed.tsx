import * as React from 'react'
import 'index.css'

export default function SvgConfirmed() {
  return (
    <svg
      viewBox="0 0 24 24"
      className={styles.container__svg}
      aria-hidden="true"
    >
      <g>
        <path
          fill="rgb(0, 186, 124)"
          d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.81 14.68l-4.1-3.27 1.25-1.57 2.47 1.98 3.97-5.47 1.62 1.18-5.21 7.15z"
        ></path>
      </g>
    </svg>
  )
}

const styles = {
  container__svg: `
    w-5 
    h-5
  `,
}
