/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
// import FontFaceObserver from 'fontfaceobserver'

// Use consistent styling
import 'sanitize.css/sanitize.css'

import { App } from 'app'

import { HelmetProvider } from 'react-helmet-async'

import { configureAppStore } from 'store/configureStore'

// import { ThemeProvider } from 'styles/theme/ThemeProvider';

import reportWebVitals from 'reportWebVitals'

// Initialize languages
import './locales/i18n'

import { BrowserRouter } from 'react-router-dom'

import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

// Observe loading of Inter (to remove 'Inter', remove the <link> tag in
// the index.html file and this observer)
// const openSansObserver = new FontFaceObserver('Inter', {})

// When Inter is loaded, add a font-family using Inter to the body
// openSansObserver.load().then(() => {
//   document.body.classList.add('fontLoaded')
// })

// Redux stor
const store = configureAppStore()

// Redux persist store
const persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    {/* <ThemeProvider> */}
    <PersistGate loading={null} persistor={persistor}>
      <HelmetProvider>
        <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.StrictMode>
      </HelmetProvider>
      {/* </ThemeProvider> */}
    </PersistGate>
  </Provider>,
)

// Hot reloadable translation json files
if (module.hot) {
  module.hot.accept(['./locales/i18n'], () => {
    // No need to render the App again because i18next works with the hooks
  })
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
