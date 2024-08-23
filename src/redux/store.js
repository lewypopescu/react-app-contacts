import { configureStore } from "@reduxjs/toolkit";

import contactsReducer from "./contactsSlice";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    contactsSlice: contactsReducer,
    authSllice: authReducer,
  },
});
