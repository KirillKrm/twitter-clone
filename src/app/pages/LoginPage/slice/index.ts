import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from 'utils/@reduxjs/toolkit'
import { LoginPageState } from './types'

export const initialState: LoginPageState = {
  login: '',
}

const slice = createSlice({
  name: 'loginpage',
  initialState,
  reducers: {
    changeLogin(state, action: PayloadAction<string>) {
      state.login = action.payload
    },
  },
})

export const { actions: loginPageActions, reducer: loginPageReducer } = slice
