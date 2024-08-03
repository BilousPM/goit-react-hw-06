import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contacts/reducer';
import filtersReducer from './filters/reducer';

const store = configureStore({
  reducer: {
    contact: contactReducer,
    filter: filtersReducer,
  },
});

export default store;