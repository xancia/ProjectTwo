import { createSlice} from "@reduxjs/toolkit";
import { DealType } from "@/vite-env";

const initialState: DealType | null = null;

const currentDealDataSlice = createSlice({
    name: 'currentDealData',
    initialState,
    reducers: {
       setcurrentDealData: (_state,action ) => {
        return action.payload
       }
       
}})

export const { setcurrentDealData } = currentDealDataSlice.actions

export default currentDealDataSlice.reducer