import { selectNameFilter } from "../filters/selectors.js";
import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const selectFilteredContacts = createSelector(
	[selectContacts, selectNameFilter],
	(contacts, filter) => {
		return contacts.filter(contact => 
	contact.name.toLowerCase().includes(filter.toLowerCase())
		)
	}
)