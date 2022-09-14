import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api, { userAPI } from "../../shared/api";

const initialState = {
  isLoading: false,
  success: false,
  data: { id: "", username: "", email: "" },
  error: null,
  response: null,
};

/** 이메일 중복 확인 */
export const __checkEmail = createAsyncThunk(
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
export const __checkNickName = createAsyncThunk(
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

/** 회원가입 */
export const __registerUser = createAsyncThunk(
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

/** 로그인 */
export const __loginUser = createAsyncThunk(
  "users/login",
  async (user, thunk) => {
    console.log(user);
    try {
      const { data } = await userAPI.login(user);
      console.log(data);
      return thunk.fulfillWithValue(data);
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  }
);

export const __postUserInfo = createAsyncThunk(
  "users/postUserInfo",
  async (user, thunk) => {
    try {
      console.log("gㅎ");
    } catch (error) {
      console.log("ㅎㅎㅎ");
    }
  }
);

export const __getUserInfo = createAsyncThunk(
  "users/getUserInfo",
  async (user, thunk) => {
    try {
      const response = await api.get(`http://locahost:3001/api/mypage`);
      return thunk.fulfillWithValue(response.data);
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  }
);

const usersSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {},
  extraReducers: {
    /** 이메일 중복확인 */
    [__checkEmail.pending]: (state) => {
      state.isLoading = true;
    },
    [__checkEmail.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
    },
    [__checkEmail.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    /** 닉네임 중복확인  */
    [__checkNickName.pending]: (state) => {
      state.isLoading = true;
    },
    [__checkNickName.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
    },
    [__checkNickName.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    /** 회원가입  */
    [__registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [__registerUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
    },
    [__registerUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    /** 로그인  */
    [__loginUser.pending]: (state) => {
      state.isLoading = true;
      state.response = null;
      state.error = null;
    },
    [__loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.response = action.payload;
      state.error = null;
    },
    [__loginUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.response = null;
      state.error = action.payload;
    },

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
