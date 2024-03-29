import * as React from 'react'
import classnames from 'classnames'

type ListProps = {
  list: { name: string | number }[]
  placeholder: string
  setValid?: React.Dispatch<React.SetStateAction<boolean>>
  value: string | undefined
  setValue?: React.Dispatch<React.SetStateAction<string | undefined>>
}

export default function SelectField({
  list,
  placeholder,
  setValid,
  value,
  setValue,
}: ListProps) {
  const [everFocusedInput, setEverFocusedInput] = React.useState(false)
  const [isChoosen, setІsChoosen] = React.useState(false)
  const isSelectEmpty = value?.length === 0
  const labelStyle = classnames(styles.container__label, {
    [styles.container__label_shrinked]: isChoosen || !isSelectEmpty,
  })
  const selectRef = React.useRef<HTMLSelectElement>(null)

  React.useEffect(() => {
    if (setValid && selectRef.current != null) {
      setValid(
        (selectRef.current.checkValidity() && isChoosen) || !isSelectEmpty,
      )
    }
  })

  const handleOnFocus = () => setEverFocusedInput(true)

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.selectedIndex !== -1) setІsChoosen(true)
    if (setValue) setValue(e.target.value)
  }

  return (
    <div className={styles.container}>
      <select
        ref={selectRef}
        className={styles.container__input}
        name="text"
        value={value}
        autoComplete="off"
        required={everFocusedInput}
        onFocus={handleOnFocus}
        onChange={handleOnChange}
      >
        <option value="" disabled></option>
        {list.map(({ name }) => {
          return (
            <option key={name} value={name}>
              {name}
            </option>
          )
        })}
      </select>
      <label className={labelStyle}>{placeholder}</label>
    </div>
  )
}

const styles = {
  container: `
    relative
    h-[56px]
    w-full
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
    outline-none
    cursor-pointer

    focus:border-blue dark:focus:border-blue
    invalid:border-red dark:invalid:border-red
    valid:border-primaryBorder-light dark:valid:border-primaryBorder-dark
  
    peer

    select-arrow
  `,
  container__label: `
    absolute
    w-[284px]
    text-[17px]
    text-secondary
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
    peer-focus-within:text-blue
  `,
  container__label_shrinked: `
    text-[12px]
    top-[6px]

    peer-valid:top-[5px]
    peer-valid:text-[12px]
    peer-valid:text-secondary
  `,
}
