import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const initialState = {
  error: {
    message: "",
    type: "",
  },
  loading: false,
  user: null,
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
      console.log(payload.data.data.token);
      Cookies.set(TOKEN, payload.data.data.token, { path: "/" });
    },
    loginFailed: (state, { payload }) => {
      state.loading = false;
      state.error.message = payload;
    },
    register: (state, { payload }) => {
      state.loading = true;
      state.data = payload;
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
    },
    registerFailed: (state, { payload }) => {
      state.loading = false;
      state.error.message = payload;
    },
    resetError: (state) => {
      state.error.message = "";
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
