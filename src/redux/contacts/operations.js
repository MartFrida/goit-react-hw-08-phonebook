// https://65660ca1eb8bb4b70ef2d6ab.mockapi.io/api/v1/contacts
// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../configAxios/api';

// axios.defaults.baseURL = 'https://65660ca1eb8bb4b70ef2d6ab.mockapi.io/api/v1'

export const fetchContactsThunk = createAsyncThunk('fetchContacts', async (_, thunkAPI) => {
  try {
    const { data } = await api.get('contacts')
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const deleteContactThunk = createAsyncThunk('deleteContact', async (id, thunkAPI) => {
  try {
    const { data } = await api.delete(`contacts/${id}`)
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const addContactThunk = createAsyncThunk('addContact', async ({ name, number }, thunkAPI) => {
  try {
    const { data } = await api.post('contacts', { name, number })
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})