import * as React from 'react'
import classnames from 'classnames'

type ListProps = {
  list: any[]
  placeholder: string
  setValid?: React.Dispatch<React.SetStateAction<boolean>>
  value: any
  setValue?: any
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
  const isSelectEmpty = value.length === 0
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

  return (
    <>
      <div className={styles.container}>
        <select
          ref={selectRef}
          className={styles.container__input}
          name="text"
          value={value}
          autoComplete="off"
          title=""
          required={everFocusedInput}
          onFocus={() => setEverFocusedInput(true)}
          onChange={e => {
            if (e.target.selectedIndex !== -1) setІsChoosen(true)
            if (setValue) setValue(e.target.value)
          }}
          style={{ content: '↓', color: 'white' }}
        >
          <option value="" disabled></option>
          {list.map((list: { name: string }) => {
            const { name } = list

            return (
              <option key={name} value={name}>
                {name}
              </option>
            )
          })}
        </select>
        <label className={labelStyle}>{placeholder}</label>
      </div>
    </>
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
    border-[rgba(15,20,25,0.1)] dark:border-[rgb(51,54,57)]
    outline-none
    cursor-pointer

    focus:border-[rgb(29,155,240)] dark:focus:border-[rgb(29,155,240)]
    invalid:border-[rgba(255,20,25,0.1)] dark:invalid:border-[rgb(255,54,57)]
    valid:border-[rgba(15,20,25,0.1)] dark:valid:border-[rgb(51,54,57)]
  
    peer

    select-arrow
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
    top-[6px]

    peer-valid:top-[5px]
    peer-valid:text-[12px]
    peer-valid:text-[rgb(113,118,123)]
  `,
}
