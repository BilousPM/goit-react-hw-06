import { createSlice } from '@reduxjs/toolkit';

const initialState = { searchName: '' };

const slice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    search: (state, actions) => {
      state.searchName = actions.payload;
    },
  },
});

export const filtersReducer = slice.reducer;
export const { search } = slice.actions;
