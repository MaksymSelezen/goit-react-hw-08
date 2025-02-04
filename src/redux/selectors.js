import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from './contactsSlice';
import { selectFilters } from './filtersSlice';

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filterName) => {
    const filterContacts = filterName.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterContacts)
    );
  }
);
