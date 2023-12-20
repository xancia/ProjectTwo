import { configureStore } from "@reduxjs/toolkit";
import dealDataReducer from "./dealDataSlice";

export const store = configureStore({
    reducer: {
        dealData: dealDataReducer,
    }
})