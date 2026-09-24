import { createAsyncThunk } from "@reduxjs/toolkit";

import { getHeroService } from "../../../../services/admin/hero/getHero.service";


export const getHeroThunk =createAsyncThunk(
    "adminHero/getHero",
    async(_,{ rejectWithValue }) =>{
        try{
            const data = await getHeroService();
            return data;
        }catch(error){
            return rejectWithValue(
                error?.response?.data?.message || error?.message || "Failed to fetch hero data"
            );
        }
    }
)