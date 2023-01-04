import React from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productPropTypes } from "../components/Products";

const initialState: any = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action: PayloadAction<object>) {
      state.push(action.payload);
    },
    remove(state, action: PayloadAction) {
      return state.filter(
        (item: productPropTypes) => item.id !== action.payload
      );
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
