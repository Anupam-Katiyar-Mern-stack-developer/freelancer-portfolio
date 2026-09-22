import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSiteDataApi } from "../../services/site.service";

export const fetchSiteData = createAsyncThunk(
  "site/fetchSiteData",

  async (_, { rejectWithValue }) => {
    try {
      const data = await getSiteDataApi();

      console.log("THUNK RESPONSE:", data);

      // IMPORTANT
      return data;

    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message ||
          error.message ||
          "Failed to load website data"
      );
    }
  }
);

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const siteDataSlice = createSlice({
  name: "site",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchSiteData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchSiteData.fulfilled, (state, action) => {
        console.log("FULFILLED PAYLOAD:", action.payload);

        state.loading = false;

        // YAHI MOST IMPORTANT LINE HAI
        state.data = action.payload;

        state.error = null;
      })

      .addCase(fetchSiteData.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
      });
  },
});

export default siteDataSlice.reducer;