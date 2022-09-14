import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { bookAPI } from "../../shared/api";

const initialState = {
  isLoading: false,
  books: [],
  error: null,
};

export const getBooksThunk = createAsyncThunk(
  "books/getBooks",
  async (title, thunk) => {
    try {
      const { data } = await bookAPI.searchBooks(title);

      return thunk.fulfillWithValue(data.documents);
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooksThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooksThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getBooksThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export default bookSlice.reducer;
