import { RepeatOneSharp } from "@mui/icons-material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    getData: null,
  };
export const getAllFruits = createAsyncThunk(
    "localhost:8000/api/auth/all/getAllFruit",
    async(thunkAPI)=>{
        const response =await axios({
            method:"get",
            url:"localhost:8000/api/auth/all/getAllFruit",
            headers:{
                Authorization: "Bearer "+ localStorage("Token"),
            },
        });
        return response.data.data;
    }
);

export const FruitSlice = createSlice({
    name:"getAllFruits",
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getAllFruits.fullfilled, (state,action) =>{
            state.getData = action.payload;
        });
    },
});

export default FruitSlice.reducer;