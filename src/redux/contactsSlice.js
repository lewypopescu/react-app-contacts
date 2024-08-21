import { createSlice } from "@reduxjs/toolkit";

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
});

export const { updateFilter, updateName, updateNumber } = contactsSlice.actions;

export default contactsSlice.reducer;
