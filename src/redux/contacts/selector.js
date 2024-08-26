import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = ({ contacts }) => contacts;
export const selectFilter = ({ filter }) => filter;

// export const selectFilter = state => state.filter;

const sortedContacts = contacts =>
  contacts.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  ({ items }, filter) => {
    const filteredContacts = items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return sortedContacts(filteredContacts);
  }
);
