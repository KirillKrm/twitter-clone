import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from 'utils/@reduxjs/toolkit' // Importing from `utils` makes them more type-safe ✅
import { SignupPageState } from './types'

// The initial state of the Homepage
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
    // change(state, action: Payload)
    changeName(state, action: PayloadAction<string>) {
      // Here we say lets change the username in my homepage state when changeUsername actions fires
      // Type-safe: It will expect `string` when firing the action. ✅
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

/**
 * `actions` will be used to trigger change in the state from where ever you want
 */

export const { actions: signUpPageActions, reducer: signUpPageReducer } = slice
// Reducer<SignupPageState, AnyAction>
