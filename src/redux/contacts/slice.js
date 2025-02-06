import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  editContactThunk,
  fetchContacts,
} from './operations';
import { logoutThunk } from '../auth/operations';

const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
};

const slice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          item => item.id !== action.payload.id
        );
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
      })
      .addCase(editContactThunk.fulfilled, (state, action) => {
        const item = state.contacts.items.find(
          item => item.id === action.payload.id
        );
        if (item) {
          item.name = action.payload.name;
        }
      })
      .addCase(logoutThunk.fulfilled, state => {
        state.contacts.items = [];
        state.contacts.loading = false;
        state.contacts.error = null;
      });
  },
});
export const contactsReducer = slice.reducer;
export const { setError, setLoading, fetchDataSuccess } = slice.actions;
