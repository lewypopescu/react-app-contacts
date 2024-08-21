import { configureStore } from "@reduxjs/toolkit";

import contactsReducer from "./contactsSlice";

export const store = configureStore({
  reducer: {
    contactsSlice: contactsReducer,
  },
});

export default store;