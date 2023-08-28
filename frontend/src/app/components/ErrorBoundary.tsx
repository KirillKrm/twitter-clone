import React, { useState, useEffect } from 'react'
import { ReactI18NextChild } from 'react-i18next'

type ErrorBoundaryProps = {
  children: ReactI18NextChild
}

// TODO Rewrite
const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
  const [hasError, setHasError] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const handleError = error => {
      setHasError(true)
      setError(error.message)
      console.log(error.message)
    }

    window.addEventListener('error', handleError)

    return () => {
      window.removeEventListener('error', handleError)
    }
  }, [])

  return (
    <>
      {hasError && (
        <div className="flex fixed t-0 mx-[calc(50%-200px)] justify-center w-[400px] z-50 bg-[rgba(255,192,203,0.4)] text-white p-4">
          <p>{error}</p>
        </div>
      )}
      {children}
    </>
  )
}

export default ErrorBoundary
