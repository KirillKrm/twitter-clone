import { useState } from 'react'
import { register as registerRequest } from 'app/api/services'
import { SignUpPayload } from 'app/pages/SignupPage/types'

export const useRegistration = () => {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)

  const register = async (formData: SignUpPayload) => {
    setLoading(true)

    try {
      const response = await registerRequest(formData)
      console.log(response)
      setUser(response)

      // if (response) {
      //   setError(null)
      // } else {
      //   const data = await response.json()
      //   setError(data.message || 'Registration failed')
      // }
    } catch (error) {
      setError((error as any).message)
    }

    setLoading(false)
  }

  return { register, user, loading, error }
}

// Login hook
// export const useLogin = () => {
//   const [error, setError] = useState<string | null>(null)
//   const [loading, setLoading] = useState(false)

//   const login = async formData => {
//     setLoading(true)

//     try {
//       // Make API request to authenticate user and get JWT
//       const response = await fetch('/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       })

//       if (response.ok) {
//         // Login successful
//         const data = await response.json()
//         // Store JWT token in localStorage or sessionStorage
//         localStorage.setItem('token', data.token)
//         setError(null)
//       } else {
//         // Login failed
//         const data = await response.json()
//         setError(data.message || 'Login failed')
//       }
//     } catch (error) {
//       setError('An error occurred during login')
//     }

//     setLoading(false)
//   }

//   return { login, loading, error }
// }
