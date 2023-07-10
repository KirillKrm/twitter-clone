/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RootState } from 'types'
import 'index.css'
import 'locales/i18n'

import { FeedPage } from './pages/FeedPage/index'
import { LoginPage } from './pages/LoginPage/index'
import { SignupPage } from './pages/SignupPage/index'
import { NotFoundPage } from './pages/NotFoundPage/index'
import ErrorBoundary from './components/ErrorBoundary'
import { UserContext } from './contexts/UserContext'

export function App() {
  const { i18n } = useTranslation()
  const user = useSelector((state: RootState) => state.user)
  console.log('App user state', user)

  return (
    <UserContext.Provider value={user}>
      <Helmet
        titleTemplate="Twitter Clone"
        defaultTitle="Twitter Clone"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="Twitter Clone" />
      </Helmet>
      <ErrorBoundary>
        <Routes>
          {['/', '/home'].map((path, index) => (
            <Route path={path} element={<FeedPage />} key={index} />
          ))}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ErrorBoundary>
    </UserContext.Provider>
  )
}
