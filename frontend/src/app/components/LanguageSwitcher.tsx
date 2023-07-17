import * as React from 'react'
import 'index.css'
import { useTranslation } from 'react-i18next'
import { Variants, motion } from 'framer-motion'

export type LanguageSwitcherProps = {
  page: string
}

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
}

export default function LanguageSwitcher(props: LanguageSwitcherProps) {
  const { i18n } = useTranslation(props.page)
  const [isOpen, setIsOpen] = React.useState(false)

  const handleOnClick = language => {
    i18n.changeLanguage(language)
    setIsOpen(false)
  }

  return (
    <motion.div
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      className={styles.container}
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className={styles.container__title}
      >
        Language
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>
      <motion.ul
        variants={{
          open: {
            clipPath: 'inset(0% 0% 0% 0% round 10px)',
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: 'inset(10% 50% 90% 50% round 10px)',
            transition: {
              type: 'spring',
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        className={styles.container__list}
      >
        <motion.li
          variants={itemVariants}
          className={styles.list__item}
          onClick={() => handleOnClick('en')}
        >
          English
        </motion.li>
        <motion.li
          variants={itemVariants}
          className={styles.list__item}
          onClick={() => handleOnClick('ua')}
        >
          Ukrainian
        </motion.li>
      </motion.ul>
    </motion.div>
  )
}

const styles = {
  container: `
    flex
    flex-col
    w-full
  `,
  container__title: `
    flex
    p-2
    mb-2
    justify-between
    items-center
    rounded
    bg-tertiary
  `,
  container__list: `
    flex
    flex-col
    py-2
    gap-1
    bg-tertiary
  `,
  list__item: `
    px-2
    cursor-pointer
    hover:bg-[rgba(15,20,25,0.1)] dark:hover:bg-[rgba(231,233,234,0.1)]
  `,
}
