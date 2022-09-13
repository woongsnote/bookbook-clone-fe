import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { create } from 'json-server';
import api from '../../shared/api';

const initialState = {
  success: false,
  data: { id: '', title: '', star: 0, readStart: '2000-01-01', readEnd: '2999-01-01' },
  error: null,
};

export const __postReview = createAsyncThunk('post/postReview', async (post, thunk) => {
  try {
    const response = await api.post('http://locahost:3001/post', post);
    const { data } = response;
    if(!response.headers['authorization']) {
      console.log('잘되나')
    }
  } catch (error) {
    console.log('오키');
  }
});
