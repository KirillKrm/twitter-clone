import 'index.css'

type AvatarProps = {
  avatar?: string
}

export default function Avatar({
  avatar = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PCw0QEQ8PChINDQ0IDQ0NCA8ICggOGBEWFhURExUYHSggGBo0GxMVITEhJSkrLjouFx8zODMtNygtLisBCgoKDQ0NDg0NDisZFRkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAGQAZAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwQFAgEGB//EADAQAAIBAgMHAwMDBQAAAAAAAAABAgMRBBIxBSEiMkFhcVFSYkKBghMj0XKRkqHB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD9xAOKlRRi23ZLVgdNlHEbShHdH9x9uX+5QxuNlUulwx9Pd5KgFqptCpLrk7JZSvKbercvLzHIKgn9iWniakdJyXa+aJEANGjtWS5kpd1ws0qGIjNXi0/VdYnzh1Cbi003FrRoD6cFHA45T4ZcMv8AUy8RQAAeNmFtDF/qSsuWL3fLuX9q18tPKtZ8P49TFAAAqABbpYCb1tDs+YCoC9LZz6ST8oq1qEocyt6NcsgIwAB6nZp71biTRu7PxX6kN/NHhl37mCTYOvkqKXTll4A+jB4mCKwdp1M1aXx4EVTqpK8pP1bkclQAAGls/D2Sm9ZcvxRcPIqyXZZT0ihzOCkmnvT1R0AMbEUsk2tbaP3IiL21I74P1TiUSoAADe2dPNRjf6f239gZOHrOMbd7giq7WoJcXDLVmvk7ERUAABtYapmpxfbK/JIY+FxLpt9U9UalLEQlo14fDIipAeOSXVLyypiccldR4n7vpiBBtGpeol7Vl+5UDYKgAAPVG4NTZuHzUr+smAI9sUbSU/VZX5M4+jxNFTg4vro/az56pFxk09zTs0ByATYbDOb9qWsgISWOHm9Ivy1lNSjh4w0X5PmJSKyHg6ntb/KJFODjqnHyjcDXh9mBgg0sRgU7uPC/b9MjOlFptO6tqmVHh7GN2kt93lSPDQ2ThryzvRcvdgauHp5YRj6KwJARQo7Qwf6izR5krf1ovAD5uhQcp5d8bc3xNiEUkktyWiLEqSbvo3q0tSKUWv5A5AAAAACrjsPmjdc0V/kvaWiSFL13dgMbBYR1JdVFc0v+I3oQUUktySskIxSVkrW6I6AAAAAAAAA4dNePBFNWAA56kkKaYAEqikegAAAAAAH/2Q==',
}: AvatarProps) {
  return <img className={styles.container} src={avatar} alt={'avatar'} />
}

const styles = {
  container: `
    flex 
    w-11 
    h-11 
    rounded-full
    mr-3
    select-none
  `,
}
