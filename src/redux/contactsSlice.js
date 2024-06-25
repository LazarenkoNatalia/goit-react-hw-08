import { createSlice, createSelector } from '@reduxjs/toolkit'
import { fetchContacts, deleteContact, addContact } from './contactsOps.js'
import { selectNameFilter } from './filtersSlice.js'

 const initialContactsState = {
   items: [],
    loading: false,
     error: null,
    }

const contactsSlice = createSlice({
	name: 'contacts',
  initialState: initialContactsState,
  extraReducers: (builder) => builder
    .addCase(fetchContacts.pending, (state) => {
      state.error = false
      state.loading = true
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.loading = false
      state.items = action.payload
      
     })
    .addCase(fetchContacts.rejected, (state) => {
      state.loading = false
      state.error = true
    })
  .addCase(deleteContact.pending, (state) => {
      state.error = false
      state.loading = true
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.loading = false
      state.items = state.items.filter((item)=> item.id !== action.payload.id)
     })
    .addCase(deleteContact.rejected, (state) => {
      state.loading = false
      state.error = true
    })
   .addCase(addContact.pending, (state) => {
      state.error = false
      state.loading = true
    })
    .addCase(addContact.fulfilled, (state, action) => {
      state.loading = false
      state.items.push(action.payload)
     })
    .addCase(addContact.rejected, (state) => {
      state.loading = false
      state.error = true
    })
// 	reducers: {
//  deleteContact: (state, action) => {
//    state.items = state.items.filter(contact => contact.id !== action.payload);
//  },
//  addContact: (state, action) => {
//    state.items.push(action.payload);
//  },
// },
	},
)

// export const { addContact, deleteContact, fetchContacts} = contactsSlice.actions
 export const  contactsReducer = contactsSlice.reducer

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
	[selectContacts, selectNameFilter],
	(contacts, filter) => {
		return contacts.filter(contact => 
	contact.name.toLowerCase().includes(filter.toLowerCase())
		)
	}
)