import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      state = state.filter((x) => x !== action.payload);
    },
    removeAll: () => {
      return [];
    },
  },
});
export const { addItem, removeItem, removeAll } = cartSlice.actions;
export default cartSlice.reducer;
