import * as React from 'react'
import 'index.css'

export default function SvgButtonBack() {
  return (
    <svg className={styles.button__svg} viewBox="0 0 24 24">
      <g>
        <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
      </g>
    </svg>
  )
}

const styles = {
  button__svg: `
    w-5 
    h-5
  `,
}
