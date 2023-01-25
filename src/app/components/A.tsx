import * as React from 'react'
import 'index.css'

export const A = (...allProps: any) => {
  const { props } = allProps.props
  const style: any = `
    text-[${props.theme.primary}]
    no-underline
    &:hover:underline
    &:hover:opacity-80
    &:active:opacity-40
  `
  return (
    <a href="/#" style={style}>
      {...allProps}
    </a>
  )
}
