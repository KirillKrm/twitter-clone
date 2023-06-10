import 'index.css'

export default function Loading() {
  return (
    <div className={styles.container}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="64px"
        height="64px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <g transform={`rotate(${index * 30} 50 50)`} key={index}>
            <rect x="47" y="24" rx="3" ry="4.8" width="6" height="12">
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin={`${index * 0.08333333333333333}s`}
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
        ))}
      </svg>
    </div>
  )
}

const styles = {
  container: `
    flex 
    w-16
    h-16
    justify-center
    items-center
    text-logo-light
  `,
}
