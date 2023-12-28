import { createSlice } from "@reduxjs/toolkit"
import { loginThunk, logoutThunk, refreshThunk, registerThunk } from "./operations"

const initialState = {
  user: {
    name: '',
    email: ''
  },
  token: '',
  isLoggedIn: false,
  isRefresh: false,
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name
        state.user.email = payload.email
        state.isLoggedIn = true
        state.isRefresh = false
      })
      .addCase(refreshThunk.pending, state => {
        state.isRefresh = true
      })
      .addCase(refreshThunk.rejected, state => {
        state.isRefresh = false
      })
      .addCase(logoutThunk.fulfilled, state => {
        console.log('sdfd')
        state.user = initialState.user
        state.isLoggedIn = false
        state.token = ''
      })
      .addCase(logoutThunk.pending, state => {
        state.isLoggedIn = false
      })
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user
        state.token = payload.token
        state.isLoggedIn = true
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user
        state.token = payload.token
        state.isLoggedIn = true
      })
  }
})

export const authReducer = slice.reducer
