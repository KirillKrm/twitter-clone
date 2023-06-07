import * as React from 'react'
import 'index.css'

export default function SvgPopupTriangle() {
  return (
    <svg className={styles.popup__triangle} viewBox="0 0 24 24">
      <g>
        <path d="M22 17H2L12 6l10 11z" />
      </g>
    </svg>
  )
}

const styles = {
  popup__triangle: `
    flex
    absolute
    left-20
    bottom-[-15px]
    w-6
    drop-shadow-[1px_-1px_1px_#333639]
    rotate-180
  `,
}
