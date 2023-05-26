import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from 'utils/@reduxjs/toolkit' // Importing from `utils` makes them more type-safe ✅
import { LoginPageState } from './types'

export const initialState: LoginPageState = {
  login: '',
}

const slice = createSlice({
  name: 'loginpage',
  initialState,
  reducers: {
    changeLogin(state, action: PayloadAction<string>) {
      // Here we say lets change the username in my homepage state when changeUsername actions fires
      // Type-safe: It will expect `string` when firing the action. ✅
      state.login = action.payload
    },
  },
})

/**
 * `actions` will be used to trigger change in the state from where ever you want
 */

export const { actions: loginPageActions, reducer: loginPageReducer } = slice
