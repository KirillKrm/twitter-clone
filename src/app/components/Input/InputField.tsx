import * as React from 'react'
import classnames from 'classnames'
import SvgConfirmed from '../SVG/SvgConfirmed'

type InputFieldProps = {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  placeholder: string
  validator?: (str: string) => boolean
  maxLength?: number
  counterMax?: number
  pattern?: string
  setValid?: React.Dispatch<React.SetStateAction<boolean>>
  isConfirmed?: boolean
  isError?: boolean
  onClick?: any
  disabled?: boolean
  isPassword?: boolean
}

export default function InputField({
  value = '',
  setValue,
  setValid,
  placeholder,
  maxLength,
  pattern = '.*',
  isConfirmed,
  isError,
  onClick,
  disabled,
  isPassword,
}: InputFieldProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [everFocusedInput, setEverFocusedInput] = React.useState(false)
  const [counter, setCounter] = React.useState('')

  const isInputEmpty = value.length === 0
  const inputStyle = classnames(styles.container__input, {
    [styles.container__input_disabled]: disabled,
    'border-1 valid:border-red dark:valid:border-red': isError,
  })
  const labelStyle = classnames(styles.container__label, {
    [styles.container__label_shrinked]: pattern && !isInputEmpty,
    [styles.container__label_disabled]: disabled,
  })

  React.useEffect(() => {
    if (setValid && inputRef.current != null) {
      setValid(inputRef.current.checkValidity() && !isInputEmpty)
    }
  })

  const handleOnChange = (e: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setValue(e.target.value)
  }

  const handleOnFocus = () => setEverFocusedInput(true)

  const handleOnInput = (e: any) =>
    maxLength &&
    setCounter((e.target as HTMLInputElement).value.length + '/' + maxLength)

  return (
    <>
      <div
        className={styles.container}
        onClick={onClick ? () => onClick('second') : undefined}
      >
        <input
          ref={inputRef}
          className={inputStyle}
          name="text"
          type={isPassword ? 'password' : 'text'}
          value={value}
          autoComplete="off"
          title=""
          maxLength={maxLength}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          onInput={handleOnInput}
          pattern={everFocusedInput ? pattern : undefined}
          required={!!pattern && everFocusedInput}
          disabled={disabled}
        />
        <label className={labelStyle}>{placeholder}</label>
        <label className={styles.container__counter}>{counter}</label>
        {isConfirmed && (
          <div className={styles.container__svg}>
            <SvgConfirmed />
          </div>
        )}
      </div>
    </>
  )
}

const styles = {
  container: `
    relative
    h-[56px]
    w-full
    my-2
  `,
  container__input: `
    absolute
    box-border
    bottom-0
    w-full
    h-full
    px-2
    pt-5
    text-[17px]
    leading-[24px]
    bg-primaryBg-light dark:bg-primaryBg-dark
    rounded-[4px]
    border
    outline-none

    focus:border-logo-light dark:focus:border-logo-light
    invalid:border-red dark:invalid:border-red
    valid:border-primaryBorder-light dark:valid:border-primaryBorder-dark

    peer
  `,
  container__input_disabled: `
    bg-[rgba(32,35,39,0.5)] dark:bg-[rgba(32,35,39,0.5)]
    text-[rgba(83,100,113,0.5)] dark:text-[rgba(113,118,123,0.5)]
    text-[]
    border-none
  `,
  container__label: `
    absolute
    w-[284px]
    text-[17px]
    text-secondaryText-light dark:text-secondaryText-dark
    top-[16px]
    left-[8px]
    pointer-events-none
    whitespace-nowrap
    text-ellipsis
    overflow-hidden

    transition-all
    ease-in-out
    duration-[0.15s]

    peer-focus-within:top-[5px]
    peer-focus-within:text-[12px]
    peer-focus-within:text-logo-light
  `,
  container__label_disabled: `
    text-[rgba(83,100,113,0.5)] dark:text-[rgba(113,118,123,0.5)]
  `,
  container__label_shrinked: `
    text-[12px]
    top-[5px]

    peer-valid:top-[5px]
    peer-valid:text-[12px]
    peer-valid:text-secondaryText-light
    peer-valid:text-secondaryText-dark
  `,
  container__counter: `
    hidden
    absolute
    right-[8px]
    top-[8px]
    leading-[16px]
    text-[14px]
    text-secondaryText-light dark:text-secondaryText-dark
    pointer-events-none

    peer-focus-within:block
  `,
  container__svg: `
    absolute
    bottom-0
    right-0
    px-2
    py-2
  `,
}
