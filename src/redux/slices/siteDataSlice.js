import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { getSiteDataApi } from "../../services/service.service";

export const fetchSiteData =createAsyncThunk(
    "site/fetchSiteData",
    async(_,{rejectWithValue}) =>{
        try{
            const data =await getSiteDataApi();

            return data;
        }catch(error){
            return rejectWithValue(
                error.response?.data?.message || "Failed to load website data"
            );
        }
    }
);

const initialState = {
    data:null,
    loading:false,
    error:null,
};

const siteDataSlice =createSlice({
    name :"site",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder

          

            .addCase(fetchSiteData.pending,(state)=>{
                state.loading =true;
                state.error =null;
            })

             .addCase(fetchSiteData.fulfilled,(state,action) =>{
                state.loading =false;
                state =action.payload;
             })

              .addCase(fetchSiteData.rejected,(state,action)=>{
                state.loading= false;
                state.error =action.payload;
              });
    }
});


export default siteDataSlice.reducer;