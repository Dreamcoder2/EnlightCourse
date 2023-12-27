import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    list: [],
    overallamount: 0,
    overallquantity: 0,
  },
  reducers: {
    addItem: (state, { payload }) => {
      state.list = [...state.list, { ...payload, count: 1 }];
    },
    removeItem: (state, { payload }) => {
      const index = state.list.findIndex(
        (product) => product.id === payload.id
      );
      state.list = [
        ...state.list.slice(0, index),
        ...state.list.slice(index + 1),
      ];
    },
    modifyItem: (state, { payload }) => {
      const index = state.list.findIndex(
        (product) => product.id === payload.id
      );
      state.list = [
        ...state.list.slice(0, index),
        { ...state.list[index], count: payload.count },
        ...state.list.slice(index + 1),
      ];
    },
    setOverallPrice: (state, { payload }) => {
      state.overallamount += payload;
    },
    setOverallQuantity: (state, { payload }) => {
      state.overallquantity += payload;
    },
  },
});

export const {
  addItem,
  removeItem,
  modifyItem,
  setOverallPrice,
  setOverallQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
