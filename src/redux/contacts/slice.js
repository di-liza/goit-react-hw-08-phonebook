import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  createContact,
  deleteContact,
  editContact,
  getContacts,
} from './operation';
import {
  handlDeleteContactFullfiled,
  handleCreateContactFullfiled,
  handleEditContactsFullfiled,
  handleGetContactsFullfiled,
  handlePanding,
  handleRejected,
} from './handlers';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getContacts.fulfilled, handleGetContactsFullfiled)
      .addCase(createContact.fulfilled, handleCreateContactFullfiled)
      .addCase(deleteContact.fulfilled, handlDeleteContactFullfiled)
      .addCase(editContact.fulfilled, handleEditContactsFullfiled)
      .addMatcher(action => action.type.endsWith('/pending'), handlePanding)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export default contactsSlice.reducer;
