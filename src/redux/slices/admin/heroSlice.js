import {
  createSlice,
} from "@reduxjs/toolkit";

import {
  getHeroThunk,
} from "../../thunks/admin/hero/getHero.thunk";

import {
  updateHeroThunk,
} from "../../thunks/admin/hero/updateHero.thunk";


const initialState = {
  data: null,

  // Initial hero fetch
  loading: false,

  // Hero form update
  updating: false,

  error: null,
  updateError: null,

  updateSuccess: false,
};


const heroSlice = createSlice({
  name: "adminHero",

  initialState,

  reducers: {
    /* ============================= */
    /* CLEAR FETCH ERROR */
    /* ============================= */

    clearHeroError: (state) => {
      state.error = null;
    },


    /* ============================= */
    /* RESET UPDATE STATE */
    /* ============================= */

    resetHeroUpdateState: (
      state
    ) => {
      state.updateError = null;
      state.updateSuccess = false;
    },
  },


  extraReducers: (builder) => {
    builder

      /* =========================== */
      /* GET HERO */
      /* =========================== */

      .addCase(
        getHeroThunk.pending,
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )

      .addCase(
        getHeroThunk.fulfilled,
        (state, action) => {
          state.loading = false;

          state.data =
            action.payload;

          state.error = null;
        }
      )

      .addCase(
        getHeroThunk.rejected,
        (state, action) => {
          state.loading = false;

          state.error =
            action.payload ||
            "Failed to fetch hero data";
        }
      )


      /* =========================== */
      /* UPDATE HERO */
      /* =========================== */

      .addCase(
        updateHeroThunk.pending,
        (state) => {
          state.updating = true;

          state.updateError = null;

          state.updateSuccess = false;
        }
      )

      .addCase(
        updateHeroThunk.fulfilled,
        (state, action) => {
          state.updating = false;

          /*
            Backend updated Hero return karega.

            Isliye dobara GET call karne ki
            zarurat nahi padegi.
          */

          state.data =
            action.payload;

          state.updateError = null;

          state.updateSuccess = true;
        }
      )

      .addCase(
        updateHeroThunk.rejected,
        (state, action) => {
          state.updating = false;

          state.updateError =
            action.payload ||
            "Failed to update hero";

          state.updateSuccess = false;
        }
      );
  },
});


export const {
  clearHeroError,
  resetHeroUpdateState,
} = heroSlice.actions;


export default heroSlice.reducer;