import * as React from 'react'
import InputField from './InputField'

type InputEmailProps = {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  placeholder: string
  setValid?: React.Dispatch<React.SetStateAction<boolean>>
}

export default function InputEmail(props: InputEmailProps) {
  const pattern = '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'

  return <InputField pattern={pattern} {...props} />
}
