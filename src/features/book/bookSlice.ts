import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { bookAPI } from "../../apis/bookApi";
import { Book } from "../../types/types";

interface BookState {
  isLoading: boolean;
  books: Book[];
  error: null | string;
}

const initialState: BookState = {
  isLoading: false,
  books: [],
  error: null,
};

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async (title: string, thunkApi) => {
    try {
      const { data } = await bookAPI.searchBooks(title);
      return data.documents as Book[];
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getBooks.fulfilled,
      (state, action: PayloadAction<Book[]>) => {
        state.isLoading = false;
        state.books = action.payload;
      }
    );
    builder.addCase(getBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message as string;
    });
  },
});

export default bookSlice.reducer;
