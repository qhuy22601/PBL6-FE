import { configureStore } from "@reduxjs/toolkit";
import fruitReducer from "../feature/Fruit/FruitSlice";

export const store = configureStore({
    reducer: {                      
        fruitReducer : fruitReducer,
    },
});