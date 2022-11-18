import { configureStore } from "@reduxjs/toolkit";
import FruitSlice from "../feature/Fruit/FruitSlice";

export const store = configureStore({
  reducer: {
    getAllFruits: FruitSlice.reducer,
  },
});