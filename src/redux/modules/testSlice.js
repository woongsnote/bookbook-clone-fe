import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../shared/api';
// import dayjs from 'dayjs';

const initialState = {
  chosenDate: null,
};

const __addEatSlice = createSlice({
  name: '식사입력',
  initialState,
  reducers: {
    addChosenDate: (state, action) => {
      state.chosenDate = action.payload;
    },
  },

  extraReducers: {
    [__addEatSlice.fulfilled]: (state, action) => {
      state.posts = action.payload.data;
    },
    [__addEatSlice.rejected]: (state, action) => {
      return;
    },
  },
});

export const { addChosenDate } = __addEatSlice.actions;

export default __addEatSlice.reducer;
