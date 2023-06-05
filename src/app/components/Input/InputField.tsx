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
    'border-1 dark:valid:border-rose-500': isError,
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
        {isConfirmed ? (
          <div className={styles.container__svg}>
            <SvgConfirmed />
          </div>
        ) : null}
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
    text-black dark:text-white
    leading-[24px]
    bg-white dark:bg-black
    rounded-[4px]
    border
    border-[rgba(15,20,25,0.1)] dark:border-[#333639]
    outline-none

    focus:border-[#1d9bf0] dark:focus:border-[#1d9bf0]
    invalid:border-[rgba(255,20,25,0.1)] dark:invalid:border-[#ff3639]
    valid:border-[rgba(15,20,25,0.1)] dark:valid:border-[#333639]

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
    text-[#536471] dark:text-[#71767b]
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
    peer-focus-within:text-[#1d9bf0]
  `,
  container__label_disabled: `
    text-[rgba(83,100,113,0.5)] dark:text-[rgba(113,118,123,0.5)]
  `,
  container__label_shrinked: `
    text-[12px]
    top-[5px]

    peer-valid:top-[5px]
    peer-valid:text-[12px]
    peer-valid:text-[#71767b]
  `,
  container__counter: `
    hidden
    absolute
    right-[8px]
    top-[8px]
    leading-[16px]
    text-[14px]
    text-[#536471] dark:text-[#71767b]
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
