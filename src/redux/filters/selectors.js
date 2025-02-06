import { createSelector } from '@reduxjs/toolkit';
import { selectFilters } from './slice';
import { selectContacts } from '../contacts/selectors';

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilters],
  (contacts, filterValue) => {
    const filter = filterValue.toLowerCase();
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter) ||
        contact.number.includes(filter)
    );
  }
);
