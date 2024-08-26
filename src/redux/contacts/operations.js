import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteContactById,
  getAllContacts,
  postContact,
} from "../../API/serviceApi";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      return await getAllContacts();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      return await postContact(newContact);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      return await deleteContactById(contactId);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
