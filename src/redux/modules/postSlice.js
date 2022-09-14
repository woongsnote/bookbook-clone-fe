import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../shared/api';

// WHAT 초기값
const initialState = {
  success: false,
  data: { nickname: '', title: '', readStart: '2000-01-01', readEnd: '2999-12-31', intro: '', publisher: '' },
  error: null,
};

export const __getReview = createAsyncThunk('post/getReviews', async (payload, thunkAPI) => {
  try {
    const { data } = await api.get('/books');
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __addReview = createAsyncThunk('post/addReview', async (args, thunkAPI) => {
  try {
    const { data } = await api.post('/posts', args);
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [__getReview.pending]: state => {
      state.isLoading = true;
    },
    [__getReview.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload.data;
    },
    [__getReview.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__addReview.fulfilled]: (state, action) => {
      state.posts = action.payload.data;
    },
    [__addReview.rejected]: (state, action) => {
      return;
    },
  },
});

export default postSlice.reducer;
