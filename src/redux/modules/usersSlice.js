import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../shared/api';

const initialState = {
  success: false,
  data: { id: '', username: '', email: '' },
  error: null,
};

export const __getUserInfo = createAsyncThunk('users/getUserInfo', async (user, thunk) => {
  try {
    const response = await api.get(`http://locahost:3001/api/mypage`);
    return thunk.fulfillWithValue(response.data);
  } catch (error) {
    return thunk.rejectWithValue(error);
  }
});

const usersSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {},
  extraReducers: {
    [__getUserInfo.pending]: (state, action) => {
      return (state = initialState);
    },
    [__getUserInfo.fulfilled]: (state, action) => {
      return (state = action.payload);
    },
    [__getUserInfo.rejected]: (state, action) => {
      // console.log(state, action);
    },
  },
});

export default usersSlice.reducer;
