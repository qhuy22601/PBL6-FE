import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const initialState={
//   getData:[]
// };

export const getAllFruits = createAsyncThunk(
  "api/getAllFruit",
  async () => {
    const response = await axios({
      method: "get",
      url: "https://ltmnhom4.tk/api/auth/admin/getAllFruit",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("Token"),
      },
    });
    console.log({response});
    return response.data.data;
  }
);

const FruitSlice = createSlice({
  name: "getAllFruits",
  initialState:{getData: []},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllFruits.fulfilled, (state, action) => {
      state.getData = action.payload;
    });
  },
});

export default FruitSlice;
