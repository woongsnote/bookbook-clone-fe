import { createSlice } from "@reduxjs/toolkit";

type ModeState = boolean;

const initialState: ModeState = true

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {

    toggleStackView: () => {
      return true;
    },
    toggleListView: () => {
      return false;
    },
  },
});

export const { toggleStackView, toggleListView } = modeSlice.actions;

export default modeSlice.reducer;
