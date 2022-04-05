import { createSlice, createAction } from "@reduxjs/toolkit";

const currencyBy = createAction("currencyBy");

export const currency = createSlice({
  name: "currency",
  initialState: "BRL",
  reducers: {
    setCurrency: (state, action) => {
      window.localStorage.setItem("currency", action.payload);
      return action.payload || "";
    },
  },

  extraReducers: (builder) => {
    builder.addCase(currencyBy, (state, action) => {
      return state + action.payload;
    });
  },
});

export default currency.reducer;
