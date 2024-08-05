import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  contact: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const slice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    deletion: (state, action) => {
      state.contact = state.contact.filter(item => item.id !== action.payload);
    },
    add: (state, action) => {
      state.contact = [...state.contact, { id: nanoid(), ...action.payload }];
    },
  },
});

export const contactReducer = slice.reducer;
export const { deletion, add } = slice.actions;
