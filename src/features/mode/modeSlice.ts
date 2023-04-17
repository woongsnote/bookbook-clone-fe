import { createSlice } from "@reduxjs/toolkit";

type ModeState = boolean;

const modeFromLocalStorage = !!localStorage.getItem('bookbook-mode');

const initialState: ModeState = modeFromLocalStorage;

export const modeSlice = createSlice({
    name: "mode",
    initialState,
    reducers: {
        toggleMode: (state) => {
            if (state) {
                localStorage.removeItem('bookbook-tower');
            } else {
                localStorage.setItem('bookbook-tower', "_");
            }
            return (state = !state);
        }
    }
})

export const { toggleMode } = modeSlice.actions;

export default modeSlice.reducer;