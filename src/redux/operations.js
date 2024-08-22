import { createAsyncThunk } from "@reduxjs/toolkit";

import { selectContacts } from "./selectors";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const contacts = selectContacts(state);
    try {
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkApi) => {
    try {
      return contact;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactID, thunkApi) => {
    try {
      return { id: contactID };
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);
