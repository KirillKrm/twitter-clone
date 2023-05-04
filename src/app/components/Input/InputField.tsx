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
  onClick?: any
}

export default function InputField({
  value = '',
  setValue,
  setValid,
  placeholder,
  maxLength,
  pattern = '.*',
  isConfirmed,
  onClick,
}: InputFieldProps) {
  const [everFocusedInput, setEverFocusedInput] = React.useState(false)
  const [counter, setCounter] = React.useState('')
  const isInputEmpty = value.length === 0
  const labelStyle = classnames(styles.container__label, {
    [styles.container__label_shrinked]: pattern && !isInputEmpty,
  })
  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (setValid && inputRef.current != null) {
      setValid(inputRef.current.checkValidity() && !isInputEmpty)
    }
  })

  return (
    <>
      <div
        className={styles.container}
        onClick={onClick ? () => onClick('second') : undefined}
      >
        <input
          ref={inputRef}
          className={styles.container__input}
          name="text"
          type="text"
          value={value}
          autoComplete="off"
          title=""
          maxLength={maxLength}
          onChange={e => {
            console.log(e)
            setValue(e.target.value)
          }}
          // onInvalid={setValid ? () => setValid(false) : undefined}
          onFocus={() => setEverFocusedInput(true)}
          onInput={e =>
            maxLength
              ? setCounter(
                  (e.target as HTMLInputElement).value.length + '/' + maxLength,
                )
              : undefined
          }
          pattern={everFocusedInput ? pattern : undefined}
          required={!!pattern && everFocusedInput}
        />
        <label className={labelStyle} htmlFor="login">
          {placeholder}
        </label>
        <label className={styles.container__counter} htmlFor="login">
          {counter}
        </label>
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
    my-3
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
    border-[rgba(15,20,25,0.1)] dark:border-[rgb(51,54,57)]
    outline-none

    focus:border-[rgb(29,155,240)] dark:focus:border-[rgb(29,155,240)]
    invalid:border-[rgba(255,20,25,0.1)] dark:invalid:border-[rgb(255,54,57)]
    valid:border-[rgba(15,20,25,0.1)] dark:valid:border-[rgb(51,54,57)]

    peer
  `,
  container__label: `
    absolute
    w-[284px]
    text-[17px]
    text-[rgb(83,100,113)] dark:text-[rgb(113,118,123)]
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
    peer-focus-within:text-[rgb(29,155,240)]
  `,
  container__label_shrinked: `
    text-[12px]
    top-[5px]

    peer-valid:top-[5px]
    peer-valid:text-[12px]
    peer-valid:text-[rgb(113,118,123)]
  `,
  container__counter: `
    hidden
    absolute
    right-[8px]
    top-[8px]
    leading-[16px]
    text-[14px]
    text-[rgb(83,100,113)] dark:text-[rgb(113,118,123)]
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