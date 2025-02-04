import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  editContactThunk,
  fetchContacts,
} from './contactsOps';

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
  // reducers: {
  //   deleteContact: (state, action) => {
  //     state.contacts.items = state.contacts.items.filter(
  //       contact => contact.id !== action.payload
  //     );
  //   },
  //   addContact: (state, action) => {
  //     state.contacts.items.push(action.payload);
  //   },
  //   setLoading: (state, action) => {
  //     state.loading = action.payload;
  //   },
  //   setError: (state, action) => {
  //     state.error = action.payload;
  //   },
  //   fetchDataSuccess: (state, action) => {
  //     state.contacts.items = action.payload;
  //   },
  // },
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
        item.name = action.payload.name;
      });
  },
});
export const contactsReducer = slice.reducer;
export const { setError, setLoading, fetchDataSuccess } = slice.actions;

export const selectContacts = state => state.contacts.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
