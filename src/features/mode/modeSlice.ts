import { createSlice } from "@reduxjs/toolkit";

type ModeState = boolean;

const initialState: ModeState = true;

export const modeSlice = createSlice({
    name: "mode",
    initialState,
    reducers: {
        toggleMode: (state) => {
            
            return (state = !state);
        }
    }
})

export const { toggleMode } = modeSlice.actions;

export default modeSlice.reducer;