import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice";
import { authReducer } from "./auth/slice";


const rootReducer = combineReducers({
  contactsData: contactsReducer,
  auth: authReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
})

