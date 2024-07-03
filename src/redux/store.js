import { configureStore } from '@reduxjs/toolkit'
import { contactsReducer } from './contacts/slice.js';
import { filtersReducer } from './filters/slice.js';
import { authReducer } from './auth/slice.js'

import { persistReducer } from 'redux-persist';
// import persistReducer from 'redux-persist/es/persistReducer'
import  storage  from 'redux-persist/lib/storage'
import {
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'

const persistConfig = {
  key: "rootAuth",
  storage,
  whitelist: ["token"]
}

const persistedAuthReducer = persistReducer(persistConfig,authReducer)


export const store = configureStore({
	reducer:  {
    auth: persistedAuthReducer,
    contacts: contactsReducer,
    filter: filtersReducer,
  },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)



// export const store = configureStore({
//   reducer: {
//     auth: persistedAuthReducer,
//     contacts: contactsReducer,
//     filter: filtersReducer,
//   },
// })