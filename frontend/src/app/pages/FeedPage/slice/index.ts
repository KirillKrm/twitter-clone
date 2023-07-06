import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from 'utils/@reduxjs/toolkit'
import { UserState } from './types'

export const initialState = null as UserState

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUser(state, action: PayloadAction<UserState>) {
      return (state = action.payload)
    },
  },
})

export const { actions: userActions, reducer: userReducer } = slice
