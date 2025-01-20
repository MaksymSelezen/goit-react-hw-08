import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: {
    name: '',
  },
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.filters.name = action.payload;
    },
  },
});
export const filtersReducer = slice.reducer;
export const { changeFilter } = slice.actions;

export const selectFilters = state => state.filters.filters.name;
