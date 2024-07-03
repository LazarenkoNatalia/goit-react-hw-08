import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'
  // 'https://connections-api.goit.global'

const setAuthHeader = token => axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

const clearAuthHeader = () => axios.defaults.headers.common['Authorization'] = "";

export const register = createAsyncThunk('auth/register', async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", { name, email, password })
      setAuthHeader(response.data.token)
        return response.data
    }
    catch (error) {
     return thunkAPI.rejectWithValue(error.message)   
    }
 })

export const logIn = createAsyncThunk('auth/logIn', async ({ email, password }, thunkAPI) => {
  try {
    const response = await axios.post("/users/login", { email, password })
    setAuthHeader(response.data.token)
        return response.data
  }
  catch (error) {
    return thunkAPI.rejectWithValue(error.message)    
  }
 })

export const logOut = createAsyncThunk('auth/logOut', async (_,thunkAPI) => {
  try {
    const response = await axios.post("/users/logout")
    clearAuthHeader()
    return response.data
  } catch (error) {
  return thunkAPI.rejectWithValue(error.message)     
  }
})

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  try {
    const { auth } = thunkAPI.getState()
    setAuthHeader(auth.token)
    const response = await axios.get("/users/current")
    setAuthHeader(response.data.token)
    
    return response.data
  } catch (error) {
    clearAuthHeader()
    return thunkAPI.rejectWithValue(error.message)
  }
}, {
  condition: (_, thunkAPI) => {
    const { auth } = thunkAPI.getState()
    if (!auth.token) {
      return false
    }
    }
  }
)