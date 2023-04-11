import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../shared/api";
import api from "../../shared/api";

// WHAT 초기값
const initialState = {
  isLoading: false,
  posts: [],
  post: {},
  success: false,
  // data: [
  //   {
  //     imageUrl: "",
  //     nickname: "",
  //     title: "",
  //     readStart: "2000-01-01",
  //     readEnd: "2999-12-31",
  //     comment: "",
  //     publisher: "",
  //   },
  // ],
  error: null,
};

export const __getAllReviews = createAsyncThunk(
  "post/getReviews",
  async (payload, thunkAPI) => {
    try {
      const { data } = await instance.get(`/posts`);
      // const { data } = await api.get(`/api/auth/post`);
      // console.log("🚀 ~ const__getReview=createAsyncThunk ~ data", data);

      console.log(data);
      return thunkAPI.fulfillWithValue(data);
      // return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getReview = createAsyncThunk(
  "/post/getReview",
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.get(`/posts/${id}`);
      // const { data } = await instance.get(`/api/auth/post/${id}`);
      console.log(data);
      // 서버용...
      // return thunkAPI.fulfillWithValue(data.data);

      // 서버랑 로컬이랑 구조가 달라서!!! 알겟습니다!
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addReview = createAsyncThunk(
  "post/addReview",
  async (args, thunkAPI) => {
    try {
      const { data } = await api.post("/posts", args);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const __editReview = createAsyncThunk(
  "post/editReview",
  async (args, thunkAPI) => {
    try {
      const { data } = await api.put("/posts", args);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [__getAllReviews.pending]: (state) => {
      state.isLoading = true;
    },
    [__getAllReviews.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__getAllReviews.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__getReview.pending]: (state) => {
      state.isLoading = true;
    },
    [__getReview.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
    [__getReview.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__addReview.pending]: (state) => {
      state.isLoading = true;
    },
    [__addReview.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__addReview.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__editReview.pending]: (state) => {
      state.isLoading = true;
    },
    [__editReview.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("데이터", action.payload.data);
      const newState = state.posts.map((post) => {
        if (post.id === action.payload.data.id) {
          post = {
            ...post,
            title: action.payload.data.title,
            comment: action.payload.data.comment,
            readStart: action.payload.data.readStart,
            readEnd: action.payload.data.readEnd,
            star: action.payload.data.star,
            page: action.payload.data.page,
          };
        }
      });
      state.post = newState;
      return state;
    },
    [__editReview.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;
