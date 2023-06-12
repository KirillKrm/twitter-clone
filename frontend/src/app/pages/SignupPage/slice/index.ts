import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from 'utils/@reduxjs/toolkit'
import { SignupPageState } from './types'

export const initialState: SignupPageState = {
  username: '',
  nickname: '',
  email: '',
  password: '',
  birthday: { month: '', day: '', year: '' },
}

const slice = createSlice({
  name: 'signuppage',
  initialState,
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      state.username = action.payload
    },
    changeNickname(state, action: PayloadAction<string>) {
      state.nickname = action.payload
    },
    changeEmail(state, action: PayloadAction<string>) {
      state.email = action.payload
    },
    changePassword(state, action: PayloadAction<string>) {
      state.password = action.payload
    },
    changeBirthday(state, action: PayloadAction<any>) {
      state.birthday = action.payload
    },
  },
})

export const { actions: signUpPageActions, reducer: signUpPageReducer } = slice
