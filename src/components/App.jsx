import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import ContactsForm from "./ContactsForm/ContactsForm";
import ContactsList from "./ContactsList/ContactsList";
import ContactsFilter from "./ContactsFilter/ContactsFilter";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";
import HomePage from "./HomePage";
import { updateFilter } from "../redux/contactsSlice";
import { fetchContacts, addContact, deleteContact } from "../redux/operations";
import {
  selectContacts,
  selectContactsIsLoading,
  selectContactsError,
  selectFilterContacts,
} from "../redux/selectors";

import { selectIsAuthenticated } from "../redux/selectors";

function App() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilterContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const error = useSelector(selectContactsError);

  const isAuthenticated = useSelector(selectIsAuthenticated);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isAuthenticated]);

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
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div className="p-8 bg-blue-100 min-h-screen flex flex-col items-center">
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-blue-700">Phonebook App</h1>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <section className="bg-white shadow-md rounded-lg p-6 mb-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                  Add contact
                </h2>
                <ContactsForm onSubmit={handleAddContact} />
              </section>
              <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                  Contacts:
                </h2>
                <ContactsFilter value={filter} onChange={handleChangeFilter} />
                {isLoading && <p className="text-blue-500">Loading...</p>}
                {error && <p className="text-red-500">Error: {error}</p>}
                {contacts.length === 0 && isLoading === false && (
                  <p className="text-gray-500">No contacts available.</p>
                )}
                <ContactsList
                  contacts={filteredContacts}
                  onDeleteContact={handleDeleteContact}
                />
              </section>
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute>
              <LoginPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute>
              <RegisterPage />
            </RestrictedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
