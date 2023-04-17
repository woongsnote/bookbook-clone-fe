import { createSlice } from "@reduxjs/toolkit";

type ThemeState = boolean;

const themeFromLocalStorage = !!localStorage.getItem('bookbook-theme');

const initialState: ThemeState = themeFromLocalStorage;

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            if (state) {
                localStorage.removeItem('bookbook-theme');
            } else {
                localStorage.setItem('bookbook-theme', "_");
            }
            return (state = !state);
        }
    }
})

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;