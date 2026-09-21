import { configureStore } from "@reduxjs/toolkit";
import siteReducer from "./slices/siteDataSlice";

export const store = configureStore({
  reducer: {
    site: siteReducer,
  },
});