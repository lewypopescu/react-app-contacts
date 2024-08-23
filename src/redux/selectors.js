export const selectContacts = (state) => state.contactsSlice.items;
export const selectContactsIsLoading = (state) => state.contactsSlice.isLoading;
export const selectContactsError = (state) => state.contactsSlice.error;
export const selectFilterContacts = (state) => state.contactsSlice.filter;
export const selectNameForm = (state) => state.contactsSlice.contactForm.name;
export const selectNumberForm = (state) =>
  state.contactsSlice.contactForm.number;

export const selectAuthUser = (state) => state.authSlice.user;
export const selectAuthToken = (state) => state.authSlice.token;
export const selectIsAuthenticated = (state) => state.authSlice.isAuthenticated;
export const selectAuthError = (state) => state.authSlice.error;
