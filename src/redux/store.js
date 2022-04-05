import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "./slices/apiSlice";
import currencyReducer from "./slices/currencySlice";

export const store = configureStore({
  reducer: {
    api: apiReducer,
    currency: currencyReducer,
  },
});
