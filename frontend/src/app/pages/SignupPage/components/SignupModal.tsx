import * as React from 'react'
import 'index.css'
import { AnimatePresence, motion } from 'framer-motion'

import SignupModalWindow1 from 'app/pages/SignupPage/components/SignupModalWindow1'
import SignupModalWindow2 from 'app/pages/SignupPage/components/SignupModalWindow2'
import SignupModalWindow3 from 'app/pages/SignupPage/components/SignupModalWindow3'

export type SignupModalProps = {
  onClose?: () => void
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

export function SignupModal({ onClose }: SignupModalProps) {
  const [step, setStep] = React.useState('first')
  const [direction, setDirection] = React.useState(0)

  const paginate = (step: string, direction: number) => {
    setStep(step)
    setDirection(direction)
  }

  return (
    <div className={styles.container}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={step}
          className="absolute"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            ease: 'easeOut',
            duration: 0.4,
            opacity: { duration: 0.4 },
          }}
        >
          {step === 'first' ? (
            <SignupModalWindow1
              goToNextStep={() => paginate('second', 1)}
              handleClose={onClose}
            />
          ) : step === 'second' ? (
            <SignupModalWindow2
              goToPrevStep={() => paginate('first', -1)}
              goToNextStep={() => paginate('third', 1)}
            />
          ) : step === 'third' ? (
            <SignupModalWindow3
              goToPrevStep={() => paginate('second', -1)}
              handleClose={onClose}
            />
          ) : null}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

const styles = {
  container: `
    flex
    justify-center
    items-center
    w-full
    bg-[rgba(0,0,0,0.4)] dark:bg-[rgba(91,112,131,0.4)]
  `,
}
