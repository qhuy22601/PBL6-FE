import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  getData: [],
};
export const getAllFruits = createAsyncThunk(
  "api/auth/all/getAllFruit",
  async (thunkAPI) => {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/api/auth/all/getAllFruit",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("Token"),
      },
    });
    return response.data.data
  }
);

export const FruitSlice = createSlice({
  name: "getAllFruits",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllFruits.fulfilled, (state, action) => {
      state.getData =action.payload;
    })
  },
});

export default FruitSlice.reducer;
