import { takeEvery, call, put, take } from "redux-saga/effects";
import { History } from "react-router-dom";
import { actions } from "./actions";
import axios from "axios";
function* login({ payload }) {
  try {
    console.log(payload);
    const response = yield call(async () => {
      return await axios
        .post("http://localhost:3009/api/v1/auth/sign-in", payload)
        .then((res) => {
          console.log(res);
          return res;
        });
    });
    yield put(actions.loginSuccess(response));
  } catch (error) {
    yield put(actions.loginFailed(error?.response.data.message));
  }
}
function* register({ payload }) {
  try {
    console.log(payload);
    const response = yield call(async () => {
      return await axios
        .post("http://localhost:3009/api/v1/auth/register", payload)
        .then((res) => {
          console.log(res);
          return res;
        });
    });
    yield put(actions.registerSuccess(response));
  } catch (error) {
    yield put(actions.registerFailed(error?.response.data.message));
  }
}
function* getProfile({ payload }) {
  console.log("getProfile", payload);
}
export function* authSaga() {
  yield takeEvery(actions.login, login);
  yield takeEvery(actions.getProfile, getProfile);
  yield takeEvery(actions.register, register);
}
