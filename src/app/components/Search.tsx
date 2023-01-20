import * as React from 'react'
import 'index.css'

export default function Search() {
  return (
    <div tabIndex={0} className={styles.container}>
      <input
        className={styles.input}
        type="text"
        name="search"
        placeholder="Search..."
      ></input>
    </div>
  )
}

const styles = {
  container: `
    flex
    bg-[#222222]
    w-[450px]
    px-4
    py-3
    rounded-[15px]
    focus-within:shadow-[0px_0px_0px_1px_deepskyblue_inset]
  `,
  input: `
    self-center
    bg-[#222222]
    text-white
    rounded-none
    outline-none
    w-[420px]
    text-lg
    placeholder-[#898989]
  `,
}
