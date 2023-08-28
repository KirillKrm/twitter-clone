/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from 'types'
import 'index.css'
import 'locales/i18n'

import { UserPage } from './pages/UserPage'
import { Settings } from './pages/Settings'
import { FeedPage } from './pages/FeedPage/index'
import { LoginPage } from './pages/LoginPage/index'
import { SignupPage } from './pages/SignupPage/index'
// import { Posts } from './pages/UserPage/components/Posts'
import { NotFoundPage } from './pages/NotFoundPage/index'
import { ThemesLanguages } from './pages/Settings/components/ThemesLanguages'
import ErrorBoundary from './components/ErrorBoundary'
import { UserContext } from './contexts/UserContext'

export function App() {
  const user = useSelector((state: RootState) => state.user)

  return (
    <UserContext.Provider value={user}>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<FeedPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          {/* <Route path=":userId" element={<UserPage />} /> */}
          <Route path=":nickname/*" element={<UserPage />}>
            {/* <Route index element={<Posts />} />
            <Route path="posts" element={<Posts />} />
            <Route path="replies" element={<></>} />
            <Route path="highlights" element={<></>} />
            <Route path="media" element={<></>} />
            <Route path="likes" element={<></>} /> */}
          </Route>
          <Route path="/settings" element={<Settings />}>
            <Route path="themes-and-languages" element={<ThemesLanguages />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ErrorBoundary>
    </UserContext.Provider>
  )
}
