import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ContactsForm from "./ContactsForm/ContactsForm";
import ContactsList from "./ContactsList/ContactsList";
import ContactsFilter from "./ContactsFilter/ContactsFilter";

import { updateFilter } from "../redux/contactsSlice";

import { fetchContacts, addContact, deleteContact } from "../redux/operations";

import {
  selectContacts,
  selectContactsisLoading,
  selectContactsError,
  selectfilterContacts,
} from "../redux/selectors";

function App() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectfilterContacts);
  const isLoading = useSelector(selectContactsisLoading);
  const error = useSelector(selectContactsError);

  const dispatch = useDispatch;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (newContact) => {
    const contactExists = contacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (contactExists) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(newContact));
  };

  const handleChangeFilter = (event) => {
    dispatch(updateFilter(event.target.value));
  };

  const getFilteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().icludes(filter.toLowerCase())
    );
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div>
      <header>Hello App</header>
      <ContactsForm onSubmit={handleAddContact} />
      <h1>Contacts:</h1>
      <ContactsFilter value={filter} onChange={handleChangeFilter} />
      {isLoading && <p>Loading...</p>}
      {error && console.log(`${error}`)}
      {contacts.length === 0 && <p>No contacts available.</p>}
      <ContactsList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;
