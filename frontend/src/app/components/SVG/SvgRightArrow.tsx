import * as React from 'react'
import 'index.css'

export default function SvgRightArrow() {
  return (
    <svg viewBox="0 0 24 24" className={styles.svg}>
      <g>
        <path d="M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z"></path>
      </g>
    </svg>
  )
}

const styles = {
  svg: `
    h-4
    h-4
    text-secondary
  `,
}
