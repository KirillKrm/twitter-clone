import 'index.css'

type ImageProps = {
  img: string
}

export default function Image({ img }: ImageProps) {
  return <img className={styles.container__image} src={img} alt={'avatar'} />
}

const styles = {
  container__image: `
    flex 
    w-11 
    h-11 
    rounded-full
    mr-3
    select-none
  `,
}
