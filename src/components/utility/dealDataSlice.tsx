import { createSlice } from "@reduxjs/toolkit";


const dealDataSlice = createSlice({
    name: 'dealData',
    initialState: null,
    reducers: {
       setdealData: (state,action) => {
        state = action.payload
        return state
       }
       
}})

export const { setdealData } = dealDataSlice.actions

export default dealDataSlice.reducer