import * as React from 'react'
import classnames from 'classnames'

type InputFieldProps = {
  value: string
  setValue: (value: string) => any //todo function
  placeholder: string
  validator?: (str: string) => boolean
}

export default function InputField({
  value = '',
  setValue,
  placeholder,
  validator,
  ...restProps
}: InputFieldProps) {
  return (
    <>
      <div className={styles.container}>
        <input
          className={styles.container__input}
          name="text"
          type="text"
          id="login"
          autoComplete="off"
          title=""
          required
          onChange={e => {
            console.log(e)
            setValue(e.target.value)
            if (validator && !validator(e.target.value)) {
              console.log('Wrong input text!')
            }
          }}
        />
        <label className={styles.container__label} htmlFor="login">
          {placeholder}
        </label>
      </div>
    </>
  )
}

// const emailExp = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
// const emailValidator = (str: string) => {
//   return emailExp.test(str)
// }

// type EmailInputProps = Omit<InputFieldProps, 'validator'>

// export function EmailInput(props: EmailInputProps) {
//   return <InputField validator={emailValidator} {...props} />
// }

export function EmailInput({
  value = '',
  setValue,
  placeholder,
  validator,
}: InputFieldProps) {
  const [everFocusedInput, setEverFocusedInput] = React.useState(false)
  const onInputFocus = () => setEverFocusedInput(true)

  // TODO rewrite
  const inputStyleCN = classnames({
    [styles.container__input_unfilled]: value.length > 0,
  })
  const labelStyleCN = classnames({
    [styles.container__label_filled]: value.length > 0,
    [styles.container__label]: value.length > 0,
  })

  return (
    <>
      <div className={styles.container}>
        <input
          className={classnames(styles.container__input, inputStyleCN)}
          name="text"
          type="text"
          id="login"
          autoComplete="off"
          title=""
          maxLength={50}
          required
          onChange={e => {
            console.log(e)
            setValue(e.target.value)
            if (validator && !validator(e.target.value)) {
              console.log('Wrong email!')
            }
          }}
          onFocus={onInputFocus}
          pattern={
            everFocusedInput ? '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$' : '^$'
          }
        />
        <label
          className={classnames(styles.container__label, labelStyleCN)}
          htmlFor="login"
        >
          {placeholder}
        </label>
      </div>
    </>
  )
}

export function NameInput({
  value = '',
  setValue,
  placeholder,
  validator,
}: InputFieldProps) {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [counter, setCounter] = React.useState('')

  React.useEffect(() => {
    if (inputRef.current) {
      const input = inputRef.current

      const countCharacters = () => {
        setCounter(input.value.length + '/50')
      }

      input.addEventListener('input', countCharacters)

      return () => {
        input.removeEventListener('input', countCharacters)
      }
    }
  })

  return (
    <>
      <div className={styles.container}>
        <input
          ref={inputRef}
          className={styles.container__input}
          name="text"
          type="text"
          id="login"
          autoComplete="off"
          title=""
          maxLength={50}
          required
          onChange={e => {
            console.log(e)
            setValue(e.target.value)
            if (validator && !validator(e.target.value)) {
              console.log('Wrong name!')
            }
          }}
        />
        <label className={styles.container__label} htmlFor="login">
          {placeholder}
        </label>
        <label className={styles.container__counter} htmlFor="login">
          {counter}
        </label>
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
  container__input_unfilled: `
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
    peer-valid:top-[5px]
    peer-valid:text-[12px]
    peer-valid:text-[rgb(113,118,123)]
  `,
  container__label_filled: `
    absolute
    w-[284px]
    text-[12px]
    text-[rgb(83,100,113)] dark:text-[rgb(113,118,123)]
    top-[5px]
    left-[8px]
    pointer-events-none
    whitespace-nowrap
    text-ellipsis
    overflow-hidden

    peer-focus-within:text-[rgb(29,155,240)]
  `,
  container__counter: `
    hidden
    absolute
    right-[8px]
    top-[8px]
    leading-[16px]
    text-[14px]
    text-[rgb(83,100,113)] dark:text-[rgb(113,118,123)]

    peer-focus-within:block
  `,
}
