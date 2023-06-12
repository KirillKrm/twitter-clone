import * as React from 'react'
import InputField from './InputField'

type InputNameProps = {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  placeholder: string
  maxLength: number
  setValid?: React.Dispatch<React.SetStateAction<boolean>>
}

export default function InputName(props: InputNameProps) {
  const pattern = '^[\\w\\d]+$'

  return <InputField pattern={pattern} {...props} />
}
