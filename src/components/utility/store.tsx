import { configureStore } from "@reduxjs/toolkit";
import dealDataReducer from "./dealDataSlice";
import currentDealDataReducer from "./currentDealDataSlice";

export const store = configureStore({
  reducer: {
    dealData: dealDataReducer,
    currentDealData: currentDealDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
