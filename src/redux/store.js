import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contacts/contactsSlice';
import { filtersReducer } from './filters/filtersSlice';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filtersReducer,
  },
});

export default store;
