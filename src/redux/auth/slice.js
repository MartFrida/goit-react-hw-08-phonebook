import { createSlice } from "@reduxjs/toolkit"
import { loginThunk, registerThunk } from "./operations"


const initialState = {
  user: {
    name: '',
    email: ''
  },
  token: '',
  isLoggedIn: false,
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(registerThunk.fulfilled, (state, { payload }) => {
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



// leyla8hw@gmail.com