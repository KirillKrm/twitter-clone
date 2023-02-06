/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'index.css'
import 'locales/i18n.ts'

import { HomePage } from './pages/HomePage/index'
import { NotFoundPage } from './pages/NotFoundPage/index'
import { useTranslation } from 'react-i18next'

export function App() {
  const { i18n } = useTranslation()

  return (
    <>
      <BrowserRouter>
        <Helmet
          titleTemplate="Twitter Clone"
          defaultTitle="Twitter Clone"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="Twitter Clone" />
        </Helmet>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
