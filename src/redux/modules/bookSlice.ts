import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { bookAPI } from "../../shared/api";

type Book = {
  id: number;
  title: string;
}

type InitialState = {
  isLoading: boolean;
  books: Book[];
  error: string;
}


const initialState: InitialState = {
  isLoading: false,
  books: [],
  error: "",
};

export const __getBooks = createAsyncThunk(
  "books/getBooks", async (title: string) => {
    try {
      const { data } = await bookAPI.searchBooks(title);
      return data;
      // return thunk.fulfillWithValue(data.documents);
    } catch (error) {
      // /return thunk.rejectWithValue(error);
    }
  }
);

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getBooks.pending, (state) => { state.isLoading = true })
    builder.addCase(__getBooks.fulfilled, (state, action: PayloadAction<Book[]>) => {
      state.isLoading = false
      state.books = action.payload
      state.error = ""
    })
    builder.addCase(__getBooks.rejected, (state, action) => {
      state.isLoading = false
      state.books = []
      state.error = action.error.message || "Something went wrong"
    })
  },
});

export default bookSlice.reducer;
