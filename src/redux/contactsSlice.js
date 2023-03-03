import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], filter: '' },
  reducers: {
   addContact: (state, action) => {
      state.value.push(action.payload);
    },
    deleteContact: (state, action) => {
    //  contacts
      state.value = state.value.filter(item => item.id !== action.payload);;
    },
    changeFilter: (state, action) => {
      state.filter = action.payload.toLocaleLowerCase();
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const persisteContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

// Action creators are generated for each case reducer function
export const { addContact, deleteContact, changeFilter } = contactsSlice.actions;

export default contactsSlice.reducer;

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;


