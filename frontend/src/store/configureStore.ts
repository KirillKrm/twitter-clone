import { configureStore, StoreEnhancer } from '@reduxjs/toolkit'
import { createInjectorsEnhancer } from 'redux-injectors'
import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

import { createReducer } from './reducers'
import { signUpPageReducer } from 'app/pages/SignupPage/slice'
import { loginPageReducer } from 'app/pages/LoginPage/slice'
import { userReducer } from 'app/pages/FeedPage/slice'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(
  persistConfig,
  createReducer({
    signuppage: signUpPageReducer,
    loginpage: loginPageReducer,
    user: userReducer,
  }),
)

export function configureAppStore() {
  const reduxSagaMonitorOptions = {}
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions)
  const { run: runSaga } = sagaMiddleware

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware, thunk]

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ] as StoreEnhancer[]

  const store = configureStore({
    reducer: persistedReducer,
    middleware: middlewares,
    devTools:
      /* istanbul ignore next line */
      process.env.NODE_ENV !== 'production' ||
      process.env.PUBLIC_URL.length > 0,
    enhancers,
  })

  return store
}
