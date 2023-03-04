import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
  name: 'phoneBook',
  initialState: { contacts: [], filter: '' },
  reducers: {
    addContact: (state, action) => {
      console.log(state);
      console.log(action);
      console.log(action.payload);
      
      state.contacts.push({
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    //   const addContact = ({ name, number }) => {
    // const contact = {
    //   id: nanoid(),
    //   name,
    //   number,
    // };
    // const isContactRecorded = contacts.find(
    //     contact => contact.name.toLowerCase() === name.toLowerCase()
    //   );
    //   isContactRecorded
    //     ? alert(`${name} is alreadi in contacts`)
    //     : setContacts(contacts => (contacts = [contact, ...contacts]));
    // };
    removeContact: (state, action) => {
      state.value = state.value.filter(item => item.id !== action.payload);
    },
    // const deliteContact = contactId => {
    //   setContacts(
    //     contacts =>
    //       contacts = contacts.filter(contact => contact.id !== contactId));
    // };

    changeFilter: (state, action) => {
      state.filter = action.payload.toLowerCase();
    },

    // const visibleContacts = () => {
    //   const normolizeFilter = filter.toLowerCase();
    //   return contacts.filter(contact =>
    //     contact.name.toLowerCase().includes(normolizeFilter)
    //   );
    // };
  },
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};



// Action creators are generated for each case reducer function
export const { addContact, removeContact, changeFilter } =
  contactsSlice.actions;

export default contactsSlice.reducer;

export const persisteContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);