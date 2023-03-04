import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
  name: 'phoneBook',
  initialState: { contacts: [], filter: '' },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        item => item.id !== action.payload
      );
    },
    changeFilter: (state, action) => {
      state.filter = action.payload.toLowerCase();
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

export const { addContact, removeContact, changeFilter } =
  contactsSlice.actions;

export default contactsSlice.reducer;

export const persisteContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
