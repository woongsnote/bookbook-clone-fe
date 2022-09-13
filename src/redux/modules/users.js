import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../shared/api";

/** 초기 값 */
const initialState = {
  isLoading: false,
  error: null,
  response: null,
};

/** 이메일 중복 확인 */
export const checkEmailThunk = createAsyncThunk(
  "users/checkEmail",
  async (email, thunk) => {
    try {
      const { data } = await api.post("/member/email", { email });
      console.log(data);
      return thunk.fulfillWithValue(data);
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  }
);

/** 닉네임 중복 확인 */
export const checkNickNameThunk = createAsyncThunk(
  "users/checkNickName",
  async (nickname, thunk) => {
    try {
      const { data } = await api.post("/member/nickname", { nickname });
      console.log(data);
      return thunk.fulfillWithValue(data);
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  }
);

/** 로그인 */
export const loginUserThunk = createAsyncThunk(
  "users/login",
  async (user, thunk) => {
    try {
      const { data } = await api.post("/member/login", user);
      console.log(data);
      return thunk.fulfillWithValue(data);
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  }
);

/** 회원가입 */
export const registerUserThunk = createAsyncThunk(
  "users/register",
  async (user, thunk) => {
    try {
      const { data } = await api.post("/member/signup", user);
      console.log(data);
      return thunk.fulfillWithValue(data);
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  }
);

/** 유저 Slice */
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /** 이메일 중복확인 builder */
    builder.addCase(checkEmailThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(checkEmailThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
    });
    builder.addCase(checkEmailThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    /** 닉네임 중복확인 builder */
    builder.addCase(checkNickNameThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(checkNickNameThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
    });
    builder.addCase(checkNickNameThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    /** 로그인 builder */
    builder.addCase(loginUserThunk.pending, (state) => {
      state.isLoading = true;
      state.response = null;
      state.error = null;
    });
    builder.addCase(loginUserThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
      state.error = null;
    });
    builder.addCase(loginUserThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.response = null;
      state.error = action.payload;
    });

    /** 회원가입 builder */
    builder.addCase(registerUserThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(registerUserThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
    });
    builder.addCase(registerUserThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
