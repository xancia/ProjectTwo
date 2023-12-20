import { createSlice} from "@reduxjs/toolkit";
import { DealType } from "@/vite-env";

const initialState: DealType[] | null = null;

const dealDataSlice = createSlice({
    name: 'dealData',
    initialState,
    reducers: {
       setdealData: (_state,action ) => {
        return action.payload
       }
       
}})

export const { setdealData } = dealDataSlice.actions

export default dealDataSlice.reducer