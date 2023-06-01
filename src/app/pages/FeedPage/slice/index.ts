import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from 'utils/@reduxjs/toolkit'
import { FeedPageState } from './types'

export const initialState: FeedPageState = {
  username: '',
  nickname: '',
}

const slice = createSlice({
  name: 'feedpage',
  initialState,
  reducers: {
    changeUsername(state, action: PayloadAction<string>) {
      state.username = action.payload
    },
    changeNickname(state, action: PayloadAction<string>) {
      state.nickname = action.payload
    },
  },
})

export const { actions: feedPageActions, reducer: feedPageReducer } = slice
