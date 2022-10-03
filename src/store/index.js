import { createStore } from "redux";
import { applyMiddleware, compose, combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {connectRouter,routerMiddleware} from 'connected-react-router'
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import authReducer from "./auth/actions.js";
import { authSaga } from "./auth/saga";
let sagaMiddleware = createSagaMiddleware();
const createRootReducer = combineReducers({
  auth:authReducer
})
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
//  const store = createStore(connectRouter(history)(createRootReducer),composeWithDevTools(applyMiddleware(sagaMiddleware,routerMiddleware(history),logger)))
sagaMiddleware.run(authSaga);
export default store;
