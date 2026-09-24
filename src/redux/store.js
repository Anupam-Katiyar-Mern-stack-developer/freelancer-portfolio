import { configureStore } from "@reduxjs/toolkit";

import siteReducer from "./slices/siteDataSlice";

import heroReducer from "./slices/admin/heroSlice";

export const store = configureStore({
  reducer: {
    /* ============================= */
    /* PUBLIC WEBSITE */
    /* ============================= */

    site: siteReducer,

    /* ============================= */
    /* ADMIN */
    /* ============================= */

    adminHero: heroReducer,
  },
});

export default store;
