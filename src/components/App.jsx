import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { FilterContacts } from './Filter';
import { Container, ContactsTitle, Title } from './App.styled';


export const App = () => {
  const contacts = useSelector(getContacts); 
  const dispatch = useDispatch();

  const addContacts = () => dispatch(addContact(contacts))

   console.log(contacts);

  const [filter, setFilter] = useState('');

  const visibleContacts = () => {
    const normolizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normolizeFilter)
    );
  };
  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  const deliteContact = contactId => {
    // setContacts(
    //   contacts =>
    //     contacts = contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContacts} />
      {contacts.length > 0 && <ContactsTitle>Contacts</ContactsTitle>}
      {contacts.length > 0 && (
        <FilterContacts value={filter} onChange={changeFilter} />
      )}
      {contacts.length > 0 && (
        <ContactList
          contacts={visibleContacts()}
          onDelete={deliteContact}
        />
      )}
    </Container>
  );
};


