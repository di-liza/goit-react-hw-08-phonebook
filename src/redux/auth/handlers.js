export const handleRegisterFullfiled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

export const handleLoginFullfiled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

export const handleLogOutFullfiled = state => {
  state.user = {
    name: null,
    email: null,
  };
  state.token = null;
  state.isLoggedIn = false;
};

export const handleRefreshFullfiled = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const handlePending = state => {
  state.isRefreshing = true;
};

export const handleRejected = state => {
  state.isRefreshing = false;
};
