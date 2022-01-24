import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "redux-logger";

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: { contacts: reducer },
  devTools: process.env.NODE_ENV === "development",
  middleware: middleware,
});

export default store;
