import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from 'utils/@reduxjs/toolkit' // Importing from `utils` makes them more type-safe ✅
import { SignupPageState } from './types'

// The initial state of the Homepage
export const initialState: SignupPageState = {
  name: '',
  email: '',
  birthday: { month: '', day: '', year: '' },
}

const slice = createSlice({
  name: 'signuppage',
  initialState,
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      // Here we say lets change the username in my homepage state when changeUsername actions fires
      // Type-safe: It will expect `string` when firing the action. ✅
      state.name = action.payload
      console.log('changing name to ' + state.name)
    },
    changeEmail(state, action: PayloadAction<string>) {
      state.email = action.payload
      console.log('changing email to ' + state.email)
    },
    changeBirthday(state, action: PayloadAction<any>) {
      state.birthday = action.payload
      console.log(
        'changing birthday to ' + state.birthday.month,
        state.birthday.day,
        state.birthday.year,
      )
    },
  },
})

/**
 * `actions` will be used to trigger change in the state from where ever you want
 */

export const { actions: signUpPageActions, reducer: signUpPageReducer } = slice
// Reducer<SignupPageState, AnyAction>
