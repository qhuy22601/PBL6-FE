import { configureStore } from "@reduxjs/toolkit";
import fruitReducer from "../component/Feature/Fruit/FruitSlice"

export const store = configureStore({
    reducer: {                      
        fruitReducer : fruitReducer,
    },
});