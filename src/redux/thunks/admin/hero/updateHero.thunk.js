import { createAsyncThunk } from "@reduxjs/toolkit";

import { updateHeroService } from "../../../../services/admin/hero/updateHero.service";

export const updateHeroThunk = createAsyncThunk(
  "adminHero/updateHero",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await updateHeroService(payload);
      return data;
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to update hero",
      );
    }
  },
);
