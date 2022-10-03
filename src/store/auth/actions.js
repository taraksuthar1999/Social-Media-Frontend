import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const initialState = {
  error: {
    message: "",
    type: "",
  },
  loading: false,
  user: {},
  data: null,
  token: "",
};
const TOKEN = "token";
const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.loading = true;
      state.data = payload;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.token = payload.data.data.token;
      state.data = payload.data.data
      state.error.message = ''
      Cookies.set(TOKEN, payload.data.data.token, { path: "/" });
      console.log('success')
      // history.push('/welcome')
    },
    loginFailed: (state, { payload }) => {
      state.loading = false;
      state.error.message = payload;
      state.token = ""
    },
    register: (state, { payload }) => {
      state.loading = true;
      state.data = payload;
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.error.message = ''
    },
    registerFailed: (state, { payload }) => {
      state.loading = false;
      state.error.message = payload;
    },
    resetError: (state) => {
      state.error.message = "";
      state.loading = false
    },
    getProfile: (state, { payload }) => {
      state.loading = true;
    },
  },
});

export const { name, actions } = authReducer;
export const selectCurrentToken = (state) => {
  console.log("state", state);
  return state.auth.token;
};
export default authReducer.reducer;
