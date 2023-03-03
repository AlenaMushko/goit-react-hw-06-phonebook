import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { FilterContacts } from './Filter';

import { Container, ContactsTitle, Title } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const isContactRecorded = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    isContactRecorded
      ? alert(`${name} is alreadi in contacts`)
      : setContacts(contacts => (contacts = [contact, ...contacts]));
  };

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
    setContacts(
      contacts =>
        contacts = contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />
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


