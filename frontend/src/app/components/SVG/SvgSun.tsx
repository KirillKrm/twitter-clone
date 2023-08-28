export default function SvgSun() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
      <g className={styles.svg__g} strokeLinecap="round">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 2V4" />
        <path d="M12 20V22" />
        <path d="M4 12L2 12" />
        <path d="M22 12L20 12" />
        <path d="M19.7778 4.22266L17.5558 6.25424" />
        <path d="M4.22217 4.22266L6.44418 6.25424" />
        <path d="M6.44434 17.5557L4.22211 19.7779" />
        <path d="M19.7778 19.7773L17.5558 17.5551" />
      </g>
    </svg>
  )
}

const styles = {
  svg__g: `
    stroke-2
    stroke-white
    fill-white
  `,
}
