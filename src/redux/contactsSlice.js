import { createSlice } from "@reduxjs/toolkit";

import { fetchContacts, addContact, deleteContact } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = false;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: "",
    contactForm: {
      name: "",
      number: "",
    },
  },
  reducers: {
    updateFilter(state, action) {
      state.filter = action.payload;
    },
    updateName(state, action) {
      state.contactForm.name = action.payload;
    },
    updateNumber(state, action) {
      state.contactForm.number = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        if (index !== -1) {
          state.items.splice(index, 1);
        }
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const { updateFilter, updateName, updateNumber } = contactsSlice.actions;

export default contactsSlice.reducer;
