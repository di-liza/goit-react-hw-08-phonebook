import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './inicialState';
import {
  handleLogOutFullfiled,
  handleLoginFullfiled,
  handlePending,
  handleRefreshFullfiled,
  handleRegisterFullfiled,
  handleRejected,
} from './handlers';
import { fetchrefresh, logOut, login, register } from './operation';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleRegisterFullfiled)
      .addCase(login.fulfilled, handleLoginFullfiled)
      .addCase(logOut.fulfilled, handleLogOutFullfiled)
      .addCase(fetchrefresh.fulfilled, handleRefreshFullfiled)
      .addCase(fetchrefresh.pending, handlePending)
      .addCase(fetchrefresh.rejected, handleRejected);
  },
});

export default authSlice.reducer;
