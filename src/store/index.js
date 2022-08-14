import { createStore, applyMiddleware, compose } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import authReducer from "./auth/actions.js";
import { authSaga } from "./auth/saga";
let sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }).concat(
      logger
    ),
    sagaMiddleware,
  ],
});
sagaMiddleware.run(authSaga);
export default store;
