import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
const appStore = configureStore({
  user: userSlice,
});
export default appStore;
