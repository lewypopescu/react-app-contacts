import { createAsyncThunk } from "@reduxjs/toolkit";

// import { selectContacts } from "./selectors";

import { contactsApi, userApi } from "../api/api";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkApi) => {
    // const state = thunkApi.getState();
    // const contacts = selectContacts(state);
    try {
      const contacts = await contactsApi.getAll();
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
      const newContact = await contactsApi.create(contact);
      return newContact;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactID, thunkApi) => {
    try {
      await contactsApi.delete(contactID);
      return contactID;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkApi) => {
    try {
      const response = await userApi.signup(user);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user, thunkApi) => {
  try {
    const response = await userApi.login(user);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    await userApi.logout();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
