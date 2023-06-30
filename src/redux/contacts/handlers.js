import { toast } from 'react-toastify';

export const handlePanding = state => {
  state.isLoading = true;
};
export const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};

export const handleGetContactsFullfiled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contacts = payload;
};

export const handleCreateContactFullfiled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.contacts.unshift(payload);
  toast.success(`"${payload.name}" successfully added to your contacts 🔥`);
};

export const handlDeleteContactFullfiled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  toast.info(`Contact "${payload.name}" deleted 👌`);
  state.contacts.splice(
    state.contacts.findIndex(contact => contact.id === payload.id),
    1
  );
};

export const handleEditContactsFullfiled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.completed = true;
  state.contacts[
    state.contacts.findIndex(contact => contact.id === payload.id)
  ] = {
    ...payload,
  };
  toast.success(`Contact updated ✔`);
};
