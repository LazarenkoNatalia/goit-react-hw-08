import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://6676e01b145714a1bd730cb2.mockapi.io'

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts')
        return response.data;
    }
    catch (error){
return thunkAPI.rejectWithValue(error.message)
    }
})

export const addContact = createAsyncThunk("contacts/addContact", async (newContact,thunkAPI) => {
    try {
        const response = await axios.post("/contacts", newContact)    
        return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)  
    }
})

export const deleteContact = createAsyncThunk("contacts/deleteContact", async(contId, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${contId}`)
        return response.data
    }
    catch (error){
return thunkAPI.rejectWithValue(error.message)
    }
})