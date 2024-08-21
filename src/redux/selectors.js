export const selectContacts = (state) => state.contactsSlice.items;
export const selectContactsisLoading = (state) => state.contactsSlice.isLoading;
export const selectContactsError = (state) => state.contactsSlice.error;
export const selectfilterContacts = (state) => state.contactsSlice.filter;
export const selectNameForm = (state) => state.contactsSlice.contactForm.name;
export const selectNumberForm = (state) =>
  state.contactsSlice.contactForm.number;
