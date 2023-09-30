import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: {},
  token: null,
  isLoading: false,
  error: null,
  errMsg: '',
  isRequestPending: false,
  isRequestSuccessful: false,
  isRequestRejected: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload.user;
      state.token = action.payload.token;
    },
    reset: (state) => {
      Object.assign(state, initialState);
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setErrMsg: (state, action) => {
      state.errMsg = action.payload;
    },
    setRequestPending: (state) => {
      state.isRequestPending = true;
    },
    setRequestSuccess: (state) => {
      state.isRequestSuccessful = true;
    },
    setRequestRejected: (state, action) => {
      state.isRequestRejected = true;
      state.error = action.payload; // You can optionally set an error message here
    },
    resetRequestStatus: (state) => {
      state.isRequestPending = false;
      state.isRequestSuccessful = false;
      state.isRequestRejected = false;
    },
  },
});

export const {
  setCurrentUser,
  reset,
  setLoading,
  setError,
  setErrMsg,
  setRequestPending,
  setRequestSuccess,
  setRequestRejected,
  resetRequestStatus,
} = authSlice.actions;

export default authSlice.reducer;
