import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com'
 axios.defaults.baseURL = 'https://connections-api.goit.global'

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        console.log()
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

// export const updateContact = createAsyncThunk("contacts/updateContact", async(update, thunkAPI) => {
//     try {
//         const response = await axios.patch(`/contacts/${update.id}`, update)
//         return response.data
//     }
//     catch (error){
// return thunkAPI.rejectWithValue(error.message)
//     }
// })